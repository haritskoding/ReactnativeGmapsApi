import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import ShowMapp from './src/ShowMap'

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Hallo dunia </Text>
        <View style={styles.map}>
          <ShowMapp />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  map: {
    backgroundColor: 'red',
    width: 220,
    height: 220
  }
})

export default App
