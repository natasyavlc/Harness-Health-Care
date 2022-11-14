import { StyleSheet } from 'react-native'
import colors from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'
const style = StyleSheet.create({
    container:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    googleCont:{
        backgroundColor:'white',
        borderRadius:60,
        height:responsiveHeight(48),
        width:responsiveHeight(48),
        alignItems:'center',
        justifyContent:'center',
        marginRight:responsiveWidth(10),
        shadowColor:colors.Primary_Black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    FbCont:{
        backgroundColor:'white',
        borderRadius:60,
        height:responsiveHeight(48),
        width:responsiveHeight(48),
        alignItems:'center',
        justifyContent:'center',
        shadowColor:colors.Primary_Black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    imageCon:{
        height:responsiveHeight(20),
        width:responsiveHeight(20) , 
        resizeMode:'contain'
    }
})
export default style
