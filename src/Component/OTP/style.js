import { StyleSheet } from "react-native";
import { responsiveHeight } from "../Helper/ResponsiveUI";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        justifyContent:'space-between',
    },
    textInputView:{
        borderWidth:1,
        borderRadius:10,
        width: responsiveHeight(56),
        height:responsiveHeight(56),
        justifyContent:'center',
        alignItems:'center',
    },
    textInputText:{
        fontSize:responsiveHeight(18),
        width: '100%',
        height:'100%',
        textAlign:'center',
        fontFamily:'Inter-Bold'
    }
})