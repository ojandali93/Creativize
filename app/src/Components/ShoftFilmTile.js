import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function ShoftFilmTile() {
  return (
    <View style={styles.tile}>
      <Image style={styles.thumbnail} source={require('../../assets/images/maxresdefault.jpeg')}/>
      <View style={styles.details}>
        <View style={styles.detailRow}>
          <View style={styles.titleContainer}>
            {/* <Image style={styles.badge} source={require('../../assets/outline_workspace_premium_black_24dp.png')}/> */}
            <Text style={styles.title}>REMOVED: Away from home</Text>
          </View>
          <Text> Suspense, Thriller</Text>
        </View>
        {/* <View style={styles.detailRow}>
          <Text style={styles.author}>Nathanael Matanick</Text>
          <Text> 2013 / 10 min.</Text>
        </View>
        <View>
          <Text>A 10-year-old girl navigates her way through the foster care system, after being removed from her home and separated from her younger brother.</Text>
        </View> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tile: {
    display: 'flex',
    maxHeight: 420,
    marginVertical: 12,
    marginHorizontal: 12,
    backgroundColor: 'rgb(237, 237, 237)'
  },
  thumbnail: {
    maxWidth: '100%',
    maxHeight: 300,
    borderRadius: 5
  },
  details: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    paddingHorizontal: 18,
    marginTop: 12,
  },
  detailRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  badge: {
    alignItems: 'center',
    maxHeight: 14,
    maxWidth: 14,
    marginRight: 4,
  },
  author: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})
