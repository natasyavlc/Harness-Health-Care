import { StyleSheet } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'
const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: responsiveHeight(52),
        padding: responsiveHeight(16)
    }
})

export default style