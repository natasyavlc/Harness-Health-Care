import React, { useEffect } from 'react'
import { BackHandler, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

// COMPONENT
import HeaderWithDownload from '../../../Component/HeaderWithDownload'
import CustomButton from '../../../Component/CostumeButton/Index'
import CustomText from '../../../Component/CostumeText'

// ICON
import ChevronLeft from '../../../image/Icon/ic_chevron_left.png'
import CardGenderRelatedMan from '../../../Component/Card/CardGenderRelatedMan'

// STYLES
import color from '../../../../Asset/color'
import { responsiveHeight } from '../../../Component/Helper/ResponsiveUI'
import CardGenderRelatedWoman from '../../../Component/Card/CardGenderRelatedWoman'

// DUMMY DATA
const dataGender =
{
    gender: 'men',
    urinate: true,
    urinateTimes: 2,
    urinatePain: false,
    doctorName: 'Dr. Miles Arthur',
    doctorExpertise: 'Cardiologist at St. Patrick Hospital',
    doctorPhoto: 'https://source.unsplash.com/1024x768/?doctor'
}
// {
//     gender: 'woman',
//     menstrualAge: 13,
//     lastDateMens: '',
//     doctorName: 'Dr. Miles Arthur',
//     doctorExpertise: 'Cardiologist at St. Patrick Hospital',
//     doctorPhoto: 'https://source.unsplash.com/1024x768/?doctor'
// }

const GenderRelated = ({ navigation }) => {
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
                Label={'Medication'}
                withIcon={true}
                ImageProp={ChevronLeft}
                onPress={() => { navigation.goBack() }}
            />

            <ScrollView>
                {
                    dataGender.gender.toLocaleLowerCase() === 'woman' ?
                        <CardGenderRelatedWoman
                            menstrualAge={dataGender.menstrualAge}
                            lastDateMens={dataGender.lastDateMens}
                            doctorName={dataGender.doctorName}
                            doctorExpertise={dataGender.doctorExpertise}
                            doctorPhoto={dataGender.doctorPhoto}
                        />
                        :
                        <CardGenderRelatedMan
                            urinate={dataGender.urinate}
                            urinateTimes={dataGender.urinateTimes}
                            urinatePain={dataGender.urinatePain}
                            doctorName={dataGender.doctorName}
                            doctorExpertise={dataGender.doctorExpertise}
                            doctorPhoto={dataGender.doctorPhoto}
                        />
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

export default GenderRelated