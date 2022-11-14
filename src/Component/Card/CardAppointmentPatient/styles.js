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
        borderWidth: responsiveHeight(2),
        borderRadius: responsiveHeight(8),
    },
    img: {
        width: responsiveHeight(60),
        height: responsiveHeight(60),
        borderRadius: responsiveHeight(50),
        marginRight: responsiveWidth(8)
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
        borderRadius: responsiveHeight(4),
        backgroundColor: colors.hardYellow,
        alignContent: 'center',
        marginLeft: responsiveWidth(10),
        justifyContent:'center'
    },
    txtLabel: {
        fontFamily: 'Inter-Bold',
        color: colors.Primary_Black,
        fontSize: responsiveHeight(10)
    },
    icon: {
        width: responsiveHeight(12),
        height: responsiveHeight(12),
        marginRight: responsiveWidth(4)
    },
    textAddress:{
        width:'65%'
    }
})

export default styles