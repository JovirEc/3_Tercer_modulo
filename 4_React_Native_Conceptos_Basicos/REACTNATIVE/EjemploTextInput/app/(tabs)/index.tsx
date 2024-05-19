import { Image, StyleSheet, Platform, Button } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';


export default function HomeScreen() {

  const [nombre, setNombre] = useState("Ingrese su nombre");
  const [apellido,setApellido] = useState("Ingrese su apellido");
  const [nombreCompleto,setNombreCompleto] = useState("");

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      <ThemedView style={styles.stepContainer}>
        <ThemedText>Ejemplo TextInput</ThemedText>
        <ThemedText>Hola {nombreCompleto}</ThemedText>
        <TextInput
          style={styles.cajaTexto} 
          value={nombre}
          onChangeText={(txt)=>{
              setNombre(txt);
          }}
        ></TextInput>
        <TextInput
          style = {styles.cajaTexto}
          value={apellido}
          onChangeText={(txt) => {
            setApellido(txt);
          }}
        ></TextInput>
        <Button
        title = "Saludar"
        onPress={() => {
          let completo = nombre+' '+apellido;
          setNombreCompleto(completo);
        }}
        ></Button>
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
  cajaTexto: {
    borderColor:"white",
    borderWidth:1,
    color:'white',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10
  }
});
