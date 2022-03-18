import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function ProfileScreen() {
  return (
    <>
      <View style={styles.screen}>
        {/* <Text>Project Screen</Text> */}
        <Text style={styles.header}>Access your profile</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Login or Signup</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 48
  },
  header: {
    fontSize: 24,
    marginVertical: 12
  },
  button: {
    width: '80%',
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#4267B2'
  },
  buttonText: {
    color: 'white',
    fontSize: 24
  }
})
