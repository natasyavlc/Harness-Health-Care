import { Image, Platform, Pressable, View } from 'react-native'
import React, { useState } from 'react'
import { responsiveHeight } from '../../Helper/ResponsiveUI'
import defaultImg from '../../../image/Icons/default_img.png'
import CustomeText from '../../CostumeText/index'
import color from '../../../../Asset/color'
import DocumentPicker  from 'react-native-document-picker'
import RNFetchBlob from 'rn-fetch-blob'
import { styles } from './style'
const Index = ({
  navigation,
  onPress = () => {},
  title,
  desc,
  types = DocumentPicker.types.images,
  filePreviewUri = '',
  label = '',
  folderName = '',
  maxFileSize = Number.MAX_SAFE_INTEGER,
  encodedImage,
}) => {
  const [errorMessage, seterrorMessage] = useState('')
  const [tempFilePreviewUri, setTempFilePreviewUri] = useState('');

  const filePreviewUriFinal = filePreviewUri || tempFilePreviewUri || '';

  const pickDocument = async () => {
    try {
      const selectedFile = await DocumentPicker.pickSingle({
        type: types,
        copyTo: 'cachesDirectory'
      });

      if (selectedFile.size > maxFileSize) {
        seterrorMessage(`Ukuran maksimal file yang diunggah ${maxFileSize/1000000}MB.`)
        return;
      }
      let imagePath = selectedFile.uri
      // let encodedImage;
      if (Platform.OS == 'ios') {
        const path = selectedFile.fileCopyUri.split('/');
        const nameFile = selectedFile.name
        const dirs = RNFetchBlob.fs.dirs
        imagePath = `${dirs.CacheDir}/${path[path.length - 2]}/${nameFile}`
      } else {
        imagePath = selectedFile.uri
      }
      await RNFetchBlob.fs.readFile(imagePath, 'base64')
        .then(data => {
          encodedImage(data)
        })
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err
      }
    }
  }
  return (
    <Pressable style={styles.container} onPress={pickDocument}>
      <View style={styles.body}>
        <Image resizeMode='contain' source={defaultImg} style={styles.img}/>
        <CustomeText
          Font={'Inters'}
          fontSizes={responsiveHeight(14)}
          label={title}
          lineHeights={responsiveHeight(22.4)}
          align={'center'}
          colors={color.Primary_Black}
        />
        <View style={styles.conTextDesc}>
          <CustomeText
            Font={'Inters'}
            fontSizes={responsiveHeight(10)}
            label={desc}
            lineHeights={responsiveHeight(22.4)}
            align={'center'}
            colors={color.GT_Grey}
          />
        </View>
      </View>
    </Pressable>
  )
}

export default Index
