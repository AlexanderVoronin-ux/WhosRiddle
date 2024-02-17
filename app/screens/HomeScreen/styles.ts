import {TextStyle, ViewStyle} from 'react-native'

import {colors} from '../../../assets/colors'
import {fonts} from '../../constants/fonts'

export const LINEAR_GRAD: ViewStyle = {
  borderRadius: 32,
  borderWidth: 2,
  borderColor: colors.white,
  paddingLeft: 26,
  paddingTop: 39,
  paddingBottom: 47,
}

export const TITLE_1_TXT: TextStyle = {
  fontFamily: fonts.poppinsExtraBold_800,
  fontSize: 24,
  color: colors.black,
}
export const TITLE_2_TXT: TextStyle = {
  fontFamily: fonts.poppinsExtraBold_800,
  fontSize: 14,
  color: colors.black,
}
export const TITLE_3_TXT: TextStyle = {
  fontFamily: fonts.poppinsExtraBold_800,
  fontSize: 16,
  color: colors.black,
}
export const SUBTITLE_TXT: TextStyle = {
  fontFamily: fonts.poppinsMedium_500,
  fontSize: 12,
  color: colors.gray,
  paddingTop: 20,
}
