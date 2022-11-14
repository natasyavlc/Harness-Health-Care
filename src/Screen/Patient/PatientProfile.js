import { BackHandler, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Headers from '../../Component/Headers'
import CardPatient from '../../Component/Card/CardPatient/Index'
import { responsiveHeight, responsiveWidth } from '../../Component/Helper/ResponsiveUI'
import CustomeText from '../../Component/CostumeText/index'
import color from '../../../Asset/color'
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary'
const PatientProfile = ({ navigation, route }) => {

    const onBackPress = () => {
        var scBefore = route.params?.prevPage
        if (scBefore == 'RegisterNewPatient') {
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

    const resultPatients = [
        {
            label: 'Phone Number',
            value: '+1 23 456 7890'
        },
        {
            label: 'Date of Birth',
            value: '12 June 1960'
        },
        {
            label: 'Gender',
            value: 'Male'
        },
        {
            label: 'Address',
            value: '4140 Parker Rd. Allentown, New Mexico 31134'
        },
    ]
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <Headers
                Hlabel={'Guy Hawkins'}
                onPress={() => {
                    navigation.goBack()
                }}
                OnBack={true}
            />
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View>
                <CardPatient
                    borderWidth={1}
                    label={'Guy Hawkins'}
                    imageCard={'https://source.unsplash.com/1024x768/?patient'}
                    city={'United States'}
                />
            </View>
            <View style={styles.Container}>
                {resultPatients.map((field, index) => {
                    return (
                        <View style={styles.ConRow} key={index}>
                            <View style={{ flex: 1 }}>
                                <CustomeText
                                    Font={'Inters'}
                                    fontSizes={responsiveHeight(14)}
                                    label={field.label}
                                    lineHeights={responsiveHeight(19.6)}
                                    colors={color.GT_Grey}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <CustomeText
                                    Font={'Inters'}
                                    fontSizes={responsiveHeight(14)}
                                    label={field.value}
                                    lineHeights={responsiveHeight(19.6)}
                                    colors={color.Primary_Black}
                                />
                            </View>
                        </View>
                    )
                })}
            </View>
            <View style={styles.ConButton}>
                <ButtonPrimary
                    label={'Edit Patient Details'}
                    colors={color.Primary}
                    Font={'InterRegular'}
                    fontSizes={responsiveHeight(14)}
                    bgColor={color.bgColors}
                    borderColor={color.Primary}
                    borderWidth={true}
                    margin={true}
                    defaultVertical={responsiveHeight(16)}
                    onPress={() => { }}
                />
            </View>
        </SafeAreaView>
    )
}

export default PatientProfile

const styles = StyleSheet.create({
    Container: {
        marginHorizontal: responsiveWidth(25),
        marginTop: responsiveHeight(32),
        flex: 1
    },
    ConRow: {
        flexDirection: 'row',
        marginBottom: responsiveHeight(16)
    },
    ConButton: {
        bottom: responsiveHeight(24),
        marginHorizontal: responsiveWidth(25),
    }
})