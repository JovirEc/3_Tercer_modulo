import {Text,View,Button,TextInput,StyleSheet} from 'react-native';
import React,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//NAVIGATION
import { Home } from './app/screens/HomeScreen.js'
import { Contacts } from './app/screens/ContactsScreen'
import { Productos } from './app/screens/ProductosScreen.js'

const Stack = createNativeStackNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeNav' component={Home} />
        <Stack.Screen name='ContactosNav' component={Contacts}/>
        <Stack.Screen name='ProductosNav' component={Productos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  principal: {
    flex:1,
    backgroundColor:'white',
    padding:20,
    justifyContent: 'center',
    alignItems: 'center'
  },
})