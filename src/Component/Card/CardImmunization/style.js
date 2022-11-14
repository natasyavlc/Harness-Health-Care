import { StyleSheet } from "react-native";
import color from "../../../../Asset/color";
import { responsiveHeight, responsiveWidth } from "../../Helper/ResponsiveUI";

export const styles = StyleSheet.create({
    Container:{
        alignSelf:'center',
        backgroundColor: color.softGray,
        borderRadius: responsiveHeight(8),
        borderWidth:responsiveHeight(1),
        borderColor:color.borderGray,
        // width: responsiveHeight(396),
    },
    inline:{
        borderWidth:responsiveHeight(1),
        borderColor:color.borderGray
    },
    ConRow:{
        marginHorizontal: responsiveWidth(12),
        marginTop: responsiveHeight(12),
    },
    TextImmun1:{
        marginBottom: responsiveHeight(26)
    },
    TextImmun2:{
        marginBottom: responsiveHeight(16)
    },
    ConNote:{
        marginTop: responsiveHeight(10),
        marginBottom: responsiveHeight(16)
    },
    ConRowImg:{
        marginHorizontal: responsiveHeight(12),
        marginVertical: responsiveHeight(12)
    },
    TextLabel:{
        marginBottom: responsiveHeight(10)
    },
    textDoctor:{
        width: responsiveHeight(146)
    },
    ConProfileDoctor:{
        flexDirection:'row',
        alignItems:'center'
    },
    img:{
        width: responsiveHeight(39),
        height: responsiveHeight(39),
        borderRadius: responsiveHeight(50),
        marginRight: responsiveHeight(8)
    },
})