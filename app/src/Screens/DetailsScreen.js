import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import DetailsTile from '../Components/DetailsTile';

export default function DetailsScreen(props) {

  const shortId = props.route.params.short.item.id.videoId

  const [details, setDetails] = useState({})

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
        setDetails(response.data.items)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [])

  return (
    <>
      <View style={styles.detailPage}>
        {
          Object.keys(details).length === 0 ? <Text>Loading Details</Text> : <DetailsTile short={details} />
        }
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  detailPage: {
    display: 'flex',
    width: '100%',
    height: '100%',
    overflow: 'scroll',
    padding: 12,
    marginTop: 48
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