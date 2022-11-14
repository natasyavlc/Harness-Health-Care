import React, { useState } from 'react'
import { Dimensions, Pressable, ScrollView, Text, Touchable, View } from 'react-native'

// HELPER
import Proptypes from 'prop-types'

// STYLES
import styles from './styles'
import color from '../../../Asset/color'
import { responsiveWidth } from '../Helper/ResponsiveUI'

const TabNoBorder = ({ tabTitle, valueTab, onPressTab }) => {
    const [tabValue, setTabValue] = useState(valueTab)
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.root}>
            {
                tabTitle.map((val, index) => {
                    return (
                        <Pressable
                            key={index}
                            activeOpacity={valueTab}
                            onPress={() => {
                                setTabValue(index)
                                onPressTab(index)
                            }}
                            style={[
                                styles.tabContainer,
                                {
                                    backgroundColor: tabValue === index ? color.softBlue : '#FFF',
                                    width: tabTitle.length <= 2 ? Dimensions.get('window').width / 2 : responsiveWidth(160)
                                }
                            ]}
                        >
                            <Text style={styles.txtTab}>{val}</Text>
                        </Pressable>
                    )
                })
            }
        </ScrollView>
    )
}

TabNoBorder.defaultProps = {
    tabTitle: ['Childhood', 'Adult'],
    onPressTab: () => console.log('tab pressed')
}

TabNoBorder.propTypes = {
    tabTitle: Proptypes.array,
    onPressTab: Proptypes.func
}

export default TabNoBorder