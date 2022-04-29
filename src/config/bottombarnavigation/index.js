import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { BlankScreen, HomeScreen, LoginScreen } from '../../pages'
import { Home, Megaphone, Scan, Person, Calender } from '../../components/assets'
import MaterialTopBar from '../materialtopbar'
import styled from 'styled-components/native'

const Tab = createBottomTabNavigator()

const Icon = styled.Image`
  width: ${props => props.w || "24px"};
  height: ${props => props.h || "24px"};
  resize-mode: contain;
`
const Button = styled.View`
  background-color: rgba(0, 82, 167, 1);
  padding: 15px;
  border-radius: 100px;
  position: absolute;
  top: -30px;
`
const Txt = styled.Text`
  font-size: 10px;
  color: ${props => props.c || "#636363"};
`
const Wrapper = styled.View`
  align-items: center;
`


export const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20
        }
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Wrapper>
            <Icon source={Home} style={{ tintColor: focused ? "#0052A7" : "#636363" }} />
            <Txt c={focused ? "#0052A7" : "#636363"}>Home</Txt>
          </Wrapper>
        ),
        headerShown: false
      }} />
      <Tab.Screen name="CutiScreen" component={BlankScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Wrapper>
            <Icon source={Calender} style={{ tintColor: focused ? "#0052A7" : "#636363" }} />
            <Txt c={focused ? "#0052A7" : "#636363"}>Cuti</Txt>
          </Wrapper>
        ),
        headerShown: false
      }} />
      <Tab.Screen name="ScannerScreen" component={BlankScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Button>
            <Icon h="30px" w="30px" source={Scan} style={{ tintColor: "#fff" }} />
          </Button>
        ),
        headerShown: false
      }} />
      <Tab.Screen name="BroadcastScreen" component={MaterialTopBar} options={{
        tabBarIcon: ({ focused }) => (
          <Wrapper>
            <Icon source={Megaphone} style={{ tintColor: focused ? "#0052A7" : "#636363" }} />
            <Txt c={focused ? "#0052A7" : "#636363"}>Broadcast</Txt>
          </Wrapper>
        ),
        headerShown: false
      }} />
      <Tab.Screen name="ProfileScreen" component={BlankScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Wrapper>
            <Icon source={Person} style={{ tintColor: focused ? "#0052A7" : "#636363" }} />
            <Txt c={focused ? "#0052A7" : "#636363"}>Profile</Txt>
          </Wrapper>
        ),
        headerShown: false
      }} />
    </Tab.Navigator>
  )
}
