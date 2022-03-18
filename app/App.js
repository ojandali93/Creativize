import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreenNavigator, ProfileSceenNavigator, ProjectScreenNavigator, SearchScreenNavigator } from './StackNavigation'
import HomeScreen from './src/Screens/HomeScreen'

const Tab = createBottomTabNavigator()

const App = () => {
  return(
    <>  
      <StatusBar backgroundColor={"white"} translucent={true} barStyle="dark-content" />
      <NavigationContainer style={{backgroundColor:"#61dafb"}}>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeScreenNavigator} />
          <Tab.Screen name="Search" component={SearchScreenNavigator} />
          <Tab.Screen name="Porject" component={ProjectScreenNavigator} />
          <Tab.Screen name="Profile" component={ProfileSceenNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App