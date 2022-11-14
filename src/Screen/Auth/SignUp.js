import {
    View,
    SafeAreaView,
    StyleSheet,
    Platform,
    KeyboardAvoidingView,
    ScrollView,
    StatusBar,
    BackHandler,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import TexInputBox from '../../Component/TextInputBox/index';
import Logos from '../../Component/Logo/Logos';
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary';
import colors from '../../../Asset/color';
import CheckBox from '../../Component/CheckBox';
import Ctext from '../../Component/CostumeText';
import {
    responsiveHeight,
    responsiveWidth,
} from '../../Component/Helper/ResponsiveUI';
import SocialMedia from '../../Component/AuthSocial/index';
import ModalToast from '../../Component/ModalToast/index';
import { regexChar, Emailreg } from '../../Component/Helper/Regex';
const SignUp = ({ navigation, route }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hide, setHide] = useState(true);
    const [hide2, setHide2] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isErrorEmail, setIsErrorEmail] = useState(false);
    const [isErrorConfirm, setIsErrorConfirm] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [errorTextEmail, setErrorTextEmail] = useState('');
    const [errorTextConfirm, setErrorTextConfirm] = useState('');
    const [check, setCheck] = useState(false);
    const [disable, setDisable] = useState(true);
    const [focus, setFocus] = useState(false);
    const [focus2, setFocus2] = useState(false);
    const [focus3, setFocus3] = useState(false);

    const onBackPress = () => {
        var scBefore = route.params?.prevPage
        if (scBefore == 'SignIn') {
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
        Validasi();
    }, [email, password, confirmPassword]);

    useEffect(() => {
        Validasi();
        validatorrEmail();
    }, [email]);

    useEffect(() => {
        Validasi();
        ValidatorPassword();
    }, [password]);

    useEffect(() => {
        Validasi();
        ValidatorConfirmPassword();
    }, [confirmPassword]);

    const Validasi = () => {
        if (
            email !== '' &&
            password !== '' &&
            confirmPassword !== '' &&
            isErrorEmail === false &&
            password === confirmPassword
        ) {
            setDisable(false);
        } else {
            setDisable(true);
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
    const ValidatorPassword = () => {
        if (!password.match(regexChar) && password.length > 0) {
            setIsError(true);
            setErrorText('Your password is weak');
        } else {
            setIsError(false);
        }
    };

    const ValidatorConfirmPassword = () => {
        if (confirmPassword.length > 0) {
            if (confirmPassword !== password) {
                setIsErrorConfirm(true);
                setErrorTextConfirm('Password not match');
            } else {
                setIsErrorConfirm(false);
            }
        } else {
            setIsErrorConfirm(false);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={style.conKey}>
            <SafeAreaView style={[style.container]}>
                <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={style.conNull} />
                    <View style={style.conAlert}>
                        <ModalToast
                            show={isErrorEmail}
                            label={errorTextEmail}
                            isFocus={isErrorEmail}
                        />
                        <View style={{ marginVertical: responsiveHeight(4) }}>
                            <ModalToast show={isError} label={errorText} isFocus={isError} />
                        </View>
                        <ModalToast
                            show={isErrorConfirm}
                            label={errorTextConfirm}
                            isFocus={isErrorConfirm}
                        />
                    </View>
                    <View style={style.conLogo}>
                        <Logos
                            logoColor={'blue'}
                            height={73}
                            width={73}
                            mode={'contain'}
                            fonts={responsiveHeight(20)}
                        />
                    </View>
                    <View style={style.conlabels}>
                        <Ctext
                            label={'Sign up for free'}
                            colors={colors.Primary_Black}
                            fontSizes={responsiveHeight(16)}
                            Font={'Inter-400'}
                        />
                    </View>
                    <View style={style.conTextInput}>
                        <TexInputBox
                            mandatory={true}
                            label={'Email'}
                            placeholders={'Email'}
                            value={email}
                            onChangeText={value => {
                                setEmail(value);
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
                            label={'New Password'}
                            placeholders={'New Password'}
                            value={password}
                            onChangeText={value => {
                                setPassword(value);
                            }}
                            isPassword={hide}
                            onPress={() => {
                                setHide(!hide);
                            }}
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
                    <View style={style.conTextInput2}>
                        <TexInputBox
                            mandatory={true}
                            label={'Confirm Password'}
                            placeholders={'Confirm Password'}
                            value={confirmPassword}
                            onChangeText={value => {
                                setConfirmPassword(value);
                            }}
                            isPassword={hide2}
                            onPress={() => {
                                setHide2(!hide2);
                            }}
                            bgColor={'transparent'}
                            checkers={true}
                            fontFamilys={'Inters'}
                            placeholderStyle={'Inter-400'}
                            fontPlaceholder={responsiveHeight(14)}
                            borderColors={focus3 ? colors.Primary : colors.Huest_Grey}
                            onBlur={() => setFocus3(false)}
                            onFocusInput={() => setFocus3(true)}
                            isError={isErrorConfirm}
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
                            label={'Sign Up'}
                            colors={colors.Primary_White}
                            Font={'InterRegular'}
                            fontSizes={responsiveHeight(14)}
                            bgColor={colors.Primary}
                            borderColor={colors.Primary}
                            borderWidth={false}
                            disable={disable}
                        />
                    </View>
                    <View style={style.conlabels2}>
                        <Ctext
                            label={'Or continue with'}
                            colors={colors.Primary_Black}
                            fontSizes={12}
                            Font={'Inters'}
                        />
                    </View>
                    <View style={style.conSocial}>
                        <SocialMedia />
                    </View>
                    <View style={style.conlabels3}>
                        <Ctext
                            label={'Already have account?'}
                            colors={colors.Text_Grey}
                            fontSizes={responsiveHeight(14)}
                            Font={'InterRegular'}
                        />
                        <View style={{ marginLeft: responsiveWidth(5) }}>
                            <ButtonPrimary
                                label={'Sign In'}
                                colors={colors.Primary}
                                Font={'InterRegular'}
                                fontSizes={responsiveHeight(14)}
                                borderWidth={false}
                                disable={false}
                                margin={true}
                                onPress={() => navigation.navigate('SignIn', { prevPage: 'SignUp' })}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

const style = StyleSheet.create({
    conKey: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: colors.bgColors,
    },
    conLogo: {
        marginBottom: responsiveHeight(64),
    },
    conTextInput: {
        marginBottom: responsiveHeight(16),
        marginHorizontal: responsiveWidth(16)
    },
    conTextInput2: {
        marginHorizontal: responsiveWidth(16),
        marginBottom: responsiveHeight(16),
    },
    conButton: {
        marginBottom: responsiveHeight(36),
    },
    conCheck: {
        marginBottom: responsiveHeight(24),
    },
    conlabels: {
        alignItems: 'center',
        marginBottom: responsiveHeight(24),
    },
    conlabels2: {
        alignItems: 'center',
        marginBottom: responsiveHeight(16),
    },
    conlabels3: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: responsiveHeight(36),
    },
    conAlert: {
        padding: responsiveHeight(6),
        paddingHorizontal: responsiveWidth(10),
        paddingVertical: responsiveHeight(10),
    },
    conSocial: {
        marginBottom: responsiveHeight(57),
    },
});

export default SignUp;
