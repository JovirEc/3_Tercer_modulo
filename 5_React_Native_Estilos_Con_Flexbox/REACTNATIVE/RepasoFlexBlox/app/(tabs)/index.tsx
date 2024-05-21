import { Image, StyleSheet, Platform, Text, Button, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';

export default function HomeScreen() {
  return (
    <View style={styles.principal}>
      <View style = {styles.cont1_1}>
        <Button title='X'></Button>
        <Button title='Y'></Button>
        <Button title='Z'></Button>
      </View>
      <View style = {styles.cont1_2}>
        <View style = {styles.cont2_1}>
          <View style = {styles.cont3_1}>
            <Button title='BOTON 1'></Button>
            <Button title='BOTON 2'></Button>
          </View>
          <View style = {styles.cont3_2}>
            <Button title='OPERACION 1'></Button>
            <Button title='OPERACION 2'></Button>
            <Button title='OPERACION 3'></Button>
          </View>
        </View>
        <View style = {styles.cont2_2}>
          <Button title='ACCION 1'></Button>
          <Button title='ACCION 2'></Button>
        </View>
      </View>
      <View style = {styles.cont1_3}>
        <Button title='BOTON FINAL'></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  principal: {
    backgroundColor: '#fff',
    flex: 1,
  },
  cont1_1:{
    backgroundColor:'cyan',
    flex:1,
    flexDirection: 'row',
    justifyContent:'flex-end',
    alignItems:'center',
  },
  cont1_2:{
    backgroundColor:'green',
    flex:6,
  },
  cont1_3:{
    backgroundColor:'orange',
    flex:1,
    justifyContent:'center',
    alignItems:'flex-start'
  },
  cont2_1:{
    backgroundColor:'magenta',
    flex:4,
    flexDirection:'row',
  },
  cont2_2:{
    backgroundColor:'blue',
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  cont3_1:{
    backgroundColor:'yellow',
    flex:1,
    justifyContent:'space-around'
  },
  cont3_2:{
    backgroundColor:'lightgray',
    flex:1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});