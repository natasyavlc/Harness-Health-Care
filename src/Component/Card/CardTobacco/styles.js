import { StyleSheet } from 'react-native'
import color from '../../../../Asset/color'
import { responsiveHeight } from '../../Helper/ResponsiveUI'

const styles = StyleSheet.create({
    container: {
        marginTop: responsiveHeight(16),
        marginHorizontal: 16,
        padding: 12,
        borderWidth: 1,
        borderColor: color.borderGray,
        borderRadius: 4,
        backgroundColor: color.softGray
    },
    containerLabel: {
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        flexDirection: 'row', 
    },
    wrapLabel: {
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderWidth: 1,
        borderColor: color.Primary_Black,
        borderRadius: 4,
        alignItems: 'flex-start',
        marginRight: 8,
        marginTop: 8,
        backgroundColor: color.softGray
    },
    label: {
        fontFamily: 'Inter-Regular',
        fontSize: responsiveHeight(10),
        color: color.Primary_Black,
    }
})

export default styles