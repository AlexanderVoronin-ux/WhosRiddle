import {TextStyle, ViewStyle} from 'react-native'
import {colors} from '../../../assets/colors'

export const CONTAINER: ViewStyle = {
  width: '100%',
  height: 72,
  flexDirection: 'row',
  borderRadius: 26,
  borderColor: colors.white,
  borderWidth: 1,
  justifyContent: 'center',
  alignItems: 'center',
}

export const CTR_ERROR: ViewStyle = {
  borderWidth: 1,
  borderColor: colors.red,
}

export const MR_3: ViewStyle = {
  marginRight: 16,
}

export const ML_3: ViewStyle = {
  marginLeft: 16,
}

export const INPUT_CTR: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: 26,
}

export const INPUT: TextStyle = {
  padding: 0,
  fontSize: 16,
  color: colors.black,
}

export const LABEL_CTR: ViewStyle = {
  marginBottom: 16,
}

export const ERROR_CTR: ViewStyle = {
  marginTop: 10,
  marginLeft: 10,
}

export const ERROR: TextStyle = {
  lineHeight: 18,
}
