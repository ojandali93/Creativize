import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

export default function DetailsTile({ short }) {

  const details = short[0]
  console.log(details.snippet.channelTitle)

  const formatTitle = (title) => {
    const splitChannel = title.split(' | ')
    const splitVideoTitle = splitChannel[0]
    const splitTitle = splitVideoTitle.split('\"')
    const shortTitleAuthor = splitTitle[1] + splitTitle[2]
    return shortTitleAuthor
  }

  const formatDate = (currentDate) => {
    const parseDate = currentDate.split('T')
    const parseMDY = parseDate[0].split('-')
    const year = parseMDY[0]
    const month = parseMDY[1]
    const date = parseMDY[2]
    const releaseDate = month + '-' + date + '-' + year
    return releaseDate
  }

  return (
    <>
      <View>
        <View style={styles.tileContent}>
          <Image style={styles.thumbnail} source={{uri: details.snippet.thumbnails.high.url}}/>
          <View style={styles.rowData}>
            <Text style={styles.title}>{formatTitle(details.snippet.title)}</Text> 
          </View>
          <View style={styles.rowData}>
            <Text style={styles.channel}>{details.snippet.channelTitle}</Text> 
            <Text style={styles.channel}>{formatDate(details.snippet.publishedAt)}</Text> 
          </View>
          <View style={styles.rowData}>
            <Text style={styles.channel}>{details.snippet.tags[0]}</Text> 
            <View style={styles.stats}>
              <Text style={styles.stat}>Views: {details.statistics.viewCount}</Text> 
              <Text style={styles.stat}>Likes: {details.statistics.likeCount}</Text> 
            </View>
          </View>
          <View style={styles.breakline}></View>
          <View style={styles.rowData}>
            <Text style={styles.channel}>{details.snippet.description}</Text> 
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  tileContent: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
    overflow: 'scroll'
  },
  thumbnail: {
    height: 220,
    width: '100%',
    borderRadius: 5,
    marginBottom: 8
  },
  rowData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 4
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  channel: {
    fontSize: 20
  },
  stats: {
    display: 'flex',
    flexDirection: 'row'
  },
  stat: {
    fontSize: 20,
    marginLeft: 4
  },
  breakline: {
    height: 4,
    width: '100%',
    backgroundColor: 'grey',
    marginBottom: 8
  }
})
