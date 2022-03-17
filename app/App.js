import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreenNavigator } from './StackNavigation'
import HomeScreen from './src/Screens/HomeScreen'

const Tab = createBottomTabNavigator()

const App = () => {
  return(
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeScreenNavigator} />
          <Tab.Screen name="Search" component={HomeScreen} />
          <Tab.Screen name="Porject" component={HomeScreen} />
          <Tab.Screen name="Profile" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App