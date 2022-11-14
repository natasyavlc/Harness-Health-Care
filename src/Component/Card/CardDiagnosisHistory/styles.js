import { StyleSheet } from 'react-native'
import color from '../../../../Asset/color'

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        marginHorizontal: 16,
        padding: 12,
        borderWidth: 1,
        borderColor: color.borderGray,
        borderRadius: 4,
        backgroundColor: color.softGray,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    spacing: {
        marginBottom: 16
    }
})

export default styles