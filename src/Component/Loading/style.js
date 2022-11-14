import { StyleSheet } from 'react-native'
import color from '../../../Asset/color'
import { responsiveHeight } from '../Helper/ResponsiveUI'
const style = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: 'rgba(0,0,0,0.5)', 
        justifyContent: 'center'
    },
    conLoad:{
        flexDirection: 'row', 
        padding:responsiveHeight(20), 
        backgroundColor: color.bgColors, 
        justifyContent: 'center',
        alignItems: 'center', 
        alignSelf: 'center', 
        borderRadius: 10
    }
})

export default style