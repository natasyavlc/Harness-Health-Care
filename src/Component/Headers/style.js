import { Platform, StyleSheet } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'
const style = StyleSheet.create({
    container: {
        backgroundColor: color.bgColors,
        height: responsiveHeight(69),
        width: responsiveWidth(428),
        justifyContent: 'flex-end',
        padding: responsiveWidth(16),
    },
    conFlex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    conImage: {
        height: responsiveHeight(20),
        width: responsiveWidth(20),
        resizeMode: 'contain'
    },
    conTittle: {
        marginLeft: responsiveWidth(16)
    },
    conCevron: {
        height: responsiveHeight(30),
        width: responsiveWidth(30),
        alignItems: 'center',
        justifyContent: 'center',
    },
    conFlexSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: responsiveHeight(46),
        width: responsiveWidth(344),
        paddingHorizontal: responsiveWidth(16),
    },
    conSearch: {
        backgroundColor: color.Primary_White,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: color.Huest_Grey,
        marginLeft: responsiveWidth(12)
    },
    conIconSearch: {
        height: responsiveHeight(20),
        width: responsiveWidth(20),
        resizeMode: 'contain'
    },
    txtInputStyle: {
        fontFamily: 'Inter-Regular',
        fontSize: responsiveHeight(14),
        width: responsiveWidth(284),
        color: color.Primary_Black

    },
    icon: {
        width: responsiveHeight(14),
        height: responsiveWidth(14),
        marginRight: responsiveWidth(4)
    }, stars: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default style