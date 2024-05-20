import { Image, StyleSheet, Platform, TextInput, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function HomeScreen() {

  const [numero,setNumero] = useState("$0")
  const [resultado,setResultado] = useState("0.0")
  const [tipoCambio,setTipoCambio] = useState("Tipo de Cambio")

  let obtenerDolares = () => {
    let extraerNum = numero.split('$');
    let obtenerNum = extraerNum[1];
    let numFloat = parseFloat(obtenerNum);
    return numFloat;
  }

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
        <ThemedText type="subtitle">CONVERTIDOR</ThemedText>
        <ThemedText>INGRESE DÓLARES</ThemedText>
        <TextInput
          style = {styles.cajaTexto}
          value = {numero}
          onChangeText={(txt)=>{
            if(txt.length>0){
              setNumero(txt);
            }}}/>
        <ThemedText> TOTAL:</ThemedText>
        <ThemedText style = {styles.textoGeneral}> {resultado}</ThemedText>
        <ThemedText style = {styles.textoGeneral}> {tipoCambio}</ThemedText>
        <Button title='Pesos MXN' onPress={()=>{
          let dolares = obtenerDolares();
          let resultado = dolares * 16.59;
          setResultado(""+resultado)
          setTipoCambio("Pesos Mexicanos")
        }}/>
        <Button title = 'Pesos COL'
        onPress={()=>{
          let dolares = obtenerDolares();
          let convertirCOL = dolares*3830.75
          setResultado(""+convertirCOL);
          setTipoCambio("Pesos Colombianos");
        }}
        />
        <Button title = 'Euros'
        onPress={()=>{
          let dolares = obtenerDolares();
          let convertirEuros = dolares*0.9119;
          setResultado(""+convertirEuros);
          setTipoCambio("Euros")
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
  cajaTexto: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    width: 125,
    height: 50,
    fontSize: 20,
    borderRadius: 8
  },
  textoGeneral: {
    color: 'white',
    fontSize: 20,
    fontWeight: 700
  },
  botones:{
    width:200,
    borderRadius:10,
  }
});
