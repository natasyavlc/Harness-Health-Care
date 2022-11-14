import React, { useEffect } from 'react'
import { BackHandler, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

// COMPONENT
import HeaderWithDownload from '../../../Component/HeaderWithDownload'
import CustomButton from '../../../Component/CostumeButton/Index'
import CustomText from '../../../Component/CostumeText'

// ICON
import ChevronLeft from '../../../image/Icon/ic_chevron_left.png'
import CardMedicalProblem from '../../../Component/Card/CardMedicalProblem'

// STYLES
import color from '../../../../Asset/color'
import { responsiveHeight } from '../../../Component/Helper/ResponsiveUI'

// DUMMY DATA
const dataMedicalProblem = [
    {
        signSymtomps: 'Anemia',
        ageDiagnose: 28,
        doctorName: 'Dr. Miles Arthur',
        doctorExpertise: 'Cardiologist at St. Patrick Hospital',
        doctorPhoto: 'https://source.unsplash.com/1024x768/?doctor'
    }
]

const MedicalProblem = ({ navigation }) => {

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
                Label={'Medical Problems'}
                withIcon={true}
                ImageProp={ChevronLeft}
                onPress={() => { navigation.goBack() }}
            />


            <ScrollView>
                {
                    dataMedicalProblem.length > 0 ?
                        dataMedicalProblem.map((data, index) => {
                            return (
                                <CardMedicalProblem
                                    key={index}
                                    signSymtomps={data.signSymtomps}
                                    ageDiagnose={data.ageDiagnose}
                                    doctorName={data.doctorName}
                                    doctorExpertise={data.doctorExpertise}
                                    doctorPhoto={data.doctorPhoto}
                                />
                            )
                        })
                        :
                        <View style={{ marginTop: '10%' }}>
                            <CustomText
                                label={'No medical problems record available'}
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

export default MedicalProblem