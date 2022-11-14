import { View, Text, Modal } from 'react-native'
import React from 'react'
import style from './style'
import CText from '../CostumeText/index'
import color from '../../../Asset/color'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import { responsiveHeight } from '../Helper/ResponsiveUI'
const ModalExit = ({ visible, onPress, setLogout }) => {
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
                                label={'Logout'}
                                fontSizes={responsiveHeight(18)}
                                colors={color.Primary_Black}
                            />
                        </View>
                        <View style={style.textTittle2}>
                            <CText
                                label={'Are you sure you want to logout?'}
                                fontSizes={responsiveHeight(16)}
                                colors={color.Primary_Black}
                                Font={'Inters'}
                            />
                        </View>
                        <ButtonPrimary
                            label={'Yes, Logout'}
                            colors={color.Primary_White}
                            Font={'Inter-400'}
                            fontSizes={responsiveHeight(14)}
                            bgColor={color.Primary_Red}
                            borderColor={color.bgColors}
                            borderWidth={true}
                            onPress={setLogout}
                        />
                        <ButtonPrimary
                            label={'Cancel'}
                            colors={color.Primary_Black}
                            Font={'Inter-400'}
                            fontSizes={responsiveHeight(14)}
                            bgColor={color.bgColors}
                            borderColor={color.bgColors}
                            borderWidth={true}
                            onPress={onPress}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ModalExit