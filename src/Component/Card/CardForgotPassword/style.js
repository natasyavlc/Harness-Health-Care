import { StyleSheet } from "react-native"
import { responsiveHeight, responsiveWidth } from "../../Helper/ResponsiveUI"
import colors from "../../../../Asset/color"

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFFFFF',
        borderRadius: responsiveHeight(24),
        width: responsiveHeight(348),
        height: responsiveHeight(126),
        marginVertical: 10,
        alignSelf:'center',
        shadowOffset: { width: 2, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        borderColor: colors.Primary,
        shadowRadius:responsiveHeight(20),
        // alignItems:'center',
        justifyContent:'center'
    },
    rowContainer: {
        borderRadius: responsiveHeight(8),
        width: responsiveHeight(56),
        height: responsiveHeight(56),
        backgroundColor: colors.Primary_White,
        marginRight: responsiveWidth(12),
        alignItems: 'center',
        justifyContent:'center'
    },
    img:{
        width: responsiveHeight(22), 
        height: responsiveHeight(22), 
        resizeMode:'contain',
    }
})

export default styles