import React, { useState } from 'react'
import {  Text, View,Pressable } from 'react-native'

// HELPER
import Proptypes from 'prop-types'

// STYLE
import styles from './styles'
import color from '../../../Asset/color'

const Tab = ({
    activeOpacity,
    titleLeft,
    titleRight,
    onPressTabLeft,
    onPressTabRight
}) => {

    // STATE
    const [tabValue, setTabValue] = useState(activeOpacity);

    // FUNCTION
    const onPressLeft = (val) => {
        setTabValue(val)
        onPressTabLeft()
    }

    const onPressRight = (val) => {
        setTabValue(val)
        onPressTabRight()
    }

    return (
        <View style={styles.root}>
            <Pressable
                activeOpacity={tabValue}
                onPress={() => onPressLeft(0)}
                style={[
                    styles.tabContainer,
                    styles.tabBorderLeft,
                    { backgroundColor: tabValue == 0 ? color.softBlue : '#FFF' }
                ]}
            >
                <Text style={styles.txtTab}>{titleLeft}</Text>
            </Pressable>
            <Pressable
                activeOpacity={tabValue}
                onPress={() => onPressRight(1)}
                style={[
                    styles.tabContainer,
                    styles.tabBorderRight,
                    { backgroundColor: tabValue == 1 ? color.softBlue : '#FFF' }
                ]}
            >
                <Text style={styles.txtTab}>{titleRight}</Text>
            </Pressable>
        </View>
    )
}

Tab.defaultProps = {
    titleLeft: 'Upcoming',
    titleRight: 'Finished'
}

Tab.propTypes = {
    onPressLeft: Proptypes.func,
    onPressRight: Proptypes.func,
    titleLeft: Proptypes.string,
    titleRight: Proptypes.string
}

export default Tab