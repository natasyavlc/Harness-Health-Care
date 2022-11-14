import { StyleSheet } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'
const style = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: color.Huest_Grey,
        width: responsiveWidth(396),
        alignSelf: 'center',
        justifyContent: 'center',
        height: responsiveHeight(50),
        backgroundColor: color.Primary_White,

    },
    conIconSearch: {
        height: responsiveHeight(20),
        width: responsiveWidth(20),
        marginRight: responsiveWidth(8)
    },
    flexCon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: responsiveWidth(16),
    },
    textInput: {
        width: responsiveWidth(336),
        color: color.Primary_Black
    }
})

export default style