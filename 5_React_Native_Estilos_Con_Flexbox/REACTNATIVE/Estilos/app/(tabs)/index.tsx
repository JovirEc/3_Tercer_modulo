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
      <Button title = 'COMP 1'/>
      <Button title = 'COMP 2' color='green'/>
      <Button title = 'COMP 3'/>
      <StatusBar style="light"/>


    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'stretch',
  }
});
