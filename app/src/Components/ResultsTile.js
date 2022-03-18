import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function ResultsTile(props) {
  const {
    short,
    badge
  } = props

  const currentShort = short.item.snippet
  const splitChannel = currentShort.title.split(' | ')
  const splitVideoTitle = splitChannel[0]
  const splitTitle = splitVideoTitle.split('&quot;')
  const shortTitleAuthor = splitTitle[1] + splitTitle[2]

  const parseDate = currentShort.publishedAt.split('T')
  const parseMDY = parseDate[0].split('-')
  const year = parseMDY[0]
  const month = parseMDY[1]
  const date = parseMDY[2]
  const releaseDate = month + '-' + date + '-' + year

  const navigation = useNavigation()

  return (
    <>
      <View style={styles.tile}>
        <TouchableOpacity onPress={() => {
          navigation.navigate("ShortDetailScreen", {short: short})
        }}>
          <View style={styles.tileContent}>
            <Image style={styles.thumbnail} source={{uri: currentShort.thumbnails.high.url}}/>
            <View style={styles.tileDetails}>
              <View style={styles.rowData}>
                <Text style={styles.title}>{shortTitleAuthor}</Text> 
                {/* <Text style={styles.stitle}>{shortTail}</Text>   */}
              </View>
              <View style={styles.rowData}>
                <Text style={styles.text}>{currentShort.channelTitle}</Text>
                <Text style={styles.text}>{releaseDate}</Text>
              </View>
              <View style={styles.rowData}>
                <Text style={styles.text}>{currentShort.description}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  tile: {
    marginVertical: 12,
    maxHeight: 600,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#E5E4E2'
  },
  thumbnail: {
    height: 220,
    width: '100%',
    borderRadius: 5
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
    fontSize: 18,
    fontWeight: 'bold'
  },
  genre: {
    fontSize: 20
  },
  text: {
    fontSize: 16
  }
})

