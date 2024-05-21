import {Text,View,Button,TextInput,StyleSheet} from 'react-native';
import React,{useState} from 'react';

export default function CalcularIMC(){
  const [estatura,setEstatura] = useState('');
  const [peso,setPeso] = useState('');
  const [resultado,setResultado] = useState('')
  const [resultadoIMC,setResultadoIMC] = useState('')

  return(
    <View style = {styles.principal}>
      <View style = {styles.cont1_1}></View>
      <View style = {styles.cont1_2}>
        <View style = {styles.cont2_1}>
          <Text style = {styles.titulo}>CALCULADORA IMC</Text>
        </View>
        <View style = {styles.cont2_2}>
          <View style = {styles.cont3_1}>
            <Text style = {styles.subTitulo}>ESTATURA</Text>
            <Text style = {styles.textoGeneral}>EN CENTÍMETROS</Text>
            <TextInput
              style = {styles.caja}
              placeholder='0'
              value={estatura}
              onChangeText={(txt)=>{
                setEstatura(txt)
              }}
            />
          </View>
          <View style = {styles.cont3_1}>
            <Text style = {styles.subTitulo}>PESO</Text>
            <Text style = {styles.textoGeneral}>EN KILOGRAMOS</Text>
            <TextInput
              style = {styles.caja}
              placeholder='0'
              value={peso}
              onChangeText={(txt)=>{
                setPeso(txt);
              }}
              />
          </View>
        </View>
        <View style = {styles.cont2_3}>
          <Text style = {styles.subTitulo}>RESULTADO</Text>
          <TextInput
            style={styles.caja2}
            placeholder='0'
            value={resultado}
            />
          <Text style = {styles.textoGeneral}>{resultadoIMC}</Text>
        </View>
        <View style = {styles.cont2_4}>
          <Button
            title='CALCULAR'
            onPress={()=>{
              let extraerEstatura = parseFloat(estatura);
              let estaturaFinal = extraerEstatura/100;
              let pesoFinal = parseFloat(peso);

              let resultadoFinal = pesoFinal / (estaturaFinal*estaturaFinal)
              let result = resultadoFinal.toFixed(2)
              setResultado(""+result)
              if(resultadoFinal < 18.5){
                setResultadoIMC("Peso inferior al normal")
              }else if(resultadoFinal>= 18.5 && resultadoFinal<=24.9){
                setResultadoIMC("Peso normal")
              }else if(resultadoFinal>= 25.0 && resultadoFinal<=29.9){
                setResultadoIMC("Peso superior al normal")
              }else{
                setResultadoIMC("Tiene obesidad")
              }
              
            }}
            
            />
        </View>
      </View>
      <View style = {styles.cont1_1}></View>




    </View>
  );
};

const styles = StyleSheet.create({
  principal: {
    flex:1,
    backgroundColor:'white',
    padding:20,
  },
  cont1_1:{
    flex:1,
  },
  cont1_2:{
    flex:5,
    backgroundColor:'rgb(240,240,240)',
    paddingHorizontal:10,
    borderRadius:20
  },
  cont2_1:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
  },
  cont2_2:{
    flex:2,
    flexDirection:'row',
    paddingVertical:20,
  },
  cont2_3:{
    flex:1,
    alignItems:'center'
  },
  cont2_4:{
    flex:1,
  },
  cont3_1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'lightgray',
    borderRadius:10,
    margin:5
  },
  titulo:{
    fontSize:17,
    fontWeight:'bold',
  },
  subTitulo:{
    fontSize:15,
    fontWeight:'semibold',
  },
  textoGeneral:{
    fontSize:12,
    fontWeight:'normal',
  },
  caja:{
    backgroundColor:'white',
    height:50,
    width:120,
    borderColor:'lightgray',
    borderWidth:1,
    borderRadius:10,
    textAlign:'center',
    fontSize:20,
    fontWeight:'semibold',
    margin:15
  },
  caja2:{
    backgroundColor:'white',
    height:50,
    width:140,
    borderColor:'lightgray',
    borderWidth:1,
    borderRadius:10,
    textAlign:'center',
    fontSize:20,
    fontWeight:'semibold',
  }
});
