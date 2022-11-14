import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../../Helper/ResponsiveUI'

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 32,
        alignSelf: 'center',
        backgroundColor: '#FFF',
        paddingVertical: responsiveHeight(24),
        paddingHorizontal: responsiveWidth(16),
        marginBottom: responsiveHeight(16),
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'flex-start',
        borderColor: colors.TextInputBG,
        borderWidth: 1,
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
        marginBottom: responsiveHeight(8),
        alignContent: 'center'
    },
    label: {
        paddingVertical: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(6),
        borderRadius: 4,
        // backgroundColor: colors.hardYellow,
        alignContent: 'center',
        marginLeft: responsiveWidth(10)
    },
    txtLabel: {
        fontFamily: 'Inter-Bold',
        color: colors.Primary_Black,
        fontSize: 10
    },
    icon: {
        width: 12,
        height: 12,
        marginRight: 4
    },
    comments: { width: responsiveWidth(250), marginTop: responsiveHeight(12) }
})

export default styles