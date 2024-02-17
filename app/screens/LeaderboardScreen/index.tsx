import React, {FC} from 'react'

import {PlasticBoardLayout} from '../../conponents'
import {BtnSection} from './components/BtnSection.tsx'
import {DescriptionSection} from './components/DescriptionSection.tsx'
import {InputSection} from './components/InputSection.tsx'

export const LeaderboardScreen: FC = () => {
  return (
    <PlasticBoardLayout>
      <>
        <BtnSection />
        <DescriptionSection />
        <InputSection />
      </>
    </PlasticBoardLayout>
  )
}
