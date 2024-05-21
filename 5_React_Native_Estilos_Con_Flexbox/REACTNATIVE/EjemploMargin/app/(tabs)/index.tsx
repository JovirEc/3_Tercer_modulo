import {View,Button,Text, StyleSheet,TextInput} from 'react-native';
import React from 'react';
import {useState} from 'react'

export default function App(){

  const [nombre,setNombre] = useState('');
  const [apellido,setApellido] = useState('');

  return(
    <View style = {styles.principal}>
      <Text style = {styles.titulo}>EJEMPLO MARGIN</Text>
      <TextInput
        style = {styles.caja}
        value = {nombre}
        onChangeText={setNombre}
        placeholder='Ingrese su nombre'
      />
      <TextInput
        style = {styles.caja}
        value={apellido}
        onChangeText={setApellido}
        placeholder='Ingrese su apellido'
      />
      <Button title='OK'></Button>

    </View>
  );


}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'stretch',
    paddingHorizontal:10,
  },
  caja:{
    borderWidth: 2,
    borderColor: 'gray',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  titulo:{
    fontSize:16,
    marginBottom:10,
    fontWeight:'bold',
    textAlign:'center',
  }
})
