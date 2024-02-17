import React, {FC} from 'react'

import {PlasticBoardLayout} from '../../conponents'
import {BtnSection} from './components/BtnSection.tsx'
import {DescriptionSection} from './components/DescriptionSection.tsx'
import {InputSection} from './components/InputSection.tsx'
import {View} from 'react-native'

export const LeaderboardScreen: FC = () => {
  return (
    <PlasticBoardLayout>
      <View style={{paddingHorizontal: 40}}>
        <BtnSection />
        <DescriptionSection />
        <InputSection />
      </View>
    </PlasticBoardLayout>
  )
}
