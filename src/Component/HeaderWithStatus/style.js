import { StyleSheet } from "react-native"
import color from "../../../Asset/color"
import { responsiveHeight } from "../Helper/ResponsiveUI"

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: responsiveHeight(16)
    },
    icon: {
        width: responsiveHeight(24),
        height: responsiveHeight(24),
        marginRight: responsiveHeight(24.5)
    },
    headTitle: {
        fontFamily: 'Inter-Bold',
        fontSize: responsiveHeight(18),
        color: color.Primary_Black,
        marginRight: responsiveHeight(4)
    },
    rowTitle:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom: responsiveHeight(4)
    },
    boxStatus:{
        borderRadius: responsiveHeight(8),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: color.hardGreen
    },
    textTitleStatus: {
        fontFamily: 'Inter-Bold',
        fontSize: responsiveHeight(10),
        marginBottom: 4,
        color: '#F0FFFE',
        lineHeight: responsiveHeight(12.1),
        fontWeight:'600',
        marginHorizontal: responsiveHeight(6),
        marginVertical: responsiveHeight(2)
    },
    subTitle: {
        fontFamily: 'Inter-Regular',
        fontSize: responsiveHeight(10),
        color: color.Primary_Black
    },
})

export default styles