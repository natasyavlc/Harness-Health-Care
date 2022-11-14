import { StyleSheet } from "react-native";
import color from "../../../../Asset/color";
import { responsiveHeight, responsiveWidth } from "../../Helper/ResponsiveUI";

export const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(386),
        height: responsiveHeight(120),
        borderRadius: responsiveHeight(8),
        borderColor: color.borderGray,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    body: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    conImg: {
        marginRight: responsiveHeight(16),
        justifyContent: 'center',
        marginLeft: responsiveHeight(16),
    },
    conText: {
        flexDirection: 'column',
        alignSelf: 'center',
        flex: 1
    },
    conButton: {
        marginRight: responsiveHeight(16)
    },
    img: {
        borderRadius: responsiveHeight(50),
        resizeMode: 'contain'
    },
    rowContainer: {
        flexDirection: 'row',
        marginTop: responsiveHeight(4),
    },
    textAge: {
        fontSize: responsiveHeight(10),
        fontFamily: 'Inter-Regular',
        lineHeight: responsiveHeight(12.1),
        fontWeight: '400',
        color: color.Primary_Black
    },
    box: {
        borderRadius: responsiveHeight(4),
        borderWidth: responsiveHeight(1),
        width: responsiveHeight(45),
        height: responsiveHeight(16),
        marginLeft: responsiveHeight(5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBox: {
        fontSize: responsiveHeight(10),
        fontFamily: 'Inter-Bold',
        lineHeight: responsiveHeight(12.1),
        fontWeight: '400',
        color: color.Primary_Black
    },
    conRow: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    textRow:{
        flexDirection:'row',
        alignItems:'center'
    },
    ConLink:{
        flexDirection:'row',
        marginTop: responsiveHeight(16),
        alignItems:'center'
    },
    imgLink:{
        width:responsiveHeight(9.6),
        height: responsiveHeight(12.8),
        marginRight: responsiveHeight(7.2)
    },
    textLink:{
        fontSize: responsiveHeight(12),
        fontFamily:'Inter-SemiBold',
        fontWeight:'600',
        lineHeight:responsiveHeight(16.8),
        color: color.Primary,
    },
    line:{
        borderWidth: responsiveHeight(0.8),
        borderColor: color.Primary
    }
})