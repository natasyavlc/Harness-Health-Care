import { View, Modal, Platform } from 'react-native'
import React from 'react'
import style from './style'
import CText from '../CostumeText/index'
import color from '../../../Asset/color'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import { responsiveHeight } from '../Helper/ResponsiveUI'
const Index = ({ visible, days, month, dates, desc, times, Cancel, dataUser, Confirm }) => {
    const combine = Platform.OS == 'ios' ? `${days}, ${month} ${dates.replace('/', ' ')}` : days
    return (
        <View>
            <Modal
                visible={visible}
                transparent
            >
                <View style={style.container}>
                    <View style={style.conWhite}>
                        <View style={style.textTittle}>
                            <CText
                                label={'Book an Appoinment?'}
                                fontSizes={responsiveHeight(18)}
                                colors={color.Primary_Black}
                            />
                        </View>
                        <View style={style.textTittle2}>
                            <CText
                                label={'Are you sure you want to book a doctor appoinment for:'}
                                fontSizes={responsiveHeight(16)}
                                colors={color.Primary_Black}
                                Font={'Inters'}
                            />
                        </View>
                        <View style={style.bigConText} >
                            <View style={style.conText}>
                                <View style={style.confleText2}>
                                    <CText
                                        label={'Appointment Date'}
                                        fontSizes={responsiveHeight(14)}
                                        Font={'Inters'}
                                        colors={color.Text_Grey}
                                    />
                                </View>
                                <View style={style.confleText}>
                                    <CText
                                        label={combine}
                                        fontSizes={responsiveHeight(14)}
                                        Font={'Inters'}
                                        colors={color.Primary_Black}
                                    />
                                </View>
                            </View>
                            <View style={[style.conText]}>
                                <View style={style.confleText2}>
                                    <CText
                                        label={'Appointment Time'}
                                        fontSizes={responsiveHeight(14)}
                                        Font={'Inters'}
                                        colors={color.Text_Grey}
                                    />
                                </View>
                                <View style={style.confleText}>
                                    <CText
                                        label={times}
                                        fontSizes={responsiveHeight(14)}
                                        Font={'Inters'}
                                        colors={color.Primary_Black}
                                    />
                                </View>
                            </View>
                            <View style={[style.conText, { marginTop: Platform.OS == 'ios' ? responsiveHeight(12) : 0 }]}>
                                <View style={style.confleText2}>
                                    <CText
                                        label={'Phone Number'}
                                        fontSizes={responsiveHeight(14)}
                                        Font={'Inters'}
                                        colors={color.Text_Grey}
                                    />
                                </View>
                                <View style={style.confleText}>
                                    <CText
                                        label={dataUser[1].phoneNumber}
                                        fontSizes={responsiveHeight(14)}
                                        Font={'Inters'}
                                        colors={color.Primary_Black}
                                    />
                                </View>
                            </View>
                            <View style={style.conTextAdd}>
                                <View style={style.confleText2}>
                                    <CText
                                        label={'Address'}
                                        fontSizes={responsiveHeight(14)}
                                        Font={'Inters'}
                                        colors={color.Text_Grey}
                                    />
                                </View>
                                <View style={style.confleText}>
                                    <CText
                                        label={dataUser[1].addres}
                                        fontSizes={responsiveHeight(14)}
                                        Font={'Inters'}
                                        colors={color.Primary_Black}
                                        lineHeights={responsiveHeight(20)}
                                    />
                                </View>
                            </View>
                            <View style={style.conTextComp}>
                                <View style={style.confleText2}>
                                    <CText
                                        label={'Complaint'}
                                        fontSizes={responsiveHeight(14)}
                                        Font={'Inters'}
                                        colors={color.Text_Grey}
                                    />
                                </View>
                                <View style={style.confleText}>
                                    <CText
                                        label={desc}
                                        fontSizes={responsiveHeight(14)}
                                        Font={'Inters'}
                                        colors={color.Primary_Black}
                                        lineHeights={responsiveHeight(20)}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={style.conButton}>
                            <ButtonPrimary
                                label={'Book Now'}
                                colors={color.Primary_White}
                                Font={'Inter-400'}
                                fontSizes={responsiveHeight(14)}
                                bgColor={color.Primary}
                                borderColor={color.bgColors}
                                borderWidth={true}
                                onPress={Confirm}
                            />
                            <ButtonPrimary
                                label={'Cancel'}
                                colors={color.Primary}
                                Font={'Inter-400'}
                                fontSizes={responsiveHeight(14)}
                                bgColor={color.bgColors}
                                borderColor={color.bgColors}
                                borderWidth={true}
                                onPress={Cancel}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Index