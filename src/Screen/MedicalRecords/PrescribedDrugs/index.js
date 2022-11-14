import React, { useEffect } from 'react'
import { BackHandler, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

// COMPONENT
import HeaderWithDownload from '../../../Component/HeaderWithDownload'
import CustomButton from '../../../Component/CostumeButton/Index'
import CustomText from '../../../Component/CostumeText'

// ICON
import ChevronLeft from '../../../image/Icon/ic_chevron_left.png'
import CardPrescribedDrugs from '../../../Component/Card/CardPrescribedDrugs'

// STYLES
import color from '../../../../Asset/color'
import { responsiveHeight } from '../../../Component/Helper/ResponsiveUI'

// DUMMY DATA
const dataPrescribedDrugs = [
    {
        name: 'Atorvastatin (Lipitor)',
        onset: 22,
        frequency: '20 mg daily (10 tablets)',
        strength: 'XXX',
        doctorName: 'Dr. Miles Arthur',
        doctorExpertise: 'Cardiologist at St. Patrick Hospital',
        doctorPhoto: 'https://source.unsplash.com/1024x768/?doctor'
    }
]

const PrescribedDrugs = ({ navigation }) => {
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
                Label={'Prescribed Drugs'}
                withIcon={true}
                ImageProp={ChevronLeft}
                onPress={() => { navigation.goBack() }}

            />

            <ScrollView>
                {
                    dataPrescribedDrugs.length > 0 ?
                        dataPrescribedDrugs.map((data, index) => {
                            return (
                                <CardPrescribedDrugs
                                    key={index}
                                    name={data.name}
                                    onset={data.onset}
                                    frequency={data.frequency}
                                    strength={data.strength}
                                    doctorName={data.doctorName}
                                    doctorExpertise={data.doctorExpertise}
                                    doctorPhoto={data.doctorPhoto}
                                />
                            )
                        })
                        :
                        <View style={{ marginTop: '10%' }}>
                            <CustomText
                                label={'No prescribed drugs record available'}
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

export default PrescribedDrugs