import { View, SafeAreaView, StatusBar, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import Headers from '../../Component/Headers'
import RadioButtons from '../../Component/CostumeRadio/CostumeRadios'
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI'
import Ctext from '../../Component/CostumeText/index'
import color from '../../../Asset/color';
import TexInputBox from '../../Component/TextInputBox/index'
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary'
import Dropdowns from '../../Component/CostumePicker/Costumes'
import DateModal from '../../Component/ModalPickerDate/Index'
import Moment from 'moment'

const Form_edit_profile = ({ navigation }) => {

  const [Male, setMale] = useState(false);
  const [Female, setFemale] = useState(false);
  const [FullName, setFullName] = useState('')
  const [focusName, setFocusName] = useState(false);
  const [PhoneNumber, setPhoneNumber] = useState('')
  const [focusPhone, setFocusPhone] = useState(false)
  const [zipcode, setZipcode] = useState('')
  const [zipFocus, setZipFocus] = useState(false)
  const [address, setAddress] = useState('')
  const [addresfocus, setAddresfocus] = useState(false)
  const [selected, setSelected] = useState('')
  const [province, setProvince] = useState('')
  const [date, setDate] = useState()

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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}>
      <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <Headers
          Hlabel={'Edit Profile'}
          onPress={() => { navigation.goBack() }}
          OnBack={true}
        />
        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}  >
            <View style={style.conTextInput}>
              <TexInputBox
                label={'Full Name*'}
                placeholders={'E.g., Robert Dawson'}
                value={FullName}
                onChangeText={value => {
                  setFullName(value)
                }}
                bgColor={'transparent'}
                borderColors={focusName ? color.Primary : color.Huest_Grey}
                fontFamilys={'Inters'}
                placeholderStyle={'Inter-400'}
                fontPlaceholder={responsiveHeight(14)}
                onBlur={() => setFocusName(false)}
                onFocusInput={() => setFocusName(true)}
                placeholderColor={color.Primary_Black}

              />
            </View>
            <View style={style.conTextInput}>
              <TexInputBox
                label={'Phone Number*'}
                placeholders={'E.g., +1234567890'}
                value={PhoneNumber}
                onChangeText={value => {
                  setPhoneNumber(value)
                }}
                bgColor={'transparent'}
                borderColors={focusPhone ? color.Primary : color.Huest_Grey}
                fontFamilys={'Inters'}
                placeholderStyle={'Inter-400'}
                keyboardType={'number-pad'}
                fontPlaceholder={responsiveHeight(14)}
                onBlur={() => setFocusPhone(false)}
                onFocusInput={() => setFocusPhone(true)}
                placeholderColor={color.Primary_Black}

              />
            </View>
            <View style={style.dateModal}>
              <DateModal
                label={'Select date of birth'}
                placeholder={'Date of Birth*'}
                value={date}
                selectedDate={dates => {
                  setDate(date)
                  const formatDates = Moment(dates, 'DD/MM/YYYY').format('DD/MM/YYYY')
                  setDate(formatDates)
                }}
                widthPicker={'100%'}

              />
            </View>
            <View style={style.bigConRadio}>
              <View style={style.conLabelText}>
                <Ctext
                  label={'Gender*'}
                  fontSizes={responsiveHeight(10)}
                  Font={'Inters'}
                  colors={color.Primary_Black}
                />
              </View>
              <View style={style.ConRadio}>
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
                  onPress={() => {
                    handlerChange(2)
                  }}
                  border={true}
                />
              </View>
            </View>
            <View style={style.conButtonDrop}>
              <Dropdowns
                label='Selected Country*'
                placeholder={'Selected Country'}
                useTitle={true}
                data={[
                  { label: 'USA', value: 0 },
                  { label: 'England', value: 1 },
                  { label: 'Singapore', value: 2 },
                  { label: 'Europe', value: 5 },
                  { label: 'China', value: 6 },
                ]}
                selectedValue={selected}
                onValueChange={setSelected}
              />
            </View>
            <View style={style.conButtonDrop}>
              <Dropdowns
                label='State/Province*'
                placeholder={'State/Province'}
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
              />
            </View>
            <View style={style.conTextInput}>
              <TexInputBox
                label={'ZipCode*'}
                placeholders={'E.g., 12345'}
                value={zipcode}
                onChangeText={value => {
                  setZipcode(value)
                }}
                bgColor={'transparent'}
                borderColors={zipFocus ? color.Primary : color.Huest_Grey}
                fontFamilys={'Inters'}
                placeholderStyle={'Inter-400'}
                fontPlaceholder={responsiveHeight(14)}
                onBlur={() => setZipFocus(false)}
                onFocusInput={() => setZipFocus(true)}
                placeholderColor={color.Primary_Black}

              />
            </View>
            <View style={style.conTextInput}>
              <TexInputBox
                label={'Address*'}
                placeholders={'E.g., Robinson Rd. Allentown or Apartment Building'}
                value={address}
                onChangeText={value => {
                  setAddress(value)
                }}
                bgColor={'transparent'}
                borderColors={addresfocus ? color.Primary : color.Huest_Grey}
                fontFamilys={'Inters'}
                placeholderStyle={'Inter-400'}
                fontPlaceholder={responsiveHeight(14)}
                onBlur={() => setAddresfocus(false)}
                onFocusInput={() => setAddresfocus(true)}
                placeholderColor={color.Primary_Black}

              />
            </View>
            <View>
              <View style={style.conButtonSave}>
                <ButtonPrimary
                  label={'Save'}
                  colors={color.Primary_White}
                  Font={'InterRegular'}
                  fontSizes={responsiveHeight(14)}
                  bgColor={color.Primary}
                  borderColor={color.Primary}
                  borderWidth={false}
                  defaultRight={responsiveHeight(20)}
                  defaultLeft={responsiveHeight(20)}
                  defaultVertical={responsiveHeight(12)}
                />
              </View>
              <View style={style.conButtonCancel}>
                <ButtonPrimary
                  label={'Cancel'}
                  colors={color.Primary}
                  Font={'InterRegular'}
                  fontSizes={responsiveHeight(14)}
                  bgColor={color.bgColors}
                  borderColor={color.bgColors}
                  borderWidth={false}
                  defaultRight={responsiveHeight(20)}
                  defaultLeft={responsiveHeight(20)}
                  defaultVertical={responsiveHeight(12)}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  bigConRadio: {
    height: responsiveHeight(82),
    borderBottomWidth: 0.5,
    borderColor: color.Huest_Grey,
    marginBottom: responsiveHeight(16),
    marginHorizontal: responsiveWidth(16)
  },
  ConRadio: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  conLabelText: {
    marginBottom: responsiveHeight(4),
    marginHorizontal: responsiveWidth(1),
  },
  conTextInput: {
    marginBottom: responsiveHeight(16),
    marginHorizontal: responsiveWidth(16)
  },
  conButtonSave: {
    marginBottom: responsiveHeight(16),
  },
  conButtonCancel: {
    marginBottom: responsiveHeight(24)
  },
  conButtonDrop: {
    marginBottom: responsiveHeight(15),
    marginHorizontal: responsiveWidth(16)
  },
  dateModal: {
    alignItems: 'center', marginBottom: responsiveHeight(16),
    marginHorizontal: responsiveWidth(16)
  }
})

export default Form_edit_profile