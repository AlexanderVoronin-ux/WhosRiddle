import React, {FC} from 'react'
import {
  View,
  TextInput,
  ViewStyle,
  TextInputProps,
  Pressable,
  Text,
} from 'react-native'

import {IconTypes} from '../../assets/svg'
import {colors} from '../../../assets/colors'
import {SVGIcon} from '../SVGIcon'
import * as S from './styles'
import LinearGradient from 'react-native-linear-gradient'

interface IInputProps extends TextInputProps {
  placeholder?: string
  styleContainer?: ViewStyle
  inputStyle?: ViewStyle
  label?: string
  limit?: number
  leftIcon?: IconTypes
  leftIconColor?: IconTypes
  rightIcon?: IconTypes
  rightIconColor?: string
  onPressRightIcon?: () => void
  errorMessage?: string
  rightIconWidth?: number
  rightIconHeight?: number
}

export const Input: FC<IInputProps> = ({
  placeholder = '',
  styleContainer,
  inputStyle,
  label,
  errorMessage,
  limit,
  leftIcon,
  leftIconColor = colors.black,
  rightIcon,
  rightIconColor = colors.black,
  keyboardType,
  onPressRightIcon = () => {},
  rightIconWidth,
  rightIconHeight,
  ...rest
}): JSX.Element => {
  const inputStyles = [S.INPUT, inputStyle]

  return (
    <View>
      {!!label && (
        <View style={S.LABEL_CTR}>
          <Text>{label}</Text>
        </View>
      )}
      <LinearGradient
        colors={[colors.white_2, colors.white_3]}
        style={[S.CONTAINER, styleContainer, !!errorMessage && S.CTR_ERROR]}>
        {!!leftIcon && (
          <View style={S.MR_3}>
            <SVGIcon name={leftIcon} color={leftIconColor} />
          </View>
        )}
        <View style={S.INPUT_CTR}>
          <TextInput
            {...rest}
            selectionColor={colors.black}
            maxLength={limit}
            style={inputStyles}
            placeholder={placeholder}
            keyboardType={keyboardType}
          />
        </View>
        {!!rightIcon && (
          <Pressable
            style={S.ML_3}
            onPress={onPressRightIcon}
            testID="input-right-btn">
            <SVGIcon
              width={rightIconWidth}
              height={rightIconHeight}
              name={rightIcon}
              color={rightIconColor}
            />
          </Pressable>
        )}
      </LinearGradient>
      {!!errorMessage && (
        <View style={S.ERROR_CTR}>
          <Text style={S.ERROR}>{errorMessage}</Text>
        </View>
      )}
    </View>
  )
}
