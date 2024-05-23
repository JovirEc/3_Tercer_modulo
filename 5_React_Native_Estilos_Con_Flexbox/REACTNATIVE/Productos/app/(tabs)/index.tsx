import {Text,View,Button,TextInput,StyleSheet,FlatList} from 'react-native';
import React,{useState} from 'react';

export default function App(){

  let productos = [
    {nombre:"Galletas María",categoria:"Snacks",precioCompra:1.50,precioVenta:1.82,id:'10'},
    {nombre:"Agua Embotellada",categoria:"Bebidas",precioCompra:0.75,precioVenta:1.13,id:'11'},
    {nombre:"Chicle de Menta",categoria:"Dulces",precioCompra:0.25,precioVenta:0.51,id:'12'},
    {nombre:"Papas Fritas",categoria:"Snacks",precioCompra:1.80,precioVenta:2.15,id:'13'},
    {nombre:"Refresco Lata",categoria:"Bebidas",precioCompra:1.20,precioVenta:1.57,id:'14'},
    {nombre:"Barra de Granola",categoria:"Snacks",precioCompra:1.00,precioVenta:1.33,id:'15'}
  ]

  return(
    <View style = {styles.principal}>
        <View style={styles.cont_1}>
          <Text style={styles.titulo}>PRODUCTOS</Text>
          <FlatList style={styles.contenedorProducto}
          data={productos}
          renderItem={(objeto)=>{
            return <View style={styles.producto}>
              <Text style={styles.tituloProducto}>{objeto.item.nombre} ({objeto.item.categoria})</Text>
              <Text style={styles.precioProducto}>USD {objeto.item.precioVenta}</Text>
            </View>
          }}
          keyExtractor={(item)=>{
            return item.id;
          }}
          />
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
  principal: {
    flex:1,
    backgroundColor:'white',
    padding:20,
    paddingTop:50,
    justifyContent: 'center',

  },
  cont_1:{
    flex:1,

  },
  contenedorProducto:{
    flex:1,
    paddingTop:10
  },
  producto:{
    backgroundColor:'rgb(245,245,245)',
    marginTop:5,
    paddingVertical:10,
    paddingHorizontal:15,
    borderRadius:15,
    borderWidth:2,
    borderColor:'lightgray'
  },
  titulo:{
    fontSize:25,
    fontWeight:'700',
    textAlign:'center'
  },
  tituloProducto:{
    fontSize:18,
    fontWeight:'semibold'
  },
  precioProducto:{
    fontSize:18,
    fontWeight:'bold',
    color: 'darkgreen'
  }

})