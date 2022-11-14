import { StyleSheet } from 'react-native'
import colors from '../../../Asset/color'
import { responsiveWidth ,responsiveHeight} from '../../Component/Helper/ResponsiveUI'
const style = StyleSheet.create({
    container:{
        backgroundColor:colors.bgColors,
        flex:1,
    },
    conRender:{
        alignItems:'center'
    },
    conLogo:{
        flex:0.25
    },
    conImage:{
        height:responsiveHeight(265),
        width:responsiveWidth(340),
        resizeMode:'contain'
    },
    conButton:{
        backgroundColor:colors.Primary,
        marginTop:responsiveHeight(130),
        width:responsiveWidth(190),
        height:responsiveHeight(52),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:24,
        shadowColor:colors.Primary_Black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    conButton2:{
        backgroundColor:colors.bgColors,
        marginTop:responsiveHeight(130),
        width:responsiveWidth(190),
        height:responsiveHeight(52),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:24,
        shadowColor:colors.Primary_Black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    conTitle:{
        marginTop:responsiveHeight(48),
        textAlign:'center',
        lineHeight:responsiveHeight(22),
        fontSize:responsiveHeight(16),
        fontFamily:'Inter-Medium',
        color:colors.Primary_Black
    },
    conText:{
        marginTop:responsiveHeight(16),
        textAlign:'center',
        lineHeight:responsiveHeight(22),
        fontSize:responsiveHeight(16),
        fontFamily:'Inter-Light',
        color:colors.GT_Grey
    }
})

export default style