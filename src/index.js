import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import api from './services/api'
import { useEffect, useState } from 'react'

export default function App() {
  const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   api.get('projects').then(response => {
  //     console.log(response.data)
  //     // setProjects(response.data);
  //   }, [])
  // })

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#7159c1'/>
      <View style={styles.container}>
        <Text style={styles.title}>Hello GoStack</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})