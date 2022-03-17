import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function FeaturedTile(props) {
  const film = props.film

  return (
    <View style={styles.tileContent}>
      <Image style={styles.thumbnail} source={require("../../assets/images/sf-1-min.png")}/>
      <View style={styles.tileDetails}>
        <View style={styles.rowData}>
          <View style={styles.titleName}>
            <Text style={styles.title}>{film.name}</Text>
          </View>
          <Text style={styles.genre}>{film.genre}</Text>  
        </View>
        <View style={styles.rowData}>
          <Text style={styles.text}>{film.director}</Text>
          <Text style={styles.text}>{film.release}</Text>
          <Text style={styles.text}>{film.length}</Text>
        </View>
        <View style={styles.rowData}>
          <Text style={styles.text}>{film.blurb}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tileContent: {
    display: 'flex',
    flexDirection: 'row'
  },
  thumbnail: {
    height: 260,
    width: 160
  },
  tileDetails: {
    padding: 4
  },
  rowData: {
    width: 235,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 4
  },
  titleName: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  badge: {
    height: 20,
    width: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  genre: {
    fontSize: 20
  },
  text: {
    fontSize: 16
  }
})