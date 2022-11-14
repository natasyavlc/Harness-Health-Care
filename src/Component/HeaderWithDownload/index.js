import React, { useState } from 'react'
import { Image, View, Text, Pressable, Alert, PermissionsAndroid, Platform } from 'react-native'
import RNFetchBlob from 'rn-fetch-blob';
import Loading from '../Loading';
import Share from 'react-native-share';

// STYLE
import styles from './styles'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'

// ICON
import ArrowLeft from '../../image/Icons/arrow.png'
import Download from '../../image/Icon/ic_download.png'

const HeaderWithDownload = ({
    title = 'Medical Records',
    patientName = 'Guy Hawkins',
    dateTime = '17 August 2022 2.20 PM',
    onBack,
    onDownload,
    btnDownload = true,
}) => {
    const [isLoading, setIsLoading] = useState(false)
    const fileUrl = 'http://samples.leanpub.com/thereactnativebook-sample.pdf'
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

    const handleShare = async (uri) => {
        try {
            await Share.open({ url: uri });
        } catch (err) { }
    };
    const downloadFile = () => {
        setIsLoading(true)
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
        let RootDir = Platform.select({ android: fs.dirs.DownloadDir, ios: fs.dirs.DocumentDir });
        let options = Platform.select({
            android: {
                fileCache: true,
                addAndroidDownloads: {
                    path:
                        RootDir +
                        '/file_' +
                        Math.floor(date.getTime() + date.getSeconds() / 2) +
                        file_ext,
                    description: 'downloading file...',
                    // showNotification: true,
                    notification: true,
                    // useDownloadManager works with Android only
                    useDownloadManager: true,
                },
            },
            ios: {
                fileCache: true,
                path: RootDir,
                notification: true,
            },
        });
        if (Platform.OS == 'ios') {
            config(options)
                .fetch('GET', fileUrl)
                .then(res => {
                    setIsLoading(false)
                    setTimeout(() => {
                        handleShare(res.data)
                    }, 300);

                })
                .catch(errorMessage => {
                });
        }
        else {
            config(options)
                .fetch('GET', FILE_URL)
                .then(res => {
                    // Alert after successful downloading
                    setIsLoading(false)
                    alert('File Downloaded Successfully.');
                });
        }
    };

    const getFileExtention = fileUrl => {
        // To get the file extension
        return /[.]/.exec(fileUrl) ?
            /[^.]+$/.exec(fileUrl) : undefined;
    };

    return (
        <View style={[styles.container, { justifyContent: btnDownload ? 'space-between' : 'flex-start' }]}>
            <Pressable
                onPress={onBack}
            >
                <Image
                    source={ArrowLeft}
                    style={[styles.icon, { marginRight: btnDownload ? 0 : responsiveWidth(16) }]}
                    resizeMode='cover'
                />
            </Pressable>
            <View
                style={{
                    left:
                        Platform.OS === 'ios' && btnDownload ?
                            responsiveHeight(-84)
                            :
                        Platform.OS === 'android' && btnDownload ?
                            responsiveHeight(-72)
                            :
                            0
                }}
            >
                <Text style={styles.headTitle}>{title}</Text>
                <Text style={styles.subTitle}>{patientName} • {dateTime}</Text>
            </View>
            {
                btnDownload
                &&
                <Pressable
                    // onPress={onDownload}
                    onPress={checkPermission}
                >
                    <Image
                        source={Download}
                        style={[styles.icon]}
                        resizeMode='cover'
                    />
                </Pressable>
            }
            <Loading isLoading={isLoading} />
        </View>
    )
}

export default HeaderWithDownload