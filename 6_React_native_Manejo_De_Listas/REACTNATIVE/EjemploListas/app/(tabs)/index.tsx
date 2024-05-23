import {Text,View,Button,TextInput,StyleSheet, FlatList, Alert} from 'react-native';
import React,{useState} from 'react';

let personas = [
  {nombre:'Thor',apellido:'Thillas',cedula:'0913467865'},
  {nombre:'Amber',apellido:'Flores',cedula:'0913467472'},
  {nombre:'Peter',apellido:'Parker',cedula:'0913467146'},
]

//Indica si se está creando una nueva persona o se está modificando.
let esNuevo = true;
let indiceSeleccionado = -1

export default function App(){

  const [txtCedula,setTxtCedula] = useState('')
  const [txtNombre,setTxtNombre] = useState('');
  const [txtApellido,setTxtApellido] = useState('');
  const [numElementos,setNumElementos] = useState(personas.length)
  
  let limpiar=()=>{
    setTxtCedula('');
    setTxtNombre('');
    setTxtApellido('')
    esNuevo=true;
  }

  
  let existePersona = ()=>{
    for(let i=0;i<personas.length;i++){
      if(personas[i].cedula == txtCedula){
        return true;
      }
    }
    return false;
  }

//Esta variable almacena el índice del arreglo del elemento seleccionado para edición.
  let guardarPersona=()=>{
    if(esNuevo){
      if(existePersona()){
        Alert.alert("INFO:","Ya existe una persona con la cedula:"+txtCedula)
      }else{
        let persona = {nombre: txtNombre, apellido: txtApellido, cedula:txtCedula}
        personas.push(persona)
      }
    }else{
      personas[indiceSeleccionado].nombre=txtNombre;
      personas[indiceSeleccionado].apellido=txtApellido;
    }
    limpiar();
    setNumElementos(personas.length)
  }

  let ItemPersona = (props)=>{
    return (<View style = {styles.itemPersona}>
      <View style={styles.itemIndice}>
        <Text style={styles.textoPrincipal}>{props.indice}</Text>
      </View>
      <View style={styles.itemContenido}>
        <Text style={styles.textoPrincipal}>{props.persona.nombre} {props.persona.apellido}</Text>
        <Text style={styles.textoSecundario}>{props.persona.cedula}</Text>
      </View>
      <View style={styles.itemBotones}>
        <Button title=' E ' color='green'
          onPress={()=>{
            setTxtCedula(props.persona.cedula)
            setTxtNombre(props.persona.nombre)
            setTxtApellido(props.persona.apellido)
            esNuevo = false;
            indiceSeleccionado = props.indice
          }}
        ></Button>
        <Button title=' X ' color='red'
          onPress={()=>{
            indiceSeleccionado=props.indice;
            personas.splice(indiceSeleccionado,1);
            console.log("arreglo personas",personas);
            setNumElementos(personas.length);
          }}
        
        ></Button>
      </View>
      
     </View>)
     
  }

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
          editable = {esNuevo}
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
        <Button title='Nuevo'
          onPress={()=>{
            limpiar();
          }}
        />
      </View>
      <Text>Elementos: {numElementos}</Text>
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
    flex:6,
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
  },
  itemBotones:{
    //backgroundColor:'darkorange',
    flex:2,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  }
})