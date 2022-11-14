import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'

// STYLE
import styles from './style'
import colors from '../../../../Asset/color'

// COMPONENT
import CustomText from '../../CostumeText'
import StarRatings from '../../CostumeStar/Index'
import { responsiveHeight, responsiveWidth } from '../../Helper/ResponsiveUI'

const CardDetailAppointment = ({
    time = new Date().toDateString(),
    comment,
    data,
}) => {
    const [test, setTest] = useState(4)
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={data.image == Number(data.image) ? data.image : { uri: data.image }} />
            <View style={{width:responsiveWidth(288)}}>
                <View style={[styles.rowContainer, { justifyContent: 'space-between', alignItems: 'center' }]}>
                    <CustomText
                        label={data?.name || data?.username}
                        fontSizes={responsiveHeight(14)}
                        Font={'Inter-Semi'}
                        colors={colors.Primary_Black}
                    />
                    <View style={styles.label}>
                        <StarRatings
                            defaultRatings={data.rate || test}
                            size={responsiveHeight(10)}
                            disable={true}
                            onChange={(e) => setTest(e)} />
                    </View>
                </View>
                <CustomText
                    label={data.time || time}
                    fontSizes={responsiveHeight(10)}
                    Font={'Inters'}
                    colors={colors.Primary_Black}
                />
                <View style={styles.comments}>
                    <CustomText
                        label={data?.Comments || comment}
                        fontSizes={responsiveHeight(14)}
                        Font={'Inters'}
                        colors={colors.Primary_Black}
                    />
                </View>
            </View>
        </View>
    )
}

export default CardDetailAppointment