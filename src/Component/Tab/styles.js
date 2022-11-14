import { StyleSheet, Dimensions } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    tabContainer: {
        width: Dimensions.get('window').width / 2 - responsiveWidth(20),
        paddingVertical: 14,
        borderColor: color.Primary
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