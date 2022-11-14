import { StyleSheet } from 'react-native'
import colors from '../../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../../Helper/ResponsiveUI'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        paddingVertical: responsiveHeight(24),
        paddingHorizontal: responsiveWidth(16),
        marginBottom: responsiveHeight(16),
        flexDirection: 'row',
        alignContent: 'center',
        borderColor: colors.borderGray,
        borderWidth: 1,
        borderRadius: 8,
        elevation: 8,
        shadowColor: "#BCC8E7",
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
    },
    img: {
        width: responsiveWidth(60),
        height: responsiveWidth(60),
        borderRadius: 60 / 2,
        marginRight: responsiveWidth(16)
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 8,
        marginTop: 4
    },
    icon: {
        width: responsiveWidth(14),
        height: responsiveHeight(14),
        marginRight: responsiveWidth(4)
    },
    rate: {
        fontFamily: 'Inter-Regular',
        fontSize: responsiveHeight(10),
        color: colors.Primary_Black,
        marginTop: responsiveHeight(4)
    },
    conImage: {
        flexDirection: 'column',
        width: responsiveWidth(75),
    },
    conEdit: {
        backgroundColor: colors.Primary,
        height: responsiveHeight(20),
        width: responsiveHeight(20),
        borderRadius: 70,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(-20),
        marginLeft: responsiveWidth(45)
    },
    pencilsCon:{
     height: responsiveHeight(12), width: responsiveWidth(12), resizeMode: 'contain' 
    }
})

export default styles