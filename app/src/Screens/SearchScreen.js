import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons'
import ResultsTile from '../Components/ResultsTile'
import axios from 'axios'

export default function SearchScreen() {
  const [text, setText] = useState()
  const [results, setResults] = useState()

  let options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      channelId: 'UCrSvhrtUgpZT3EU0x1Zoy-w',
      part: 'snippet,id',
      order: 'date',
      maxResults: '20'
    },
    headers: {
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
      'x-rapidapi-key': 'd215d48d9cmsh70fd20aaaf82139p17c47cjsnaab25fce9232'
    }
  };

  useEffect(() => {
    axios.request(options)
    .then(function (response) {
      console.log(response.data.items)
      setResults(response.data.items)
    })
    .catch(function (error) {
      console.error(error);
    });  
  }, [])

  return (
    <>
      <View style={styles.screen}>
        <View style={styles.searchBar}>
          <FontAwesome name="search" size={24}/>
          <TextInput
            style={styles.textInput}
            onChangeText={setText}
            value={text}
            placeholder="Search Shorts"
            autoComplete='false'
          />
        </View>
        {
          text ? <Text style={styles.results}>Search Results: "{text}"</Text> : null
        }
        <FlatList
          data={results}
          keyExtractor={short => short.id.videoId}
          renderItem={(short) => {
            return(<ResultsTile short={short}/>)
          }}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    display: 'flex',
    backgroundColor: 'white',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    margin : 0,
    padding: 12,
    marginTop: 48
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 8,
    alignItems: 'center',
    marginBottom: 12
  },
  textInput: {
    marginLeft: 12,
    fontSize: 20,
  },
  results: {
    fontSize: 28,
    fontWeight: 'bold'
  }
})