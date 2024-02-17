import {Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'

import * as S from '../styles.ts'

import {LEADER_BTN} from '../../../constants/leaderScreenBtn.ts'

export const BtnSection = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  return (
    <View style={S.BTN_CTR}>
      {LEADER_BTN.map(item => {
        const isActive = selectedItem === item.id
        return (
          <TouchableOpacity
            onPress={() => setSelectedItem(item.id)}
            key={`${item.id}`}
            style={S.BTN(isActive)}>
            <Text style={S.BTN_TXT}>{item.name}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
