import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../../Helper/ResponsiveUI'

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 32,
        alignSelf: 'center',
        backgroundColor: '#FFF',
        paddingVertical: responsiveHeight(24),
        paddingHorizontal: responsiveHeight(16),
        marginBottom: responsiveHeight(16),
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        borderColor: colors.TextInputBG,
        borderWidth: 2,
        borderRadius: 8,
    },
    img: {
        width: responsiveHeight(60),
        height: responsiveHeight(60),
        borderRadius: 60 / 2,
        marginRight: 8
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 8
    },
    label: {
        paddingVertical: responsiveHeight(2),
        paddingHorizontal: responsiveHeight(6),
        borderRadius: 4,
        backgroundColor: colors.hardGreen,
        alignContent: 'center',
        marginLeft: responsiveWidth(10)
    },
    txtLabel: {
        fontFamily: 'Inter-Bold',
        color: colors.Primary_White,
        fontSize: responsiveHeight(10)
    }
})

export default styles