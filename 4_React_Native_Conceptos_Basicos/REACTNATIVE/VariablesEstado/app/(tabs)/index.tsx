import { Image, StyleSheet, Platform, Button, Alert } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {useState} from 'react';
import React from 'react';

export default function HomeScreen() {
  /*const arreglo = useState(0);
  const contadorEstado = arreglo[0];
  const setContadorEstado = arreglo[1];*/

  const [contadorEstado,setContadorEstado] = useState(0);

  const incrementar = () => {
    setContadorEstado(contadorEstado+1);
  }

  const decrementar = () => {
    setContadorEstado(contadorEstado-1);
  }

//VIDAS
  const [vidas, setVidas] = useState(5);

  const restarVida = () => {
    if(vidas > 1){
      setVidas(vidas-1);
    }else if(vidas == 1){
      setVidas(vidas-1);
      Alert.alert('Advertencia','Game Over')
    }else{
      setVidas(0);
    }
  }

  const premiarVidas = ()=>{
    setVidas (vidas + 3);
  }

  /*  <ThemedText>CONTADOR VIDAS: {vidas} </ThemedText>
      <Button title='PERDER VIDA' onPress={restarVida}></Button>
      <Button title='PREMIAR' onPress={premiarVidas}></Button>
  */

  return (
    
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bienvenido</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">KrakeDev</ThemedText>
        <ThemedText>Variables de Estado</ThemedText>
        <ThemedText>CONTADOR ESTADO: {contadorEstado} </ThemedText>
        <Button title="incrementar" onPress = {incrementar}></Button>
        <Button title='decrementar' onPress={decrementar}></Button>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>CONTADOR VIDAS: {vidas} </ThemedText>
        <Button title='PERDER VIDA' onPress={restarVida}></Button>
        <Button title='PREMIAR' onPress={premiarVidas}></Button>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
