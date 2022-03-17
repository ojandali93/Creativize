import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/Screens/HomeScreen'
import ShortDetailsScreen from './src/Screens/ShortDetailsScreen'

const Stack = createStackNavigator()

const HomeScreenNavigator = () => {
  return(
    <Stack.Navigator >
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>      
      <Stack.Screen name="ShortDetailScreen" component={ShortDetailsScreen}/>
    </Stack.Navigator>
  )
}

export {HomeScreenNavigator}