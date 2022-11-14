import React from 'react'
import { View, Image, Text, Pressable } from 'react-native'

// STYLE
import styles from './styles'
import colors from '../../../../Asset/color'

// COMPONENT
import CustomText from '../../CostumeText'

// ICON
import Phone from '../../../image/Icon/ic_phone.png'
import Marker from '../../../image/Icon/ic_location_marker.png'
import { responsiveHeight } from '../../Helper/ResponsiveUI'

const CardAppointmentPatient = ({
    uriImage = 'https://source.unsplash.com/1024x768/?patient',
    name = "Guy Hawkins",
    age = "57",
    gender = "Male",
    phoneNum = '+1 23 897 8400',
    address = '4140 Parker Rd. Allentown, New Mexico 31134',
    onPress = () => { }
}) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.img} source={{ uri: uriImage }} />
                <View>
                    <View style={styles.rowContainer}>
                        <CustomText
                            label={name}
                            fontSizes={14}
                            Font={'Inter-Semi'}
                            colors={colors.Primary_Black}
                        />
                        <View style={styles.label}>
                            <Text style={styles.txtLabel}> Patient</Text>
                        </View>
                    </View>
                    <CustomText
                        label={`${age} y.o. ${gender}`}
                        fontSizes={responsiveHeight(10)}
                        Font={'Inters'}
                        colors={colors.Primary_Black}
                    />
                    <View style={{ marginTop: responsiveHeight(8) }} />
                    <View style={styles.rowContainer}>
                        <Image
                            source={Phone}
                            style={styles.icon}
                        />
                        <CustomText
                            label={phoneNum}
                            fontSizes={responsiveHeight(10)}
                            Font={'Inters'}
                            colors={colors.Primary_Black}
                        />
                    </View>
                    <View style={styles.rowContainer}>
                        <Image
                            source={Marker}
                            style={styles.icon}
                        />
                        <View style={styles.textAddress}>
                            <CustomText
                                label={address}
                                fontSizes={responsiveHeight(10)}
                                Font={'Inters'}
                                colors={colors.Primary_Black}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default CardAppointmentPatient