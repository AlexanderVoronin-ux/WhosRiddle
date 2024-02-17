import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Platform} from 'react-native'

import {BottomTabScreen} from './constants'
import {LeaderboardScreen, HomeScreen, SettingsScreen} from '../screens'
import {colors} from '../../assets/colors'
import {fonts} from '../constants/fonts'
import {SVGIcon} from '../conponents'

export type BottomTabParamList = {
  HomeScreen: undefined
  LeaderboardScreen: undefined
  SettingsScreen: undefined
}

const Tab = createBottomTabNavigator<BottomTabParamList>()

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 70,
          backgroundColor: 'transparent',
          position: 'absolute',
        },
        tabBarActiveTintColor: colors.darkGray,
        tabBarInactiveTintColor: colors.gray,
      }}>
      <Tab.Screen
        options={{
          title: 'Home',
          tabBarLabelStyle: {
            fontFamily: fonts.poppinsSemiBold_600,
            fontSize: 10,
            marginBottom: 10,
          },
          tabBarIcon: ({focused}) => (
            <SVGIcon
              name={'home'}
              color={focused ? colors.darkGray : colors.gray}
            />
          ),
        }}
        name={BottomTabScreen.HomeScreen}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: 'Leaderboard',
          tabBarLabelStyle: {
            fontFamily: fonts.poppinsSemiBold_600,
            fontSize: 10,
            marginBottom: 10,
          },
          tabBarIcon: ({focused}) => (
            <SVGIcon
              name={'leaderboard'}
              color={focused ? colors.darkGray : colors.gray}
            />
          ),
        }}
        name={BottomTabScreen.LeaderboardScreen}
        component={LeaderboardScreen}
      />
      <Tab.Screen
        options={{
          title: 'Settings',
          tabBarLabelStyle: {
            fontFamily: fonts.poppinsSemiBold_600,
            fontSize: 10,
            marginBottom: 10,
          },
          tabBarIcon: ({focused}) => (
            <SVGIcon
              name={'settings'}
              color={focused ? colors.darkGray : colors.gray}
            />
          ),
        }}
        name={BottomTabScreen.SettingsScreen}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  )
}
