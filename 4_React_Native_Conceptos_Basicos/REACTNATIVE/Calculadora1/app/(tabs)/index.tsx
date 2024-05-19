import React, { useState } from 'react';
import { Image, StyleSheet, Platform, TextInput, Text, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function HomeScreen() {

  const [numero1,setNumero1] = useState('0')
  const [numero2,setNumero2] = useState('0')
  const [resultado,setResultado] = useState('0')

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}></ThemedView>
      <ThemedView style={styles.stepContainer}>
        
        <ThemedText type="subtitle">CALCULADORA</ThemedText>
        <Text style = {styles.texto}>Primer número</Text>
        <TextInput
          style={styles.input}
          value = {numero1}
          onChangeText={(numeroStr1)=>{
            setNumero1(numeroStr1)
          }}
        />
        <Text style = {styles.texto}>Segundo número</Text>
        <TextInput 
          style = {styles.input}
          value={numero2}
          onChangeText={(numeroStr2) => {
            setNumero2(numeroStr2)
          }}
        />
        <ThemedText type="subtitle">RESULTADO: {resultado} </ThemedText>
        <Button title='Sumar' onPress={()=>{
          let num1 = parseInt(numero1);
          let num2 = parseInt(numero2);
          let suma = (num1 + num2);
          setResultado(""+suma);
        }}/>
        <Button title='Restar' onPress={() => {
          let num1 = parseInt(numero1);
          let num2 = parseInt(numero2);
          let resultado = (num1-num2);
          setResultado(""+resultado);
        }}/>
        <Button title='Multiplicar' onPress={()=>{
          let num1 = parseInt(numero1);
          let num2 = parseInt(numero2);
          let resultado = num1 * num2;
          setResultado(""+resultado);
        }}
          />
        <Button title='Dividir' onPress={() => {
          let num1 = parseInt(numero1);
          let num2 = parseInt(numero2);
          let resultado = num1 / num2;
          setResultado(""+resultado);
        }}
        />

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
    alignItems: 'center'
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input:{
    width:150,
    fontSize:15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor:'white',
    color: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center'
  },
  texto:{
    color: 'white'
  }
});
