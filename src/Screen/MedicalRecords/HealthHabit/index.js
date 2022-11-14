import React, { useEffect, useState } from 'react'
import { BackHandler, Dimensions, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import HeaderWithDownload from '../../../Component/HeaderWithDownload'

// COMPONENT
import TabNoBorder from '../../../Component/TabNoBorder'
import CustomButton from '../../../Component/CostumeButton/Index'
import CustomText from '../../../Component/CostumeText'
import CardExercise from '../../../Component/Card/CardExercise'
import CardDiet from '../../../Component/Card/CardDiet'
import CardAlcoholHabit from '../../../Component/Card/CardAlcoholHabit'
import CardTobacco from '../../../Component/Card/CardTobacco'

// ICON
import ChevronLeft from '../../../image/Icon/ic_chevron_left.png'

// STYLES
import { responsiveHeight } from '../../../Component/Helper/ResponsiveUI'
import CardPersonalSafety from '../../../Component/Card/CardPersonalSafety'
import color from '../../../../Asset/color'
import CardDrugs from '../../../Component/Card/CardDrugs'
import CardSexual from '../../../Component/Card/CardSexual'
import CardSleep from '../../../Component/Card/CardSleep'

// DUMMY DATA
const dataDummy = {
    // type : 'Beer',
    // usage : 'Moderate',
    // period : '2 years ago until 2 months ago',
    // disorder : false,
    // doctorNotes : 'Patient had a frequent headache and nauseous, sometimes feeling a sore throat.',
    // doctorName : 'Dr. Miles Arthur',
    // doctorExpertise : 'Cardiologist at St. Patrick Hospital',
    // doctorPhoto : 'https://source.unsplash.com/1024x768/?doctor'
}

const HealthHabit = ({ navigation }) => {
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
    const [tabValue, setTabValue] = useState(0)
    return (
        <SafeAreaView style={styles.container}>
            <HeaderWithDownload
                btnDownload={false}
                onBack={() => navigation.goBack()}
            />
            <CustomButton
                Label={'Health Habits & Personal Safety'}
                withIcon={true}
                ImageProp={ChevronLeft}
                onPress={() => { navigation.goBack() }}

            />
            <View style={styles.flexCon}>
                <View>
                    <TabNoBorder
                        tabTitle={['Health Habit', 'Personal Safety', 'Exercise', 'Diet']}
                        valueTab={tabValue}
                        onPressTab={(val) => setTabValue(val)}
                    />
                </View>
                <ScrollView style={styles.margin}>
                    {
                        tabValue == 0 ?
                            <View>
                                <CardAlcoholHabit />
                                <CardTobacco
                                    data={dataDummy}
                                />
                                <CardDrugs
                                    data={dataDummy}
                                />
                                <CardSexual />
                                <CardSleep />
                            </View>
                            :
                            tabValue == 1 ?
                                <CardPersonalSafety />
                                :
                                tabValue == 2 ?
                                    <CardExercise />
                                    :
                                    tabValue == 3 ?
                                        <CardDiet />
                                        :
                                        <View style={{ marginTop: '10%' }}>
                                            <CustomText
                                                label={'No Health Habits & Personal Safety available'}
                                                fontSizes={16}
                                                Font={'Inters'}
                                                colors={color.Text_Grey}
                                                align={'center'}
                                            />
                                        </View>
                    }
                    <View style={{ height: responsiveHeight(170) }} />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    flexCon: {
        height: '100%'
    },
    margin: {
        backgroundColor: 'white',
    }
})

export default HealthHabit