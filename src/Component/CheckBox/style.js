import { StyleSheet } from 'react-native'
import { responsiveWidth } from '../Helper/ResponsiveUI'
const style = StyleSheet.create({
    container:{
       flexDirection:'row',
       alignItems:'center',
       paddingHorizontal:responsiveWidth(11)
    }
})

export default style