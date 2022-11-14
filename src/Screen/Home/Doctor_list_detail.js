import { View, StyleSheet, SafeAreaView, StatusBar, ScrollView, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import Headers from '../../Component/Headers'
import color from '../../../Asset/color'
import DoctorFrame from '../../Component/DoctorFrame/Index'
import Ctext from '../../Component/CostumeText/index';
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI'
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary'
import CardComment from '../../Component/Card/CardComment/Index'
import DummyUser from '../../DummyData'
import ModalToast from '../../Component/ModalToast/index'



const Doctor_list_detail = ({ navigation, route }) => {

    const profileArr = DummyUser.filter(p => p.id);

    const DoctorName = route.params?.name
    const [readMore, setReadMore] = useState(false)
    const [seeAll, setSeeAll] = useState(false)
    const [warns, setWarns] = useState(false)

    const onBackPress = () => {
        navigation.navigate('DoctorList');
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
            <View>
                <Headers
                    Hlabel={DoctorName}
                    onPress={() => {
                        navigation.navigate('DoctorList')
                    }}
                    OnBack={true}
                />
            </View>
            {warns ?
                <View style={style.conAlert}>
                    <ModalToast
                        yellow={true}
                        show={warns}
                        label={'You can’t write a review for a doctor you have never been made any appoinment yet.'}
                        isFocus={warns}
                        borderColor={color.hardYellow}
                        bgColor={color.RGB_HuestYellow}
                    />
                </View>
                : null
            }
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={style.conFrame}>
                    <DoctorFrame data={route.params?.data} />
                </View>
                <View style={style.personal}>
                    <Ctext
                        label={`About ${DoctorName}`}
                        colors={color.Primary_Black}
                        fontSizes={responsiveHeight(16)}
                        Font={'Inter-Semi'}
                    />
                    <View style={style.top}>
                        <Ctext
                            label={`${DoctorName} is one of the best cardiologist doctor in the St. Patrick Hospital, California. She has treated numerous patients since 1998.`}
                            colors={color.Primary_Black}
                            fontSizes={responsiveHeight(16)}
                            Font={'Inters'}
                        />
                        {readMore ?
                            <>
                                <Ctext
                                    label={'Dr. Robert Fox is one of the best cardiologist doctor in the St. Patrick Hospital, California. She has treated numerous patients since 1998.'}
                                    colors={color.Primary_Black}
                                    fontSizes={responsiveHeight(16)}
                                    Font={'Inters'}
                                />
                            </> : null
                        }
                        <View style={style.conRead}>
                            <ButtonPrimary
                                label={readMore ? 'Collapse' : 'Read More'}
                                colors={color.Primary}
                                Font={'InterRegular'}
                                fontSizes={responsiveHeight(14)}
                                borderWidth={false}
                                disable={false}
                                margin={true}
                                onPress={() => {
                                    setReadMore(!readMore)
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={style.personal}>
                    <Ctext
                        label={'Available Schedule'}
                        colors={color.Primary_Black}
                        fontSizes={responsiveHeight(16)}
                        Font={'Inter-Semi'}
                    />
                    <View style={style.times}>
                        <View style={style.marginText}>
                            <Ctext
                                label={'Mon-Fri'}
                                colors={color.Primary_Black}
                                fontSizes={responsiveHeight(16)}
                                Font={'Inters'}
                            />
                        </View>
                        <Ctext
                            label={'08.00 AM  - 20.00PM'}
                            colors={color.Primary_Black}
                            fontSizes={responsiveHeight(16)}
                            Font={'Inters'}
                        />
                    </View>
                    <View style={style.times}>
                        <View style={style.marginText2}>
                            <Ctext
                                label={'Sat'}
                                colors={color.Primary_Black}
                                fontSizes={responsiveHeight(16)}
                                Font={'Inters'}
                            />
                        </View>
                        <Ctext
                            label={'10.00 AM  - 18.00 PM'}
                            colors={color.Primary_Black}
                            fontSizes={responsiveHeight(16)}
                            Font={'Inters'}
                        />
                    </View>
                </View>
                <View style={style.personal}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ctext
                            label={'Patient’s Reviews'}
                            colors={color.Primary_Black}
                            fontSizes={responsiveHeight(16)}
                            Font={'Inter-Semi'}
                        />
                        <View style={style.seeAll}>
                            <ButtonPrimary
                                label={seeAll ? 'Collapse' : 'See All'}
                                colors={color.Primary}
                                Font={'InterRegular'}
                                fontSizes={responsiveHeight(12)}
                                borderWidth={false}
                                disable={false}
                                margin={true}
                                onPress={() => {
                                    setSeeAll(!seeAll)
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={style.conComment}>
                    <CardComment
                        data={profileArr[0]}
                        comment={'Satisfied with Dr. Robert Fox explanations about my symtomps!'}
                    />
                    <CardComment
                        data={profileArr[0]}
                        comment={'Satisfied with Dr. Robert Fox explanations about my symtomps!'}
                    />
                </View>
            </ScrollView>

            <View style={style.conButton}>
                <ButtonPrimary
                    label={'Write a Review'}
                    colors={color.Primary_White}
                    Font={'Inter-Semi'}
                    fontSizes={responsiveHeight(14)}
                    disable={warns ? true : false}
                    bgColor={color.Primary}
                    borderColor={color.bgColors}
                    borderWidth={false}
                    onPress={() => {
                        navigation.navigate('PatientReview')
                        // setWarns(!warns)
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Doctor_list_detail

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.bgColors
    },
    conFrame: { alignItems: 'center' },
    personal:
    {
        marginTop: responsiveHeight(24),
        paddingLeft: responsiveWidth(16),
        flexDirection: 'column'
    },
    top: {
        marginTop: responsiveHeight(12)
    },
    conRead: {
        alignItems: 'flex-start',
        marginTop: responsiveHeight(12),
    },
    seeAll: {
        marginTop: responsiveHeight(4),
        marginLeft: responsiveWidth(12),
        alignItems: 'baseline',
    },
    marginText: { marginRight: responsiveWidth(24) },
    marginText2: { marginRight: responsiveWidth(58) },
    times: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveHeight(12)
    },
    conComment: {
        marginTop: responsiveHeight(16),
        marginHorizontal: responsiveWidth(16)
    },
    conButton: {
        backgroundColor: 'transparent',
        width: '100%',
        marginTop: responsiveHeight(792),
        position: 'absolute'
    },
    conAlert: {
        marginTop: responsiveHeight(8),
        paddingHorizontal: responsiveWidth(10),
        marginBottom: responsiveHeight(8),
        height: responsiveHeight(75),
    },
})
