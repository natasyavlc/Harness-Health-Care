import { StyleSheet } from "react-native";
import color from "../../../../Asset/color";
import { responsiveHeight } from "../../Helper/ResponsiveUI";

export const styles = StyleSheet.create({
    Container:{
        backgroundColor: color.softBlue,
    },
    rowCard:{
        flexDirection:'row',
        marginVertical: responsiveHeight(16),
        justifyContent:'space-between',
        marginHorizontal: responsiveHeight(16)
    },
    textTitle:{
        fontSize: responsiveHeight(14),
        fontFamily:'Inter-Regular',
        fontWeight:'400',
        color: color.Primary,
    },
    underline:{
        borderWidth: responsiveHeight(1),
        borderColor: color.Primary
    },
    img:{
        width: responsiveHeight(13.33),
        height: responsiveHeight(13.33),
        marginLeft: responsiveHeight(9),
        marginRight: responsiveHeight(3.33)
    },
})