import { StyleSheet } from 'react-native'
import { responsiveHeight } from '../Helper/ResponsiveUI'
const style = StyleSheet.create({
    container:{
        // paddingHorizontal:responsiveHeight(21)
    },
    conTextInput:{
        borderRadius:responsiveHeight(10),
        paddingLeft:5,
        borderWidth:1
    },
})

export default style