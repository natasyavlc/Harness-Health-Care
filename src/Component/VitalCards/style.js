import { Dimensions, Platform, StyleSheet } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'
const style = StyleSheet.create({
    container: {
        shadowColor: color.Primary_Black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        width: Dimensions.get('window').width - 32,
        borderRadius: 8,
        elevation: 2,
        alignItems: 'center',
        backgroundColor: color.bgColors,
    },
    initCon: {
        flexDirection: 'row',
        marginTop: responsiveHeight(16),
    },
    vitalContainer: (x) => ({
        height: responsiveHeight(152),
        width: Dimensions.get('window').width - 62,
        marginVertical: responsiveHeight(8),
        marginHorizontal: x % 2 == 0 ? responsiveWidth(16) : Platform.OS == 'ios' ? Dimensions.get('window').width > 350 ? null : responsiveWidth(18) : responsiveWidth(18),
        marginLeft: x % 2 == 0 ? responsiveWidth(16) : Platform.OS == 'ios' ? responsiveWidth(22) : responsiveWidth(16),
    }),
    imageCon: {
        height: responsiveHeight(24),
        width: responsiveHeight(24),
        borderRadius: 40,
    },
    initFlex: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    RenderFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: responsiveHeight(8),
    },
    conProfile: { flexDirection: 'row', alignItems: 'center', },
    conImage: {
        height: responsiveHeight(30),
        width: responsiveHeight(30),
        borderRadius: 40,
        marginRight: responsiveWidth(5)
    },
    iconSetting: { height: responsiveHeight(20), width: responsiveWidth(20) },


})

export default style