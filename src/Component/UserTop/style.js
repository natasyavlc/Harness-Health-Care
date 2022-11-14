import { StyleSheet } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'
const style = StyleSheet.create({
    container: {
        height: responsiveHeight(92),
        justifyContent: 'flex-end',
    },
    flexCon: {
        marginHorizontal: responsiveWidth(16),
        marginBottom: responsiveHeight(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bellNot: {
        height: responsiveHeight(24),
        width: responsiveWidth(24),
        marginRight: responsiveWidth(20),
        resizeMode: 'contain'
    },
    Profiles: {
        height: responsiveHeight(36),
        width: responsiveWidth(36),
        resizeMode: 'contain'
    },
    ConImage: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})

export default style