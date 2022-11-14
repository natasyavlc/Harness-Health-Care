import { View, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary';
import Pencil from '../../image/Icons/pencil.png';
import color from '../../../Asset/color';
import Headers from '../../Component/Headers';
import SettingIcon from '../../image/Icons/SettingIcon.png';
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI';
import CText from '../../Component/CostumeText/index';
import DummyUser from '../../DummyData';
import CardProfile from '../../Component/Card/CardAppointment'

const Index = ({ navigation }) => {

  const profileArr = DummyUser.filter(o => o.id);
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Headers
        Hlabel={'My Profile'}
        onPressOption={() => { navigation.navigate("Setting") }}
        OptionsImage={SettingIcon}
        IconHeight={24}
        IconWidth={24}
        OnBack={false}
      />
      <View style={style.conProfile}>
        <CardProfile
          isProfile={true}
          name={profileArr[0].username}
          state={profileArr[0].state}
          email={profileArr[0].Email}
          image={profileArr[0].image}
          onPress={() => {
            navigation.navigate("Setting")
          }}
        />
      </View>
      <View style={style.bigConText} >
        <View style={style.conText}>
          <View style={style.confleText}>
            <CText
              label={'Phone Number'}
              fontSizes={responsiveHeight(14)}
              Font={'Inters'}
              colors={color.Text_Grey}
            />
          </View>
          <View style={style.confleText}>
            <CText
              label={profileArr[1]?.phoneNumber}
              fontSizes={responsiveHeight(14)}
              Font={'Inters'}
              colors={color.Primary_Black}
            />
          </View>
        </View>
        <View style={style.conText}>
          <View style={style.confleText}>
            <CText
              label={'Date of Birth'}
              fontSizes={responsiveHeight(14)}
              Font={'Inters'}
              colors={color.Text_Grey}
            />
          </View>
          <View style={style.confleText}>
            <CText
              label={profileArr[1].dateBirth}
              fontSizes={responsiveHeight(14)}
              Font={'Inters'}
              colors={color.Primary_Black}
            />
          </View>
        </View>
        <View style={style.conText}>
          <View style={style.confleText}>
            <CText
              label={'Gender'}
              fontSizes={responsiveHeight(14)}
              Font={'Inters'}
              colors={color.Text_Grey}
            />
          </View>
          <View style={style.confleText}>
            <CText
              label={profileArr[1].gender}
              fontSizes={responsiveHeight(14)}
              Font={'Inters'}
              colors={color.Primary_Black}
            />
          </View>
        </View>
        <View style={style.conTextAdd}>
          <View style={style.confleText}>
            <CText
              label={'Address'}
              fontSizes={responsiveHeight(14)}
              Font={'Inters'}
              colors={color.Text_Grey}
            />
          </View>
          <View style={style.confleText}>
            <CText
              label={profileArr[1].addres}
              fontSizes={responsiveHeight(14)}
              Font={'Inters'}
              colors={color.Primary_Black}
            />
          </View>
        </View>
      </View>
      <View style={style.conButton}>
        <ButtonPrimary
          label={'Edit Profile'}
          bgColor={color.bgColors}
          Font={'InterRegular'}
          fontSizes={responsiveHeight(14)}
          colors={color.Primary}
          borderColor={color.Primary}
          borderWidth={true}
          ImageProp={Pencil}
          ImageHeight={20}
          ImageWidth={20}
          onPress={() => navigation.navigate("EditProfile")}
        />
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bgColors
  },
  bigConText: {
    flex: 1,
    marginHorizontal: responsiveWidth(23),
    flexDirection: 'column',
    height: responsiveHeight(164),
    width: responsiveWidth(396),
  },
  conText: {
    height: responsiveHeight(36),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'

  },
  conTextAdd: {
    marginTop: responsiveHeight(8),
    height: responsiveHeight(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  confleText: {
    width: responsiveWidth(187),
    flexGrow: 1,
  },
  conButton: {
    marginBottom: responsiveHeight(24)
  },
  conProfile: {
    marginTop: responsiveHeight(16),
    marginHorizontal: responsiveWidth(16)
  }
})

export default Index