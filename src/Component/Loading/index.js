import React from "react";
import { View, Modal, ActivityIndicator } from "react-native";
import Proptypes from 'prop-types'
import color from "../../../Asset/color";
import style from "./style";


const Loading = ({ isLoading, onRequestClose}) => {
    return (
        <Modal visible={isLoading} transparent={true} onRequestClose={onRequestClose}>
            <View style={style.container}>
                <View style={style.conLoad}>
                    <ActivityIndicator size={50} color={color.Primary} animating={true}/>
                </View>
            </View>
            
        </Modal>
    )
}

Loading.propTypes = {
    isLoading: Proptypes.bool.isRequired,
    onRequestClose: Proptypes.func
}

export default Loading;