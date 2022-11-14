import { Keyboard, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

// Component
import Headers from '../../Component/Headers'
import ModalToast from '../../Component/ModalToast/index'
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary'
import TextInputBox from '../../Component/TextInputBox/index'
import CustomeText from '../../Component/CostumeText/index'
import CheckBox from '../../Component/CheckBox/index'
// UI
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI'
import color from '../../../Asset/color'
import { passwordFormat, regexChar } from '../../Component/Helper/Regex'

const ResetPassword = ({ navigation }) => {
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [focus, setFocus] = useState(false);
    const [focus2, setFocus2] = useState(false);
    const [isError, setIsError] = useState(false);
    const [keyboardStatus, setKeyboardStatus] = useState(false)
    const [hide, setHide] = useState(true);
    const [hide2, setHide2] = useState(true);
    const [errorText, setErrorText] = useState('');
    const [check, setCheck] = useState(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus(false);
        });
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, [keyboardStatus])

    const buttonDisable = () => {
        const x = newPassword && confirmNewPassword;
        return !x;
    }
    useEffect(() => {
        buttonDisable()
    }, [newPassword, confirmNewPassword])

    const handleButtonSave = () => {
        if (newPassword !== confirmNewPassword) {
            setErrorText('Password does not match')
            setIsError(true)
        } else {
            setErrorText('')
            setIsError(false)
            navigation.navigate('ResetPasswordSuccessful')
        }
    }
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <Headers
                Hlabel={'Forgot Password'}
                onPress={() => {
                    navigation.goBack()
                }}
                OnBack={true}
            />
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            {isError ?
                <View style={styles.conAlert}>
                    <ModalToast
                        show={isError}
                        label={errorText}
                        isFocus={isError}
                    />
                </View>
                : <></>
            }
            <View style={{ flex: 1 }}>
                <ScrollView
                    style={{ marginTop: isError ? responsiveHeight(84) : responsiveHeight(160) }}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                    <CustomeText
                        Font={'Inter-Semi'}
                        fontSizes={responsiveHeight(16)}
                        label={'Create a new password'}
                        lineHeights={responsiveHeight(24.4)}
                        align={'center'}
                        colors={color.GT_Grey}
                    />
                    <View style={styles.conPassword}>
                        <TextInputBox
                            mandatory={true}
                            label={'New Password'}
                            placeholders={'New Password'}
                            value={newPassword}
                            onChangeText={value => {
                                setNewPassword(value)
                            }}
                            isPassword={hide}
                            onPress={() => { setHide(!hide) }}
                            bgColor={'transparent'}
                            checkers={true}
                            fontFamilys={'Inters'}
                            placeholderStyle={'Inter-400'}
                            fontPlaceholder={responsiveHeight(14)}
                            borderColors={focus ? color.Primary : color.Huest_Grey}
                            onBlur={() => setFocus(false)}
                            onFocusInput={() => setFocus(true)}
                            isError={isError}
                            placeholderColor={color.Huest_Grey}

                        />
                    </View>
                    <View style={styles.conConfirm}>
                        <TextInputBox
                            mandatory={true}
                            label={'Confirm New Password'}
                            placeholders={'Confirm New Password'}
                            value={confirmNewPassword}
                            onChangeText={value => {
                                setConfirmNewPassword(value)
                            }}
                            isPassword={hide2}
                            onPress={() => { setHide2(!hide2) }}
                            bgColor={'transparent'}
                            checkers={true}
                            fontFamilys={'Inters'}
                            placeholderStyle={'Inter-400'}
                            fontPlaceholder={responsiveHeight(14)}
                            borderColors={focus2 ? color.Primary : color.Huest_Grey}
                            onBlur={() => setFocus2(false)}
                            onFocusInput={() => setFocus2(true)}
                            isError={isError}
                            placeholderColor={color.Huest_Grey}

                        />
                    </View>
                    <View style={styles.conCheck}>
                        <CheckBox
                            value={check}
                            onPress={() => setCheck(!check)}
                            resize={'contain'}
                            label={'Remember Me'}
                        />
                    </View>
                    <View style={keyboardStatus === true ? { marginBottom: Platform.OS === 'ios' ? responsiveHeight(300) : null, bottom: 0 } : { bottom: 0 }}>
                        <ButtonPrimary
                            label={'Save'}
                            colors={color.Primary_White}
                            Font={'InterRegular'}
                            fontSizes={responsiveHeight(14)}
                            bgColor={color.Primary}
                            borderColor={color.Primary}
                            borderWidth={true}
                            disable={buttonDisable()}
                            onPress={() => handleButtonSave()}
                        />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default ResetPassword

const styles = StyleSheet.create({
    conAlert: {
        padding: Platform.OS == 'ios' ? responsiveHeight(6) : responsiveHeight(2),
        paddingHorizontal: responsiveWidth(16),
        height: responsiveHeight(56)
    },
    conCheck: {
        marginBottom: responsiveHeight(24)
    },
    conPassword: {
        marginTop: responsiveHeight(24),
        marginHorizontal: responsiveWidth(16)
    },
    conConfirm: {
        marginTop: responsiveHeight(16),
        marginBottom: responsiveHeight(16),
        marginHorizontal: responsiveWidth(16)
    }
})