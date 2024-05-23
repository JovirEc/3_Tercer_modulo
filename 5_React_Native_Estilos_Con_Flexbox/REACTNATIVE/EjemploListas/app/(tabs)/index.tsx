import {Text,View,Button,TextInput,StyleSheet, FlatList} from 'react-native';
import React,{useState} from 'react';

let personas = [
  {nombre:'Thor',apellido:'Thillas',cedula:'0913467865'},
  {nombre:'Amber',apellido:'Flores',cedula:'0913467472'},
  {nombre:'Peter',apellido:'Parker',cedula:'0913467146'},
]
let ItemPersona = (props)=>{
  return (<View style = {styles.itemPersona}>
    <View style={styles.itemIndice}>
      <Text style={styles.textoPrincipal}>{props.indice}</Text>
    </View>
    <View style={styles.itemContenido}>
      <Text style={styles.textoPrincipal}>{props.persona.nombre} {props.persona.apellido}</Text>
      <Text style={styles.textoSecundario}>{props.persona.cedula}</Text>
    </View>
   </View>)
}
export default function App(){
  
  let limpiar=()=>{
    setTxtCedula(null);
    setTxtNombre(null);
    setTxtApellido(null)
  }

  let guardarPersona=()=>{
    let persona = {nombre: txtNombre, apellido: txtApellido, cedula:txtCedula}
    personas.push(persona)
    limpiar();
  }

  const [txtCedula,setTxtCedula] = useState('')
  const [txtNombre,setTxtNombre] = useState('');
  const [txtApellido,setTxtApellido] = useState('');


  return(
    <View style = {styles.principal}>
      <View style={styles.areaCabecera}>
        <Text>PERSONAS</Text>
        <TextInput
          style={styles.txt}
          value={txtCedula}
          placeholder='Ingrese su cedula'
          onChangeText={setTxtCedula}
          keyboardType='numeric'
        />
        <TextInput
          style={styles.txt}
          value={txtNombre}
          placeholder='Ingrese su nombre'
          onChangeText={setTxtNombre}
        />
        <TextInput
          style={styles.txt}
          value={txtApellido}
          placeholder='Ingrese su apellido'
          onChangeText={setTxtApellido}
        />
      </View>
      <View style={styles.areaBotones}>
        <Button title='Guardar'
        onPress={()=>{
          guardarPersona()

        }}
        />
        <Button title='Limpiar'/>
      </View>
      <View style={styles.areaContenido}>
        <FlatList style = {styles.listas}
        data={personas}
        renderItem={(elemento)=>{
          return <ItemPersona 
            indice = {elemento.index}
            persona = {elemento.item}
            ></ItemPersona>
          }}
        keyExtractor={(item)=>{
          return item.cedula;
        }}
        
        />
      </View>
      <View style={styles.areaPie}>
        <Text>AUTOR: JOEL VILLAMAR</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  principal: {
    flex:1,
    backgroundColor:'white',
    padding:20,
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 50,
    paddingHorizontal: 10
  },
  listas:{
    //backgroundColor:'lightpink'
  },
  itemPersona:{
    backgroundColor:'lemonchiffon',
    marginBottom:10,
    padding:10,
    flexDirection:'row',
  },
  textoPrincipal:{
    fontSize:20,
  },
  textoSecundario:{
    fontStyle:'italic',
    fontSize:16,
    paddingLeft:15
  },
  areaCabecera:{
    flex:4,
    //backgroundColor:'green',
    justifyContent:'center'
  },
  areaContenido:{
    flex:6,
    //backgroundColor:'coral'
  },
  areaPie:{
    flex:1,
    //backgroundColor:'cornflowerblue',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  itemIndice:{
    //backgroundColor:'darkgray',
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    fontSize:20
  },
  itemContenido:{
    //backgroundColor:'darkorange',
    flex:10,
    paddingLeft:5
  },
  txt:{
    borderWidth:1,
    borderColor:'gray',
    paddingTop:3,
    paddingHorizontal:5,
    marginBottom:5
  },
  areaBotones:{
    flexDirection:'row',
    justifyContent:'space-evenly'
  }
})