import { Dimensions, Platform, StyleSheet } from 'react-native'
import { responsiveHeight } from '../../Helper/ResponsiveUI'

const styles = StyleSheet.create({
    card: {
        padding: 12,
        backgroundColor: '#FFF',
        borderRadius: 24,
        elevation: 6,
        shadowColor: "#BCC8E7",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
            height: 4,
            width: 4
        },
        width: Dimensions.get('window').width / 2 - 16,
        alignSelf: 'center',
        top: Platform.OS === 'ios'? responsiveHeight(32) : responsiveHeight(20)
    }
})

export default styles