import { StyleSheet } from "react-native";
import color from "../../../../Asset/color";
import { responsiveHeight, responsiveWidth } from "../../Helper/ResponsiveUI";

export const styles = StyleSheet.create({
    container:{
      borderWidth: responsiveHeight(1),
      borderColor:color.borderGray,
      backgroundColor: color.softGray,
      // width: responsiveHeight(396),
      height: responsiveHeight(366),
      alignSelf:'center'
    },
    body:{
      marginHorizontal: responsiveWidth(12),
      marginVertical: responsiveHeight(12)
    },
    textTitle:{
      fontSize: responsiveHeight(12),
      color: color.Text_Grey,
      fontFamily: 'Inter-Regular',
      lineHeight: responsiveHeight(14.52),
      fontWeight: '400',
    },
    textNotes:{
      fontSize: responsiveHeight(14),
      color: color.GT_Grey,
      fontFamily: 'Inter-Regular',
      lineHeight: responsiveHeight(22.4),
      fontWeight: '400',
    }
  })