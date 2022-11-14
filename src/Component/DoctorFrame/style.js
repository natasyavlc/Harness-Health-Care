import { StyleSheet } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'


const style = StyleSheet.create({
    container: {
        width: responsiveWidth(396),
        backgroundColor: color.bgColors,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: color.Huest_Grey,
        alignItems: 'center'
    },
    Imagecon: {
        height: responsiveHeight(80),
        width: responsiveWidth(80),
        borderRadius: 80,
    },
    conImage: {
        marginTop: responsiveHeight(16)
    },
    icon: {
        width: responsiveHeight(14),
        height: responsiveWidth(14),
        marginRight: responsiveWidth(4)
    },
    conFrame: {
        marginTop: responsiveHeight(16),
        alignItems: 'center'
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveHeight(4.5)
    },
    specialist: {
        marginTop: responsiveHeight(12)
    },
    conFrameDetail: {
        flexDirection: 'row',
        marginTop: responsiveHeight(21.5),
        marginBottom: responsiveHeight(25)
    },
    conDetails: {
        height: responsiveHeight(86),
        width: responsiveWidth(120),
        alignItems: 'center',
        flexDirection: 'column'
    },
    conPng: {
        height: responsiveHeight(44),
        width: responsiveWidth(44),
    },
    conText: { marginTop: responsiveHeight(8) },
    conSubText: { marginTop: responsiveHeight(8) },
})

export default style