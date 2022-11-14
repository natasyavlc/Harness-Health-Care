import { BackHandler, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, Pressable, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CardPickFile from '../../Component/Card/CardPickFile/Index'
import Headers from '../../Component/Headers'
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI'
import CustomeText from '../../Component/CostumeText/index'
import color from '../../../Asset/color'
import TextInputBox from '../../Component/TextInputBox/index'
import DateModal from '../../Component/ModalPickerDate/Index'
import moment from 'moment'
import Ctext from '../../Component/CostumeText/index'
import RadioButtons from '../../Component/CostumeRadio/CostumeRadios'
import Dropdowns from '../../Component/CostumePicker/Costumes'
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary'

import IcReplace from '../../image/Icons/ic_replace.png'
import IcTrash from '../../image/Icons/ic_trash.png'
const RegisterNewPatient = ({ navigation }) => {
  const [fullname, setFullname] = useState('')
  const [imagePatient, setImagePatient] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [date, setDate] = useState('')
  const [Male, setMale] = useState(false);
  const [Female, setFemale] = useState(false);
  const [country, setCountry] = useState('')
  const [province, setProvince] = useState('')
  const [zip, setZip] = useState('')
  const [address, setAddress] = useState('')
  const [isfocusFullname, setIsfocusFullname] = useState(false);
  const [isfocusPhone, setIsfocusPhone] = useState(false);
  const [isfocusZip, setIsfocusZip] = useState(false);
  const [isfocusAdress, setIsfocusAdress] = useState(false);

  const onBackPress = () => {
    navigation.goBack()
    return true
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, [])

  const handlerChange = (value) => {
    if (value == 1) {
      setFemale(false)
      setMale(true)
    }
    else {
      setMale(false)
      setFemale(true)
    }
  }
  useEffect(() => {
    resultImg
  }, [resultImg])

  const resultImg = (value) => {
    setImagePatient(value)
  }
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <Headers
        Hlabel={'Register New Patient'}
        onPress={() => {
          navigation.goBack()
        }}
        OnBack={true}
      />
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.conLabelCard}>
            <CustomeText
              Font={'Inters'}
              fontSizes={responsiveHeight(10)}
              label={'Patient Photo'}
              lineHeights={responsiveHeight(14)}
              colors={color.GT_Grey}
            />
          </View>
          {imagePatient === '' ?
            <View style={styles.ConDropDown}>
              <CardPickFile
                title={'Tap to upload your image here'}
                desc={'Support JPG, JPEG, PNG, WEBP. Max. filesize 1MB'}
                folderName="developer-pengajuan"
                maxFileSize={3000000}
                encodedImage={(e) => resultImg(e)}

              />
            </View>
            :
            <View style={styles.ConImg}>
              <Image
                source={{ uri: `data:image/jpeg;base64,${imagePatient}` }}
                style={styles.img}
                resizeMode={'contain'}
              />
              <View style={styles.ConButtonImg}>
                <Pressable style={styles.ConRowReplace} onPress={() => setImagePatient('')}>
                  <Image source={IcReplace} style={styles.imgText} resizeMode={'contain'} />
                  <CustomeText
                    Font={'Inters'}
                    fontSizes={responsiveHeight(12)}
                    label={'Replace Photo'}
                    lineHeights={responsiveHeight(16.8)}
                    colors={color.GT_Grey}
                  />
                </Pressable>
                <Pressable style={styles.ConRowTrash} onPress={() => setImagePatient('')}>
                  <Image source={IcTrash} style={styles.imgText} resizeMode={'contain'} />
                  <CustomeText
                    Font={'Inters'}
                    fontSizes={responsiveHeight(12)}
                    label={'Remove Photo'}
                    lineHeights={responsiveHeight(16.8)}
                    colors={color.GT_Grey}
                  />
                </Pressable>
              </View>
            </View>
          }
          <View style={styles.conTextInput}>
            <TextInputBox
              label={'Full Name'}
              placeholders={'E.g., Robert Dawson'}
              fontFamilys={'Inters'}
              mandatory={true}
              bgColor={'transparent'}
              placeholderStyle={'Inter-400'}
              placeholderColor={color.GT_Grey}
              borderColors={isfocusFullname ? color.Primary : color.Huest_Grey}
              onBlur={() => setIsfocusFullname(false)}
              onFocusInput={() => setIsfocusFullname(true)}
              onChangeText={(e) => {
                setFullname(e)
              }}
              value={fullname}
              fontPlaceholder={responsiveHeight(14)}
            />
          </View>
          <View style={styles.conTextInput}>
            <TextInputBox
              label={'Phone Number'}
              placeholders={'E.g., +1234567890'}
              fontFamilys={'Inters'}
              mandatory={true}
              bgColor={'transparent'}
              placeholderStyle={'Inter-400'}
              placeholderColor={color.GT_Grey}
              borderColors={isfocusPhone ? color.Primary : color.Huest_Grey}
              onBlur={() => setIsfocusPhone(false)}
              onFocusInput={() => setIsfocusPhone(true)}
              onChangeText={(e) => {
                setPhoneNumber(e)
              }}
              keyboardType={'phone-pad'}
              value={phoneNumber}
              fontPlaceholder={responsiveHeight(14)}
            />
          </View>
          <View style={styles.ConDropDown}>
            <DateModal
              label={'Select date of birth'}
              placeholder={'Date of Birth*'}
              value={date}
              selectedDate={dates => {
                setDate(date)
                const formatDates = moment(dates, 'DD/MM/YYYY').format('DD/MM/YYYY')
                setDate(formatDates)
              }}
              widthPicker={'100%'}
            />
          </View>
          <View style={styles.conGender}>
            <View style={styles.conLabelText}>
              <Ctext
                label={'Gender*'}
                fontSizes={responsiveHeight(10)}
                Font={'Inters'}
                colors={color.Primary_Black}
              />
            </View>
            <View style={styles.ConRadio}>
              <RadioButtons
                onChange={Male}
                label={'Male'}
                border={true}
                onPress={() => {
                  handlerChange(1)
                }} />
              <RadioButtons
                onChange={Female}
                label={'Female'}
                border={true}
                onPress={() => {
                  handlerChange(2)
                }} />
            </View>
          </View>
          <View style={styles.ConDropDown}>
            <Dropdowns
              label='Country*'
              placeholder={'Selected Country'}
              useTitle={true}
              data={[
                { label: 'USA', value: 0 },
                { label: 'England', value: 1 },
                { label: 'Singapore', value: 2 },
                { label: 'Europe', value: 5 },
                { label: 'China', value: 6 },
              ]}
              selectedValue={country}
              onValueChange={setCountry}
              marginTop={responsiveHeight(5)}
            />
          </View>
          <View style={styles.ConDropDown}>
            <Dropdowns
              label='State/Province*'
              placeholder={'Select a State or Province'}
              useTitle={true}
              data={[
                { label: 'New Mexico', value: 0 },
                { label: 'Singapore', value: 1 },
                { label: 'Europe', value: 2 },
                { label: 'China', value: 5 },
                { label: 'USA', value: 6 },
              ]}
              selectedValue={province}
              onValueChange={setProvince}
              marginTop={responsiveHeight(5)}
            />
          </View>
          <View style={styles.conTextInput}>
            <TextInputBox
              label={'Zip Code'}
              placeholders={'E.g., 12345'}
              fontFamilys={'Inters'}
              mandatory={true}
              bgColor={'transparent'}
              placeholderStyle={'Inter-400'}
              placeholderColor={color.GT_Grey}
              borderColors={isfocusZip ? color.Primary : color.Huest_Grey}
              onBlur={() => setIsfocusZip(false)}
              onFocusInput={() => setIsfocusZip(true)}
              onChangeText={(e) => {
                setZip(e)
              }}
              value={zip}
              fontPlaceholder={responsiveHeight(14)}
            />
          </View>
          <View style={styles.conTextInput}>
            <TextInputBox
              label={'Address'}
              placeholders={'E.g., Robinson Rd. Allentown or Apartment Building'}
              fontFamilys={'Inters'}
              mandatory={true}
              bgColor={'transparent'}
              placeholderStyle={'Inter-400'}
              placeholderColor={color.GT_Grey}
              borderColors={isfocusAdress ? color.Primary : color.Huest_Grey}
              onBlur={() => setIsfocusAdress(false)}
              onFocusInput={() => setIsfocusAdress(true)}
              onChangeText={(e) => {
                setAddress(e)
              }}
              value={address}
              fontPlaceholder={responsiveHeight(14)}
            />
          </View>
          <View style={styles.ConButton}>
            <ButtonPrimary
              label={'Save'}
              colors={color.Primary_White}
              Font={'InterRegular'}
              fontSizes={responsiveHeight(14)}
              bgColor={color.Primary}
              borderColor={color.Primary}
              borderWidth={false}
              margin={true}
              defaultVertical={responsiveHeight(16)}
              onPress={() => navigation.navigate('PatientProfile', { prevPage: 'RegisterNewPatient' })}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default RegisterNewPatient

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(38),
    marginHorizontal: responsiveWidth(16),
  },
  ConImg: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(16)
  },
  img: {
    width: responsiveHeight(170),
    height: responsiveHeight(126),
    borderRadius: responsiveHeight(4),
    marginRight: responsiveWidth(18.6)
  },
  ConButtonImg: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  ConRowReplace: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(24),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  ConRowTrash: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imgText: {
    width: responsiveHeight(9.8),
    height: responsiveHeight(11.2),
    marginRight: responsiveWidth(6.1)
  },
  conLabelCard: {
    marginBottom: responsiveHeight(4)
  },
  bigConRadio: {
    marginHorizontal: responsiveWidth(19),
    height: responsiveHeight(82),
    borderBottomWidth: 0.5,
    borderColor: color.Huest_Grey,
    marginBottom: responsiveHeight(16)
  },
  ConRadio: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: responsiveHeight(16)
  },
  conLabelText: {
    marginBottom: responsiveHeight(4),
    marginHorizontal: responsiveWidth(1)
  },
  conTextInput: {
    // marginHorizontal: -responsiveWidth(15),
    marginBottom: responsiveHeight(16)
  },
  ConButton: {
    marginTop: responsiveHeight(8),
    marginBottom: responsiveHeight(80)
  },
  ConDropDown: {
    marginBottom: responsiveHeight(16)
  }
})