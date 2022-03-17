import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function BadgedTile(props) {
  const film = props.film
  const badge = props.badge
  const navigation = useNavigation()

  return (
    <>
      <TouchableOpacity onPress={() => {
        navigation.navigate("ShortDetailScreen")
      }}>
        <View style={styles.tileContent}>
          <Image style={styles.thumbnail} source={require("../../assets/images/sf-1-min.png")}/>
          <View style={styles.tileDetails}>
            <View style={styles.rowData}>
              <View style={styles.titleName}>
                {
                  badge == 'award-winning' ? <Image style={styles.badge} source={require('../../assets/outline_workspace_premium_black_24dp.png')}/> : null
                }
                {
                  badge == 'new-release' ? <Image style={styles.badge} source={require('../../assets/outline_update_black_24dp.png')}/> : null
                }
                {
                  badge == 'staff-pick' ? <Image style={styles.badge} source={require('../../assets/outline_verified_black_24dp.png')}/> : null
                }
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
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  tileContent: {
    maxWidth: 260,
    marginRight: 12,
  },
  thumbnail: {
    height: 380,
    width: 260
  },
  tileDetails: {
    padding: 4
  },
  rowData: {
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
    width: 20,
    marginRight: 4
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