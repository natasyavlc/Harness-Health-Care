import { Image, View } from 'react-native'
import React from 'react'
import color from '../../../../Asset/color'
import { responsiveHeight } from '../../Helper/ResponsiveUI'
import CustomeText from '../../CostumeText/index'
import { styles } from './style'

const Index = ({
    navigation,
    historyImun,
    labelDose1,
    labelDose2,
    labelDose3,
    notesDoctor,
    ImgDoctor,
    doctorName,
    spesialis,
}) => {
  return (
    <View style={styles.Container}>
        <View style={styles.ConRow}>
            <View style={styles.TextImmun2}>
                <CustomeText 
                    label={'Immunization'} 
                    Font={'Inters'}
                    fontSizes={responsiveHeight(12)}
                    lineHeights={responsiveHeight(14.52)}
                    colors={color.Text_Grey}
                    fontWeight={'400'}
                />
                <CustomeText 
                    label={historyImun} 
                    Font={'InterRegular'}
                    fontSizes={responsiveHeight(14)}
                    lineHeights={responsiveHeight(19.6)}
                    colors={color.Primary_Black}
                    fontWeight={'600'}
                />
            </View>
            {labelDose1 ? 
                <View style={styles.TextImmun1}>
                    <CustomeText 
                        label={'Dose 1'} 
                        Font={'Inters'}
                        fontSizes={responsiveHeight(12)}
                        lineHeights={responsiveHeight(14.52)}
                        colors={color.Text_Grey}
                        fontWeight={'400'}
                    />
                    <CustomeText 
                        label={labelDose1} 
                        Font={'Inters'}
                        fontSizes={responsiveHeight(14)}
                        lineHeights={responsiveHeight(19.6)}
                        colors={color.GT_Grey}
                        fontWeight={'400'}
                    />
                </View>
            :
            <></>
            }
            {labelDose2 ? 
                <View style={styles.TextImmun2}>
                    <CustomeText 
                        label={'Dose 2'} 
                        Font={'Inters'}
                        fontSizes={responsiveHeight(12)}
                        lineHeights={responsiveHeight(14.52)}
                        colors={color.Text_Grey}
                        fontWeight={'400'}
                    />
                    <CustomeText 
                        label={labelDose2} 
                        Font={'Inters'}
                        fontSizes={responsiveHeight(14)}
                        lineHeights={responsiveHeight(19.6)}
                        colors={color.GT_Grey}
                        fontWeight={'400'}
                    />
                </View>
            :
            <></>
            }
            {labelDose3 ? 
                <View style={styles.TextImmun1}>
                    <CustomeText 
                        label={'Dose 3'} 
                        Font={'Inters'}
                        fontSizes={responsiveHeight(12)}
                        lineHeights={responsiveHeight(14.52)}
                        colors={color.Text_Grey}
                        fontWeight={'400'}
                    />
                    <CustomeText 
                        label={labelDose3} 
                        Font={'Inters'}
                        fontSizes={responsiveHeight(14)}
                        lineHeights={responsiveHeight(19.6)}
                        colors={color.GT_Grey}
                        fontWeight={'400'}
                    />
                </View>
            :
            <></>
            }
            <View style={styles.ConNote}>
                <CustomeText 
                    label={'Doctor Notes'} 
                    Font={'Inters'}
                    fontSizes={responsiveHeight(12)}
                    lineHeights={responsiveHeight(14.52)}
                    colors={color.Text_Grey}
                    fontWeight={'400'}
                />
                <CustomeText 
                    label={notesDoctor} 
                    Font={'Inters'}
                    fontSizes={responsiveHeight(14)}
                    lineHeights={responsiveHeight(22.4)}
                    colors={color.GT_Grey}
                    fontWeight={'400'}
                />
            </View>
        </View>
        <View style={styles.inline}/>
        <View style={styles.ConRowImg}>
            <View style={styles.TextLabel}>
                <CustomeText 
                    label={'Diagnosed by:'} 
                    Font={'Inters'}
                    fontSizes={responsiveHeight(10)}
                    lineHeights={responsiveHeight(12.1)}
                    colors={color.Text_Grey}
                    fontWeight={'400'}
                />
            </View>
            <View style={styles.ConProfileDoctor}>
                <Image source={{uri:ImgDoctor}} style={styles.img}/>
                <View style={styles.textDoctor}>
                    <CustomeText 
                        label={doctorName} 
                        Font={'Inter-Semi'}
                        fontSizes={responsiveHeight(14)}
                        lineHeights={responsiveHeight(19.6)}
                        colors={color.GT_Grey}
                    />
                    <CustomeText 
                        label={spesialis} 
                        Font={'Inters'}
                        fontSizes={responsiveHeight(10)}
                        lineHeights={responsiveHeight(12.1)}
                        colors={color.GT_Grey}
                        fontWeight={'400'}
                    />
                </View>
            </View>
        </View>
    </View>
  )
}

export default Index
