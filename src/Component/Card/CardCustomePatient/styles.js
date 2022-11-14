import { StyleSheet } from 'react-native'
import color from '../../../../Asset/color'
import { responsiveHeight } from '../../Helper/ResponsiveUI'

const styles = StyleSheet.create({
    Container: {
        width: responsiveHeight(162),
        height: responsiveHeight(216),
        borderRadius: responsiveHeight(12),
        justifyContent: 'center',
        backgroundColor: color.White,
        shadowColor: color.Primary_Black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
        alignSelf: 'center',
    },
    ConImg: {
        width: '100%',
        height: responsiveHeight(120),
    },
    img: {
        width: '100%',
        height: responsiveHeight(120),
        borderTopRightRadius: responsiveHeight(12),
        borderTopLeftRadius: responsiveHeight(12)
    },
    ConRow: {
        flexDirection: 'row',
        padding: responsiveHeight(8),
        justifyContent: 'space-between',
    },
    ConText: {
        marginTop: responsiveHeight(8)
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
        marginTop: responsiveHeight(12),
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
    ConButton: {
        justifyContent: 'flex-end',
    },
    CircleOne: {
        width: responsiveHeight(40),
        height: responsiveHeight(40),
        borderRadius: responsiveHeight(50),
        backgroundColor: color.softBlue,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: responsiveHeight(11.2),
        height: responsiveHeight(8),
    },
    CircleTwo: {
        width: responsiveHeight(40),
        height: responsiveHeight(40),
        borderRadius: responsiveHeight(50),

        alignItems: 'center',
        justifyContent: 'center'
    },
    button2: {
        width: responsiveHeight(9.6),
        height: responsiveHeight(12.8),
    },
})
export default styles