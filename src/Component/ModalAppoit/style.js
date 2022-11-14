import { StyleSheet } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'
const style = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(33, 33, 33, 0.75)',
        flexGrow: 1,
        justifyContent: 'center',
        padding: responsiveHeight(24)
    },
    conWhite: {
        backgroundColor: color.bgColors,
        height: responsiveHeight(543),
        width: responsiveWidth(380),
        borderRadius: 8,
        padding: responsiveWidth(24)
    },
    textTittle: {
        marginBottom: responsiveHeight(12),
    },
    textTittle2: {
        marginBottom: responsiveHeight(24),
    },
    bigConText: {
        flex: 1,
        flexDirection: 'column',
        height: responsiveHeight(164),
        width: responsiveWidth(332),
    },
    conText: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        marginBottom: responsiveHeight(12)
    },
    conTextAdd: {
        marginTop: responsiveHeight(12),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    conTextComp: {
        marginTop: responsiveHeight(12),
        marginBottom: responsiveHeight(24),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    confleText: {
        width: responsiveWidth(146),
        flexGrow: 1,
    },
    confleText2: {
        width: responsiveWidth(110),
        flexGrow: 1,
    },
    conButton: {
    }
})

export default style