import { StyleSheet } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'
const style = StyleSheet.create({
    container: {
        padding: responsiveHeight(16)
    },
    conTittle: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: responsiveHeight(4)
    },
    conMulti: {
        backgroundColor: color.RGB_Grey,
        borderWidth: 1,
        borderColor: color.Rgb_HuesGrey,
        borderRadius: 8,
        paddingTop: responsiveHeight(12),
        paddingHorizontal: responsiveWidth(12),
        height: responsiveHeight(159),
        overflow: 'scroll'
    },
    input: {
        zIndex: 0,
        margin: 0,
        padding: 0,
        marginBottom: responsiveHeight(12),
        color: color.Primary_Black,
        fontSize:responsiveHeight(14),
        fontFamily: 'Inter-Regular',
        
    }
})

export default style