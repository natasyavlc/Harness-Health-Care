import { View, SafeAreaView, StyleSheet, StatusBar, ScrollView, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import Headers from '../../Component/Headers'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI'
import CText from '../../Component/CostumeText/index'
import SwitchButton from '../../Component/SwitchButton/Index'
import TexInputBox from '../../Component/TextInputBox';
import CheckBox from '../../Component/CheckBox'

const Form_edit_pass = ({ navigation }) => {

    const [isFace, setIsFace] = useState(false);
    const [isTouch, setIsTouch] = useState(false);
    const [hide, setHide] = useState(true);
    const [hideConfrim, setHideConfrim] = useState(true);
    const [isfocus, setIsfocus] = useState(false);
    const [isfocusnew, setIsfocusnew] = useState(false);
    const [isfocusconfirm, setIsfocusconfirm] = useState(false);
    const [OldPassword, setOldPassword] = useState('');
    const [NewPassword, setNewPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [check, setCheck] = useState(false)

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

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View style={style.conHeaders}>
                <Headers
                    Hlabel={'Password & Security'}
                    OnBack={true}
                    onPress={() => { navigation.goBack() }}
                />
            </View>
            <ScrollView>
                <View style={style.conText}>
                    <CText
                        label={'Biometric Security'}
                        fontSizes={responsiveHeight(16)}
                        Font={'Inter-Semi'}
                        colors={color.Primary_Black}
                    />
                </View>
                <View>
                    <SwitchButton
                        onChangeValue={() => { setIsFace(!isFace) }}
                        value={isFace}
                        label={'Face ID'} />
                    <SwitchButton
                        onChangeValue={() => { setIsTouch(!isTouch) }}
                        value={isTouch}
                        label={'Touch ID'} />
                </View>
                <View style={style.conText2}>
                    <CText
                        label={'Change Password'}
                        fontSizes={responsiveHeight(16)}
                        Font={'Inter-Semi'}
                        colors={color.Primary_Black}
                    />
                </View>
                <View style={style.conInput}>
                    <TexInputBox
                        mandatory={true}
                        label={'Old Password'}
                        placeholders={'Old Password'}
                        value={OldPassword}
                        onChangeText={value => {
                            setOldPassword(value)
                        }}
                        isPassword={true}
                        bgColor={'transparent'}
                        fontFamilys={'Inters'}
                        placeholderStyle={'Inter-400'}
                        fontPlaceholder={responsiveHeight(14)}
                        placeholderColor={color.Huest_Grey}
                        borderColors={isfocus ? color.Primary : color.Huest_Grey}
                        onBlur={() => setIsfocus(false)}
                        onFocusInput={() => setIsfocus(true)}
                    //     isError={isError}
                    />
                </View>
                <View style={style.conInput}>
                    <TexInputBox
                        mandatory={true}
                        placeholders={'New Password'}
                        label={'New Password'}
                        value={NewPassword}
                        onChangeText={value => {
                            setNewPassword(value)
                        }}
                        isPassword={hide}
                        onPress={() => { setHide(!hide) }}
                        checkers={true}
                        bgColor={'transparent'}
                        fontFamilys={'Inters'}
                        placeholderStyle={'Inter-400'}
                        fontPlaceholder={responsiveHeight(14)}
                        placeholderColor={color.Huest_Grey}
                        borderColors={isfocusnew ? color.Primary : color.Huest_Grey}
                        onBlur={() => setIsfocusnew(false)}
                        onFocusInput={() => setIsfocusnew(true)}
                    //     isError={isError}
                    />
                </View>
                <View style={style.conInput}>
                    <TexInputBox
                        mandatory={true}
                        placeholders={'Confirm New Password'}
                        label={'Confirm New Password'}
                        value={ConfirmPassword}
                        onChangeText={value => {
                            setConfirmPassword(value)
                        }}
                        isPassword={hideConfrim}
                        onPress={() => { setHideConfrim(!hideConfrim) }}
                        checkers={true}
                        bgColor={'transparent'}
                        fontFamilys={'Inters'}
                        placeholderStyle={'Inter-400'}
                        fontPlaceholder={responsiveHeight(14)}
                        placeholderColor={color.Huest_Grey}
                        borderColors={isfocusconfirm ? color.Primary : color.Huest_Grey}
                        onBlur={() => setIsfocusconfirm(false)}
                        onFocusInput={() => setIsfocusconfirm(true)}
                    />
                </View>
                <View>
                    <CheckBox
                        value={check}
                        onPress={() => setCheck(!check)}
                        resize={'contain'}
                        label={'Remember Me'}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    container: {
        backgroundColor: color.bgColors,
        flex: 1,
        
    },
    conText: {
        marginHorizontal: responsiveWidth(16),
        marginBottom: responsiveHeight(12)
    },
    conText2: {
        marginTop: responsiveHeight(24),
        marginHorizontal: responsiveWidth(16),
        marginBottom: responsiveHeight(12)

    },
    conInput: {
        marginBottom: responsiveHeight(16),
        marginHorizontal:responsiveWidth(16)
    }
})

export default Form_edit_pass