import React, {FC} from 'react'
import {Image, Text, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import {colors} from '../../../../assets/colors'
import {SVGIcon} from '../../../conponents'
import {IconTypes} from '../../../assets/svg'
import * as S from '../styles.ts'

interface IDaysExpRiddlesProps {
  iconName?: IconTypes
  iconWidth?: number
  iconHeight?: number
  title: string
  subtitle: string
  linerGradStyleOverLoad?: object
  containerStyleOverwrite?: object
  containerIconStyle?: object
  mainGradColors: string
  gradAngle?: number
  titleStyle: object
  subtitleStyle: object
  gradAngleCenter: {x: number; y: number}
  isImage?: boolean
  isIconBottom?: boolean
}

export const DaysExpRiddles: FC<IDaysExpRiddlesProps> = ({
  iconName,
  iconWidth,
  iconHeight,
  title,
  subtitle,
  linerGradStyleOverLoad,
  containerStyleOverwrite,
  mainGradColors,
  gradAngle,
  containerIconStyle,
  titleStyle,
  subtitleStyle,
  gradAngleCenter,
  isImage,
  isIconBottom,
}) => {
  return (
    <View style={{...containerStyleOverwrite}}>
      <LinearGradient
        useAngle={true}
        angle={gradAngle}
        angleCenter={gradAngleCenter}
        colors={[mainGradColors, colors.white, colors.white_1]}
        style={[S.LINEAR_GRAD, linerGradStyleOverLoad]}>
        <View>
          <Text style={titleStyle}>{title}</Text>
        </View>
        <View style={{width: '55%'}}>
          <Text style={subtitleStyle}>{subtitle}</Text>
        </View>
        {isIconBottom && (
          <View style={{flexDirection: 'row', gap: 8, marginTop: 18}}>
            <SVGIcon name={'nike'} />
            <SVGIcon name={'macdonalds'} />
            <SVGIcon name={'lego'} />
          </View>
        )}
      </LinearGradient>
      <View style={containerIconStyle}>
        {!isImage && (
          <SVGIcon name={iconName} width={iconWidth} height={iconHeight} />
        )}
        {isImage && (
          <Image
            source={require('../../../assets/png/Group_8742.png')}
            height={50}
            width={50}
          />
        )}
      </View>
    </View>
  )
}
