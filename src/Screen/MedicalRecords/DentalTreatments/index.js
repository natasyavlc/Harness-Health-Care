import React, { useEffect } from 'react'
import { BackHandler, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

// COMPONENT
import HeaderWithDownload from '../../../Component/HeaderWithDownload'
import CustomButton from '../../../Component/CostumeButton/Index'
import CustomText from '../../../Component/CostumeText'

// ICON
import ChevronLeft from '../../../image/Icon/ic_chevron_left.png'
import CardDentalTreatments from '../../../Component/Card/CardDentalTreatments'

// STYLES
import color from '../../../../Asset/color'
import { responsiveHeight } from '../../../Component/Helper/ResponsiveUI'

// DUMMY DATA
const dataDental = [
    {
        dentalTreat: 'Root Canal Treatment',
        treatmentDate: '23/07/2021',
        treatmentPlace: 'St. Patrick Hospital',
        doctorName: 'Dr. Miles Arthur',
        doctorExpertise: 'Cardiologist at St. Patrick Hospital',
        doctorPhoto: 'https://source.unsplash.com/1024x768/?doctor'
    }
]

const DentalTreatments = ({ navigation }) => {
    const onBackPress = () => {
        navigation.goBack()
        return true
    };
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        };
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <HeaderWithDownload
                btnDownload={false}
                onBack={() => navigation.goBack()}
            />
            <CustomButton
                Label={'Dental Treatments'}
                withIcon={true}
                ImageProp={ChevronLeft}
                onPress={() => { navigation.goBack() }}

            />

            <ScrollView>
                {
                    dataDental.length > 0 ?
                        dataDental.map((data, index) => {
                            return (
                                <CardDentalTreatments
                                    key={index}
                                    dentalTreat={data.dentalTreat}
                                    treatmentDate={data.treatmentDate}
                                    treatmentPlace={data.treatmentPlace}
                                    doctorName={data.doctorName}
                                    doctorExpertise={data.doctorExpertise}
                                    doctorPhoto={data.doctorPhoto}
                                />
                            )
                        })
                        :
                        <View style={{ marginTop: '10%' }}>
                            <CustomText
                                label={'No dental treatments record available'}
                                fontSizes={16}
                                Font={'Inters'}
                                colors={color.Text_Grey}
                                align={'center'}
                            />
                        </View>
                }
                <View style={{ height: responsiveHeight(24) }} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default DentalTreatments