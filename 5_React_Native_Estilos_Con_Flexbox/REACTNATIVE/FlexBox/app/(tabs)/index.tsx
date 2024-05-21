import { Image, StyleSheet, Platform, Text, Button, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style = {styles.contenedor2}></View>
      <View style = {styles.contenedor3}>
        <View style = {styles.contenedor4}></View>
        <View style = {styles.contenedor5}>
          <View style = {styles.contenedor6}></View>
          <View style = {styles.contenedor7}>
            <Button title='BOTON 1'></Button>
            <Button title='BOTON 2'></Button>
            <Button title='BOTON 3'></Button>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'gray',
    flex: 1,
    flexDirection: 'column',
  },
  contenedor2:{
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column',
  },
  contenedor3:{
    backgroundColor: 'green',
    flex: 3,
    flexDirection: 'column',
  },
  contenedor4:{
    backgroundColor: 'yellow',
    flex: 1,
    flexDirection: 'column',
  },
  contenedor5:{
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  contenedor6:{
    flex:1,
    backgroundColor:'pink',
    flexDirection: 'column',
  },
  contenedor7:{
    flex:2,
    backgroundColor:'purple',
    flexDirection: 'column',
    justifyContent:'space-around',
    alignItems:'stretch'

  }
});