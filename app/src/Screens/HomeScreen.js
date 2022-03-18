import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import axios from 'axios'
import ShoftFilmTile from "../Components/ShoftFilmTile"
import { FlatList, ScrollView } from 'react-native-gesture-handler'

export default function HomeScreen() {
  const [shorts, setShorts] = useState([])
  const [awardWinning, setAwardWinning] = useState([])
  const [recentReleases, setRecentReleases] = useState([])
  const [staffPick, setStaffPick] = useState([])
  const [featured, setFeatured] = useState([])

  let awardWinningList = []
  let recentReleaseList = []
  let staffPickList = []
  let featuredList = []

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
      setShorts(response.data.items)
    })
    .catch(function (error) {
      console.error(error);
    });  
  }, [])

  useEffect(() => {
    console.log(shorts.length)
    for(let i = 0; i < shorts.length; i++){
      if(i >= 12){
        featuredList.push(shorts[i])
      }
      if(i >= 8 && i < 12){
        staffPickList.push(shorts[i])
      }
      if(i >= 4 && i < 8){
        awardWinningList.push(shorts[i])
      }
      if(i < 4){
        recentReleaseList.push(shorts[i])
      }
    }
    setAwardWinning(awardWinningList)
    setRecentReleases(recentReleaseList)
    setStaffPick(staffPickList)
    setFeatured(featuredList)
    
  }, [shorts])

  return (
    <View style={styles.app}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.category}>Award Winning</Text>
          <View style={styles.scrollBoxHorizontal}>
            <FlatList
              horizontal
              data={awardWinning}
              keyExtractor={short => short.id.videoId}
              renderItem={(short) => {
                return(<ShoftFilmTile short={short} badge="award-winning"/>)
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
              keyExtractor={short => short.id.videoId}
              data={recentReleases}
              renderItem={(short) => {
                return(<ShoftFilmTile short={short} badge="new-release"/>)
              }}
            />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.category}>Staff Picks</Text>
          <View style={styles.scrollBoxHorizontal}>
            <FlatList
              horizontal
              keyExtractor={short => short.id.videoId}
              data={staffPick}
              renderItem={(short) => {
                return(<ShoftFilmTile short={short} badge="staff-pick"/>)
              }}
            />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.category}>Featured</Text>
          <View>
            <FlatList
              keyExtractor={short => short.id.videoId}
              data={featured}
              renderItem={(short) => {
                return(<ShoftFilmTile short={short} badge="featured"/>)
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
    padding: 0,
    marginTop: 48
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
