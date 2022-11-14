import React from 'react'
import { Image, View } from 'react-native'

// STYLES
import styles from './styles'
import color from '../../../Asset/color'

// COMPONENT 
import CustomText from '../CostumeText'
import { responsiveHeight } from '../Helper/ResponsiveUI'

const DoctorBiodata = ({
    doctorPhoto = 'https://source.unsplash.com/1024x768/?doctor',
    doctorName = "Dr. Robert Fox",
    doctorExpertise = 'Cardiologist at St. Patrick Hospital'
}) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: doctorPhoto }}
                style={styles.img}
            />
            <View>
                <CustomText
                    label={doctorName}
                    fontSizes={responsiveHeight(14)}
                    Font={'Inter-Semi'}
                    colors={color.softBlack}
                />
                <CustomText
                    label={doctorExpertise}
                    fontSizes={responsiveHeight(10)}
                    Font={'Inters'}
                    colors={color.softBlack}
                />
            </View>
        </View>
    )
}

export default DoctorBiodata