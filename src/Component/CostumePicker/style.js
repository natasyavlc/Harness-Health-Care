import { StyleSheet } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'


const style = StyleSheet.create({
    conTitle: (x) => ({
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }),
    arrow: { width: responsiveWidth(10), height: responsiveHeight(5) },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040',
    },
    containerModal: (height) => ({
        width: Platform.OS == 'ios' && height < 800 ? responsiveWidth(340) : responsiveWidth(360),
        minHeight: responsiveHeight(50),
        maxHeight: responsiveHeight(400),
        zIndex: 3,
        borderRadius: responsiveWidth(10),
        alignItems: 'flex-start',
        justifyContent: 'center',
    }),
    conItem: (height) => ({
        height: responsiveHeight(50),
        width: Platform.OS == 'ios' && height < 800 ? responsiveWidth(340) : responsiveWidth(360),
        justifyContent: 'center',
        paddingHorizontal: responsiveHeight(20),
        backgroundColor: color.bgColors,

    }),
})
export default style