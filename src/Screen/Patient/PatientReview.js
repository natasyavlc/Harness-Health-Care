import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView, Image, BackHandler } from 'react-native'
import Headers from '../../Component/Headers'
import React, { useEffect } from 'react'
import CardComment from '../../Component/Card/CardComment/Index'
import { dataReviews } from '../../DummyData/dataReviews'
import color from '../../../Asset/color'
import ButtonPrimary from '../../Component/Buttons/ButtonPrimary'
import { responsiveHeight } from '../../Component/Helper/ResponsiveUI'
const PatientReview = ({ navigation }) => {
    const onBackPress = () => {
        navigation.goBack();
        return true
    };
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        };
    }, [])
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <Headers
                Hlabel={'Patient’s Reviews'}
                OnBack={true}
                Star={true}
                StarRating={4.7}
                StarReviews={1.276}
                onPress={() => { navigation.goBack() }}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: responsiveHeight(16) }} >
                {dataReviews.map((data, I) => {
                    return (
                        <View key={I}>
                            <CardComment
                                data={data}
                            />
                        </View>
                    )
                })}
            </ScrollView>
            <View style={style.conButton}>
                <ButtonPrimary
                    label={'Write a Review'}
                    colors={color.Primary_White}
                    Font={'Inter-Semi'}
                    fontSizes={responsiveHeight(14)}
                    // disable={warns ? true : false}
                    bgColor={color.Primary}
                    borderColor={color.bgColors}
                    borderWidth={false}
                    onPress={() => {
                        navigation.navigate('WriteReviews')
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default PatientReview

const style = StyleSheet.create({
    container: { backgroundColor: color.bgColors, flex: 1 },
    conButton: {
        backgroundColor: 'transparent',
        width: '100%',
        marginTop: responsiveHeight(792),
        position: 'absolute'
    },

})