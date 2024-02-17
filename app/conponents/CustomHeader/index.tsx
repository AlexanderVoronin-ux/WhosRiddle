import {Text, View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import {colors} from '../../../assets/colors'
import {SVGIcon} from '../SVGIcon'
import * as S from './styles.ts'

export const CustomHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
      }}>
      <LinearGradient
        style={S.LINEAR_GRAD_CTR}
        useAngle={true}
        angle={330}
        angleCenter={{x: 0.9, y: 0.4}}
        colors={[colors.orange, colors.orangeLight]}>
        <SVGIcon name={'star'} width={16} height={15} />
        <Text style={S.TXT_RIGHT}>954</Text>
      </LinearGradient>
      <View style={{flexDirection: 'row', gap: 20}}>
        <View style={S.NOT_CTR}>
          <SVGIcon name={'bell'} width={14} height={16} />
          <LinearGradient
            style={S.BADGE_CTR}
            useAngle={true}
            angle={45}
            angleCenter={{x: 0.5, y: 0.5}}
            colors={[colors.pink, colors.pinkLight]}>
            <Text style={S.TXT_BADGE}>2</Text>
          </LinearGradient>
        </View>
        <View style={S.NOT_CTR}>
          <SVGIcon name={'lamp'} width={14} height={16} />
          <LinearGradient
            style={S.BADGE_CTR}
            useAngle={true}
            angle={45}
            angleCenter={{x: 0.5, y: 0.5}}
            colors={[colors.green, colors.greenLight]}>
            <Text style={S.TXT_BADGE}>5</Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  )
}
