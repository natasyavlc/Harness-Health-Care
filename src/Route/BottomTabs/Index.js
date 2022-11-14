import * as React from 'react';
import { BackHandler, Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screen
import Home from '../../Screen/Home';
import Appointment from '../../Screen/Appointment/Index'
import Patients from '../../Screen/Patient/Index'
import ProfileStack from './TabsStack/Index'
//icons
import HomeIcon from '../../image/Tabs/Homes.png'
import HomeIconActive from '../../image/Tabs/homeblue.png'
import AppointIcon from '../../image/Tabs/appoit.png'
import AppointIconActive from '../../image/Tabs/appoitblue.png'
import PatientsIcon from '../../image/Tabs/Patient.png'
import PatientsIconActive from '../../image/Tabs/patientblue.png'
import ProfileIcon from '../../image/Tabs/profile.png'
import ProfileIconActive from '../../image/Tabs/profileblue.png'

//style
import Ctext from '../../Component/CostumeText/index'
import style from './style';
const Tab = createBottomTabNavigator();

export default function App() {
  const onBackPress = () => {
    return true
  };
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, [])

  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: 'blue',
        tabBarVisibilityAnimationConfig: true,
        tabBarStyle: style.containerBar,
        tabBarLabelPosition: 'below-icon',
        tabBarShowLabel: false
      }}>
      <Tab.Screen
        name="HomePage"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={style.container}>
              <View style={style.containerTint(color)}>
                <Image source={color !== 'blue' ? HomeIcon : HomeIconActive} style={style.containerImage} />
              </View>
              <Ctext label={'Home'} fontSizes={10} Font={'Inters'} colors={color} />
            </View>

          ),
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={Appointment}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={style.container}>
              <View style={style.containerTint(color)}>
                <Image source={color !== 'blue' ? AppointIcon : AppointIconActive} style={style.containerImage} />
              </View>
              <Ctext label={'Appoinment'} fontSizes={10} Font={'Inters'} colors={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Patients"
        component={Patients}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={style.container}>
              <View style={style.containerTint(color)}>
                <Image source={color !== 'blue' ? PatientsIcon : PatientsIconActive} style={style.containerImage} />
              </View>
              <Ctext label={'Patients'} fontSizes={10} Font={'Inters'} colors={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={style.container}>
              <View style={style.containerTint(color)}>
                <Image source={color !== 'blue' ? ProfileIcon : ProfileIconActive} style={style.containerImage} />
              </View>
              <Ctext label={'Profile'} fontSizes={10} Font={'Inters'} colors={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>

  );
}