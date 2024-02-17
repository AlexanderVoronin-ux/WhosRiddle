import * as React from 'react'
import {ImageStyle} from 'react-native'

import {colors} from '../../../assets/colors'
import {icons, IconTypes} from '../../assets/svg'

export interface IconProps {
  size?: number
  width?: number
  height?: number
  color?: string
  name?: IconTypes
  style?: ImageStyle
}

export function SVGIcon({
  name,
  size = 24,
  width,
  height,
  color = colors.black,
  ...props
}: IconProps): JSX.Element {
  const Icon = name ? icons[name] : icons.home
  return (
    <Icon
      width={width || size}
      height={height || size}
      color={color}
      {...props}
    />
  )
}
