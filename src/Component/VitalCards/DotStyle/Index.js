import { StyleSheet, View } from 'react-native'
import React from 'react'
import color from '../../../../Asset/color'
import { responsiveHeight, responsiveWidth } from '../../Helper/ResponsiveUI'


const Index = ({ index = 0, data = [] }) => {
    return (
        <View style={styles.dotIndicatorContainer}>
            {data?.map((point, pointIndex) => ![].includes(pointIndex) && (
                <View
                    key={pointIndex}
                    style={[
                        styles.dotIndicatorItem,
                        pointIndex === index && styles.dotIndicatorItemActive,
                    ]}
                />
            ))}
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    dotIndicatorContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        marginBottom: responsiveHeight(8)
    },
    dotIndicatorItem: {
        marginHorizontal: responsiveWidth(8),
        borderRadius: 8,
        width: responsiveWidth(4),
        height: responsiveHeight(4),
        backgroundColor: "#AAAAAA",
    },
    dotIndicatorItemActive: {
        width: responsiveWidth(4),
        height: responsiveHeight(4),
        backgroundColor: color.Primary,
    },
})