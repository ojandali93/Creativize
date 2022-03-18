import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/Screens/HomeScreen'
import ProjectScreen from './src/Screens/ProjectScreen'
import ProfileScreen from './src/Screens/ProfileScreen'
import SearchScreen from './src/Screens/SearchScreen'
import DetailsScreen from './src/Screens/DetailsScreen'

const Stack = createStackNavigator()

const HomeScreenNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>      
      <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
    </Stack.Navigator>
  )
}

export {HomeScreenNavigator}

const SearchScreenNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchScreen" component={SearchScreen}/>      
    </Stack.Navigator>
  )
}

export {SearchScreenNavigator}

const ProjectScreenNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProjectScreen" component={ProjectScreen}/>      
    </Stack.Navigator>
  )
}

export {ProjectScreenNavigator}

const ProfileSceenNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>      
    </Stack.Navigator>
  )
}

export {ProfileSceenNavigator}