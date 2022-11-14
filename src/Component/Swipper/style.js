import { StyleSheet } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'
const style = StyleSheet.create({
    container: {
    },
    content: {
        overflow: 'visible'
    },
    conData: (click, data) => ({
        backgroundColor: click !== data ? color.bgColors : color.Primary,
        borderRadius: 24,
        height: responsiveHeight(34),
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: responsiveHeight(16),
        paddingVertical: responsiveHeight(6),
        marginRight: responsiveWidth(8),
        borderWidth: 1,
        borderColor: color.Primary
    }),
})

export default style