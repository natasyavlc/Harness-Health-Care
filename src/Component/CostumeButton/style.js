import { StyleSheet } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'


const style = StyleSheet.create({
    container:{
        height:responsiveHeight(62),
        marginHorizontal:responsiveWidth(8),
        justifyContent:'center',
        borderBottomWidth:0.4,
        borderBottomColor:color.Huest_Grey
    },
    conButton:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    conFlex:{
        marginHorizontal:responsiveWidth(8),
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    conImage:{
        height:responsiveHeight(20),
        width:responsiveWidth(20),
        resizeMode:'contain',
        marginRight:responsiveWidth(10)
    },
    conChev:{
        height:responsiveHeight(12),
        width:responsiveHeight(12),
        resizeMode:'contain',
        marginRight:responsiveWidth(8)
    },
})

export default style