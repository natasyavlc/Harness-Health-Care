import { Platform, StyleSheet } from "react-native";
import color from "../../../Asset/color";
import { responsiveHeight } from "../Helper/ResponsiveUI";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16
    },
    icon: {
        width: responsiveHeight(24),
        height: responsiveHeight(24),
    },
    containerTitle: {
        left: Platform.OS === 'ios'? responsiveHeight(-36) : responsiveHeight(-48)
    },
    headTitle: {
        fontFamily: 'Inter-Bold',
        fontSize: responsiveHeight(18),
        marginBottom: 4,
        color: color.Primary_Black
    },
    subTitle: {
        fontFamily: 'Inter-Regular',
        fontSize: responsiveHeight(10),
        color: color.Primary_Black
    }
})

export default styles