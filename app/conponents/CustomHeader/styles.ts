import {colors} from '../../../assets/colors'
import {TextStyle, ViewStyle} from 'react-native'
import {fonts} from '../../constants/fonts'

export const NOTIF_CTR = {
  width: 40,
  height: 40,
  backgroundColor: colors.white,
  borderRadius: 14,
  alignItems: 'center',
  justifyContent: 'center',
}
export const LINEAR_GRAD_CTR: ViewStyle = {
  flexDirection: 'row',
  width: 71,
  height: 40,
  borderRadius: 15,
  alignItems: 'center',
  padding: 12,
}
export const BADGE_CTR: ViewStyle = {
  flexDirection: 'row',
  width: 23,
  height: 23,
  borderRadius: 23,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: -5,
  right: -10,
}
export const NOT_CTR: ViewStyle = {
  width: 40,
  height: 40,
  backgroundColor: colors.white,
  borderRadius: 14,
  alignItems: 'center',
  justifyContent: 'center',
}
export const TXT_RIGHT: TextStyle = {
  fontFamily: fonts.poppinsSemiBold_600,
  fontSize: 11,
  color: colors.white,
  marginLeft: 8,
}
export const TXT_BADGE: TextStyle = {
  fontFamily: fonts.poppinsSemiBold_600,
  fontSize: 11,
  color: colors.white,
}
