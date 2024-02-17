import {Text, View} from 'react-native'

import * as S from '../styles.ts'

export const DescriptionSection = () => {
  return (
    <View style={{marginTop: 43}}>
      <Text style={S.DESCRIPTION_TITLE_TXT}>Weekly Riddles</Text>
      <Text style={S.DESCRIPTION_SUBTITLE_TXT}>
        I can add to several hundred. But can’t subtract multiply or divide.
        Whatever I add to, it’s always in front of you but never behind. And the
        number I add to You can’t really hide!
      </Text>
    </View>
  )
}
