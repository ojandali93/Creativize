import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ShoftFilmTile from "../Components/ShoftFilmTile"
import MockData from '../../assets/MockData.json'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

export default function HomeScreen() {

  const [shorts, setShorts] = useState(MockData)

  return (
    <View style={styles.app}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.category}>Award Winning</Text>
          <View style={styles.scrollBoxHorizontal}>
            <FlatList
              horizontal
              keyExtractor={film => film.id}
              data={shorts}
              renderItem={(film) => {
                return(<ShoftFilmTile film={film} badge="award-winning"/>)
              }}
            />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.category}>Recent Releases</Text>
          <View style={styles.scrollBoxHorizontal}>
            <FlatList
              style={styles.featuredFilms}
              horizontal
              keyExtractor={film => film.id}
              data={shorts}
              renderItem={(film) => {
                return(<ShoftFilmTile film={film} badge="new-release"/>)
              }}
            />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.category}>Staff Picks</Text>
          <View style={styles.scrollBoxHorizontal}>
            <FlatList
              horizontal
              keyExtractor={film => film.id}
              data={shorts}
              renderItem={(film) => {
                return(<ShoftFilmTile film={film} badge="staff-pick"/>)
              }}
            />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.category}>Featured</Text>
          <View style={{backgroundColor: 'lightgrey'}}>
            <FlatList
              keyExtractor={film => film.id}
              data={shorts}
              renderItem={(film) => {
                return(<ShoftFilmTile film={film} badge="featured"/>)
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  app: {
    display: 'flex',
    backgroundColor: 'white',
    overflow: 'hidden',
    width: '100%',
    margin : 0,
    padding: 0
  },
  section: {
    padding: 12
  },
  category: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  scrollBoxHorizontal: {
    flexDirection: 'row',
    overflow: 'hidden',
    overflow: 'scroll',
    alignItems: 'flex-start',
    justifyContent: 'center',
    maxHeight: 550
  },
  featuredFilms: {
    width: '100%',
  }
})
