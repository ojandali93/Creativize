import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ShoftFilmTile from "../Components/ShoftFilmTile"

export default function HomeScreen() {
  return (
    <View style={styles.app}>
      <View style={styles.section}>
        <Text style={styles.category}>Award Winning</Text>
        <View style={styles.scrollBoxHorizontal}>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'white',
    height: '100%'
  },
  section: {
    backgroundColor: 'beige',
    padding: 16
  },
  category: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  scrollBoxHorizontal: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    overflow: 'scroll',
    justifyContent: 'center'
  }
})
