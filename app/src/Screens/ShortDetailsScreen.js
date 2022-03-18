import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default function ShortDetailsScreen(props) {

  const currentShort = props.route.params.short.item
  const shortId = currentShort.id.videoId

  const [details, setDetails] = useState()
  const [snippet, setSnippet] = useState({})
  const [title, setTitle] = useState('')
  const [release, setRelease] = useState('')

  // const shortDetails = currentShort.snippet
  // const thumbnail = shortDetails.thumbnails.high.url

  // const splitChannel = shortDetails.title.split(' | ')
  // const splitVideoTitle = splitChannel[0]
  // const splitTitle = splitVideoTitle.split('&quot;')
  // const shortTitleAuthor = splitTitle[1] + splitTitle[2]

  // const parseDate = shortDetails.publishedAt.split('T')
  // const parseMDY = parseDate[0].split('-')
  // const year = parseMDY[0]
  // const month = parseMDY[1]
  // const date = parseMDY[2]
  // const releaseDate = month + '-' + date + '-' + year

  // const thumbnail = details.snippet.thumbnails.high.url

  const axios = require("axios").default;

  let options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/videos',
    params: {part: 'contentDetails,snippet,statistics', id: shortId},
    headers: {
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
      'x-rapidapi-key': 'd215d48d9cmsh70fd20aaaf82139p17c47cjsnaab25fce9232'
    }
  };

  useEffect(() => {
    axios.request(options)
      .then(function (response) {
        // console.log(response.data);
        setDetails(response.data.items)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [])

  useEffect(() => {
    setSnippet(details[0].snippet)
    const splitChannel = snippet.title.split(' | ')
    const splitVideoTitle = splitChannel[0]
    const splitTitle = splitVideoTitle.split('&quot;')
    const shortTitleAuthor = splitTitle[1] + splitTitle[2]
    setTitle(shortTitleAuthor)

    const parseDate = snippet.publishedAt.split('T')
    const parseMDY = parseDate[0].split('-')
    const year = parseMDY[0]
    const month = parseMDY[1]
    const date = parseMDY[2]
    const releaseDate = month + '-' + date + '-' + year
    setReleaseDate(releaseDate)
  }, [details])
  
  return (
    <View style={styles.detailPage}>
      {/* <View style={styles.detailContent}>
        <Image style={styles.thumbnail} source={{uri: snippet.thumbnails.high.url}}/>
      </View>
      <View style={styles.rowData}>
        <Text style={styles.title}>{title}</Text> 
      </View>
      <View style={styles.rowData}>
        <Text style={styles.text}>{snippet.channelTitle}</Text>
        <Text style={styles.text}>{release}</Text>
      </View>
      <View style={styles.rowData}>
        <Text style={styles.text}>{snippet.description}</Text>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  detailPage: {
    display: 'flex',
    width: '100%',
    height: 780,
    backgroundColor: 'lightgrey',
    padding: 12
  },
  thumbnail: {
    height: 228,
    width: '100%'
  },
  rowData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
})