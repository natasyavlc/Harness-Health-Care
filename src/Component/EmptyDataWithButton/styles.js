import { StyleSheet } from 'react-native'
import colors from '../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../Helper/ResponsiveUI'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
        marginTop: responsiveHeight(241)
    },
    button: {
        paddingVertical: responsiveHeight(16),
        borderWidth: 1.5,
        borderColor: colors.Primary,
        borderRadius: 24
    },
    txtButton: {
        fontSize: responsiveHeight(14),
        fontFamily: 'Inter-SemiBold',
        color: colors.Primary,
        textAlign: 'center'
    }
})

export default styles