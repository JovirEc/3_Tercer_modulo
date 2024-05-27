import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GradeForm } from './app/screens/GradeForm'
import { ListGrades } from './app/screens/ListGrades'
import {createDrawerNavigator} from '@react-navigation/drawer'

const StackGrades = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNav=()=>{
  return (
    <Drawer.Navigator>
      <Drawer.Screen
      name = "DrawerNotasNav"
      component = {ListaDeGrados}
      options={{
        title:'Productos'
      }}
      />
      <Drawer.Screen
      name = "DrawerEjemploTabs"
      component = {ListaDeGrados}
      options={{
        title:'Ejemplos Tabs'
      }}
      />
    </Drawer.Navigator>
  )
}

const ListaDeGrados = () =>{
  <StackGrades.Navigator>
    <StackGrades.Screen
      name='ListGradesNav'
      component={ListGrades}
    />
    <StackGrades.Screen
      name='GradeFormNav'
      component={GradeForm}
    />
  </StackGrades.Navigator>
}


export default function App() {

  return (
    <NavigationContainer>
      <DrawerNav/>
    </NavigationContainer>
  );
}