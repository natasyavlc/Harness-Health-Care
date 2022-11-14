import { Image, Text, View, Pressable } from 'react-native'
import React from 'react'
import { responsiveHeight } from '../../Helper/ResponsiveUI'
import CustomeText from '../../CostumeText/index'
import IcCentang from '../../../image/Icons/ic_centang.png'
import IcAdd from '../../../image/Icons/ic_plus.png'
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import color from '../../../../Asset/color'

const Index = ({
    navigation,
    label,
    isAge,
    isParent,
    age,
    gender,
    city,
    parent,
    isButton,
    onChacked,
    imagePatient,
}) => {
    return (
        <View style={styles.Container}>
            <View style={styles.ConImg}>
                <Image source={{ uri: imagePatient }} style={styles.img} />
            </View>
            <View style={styles.ConRow}>
                <View style={styles.ConText}>
                    <CustomeText
                        label={label}
                        Font={'Inter-Semi'}
                        fontSizes={responsiveHeight(14)}
                        lineHeights={responsiveHeight(19.6)}
                        colors={color.Primary_Black}
                    />
                    {isAge ?
                        <View style={styles.rowContainer}>
                            <Text style={styles.textAge}>{age}</Text>
                            <Text style={styles.textAge}> y.o. {gender}</Text>
                        </View>
                        :
                        <View style={styles.rowContainer}>
                            <Text style={styles.textAge}>{city}</Text>
                        </View>
                    }
                    {isParent ?
                        <View style={styles.box}>
                            <Text style={styles.textBox}>{parent}</Text>
                        </View>
                        :
                        <></>
                    }
                </View>
                {isButton ?
                    <View style={styles.ConButton}>
                        {onChacked ?
                            <Pressable >
                                <View style={styles.CircleOne}>
                                    <Image source={IcCentang} style={styles.button} />
                                </View>
                            </Pressable>
                            :
                            <Pressable onPress={() => navigation.navigate('BookStep1', { prevPage: 'HomePage' })}>
                                <LinearGradient
                                    start={{ x: 1.0, y: 0.1 }}
                                    end={{ x: 0.2, y: 1.0 }}
                                    colors={['#004CE8', '#5B91FF']}
                                    style={styles.CircleTwo}
                                >
                                    <Image source={IcAdd} style={styles.button2} />
                                </LinearGradient>
                            </Pressable>
                        }
                    </View>
                    :
                    <></>
                }
            </View>
        </View>
    )
}

export default Index

