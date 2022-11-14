import { StyleSheet, Dimensions, Platform } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        height: responsiveHeight(48),
    },
    tabContainer: {
        paddingHorizontal: responsiveWidth(16),
        justifyContent:'center',
        height:responsiveHeight(44),
        alignSelf: 'center'
    },
    tabBorderLeft: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    tabBorderRight: {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1
    },
    txtTab: {
        fontFamily: 'Inter-Medium',
        color: color.Primary,
        textAlign: 'center',
        fontSize: responsiveHeight(14)
    }
})

export default styles