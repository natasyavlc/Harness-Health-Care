import { View, SafeAreaView, StyleSheet, Platform, KeyboardAvoidingView, ScrollView, StatusBar, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import TexInputBox from '../../Component/TextInputBox/index'
import Logos from '../../Component/Logo/Logos'
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary'
import colors from '../../../Asset/color'
import CheckBox from '../../Component/CheckBox'
import Ctext from '../../Component/CostumeText'
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI'
import SocialMedia from '../../Component/AuthSocial/index'
import ModalToast from '../../Component/ModalToast/index'
import { passwordFormat, regexChar, Emailreg } from '../../Component/Helper/Regex'
import DummyUser from '../../DummyData'
import Loading from '../../Component/Loading/index'

const SignIn = ({ navigation, route }) => {
    const [email, setEmail] = useState('Example@gmail.com')
    const [password, setPassword] = useState('Hantu123!')
    const [hide, setHide] = useState(true);
    const [errorText, setErrorText] = useState('');
    const [errorTextEmail, setErrorTextEmail] = useState('');
    const [isError, setIsError] = useState(false);
    const [isErrorEmail, setIsErrorEmail] = useState(false);
    const [check, setCheck] = useState(false);
    const [disable, setDisable] = useState(true);
    const [focus, setFocus] = useState(false);
    const [focus2, setFocus2] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const onBackPress = () => {
        var scBefore = route.params?.prevPage
        if (scBefore == 'SignUp') {
            navigation.navigate(scBefore)
        } else {
            navigation.goBack()
        }
        return true
    };
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        };
    }, [])



    useEffect(() => {
        Validasi()
    }, [email, password])

    useEffect(() => {
        validatorrEmail()
    }, [email])

    useEffect(() => {
        validatorIsFocus()
    }, [password])

    const Validasi = () => {
        if (email != '' && password != '') {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }
    const setData = async () => {
        setIsLoading(true)
        let ver = [];
        let obj = DummyUser.filter(o => o.Email === email);
        ver.push(obj);
        if (ver[0][0]?.Email === email && ver[0][0]?.password === password) {
            setTimeout(() => {
                setIsLoading(false);
                navigation.navigate('MainStack', { prevPage: 'SignIn' })
            }, 2000);
        } else if (ver[0][0]?.Email !== email) {
            setIsErrorEmail(true);
            setIsLoading(false);
            setErrorTextEmail('Wrong email Address');
        } else if (ver[0][0]?.password !== password) {
            setIsError(true)
            setIsLoading(false);
            setErrorText("Your password is incorrect")
        } else {
            setIsErrorEmail(true);
            setIsError(false);
            setIsLoading(false);
        }
    };

    const validatorrEmail = () => {
        if (email != '' && email.length > 0) {
            if (Emailreg.test(email) == true) {
                setIsErrorEmail(false);
            } else {
                setIsErrorEmail(true);
                setErrorTextEmail('Invalid email address');
            }
        } else {
            setIsErrorEmail(false);
        }

    };
    const validatorIsFocus = () => {
        if (!passwordFormat.test(password) && !password.match(regexChar) && password.length > 0) {
            setIsError(true)
            setErrorText("Invalid Password Character");
        }
        else {
            setIsError(false)
        }
    }


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{ flex: 1 }}>
            <SafeAreaView style={[style.container]}>
                <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
                <ScrollView showsVerticalScrollIndicator={false}  >
                    <View style={style.conAlert}>
                        <ModalToast
                            show={isErrorEmail}
                            label={errorTextEmail}
                            isFocus={isErrorEmail}
                        />
                        <View style={{ marginVertical: responsiveHeight(4) }}>
                            <ModalToast
                                show={isError}
                                label={errorText}
                                isFocus={isError}
                            />
                        </View>
                    </View>
                    <View style={{ height: responsiveHeight(10) }} />
                    <View style={style.conLogo}>
                        <Logos
                            logoColor={'blue'}
                            height={73}
                            width={73}
                            mode={'contain'}
                            fonts={responsiveHeight(19.5)}
                        />
                    </View>
                    <View style={style.conlabels}>
                        <Ctext
                            label={'Sign In to your account'}
                            colors={colors.Primary_Black}
                            fontSizes={responsiveHeight(15)}
                            Font={'Inter-400'}
                        />
                    </View>
                    <View style={style.conTextInput}>
                        <TexInputBox
                            label={'Email'}
                            mandatory={true}
                            placeholders={'Email'}
                            value={email}
                            onChangeText={value => {
                                setEmail(value)
                            }}
                            bgColor={'transparent'}
                            borderColors={focus ? colors.Primary : colors.Huest_Grey}
                            fontFamilys={'Inters'}
                            placeholderStyle={'Inter-400'}
                            fontPlaceholder={responsiveHeight(14)}
                            onBlur={() => setFocus(false)}
                            onFocusInput={() => setFocus(true)}
                            isError={isErrorEmail}
                            placeholderColor={colors.Huest_Grey}

                        />
                    </View>
                    <View style={style.conTextInput2}>
                        <TexInputBox
                            mandatory={true}
                            label={'Password'}
                            placeholders={'Password'}
                            value={password}
                            onChangeText={value => {
                                setPassword(value)
                            }}
                            isPassword={hide}
                            onPress={() => { setHide(!hide) }}
                            bgColor={'transparent'}
                            checkers={true}
                            fontFamilys={'Inters'}
                            placeholderStyle={'Inter-400'}
                            fontPlaceholder={responsiveHeight(14)}
                            borderColors={focus2 ? colors.Primary : colors.Huest_Grey}
                            onBlur={() => setFocus2(false)}
                            onFocusInput={() => setFocus2(true)}
                            isError={isError}
                            placeholderColor={colors.Huest_Grey}

                        />
                    </View>
                    <View style={style.conCheck}>
                        <CheckBox
                            value={check}
                            onPress={() => setCheck(!check)}
                            resize={'contain'}
                            label={'Remember Me'}
                        />
                    </View>
                    <View style={style.conButton}>
                        <ButtonPrimary
                            label={'Sign In'}
                            colors={colors.Primary_White}
                            Font={'InterRegular'}
                            fontSizes={responsiveHeight(14)}
                            bgColor={colors.Primary}
                            borderColor={colors.Primary}
                            borderWidth={false}
                            disable={disable}
                            onPress={setData}
                        />
                    </View>
                    <View style={style.conlabels4}>
                        <ButtonPrimary
                            label={'Forgot Password?'}
                            colors={colors.Primary}
                            Font={'Inter-400'}
                            fontSizes={responsiveHeight(14)}
                            borderWidth={false}
                            disable={false}
                            margin={true}
                            onPress={() => {
                                navigation.navigate('ForgotPassword')
                            }}
                        />
                    </View>
                    <View style={style.conlabels2}>
                        <Ctext
                            label={'Or continue with'}
                            colors={colors.Primary_Black}
                            fontSizes={responsiveHeight(12)}
                            Font={'Inters'}
                        />
                    </View>
                    <View style={style.conSocial}>
                        <SocialMedia />
                    </View>
                    <View style={style.conlabels3}>
                        <Ctext
                            label={'Don’t have an account?'}
                            colors={colors.Text_Grey}
                            fontSizes={responsiveHeight(14)}
                            Font={'InterRegular'}
                        />
                        <View style={{ marginLeft: responsiveWidth(5) }}>
                            <ButtonPrimary
                                label={'Sign Up'}
                                colors={colors.Primary}
                                Font={'InterRegular'}
                                fontSizes={responsiveHeight(14)}
                                borderWidth={false}
                                disable={false}
                                margin={true}
                                onPress={() => navigation.navigate('SignUp', { prevPage: 'SignIn' })}
                            />
                        </View>
                    </View>
                    <Loading isLoading={isLoading} />
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColors
    },
    conLogo: {
        height: responsiveHeight(101),
        alignSelf: 'center',
        justifyContent: 'center'
    },
    conTextInput: {
        marginBottom: responsiveHeight(16),
        marginHorizontal: responsiveWidth(16)
    },
    conTextInput2: {
        marginBottom: responsiveHeight(16),
        marginHorizontal: responsiveWidth(16)
    },
    conButton: {
        shadowColor: colors.Primary_Black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginBottom: responsiveHeight(24)
    },
    conCheck: {
        marginBottom: responsiveHeight(24)
    },
    conlabels: {
        marginTop: responsiveHeight(60),
        marginBottom: responsiveHeight(24),
        alignSelf: 'center'
    },
    conlabels2: {
        alignItems: 'center',
        marginBottom: responsiveHeight(24)
    },
    conlabels3: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: responsiveHeight(36)
    },
    conlabels4: {
        marginBottom: responsiveHeight(74)

    },
    conAlert: {
        padding: responsiveHeight(6),
        paddingHorizontal: responsiveWidth(10),
        paddingVertical: responsiveHeight(10),
    },
    conSocial: {
        marginBottom: responsiveHeight(57)
    }
})

export default SignIn