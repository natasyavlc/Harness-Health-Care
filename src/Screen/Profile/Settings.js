import { View, SafeAreaView, StyleSheet, StatusBar, BackHandler, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Headers from '../../Component/Headers'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI'
import CText from '../../Component/CostumeText/index'

//icon
import RowButton from '../../Component/CostumeButton/Index'
import Chevron from '../../image/Icons/Chevron.png'
import Notif from '../../image/Icons/Notif.png'
import LockIcon from '../../image/Icons/LockIcon.png'
import HelpIcon from '../../image/Icons/HelpIcon.png'
import LogoutIcon from '../../image/Icons/LogoutIcon.png'
import ModalExit from '../../Component/Modal/ModalExit'


const Settings = ({ navigation }) => {

    const onBackPress = () => {
        navigation.goBack()
    };
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        };
    }, [])

    const [isVisible, setIsVisible] = useState(false);

    const handlerLogout = () => {
        try {
            setIsVisible(!isVisible)
            navigation.navigate('SignIn')
        } catch {
            console.log('error');
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View style={style.conHeaders}>
                <Headers
                    Hlabel={'Settings'}
                    OnBack={true}
                    onPress={() => { navigation.goBack() }}
                />
            </View>
            <View style={style.conButton}>
                <RowButton
                    Label={'Notifications'}
                    ImageProp={Notif}
                    ChevronImg={Chevron}
                    Chevron={true}
                    onPress={() => {
                        navigation.navigate("Notifications")
                    }}
                />
            </View>
            <View style={style.conButton}>
                <RowButton
                    Label={'Password & Security'}
                    ImageProp={LockIcon}
                    ChevronImg={Chevron}
                    Chevron={true}
                    onPress={() => {
                        navigation.navigate("EditPassword")
                    }}
                />
            </View>
            <View style={style.conButton}>
                <RowButton
                    Label={'Help Center'}
                    ImageProp={HelpIcon}
                    ChevronImg={Chevron}
                    Chevron={true}
                />
            </View>
            <View style={style.conButton}>
                <RowButton
                    Label={'Logout'}
                    ImageProp={LogoutIcon}
                    ChevronImg={Chevron}
                    Chevron={true}
                    onPress={() => {
                        setIsVisible(true)
                    }}
                />
            </View>
            <View style={style.conText}>
                <CText
                    label={'App version 1.00'}
                    fontSizes={responsiveHeight(14)}
                    Font={'Inters'}
                    colors={color.Primary_Grey}
                />
            </View>
            <ModalExit visible={isVisible} onPress={() => setIsVisible(!isVisible)} setLogout={handlerLogout} />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: color.bgColors,
        flex: 1,
    },
    conHeaders: {
        marginBottom: responsiveHeight(16)
    },
    conButton: {
        marginHorizontal: responsiveWidth(6)
    },
    conText: {
        marginTop: 36,
        alignItems: 'center'
    }
})

export default Settings