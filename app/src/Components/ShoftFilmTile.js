import React from 'react'
import { StyleSheet, View} from 'react-native'
import BadgedTile from './BadgedTile'
import FeaturedTile from './FeaturedTile'

export default function ShoftFilmTile(props) {
  const film = props.film.item
  const badge = props.badge

  return (
    <View style={styles.tile}>
      {
        badge == 'award-winning' || badge == 'staff-pick' || badge == 'new-release' ? <BadgedTile film={film} badge={badge}/> : <FeaturedTile film={film} badge={badge}/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  tile: {
    marginVertical: 12,
    maxHeight: 600
  }
})
