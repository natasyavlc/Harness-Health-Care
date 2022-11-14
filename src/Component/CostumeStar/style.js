import { StyleSheet } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'


const style = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    containerPadding: (x) => ({
        paddingRight: x !== 24 ? responsiveWidth(2) : responsiveWidth(16)
    }),
    imageCon: (x) => ({
        height: x ? responsiveHeight(x) : responsiveHeight(25.63),
        width: x ? responsiveWidth(x) : responsiveWidth(26.77),
        marginRight: responsiveHeight(12)
    })
})

export default style