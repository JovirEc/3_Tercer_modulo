import {Text,View,Button,TextInput,StyleSheet} from 'react-native';
import React,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { Home } from './screens/HomeScreen'
import { Contacts } from './screens/ContactsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeNav' component={Home} />
        <Stack.Screen name='ContactsNav' component={Contacts}/>
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