import React, {useState} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

import {Input} from '../../../conponents'
import {colors} from '../../../../assets/colors'
import * as S from '../styles.ts'

export const InputSection = () => {
  const [value, setValue] = useState<string>('')
  const onSubmit = (value: string) => {
    console.log('submit_value', value)
    setValue('')
  }
  return (
    <View style={{marginTop: 43}}>
      <Text style={S.INPUT_TITLE_TXT}>Who am I?</Text>
      <Input
        value={value}
        onChangeText={text => setValue(text)}
        placeholder={'Your answer'}
        placeholderTextColor={colors.darkGray}
      />
      <TouchableOpacity onPress={() => onSubmit(value)} style={S.SUBMIT_BTN}>
        <Text style={S.SUBMIT_BTN_TXT}>Submit</Text>
      </TouchableOpacity>
      <Text style={S.UNDER_SUBMIT_BTN_TXT}>5 attempts remaining</Text>
    </View>
  )
}
