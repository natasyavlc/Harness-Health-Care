import React from 'react'
import { Image, StyleSheet, View, Text, Pressable } from 'react-native'

// COMPONENT
import CustomText from '../../CostumeText'

// STYLE
import styles from './styles'

// HELPER
import colors from '../../../../Asset/color'

// ICON
import star from '../../../image/Icon/ic_star.png'
import PencilEdit from '../../../image/Icons/PencilEdit.png'
import { responsiveHeight } from '../../Helper/ResponsiveUI'

const CardAppointment = ({
    image = 'https://source.unsplash.com/1024x768/?doctors',
    name = 'Dr. Robert Fox',
    specialist = 'Cardiologist at St. Patrick Hospital',
    rate = '4.7',
    reviewer = '1.276',
    state,
    isProfile,
    email,
    onPress
}) => {
    return (
        <Pressable
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.conImage}>
                <Image
                    source={isProfile ? image : { uri: image }}
                    style={styles.img}
                    resizeMode='cover'
                />
                {isProfile ?
                    <View style={styles.conEdit}>
                        {isProfile ?
                            <>
                                <Image source={PencilEdit} style={styles.pencilsCon} />
                            </>
                            :
                            <>
                            </>
                        }
                    </View>
                    :
                    <>
                    </>
                }
            </View>
            <View>
                <CustomText
                    label={name}
                    fontSizes={responsiveHeight(14)}
                    Font={'Inter-Semi'}
                    colors={colors.Primary_Black}
                />

                <View style={styles.rowContainer}>
                    {isProfile ?
                        <>
                            <Text style={styles.rate}>{email}</Text>
                        </>
                        :
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={star}
                                style={styles.icon}
                            />
                            <Text style={styles.rate}>{rate}</Text>
                            <Text style={styles.rate}> ({reviewer} reviews)</Text>
                        </View>
                    }
                </View>

                <CustomText
                    label={isProfile ? state : specialist}
                    fontSizes={responsiveHeight(10)}
                    Font={'Inters'}
                    colors={colors.Primary_Black}
                />
            </View>
        </Pressable>
    )
}

export default CardAppointment