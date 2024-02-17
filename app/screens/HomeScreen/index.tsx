import React, {FC} from 'react'
import {View} from 'react-native'

import {PlasticBoardLayout} from '../../conponents'
import {DaysExpRiddles} from './components/DaysExpRiddles.tsx'
import {colors} from '../../../assets/colors'
import * as S from './styles.ts'

export const HomeScreen: FC = () => {
  return (
    <PlasticBoardLayout>
      <>
        <DaysExpRiddles
          iconName={'home_1'}
          iconWidth={193}
          iconHeight={169}
          title={'Weekly \n' + 'Riddle'}
          subtitle={'Riddles you need to solve weekly'}
          linerGradStyleOverLoad={{paddingTop: 39, paddingBottom: 47}}
          mainGradColors={colors.purple}
          gradAngle={220}
          containerStyleOverwrite={{marginTop: 38, marginBottom: 30}}
          containerIconStyle={{position: 'absolute', right: -10}}
          titleStyle={S.TITLE_1_TXT}
          subtitleStyle={S.SUBTITLE_TXT}
          gradAngleCenter={{x: 0.9, y: 0.4}}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <DaysExpRiddles
            iconName={'home_2'}
            iconWidth={91}
            iconHeight={90}
            title={'3 Days \n' + 'Exp. Riddles'}
            subtitle={'3 days for solving'}
            linerGradStyleOverLoad={{paddingTop: 56, paddingBottom: 22}}
            containerStyleOverwrite={{flex: 1, marginRight: 8}}
            mainGradColors={colors.yellow}
            gradAngle={230}
            containerIconStyle={{position: 'absolute', right: 0, top: -18}}
            titleStyle={S.TITLE_2_TXT}
            subtitleStyle={S.SUBTITLE_TXT}
            gradAngleCenter={{x: 0.8, y: 0.5}}
          />
          <DaysExpRiddles
            iconName={'home_3'}
            iconWidth={82}
            iconHeight={118}
            title={'1 Day \n' + 'Exp. Riddles'}
            subtitle={'1 day for solving'}
            linerGradStyleOverLoad={{paddingTop: 56, paddingBottom: 22}}
            containerStyleOverwrite={{flex: 1, marginLeft: 8}}
            mainGradColors={colors.pink}
            gradAngle={230}
            containerIconStyle={{position: 'absolute', right: 0, top: -18}}
            titleStyle={S.TITLE_2_TXT}
            subtitleStyle={S.SUBTITLE_TXT}
            gradAngleCenter={{x: 0.8, y: 0.5}}
          />
        </View>
        <DaysExpRiddles
          title={'Special \n' + 'Brand Riddles'}
          subtitle={'Riddles related with \n' + 'popular brands \n' + 'such as'}
          linerGradStyleOverLoad={{paddingTop: 23, paddingBottom: 25}}
          containerStyleOverwrite={{marginTop: 20, marginBottom: 100}}
          containerIconStyle={{
            position: 'absolute',
            right: -65,
            bottom: -50,
          }}
          mainGradColors={colors.white_1}
          titleStyle={S.TITLE_3_TXT}
          subtitleStyle={S.SUBTITLE_TXT}
          gradAngleCenter={{x: 0.8, y: 0.5}}
          isImage={true}
          isIconBottom={true}
        />
      </>
    </PlasticBoardLayout>
  )
}
