import React, { useEffect } from 'react'
import { BackHandler, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

// COMPONENT
import HeaderWithDownload from '../../../Component/HeaderWithDownload'
import CustomButton from '../../../Component/CostumeButton/Index'
import CustomText from '../../../Component/CostumeText'

// ICON
import ChevronLeft from '../../../image/Icon/ic_chevron_left.png'
import CardAllergiesHistory from '../../../Component/Card/CardAllergiesHistory'

// STYLES
import color from '../../../../Asset/color'
import { responsiveHeight } from '../../../Component/Helper/ResponsiveUI'

// DUMMY DATA
const dataAllergies = [
    {
        allergy: 'Dust Allergy',
        startAge: 2,
        reaction: 'Fever, Sneezing',
        status: 'current',
        doctorNotes: 'Patient had a frequent headache and nauseous, sometimes feeling a sore throat.',
        doctorName: 'Dr. Miles Arthur',
        doctorExpertise: 'Cardiologist at St. Patrick Hospital',
        doctorPhoto: 'https://source.unsplash.com/1024x768/?doctor'
    }
]

const AllergiesHistory = ({ navigation }) => {
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
                Label={'Allergies'}
                withIcon={true}
                onPress={() => { navigation.goBack() }}
                ImageProp={ChevronLeft}
            />

            <ScrollView>
                {
                    dataAllergies.length > 0 ?
                        dataAllergies.map((data, index) => {
                            return (
                                <CardAllergiesHistory
                                    key={index}
                                    allergy={data.allergy}
                                    startAge={data.startAge}
                                    reaction={data.reaction}
                                    status={data.status}
                                    doctorName={data.doctorName}
                                    doctorExpertise={data.doctorExpertise}
                                    doctorPhoto={data.doctorPhoto}
                                />
                            )
                        })
                        :
                        <View style={{ marginTop: '10%' }}>
                            <CustomText
                                label={'No allergies record available'}
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

export default AllergiesHistory