import React, { useState } from 'react'
import { Alert, Image, PermissionsAndroid, Platform, Text, Pressable, View } from 'react-native'
import styles from './styles'
import RNFetchBlob from 'rn-fetch-blob';

// COMPONENT
import Loading from '../../Loading';

// ICON
import Download from '../../../image/Icon/ic_download_blue.png'

const ListFile = ({
    fileName = 'Anti_HVC_test.pdf',
    onDownload,
    fileUrl = 'http://samples.leanpub.com/thereactnativebook-sample.pdf'
}) => {
    const [loading, setLoading] = useState(false)

    const checkPermission = async () => {
        // Function to check the platform
        // If Platform is Android then check for permissions.

        if (Platform.OS === 'ios') {
            downloadFile();
        } else {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission Required',
                        message:
                            'Application needs access to your storage to download File',
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    // Start downloading
                    downloadFile();
                    console.log('Storage Permission Granted.');
                } else {
                    // If permission denied then show alert
                    Alert.alert('Error', 'Storage Permission Not Granted');
                }
            } catch (err) {
                // To handle permission related exception
                console.log("++++" + err);
            }
        }
    };

    const downloadFile = () => {
        setLoading(true)
        // Get today's date to add the time suffix in filename
        let date = new Date();
        // File URL which we want to download
        let FILE_URL = fileUrl;
        // Function to get extention of the file url
        let file_ext = getFileExtention(FILE_URL);

        file_ext = '.' + file_ext[0];

        // config: To get response by passing the downloading related options
        // fs: Root directory path to download
        const { config, fs } = RNFetchBlob;
        let RootDir = fs.dirs.DownloadDir;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                path:
                    RootDir +
                    '/file_' +
                    Math.floor(date.getTime() + date.getSeconds() / 2) +
                    file_ext,
                description: 'downloading file...',
                notification: true,
                showNotification: true,
                // useDownloadManager works with Android only
                useDownloadManager: true,
            },
        };
        config(options)
            .fetch('GET', FILE_URL)
            .then(res => {
                // Alert after successful downloading
                setLoading(false)
                console.log('res -> ', JSON.stringify(res));
                alert('File Downloaded Successfully.');
            });
    };

    const getFileExtention = fileUrl => {
        // To get the file extension
        return /[.]/.exec(fileUrl) ?
            /[^.]+$/.exec(fileUrl) : undefined;
    };

    return (
        <View style={styles.wrapper}>
            <Pressable onPress={checkPermission}>
                <Text style={styles.txtTitle}>{fileName}</Text>
            </Pressable>
            <Pressable onPress={checkPermission}>
                <Image
                    source={Download}
                    style={styles.icon}
                    resizeMode='cover'
                />
            </Pressable>
            <Loading isLoading={loading} />
        </View>
    )
}

export default ListFile