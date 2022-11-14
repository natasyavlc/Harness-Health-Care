import { StyleSheet } from "react-native";
import color from "../../../../Asset/color";
import { responsiveHeight } from "../../Helper/ResponsiveUI";

export const styles = StyleSheet.create({
    container:{
        borderWidth: responsiveHeight(1),
        borderRadius: responsiveHeight(8),
        borderColor:color.TextInputBG
    },
    body:{
      alignItems:'center',
      alignSelf:'center',
      justifyContent:'center',
      marginHorizontal: responsiveHeight(16),
      marginVertical: responsiveHeight(16)
    },
    img:{
      width: responsiveHeight(40),
      height:responsiveHeight(40),
      marginBottom: responsiveHeight(5)
    },
    conTextDesc:{
      marginTop: responsiveHeight(8)
    }
})