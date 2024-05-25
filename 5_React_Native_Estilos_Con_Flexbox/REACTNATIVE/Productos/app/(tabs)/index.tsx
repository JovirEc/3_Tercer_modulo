import {Text,View,Button,TextInput,StyleSheet,FlatList, ScrollView,Alert, TouchableHighlight, Modal} from 'react-native';
import React,{useState} from 'react';

let productos = [
  {nombre:"Galletas María",categoria:"Snacks",precioCompra:1.50,precioVenta:1.82,id:'10'},
  {nombre:"Agua Embotellada",categoria:"Bebidas",precioCompra:0.75,precioVenta:1.13,id:'11'},
  {nombre:"Chicle de Menta",categoria:"Dulces",precioCompra:0.25,precioVenta:0.51,id:'12'},
  {nombre:"Papas Fritas",categoria:"Snacks",precioCompra:1.80,precioVenta:2.15,id:'13'},
  {nombre:"Refresco Lata",categoria:"Bebidas",precioCompra:1.20,precioVenta:1.57,id:'14'},
  {nombre:"Barra de Granola",categoria:"Snacks",precioCompra:1.00,precioVenta:1.33,id:'15'}
]

let indexProductoX = -1;

export default function App(){

  const [inCodigo,setInCodigo] = useState('')
  const [inNombre,setInNombre] = useState('')
  const [inCategoria,setInCategoria] = useState('')
  const [inPCompra,setInPCompra] = useState('')
  const [inPVenta,setInPVenta] = useState('')
  const [numProductos,setNumProductos] = useState(productos.length)
  const [codigoEditable,setCodigoEditable] = useState(true)
  const [isVisible,setIsVisible] = useState(false)

  
  let limpiarNuevo = () =>{
    setInCodigo('');
    setInNombre('');
    setInCategoria('');
    setInPCompra('');
    setInPVenta('');
    setCodigoEditable(true);
  }

  let setearProducto = propIndex=>{
    let productoX = productos[propIndex]
    setInCodigo(productoX.id);
    setInNombre(productoX.nombre);
    setInCategoria(productoX.categoria);
    let pCompraStr = ""+productoX.precioCompra;
    setInPCompra(pCompraStr);
    let pVentaStr = productoX.precioVenta;
    setInPVenta("$ "+pVentaStr);
    setCodigoEditable(false);
  }

  let productoEsNuevo= codigo=>{
    for(let i=0; i<productos.length; i++){
      let productoX = productos[i];
      if(productoX.id == codigo){
        return false;
      }
    }
    return true;
  }

  let guardarProducto = ()=>{
    if(codigoEditable){
      if(productoEsNuevo(inCodigo)){
        if(inNombre=='' || inCategoria == '' || inPCompra == ''){
          Alert.alert("Datos faltantes","Todos los campos son obligatorios.\nPor favor, ingrese todos los datos e intente de nuevo")
        }else{
          let extraerPrecio = inPVenta.split('$')
          let nuevoPVenta = extraerPrecio[1]
          let productoNuevo = {
                    nombre:inNombre, categoria:inCategoria,
                    precioCompra:parseFloat(inPCompra), precioVenta:parseFloat(nuevoPVenta),
                    id:inCodigo}
          productos.push(productoNuevo)
          setNumProductos(productos.length)
          limpiarNuevo();
        }
      }else{
        Alert.alert("Producto existente","El producto con el código "+inCodigo+" ya existe. \nPor favor ingrese otro código")
      }
    }else{
      productos[indexProductoX].nombre = inNombre
      productos[indexProductoX].categoria = inCategoria
      productos[indexProductoX].precioCompra = parseFloat(inPCompra)
        let extraerPVenta = inPVenta.split('$')
        let obtenerPVenta = extraerPVenta[1]
        let nuevoPVenta = parseFloat(obtenerPVenta)
      productos[indexProductoX].precioVenta= nuevoPVenta;
      limpiarNuevo();
    }
  }

  let eliminarProducto = propIndex=>{
    productos.splice(propIndex,1);
    setNumProductos(productos.length);
  }

  let ItemProducto = ({indexX,itemX}) => {
    return(
    <View style={styles.producto}>
      <View style={styles.productoDatos}>
        <View style={styles.productoCodigo}>
          <View style={styles.codigoCirculo}>
            <Text style={styles.textoCodigoProd}>{itemX.id}</Text>
          </View>
        </View>
        <View style={styles.productoInfo}>
          <Text style={styles.tituloProducto}>{itemX.nombre}</Text>
          <Text style={styles.categoriaProducto}>{itemX.categoria}</Text>
        </View>
        <View style={styles.productoPrecio}>
          <Text style={styles.tipoPrecio}>USD</Text>
          <Text style={styles.cantidadPrecio}>{itemX.precioVenta}</Text>
        </View>
      </View>
      <View style={styles.productoBotones}>
        <TouchableHighlight
          style={styles.touchableBotonEditar}
          onPress={()=>{
            indexProductoX = indexX;
            setearProducto(indexProductoX);
          }}>
          <Text style={styles.touchableBotonTexto}> E </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchableBotonEliminar}
          onPress={()=>{
            indexProductoX = indexX;
            setIsVisible(true)
          }}>
          <Text style={styles.touchableBotonTexto}> X </Text>
        </TouchableHighlight>
      </View>
    </View> 

    
    )
  }

  return(
    <View style={styles.principal}>
      <View style={styles.seccionTop}>

        <View style={styles.topHeader}>
          <View style={styles.cajaTituloColor1_6}></View>
          <View style={styles.cajaTituloColor2_5}></View>
          <View style={styles.cajaTituloColor3_4}></View>
          <View style={styles.cajaTituloApp}><Text style={styles.textoTituloApp}>PRODUCTOS</Text></View>
          <View style={styles.cajaTituloColor3_4}></View>
          <View style={styles.cajaTituloColor2_5}></View>
          <View style={styles.cajaTituloColor1_6}></View>
        </View>
        
          <View style={styles.topIngresoDatos}>
            <ScrollView contentContainerStyle={styles.scrollTop}>
            <View style={styles.cajaDetalles}>
              <TextInput style={styles.inputDetalle} placeholder='CÓDIGO' keyboardType='numeric'
                value={inCodigo}
                onChangeText={setInCodigo}
                editable = {codigoEditable}></TextInput>
              <TextInput style={styles.inputDetalle} placeholder='NOMBRE'
                value={inNombre}
                onChangeText={setInNombre}></TextInput>
              <TextInput style={styles.inputDetalle} placeholder='CATEGORÍA'
                value={inCategoria}
                onChangeText={setInCategoria}></TextInput>
            </View>
            
            <View style={styles.cajaPrecios}>
              <TextInput style={styles.inputDetalle} placeholder='PRECIO. COMPRA' keyboardType='numeric'
                value={inPCompra}
                onChangeText={(txt)=>{
                  setInPCompra(txt)
                    let extraerNum = parseFloat(txt)
                    let precioVenta = extraerNum+((extraerNum*20)/100);
                    if(!isNaN(precioVenta)){
                      setInPVenta("$ "+precioVenta.toFixed(2))
                    }else{
                      setInPVenta('')
                    }   
                }}></TextInput>
              <TextInput style={styles.inputDetalle} placeholder='PRECIO VENTA'
                value={inPVenta}
                editable={false}
                ></TextInput>
            </View>
            </ScrollView>
          </View>
        

        <View style={styles.topBotonera}>
          <View style={styles.botoneraItems}>
            <Button title='NUEVO' onPress={limpiarNuevo}></Button>
          </View>
          <View style={styles.botoneraItems}>
            <Button title='GUARDAR' onPress={guardarProducto}></Button>
          </View>
          <View style={styles.botoneraItems}>
            <Text style={styles.txtCantProd1}>PRODUCTOS:</Text>
            <Text style={styles.txtCantProd2}>{numProductos}</Text>
          </View>
        </View>

      </View>
      <View style={styles.seccionBottom}>
        <View style={styles.tablaProductos}>
          <FlatList
          data={productos}
          renderItem={({index,item})=>
            <ItemProducto
              indexX = {index}
              itemX = {item}>
            </ItemProducto>
          }
          keyExtractor={item=> item.id}
          ></FlatList>
        </View>
        <View style={styles.footerAutor}>
          <Text style={styles.textoFooter}>AUTOR: JOEL VILLAMAR</Text>
        </View>
      </View>

      <Modal 
        animationType='slide'
        visible={isVisible}
        transparent
      >
        <View style={styles.containerModal}>
          <View style={styles.sombraModal}>
            <View style={styles.ventanaModal}>
              <View style={styles.tituloModal}>
                <Text style={{fontSize:18,fontWeight:'bold'}}>ADVERTENCIA</Text>
              </View>
              <View style={styles.cuerpoModal}>
                <Text style={{fontSize:16,textAlign:'center'}}>Se eliminará el registro de la base de datos. ¿Desea continuar?</Text>
              </View>
              <View style={styles.botonesModal}>
                <TouchableHighlight
                  style={styles.botonModalAceptar}
                  onPress={()=>{
                  setIsVisible(false)
                  eliminarProducto(indexProductoX)
                  }}>
                  <View >
                    <Text style={styles.textoBotonModal}>ACEPTAR</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.botonModalCancelar}
                  onPress={()=>{
                  setIsVisible(false)
                  }}>
                  <View style={styles.botonModalCancelar}>
                    <Text style={styles.textoBotonModal}>CANCELAR</Text>
                  </View>
                </TouchableHighlight>
              </View>
              
            </View>
          </View>
        </View>
      </Modal>

    </View>
   
  );
};


const styles = StyleSheet.create({
  principal: {
    flex:1,
    backgroundColor:'white',
    paddingTop:30,
    justifyContent: 'center',
  },
    //TOP
    seccionTop:{
      flex:1,
    },
      //TITULO
      topHeader:{
        flex:1,
        backgroundColor:'#049DCA',
        flexDirection:'row'
      },
        cajaTituloColor1_6:{
          flex:1,
          backgroundColor:'#08C0F7'
        },
        cajaTituloColor2_5:{
          flex:1,
          backgroundColor:'#07B7EB'
        },
        cajaTituloColor3_4:{
          flex:1,
          backgroundColor:'#07ACDD'
        },
        cajaTituloApp:{
          flex:7,
          alignItems:'center',
          justifyContent:'center'
        },
          textoTituloApp:{
            fontSize:20,
            fontWeight:'bold',
            color:'white'
          },
      //INPUTS
      topIngresoDatos:{
        flex:4,
        backgroundColor:'#E7E7E7', //
        paddingTop:3,
        paddingHorizontal:20,
        paddingBottom:10,
        borderBottomStartRadius:20,
        borderBottomEndRadius:20,
      },
        scrollTop:{
          flexGrow:1
        },
          cajaDetalles:{
            flex:3,
          },
          cajaPrecios:{
            flex:1,
            flexDirection:'row',
            justifyContent:'center',
          },
            inputDetalle:{
              flex:1,
              backgroundColor:'white',
              marginVertical:5,
              borderRadius:50,
              borderWidth:1,
              borderColor:'#EDF2F3',
              paddingLeft:20,
              fontSize:17,
              height:50
            },
      //BOTONES
      topBotonera:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:1
      },
        botoneraItems:{
          flex:1,
          margin:5,
          justifyContent:'center',
        },
          txtCantProd1:{
            textAlign:'center',
            fontSize:14
          },
          txtCantProd2:{
            textAlign:'center',
            fontSize:20,
            marginTop:-5,
            fontWeight:'bold'
          },
    //BOT
    seccionBottom:{
      flex:1,
    },
      //TABLA
      tablaProductos:{
        flex:8,
        backgroundColor:'white'
      },
          producto:{
            backgroundColor:'#F7F7F7',
            marginBottom:10,
            borderColor:'lightgray',
            flexDirection:'row',
            height:65
          },

            productoDatos:{
              flexDirection:'row',
              flex:3,
              paddingTop:5,
              paddingBottom:5
            },
              productoCodigo:{
                flex:1,
                paddingBottom:5,
                paddingHorizontal:5,
                paddingTop:3
              },
                codigoCirculo:{
                  flex:1,
                  flexDirection:'row',
                  backgroundColor:'#E8E8E8',
                  borderRadius:5,
                  justifyContent:'center',
                  alignItems:'center'
                },
                  textoCodigoProd:{
                    fontSize:18,
                    color:'black',
                    fontWeight:'bold'
                  },
              productoInfo:{
                flex:5,
                paddingLeft:5
              },
                tituloProducto:{
                  fontSize:20,
                  fontWeight:'bold',
                  color:'#049DCA'
                },
                categoriaProducto:{
                  fontSize:18,
                  fontWeight:'500',
                  fontStyle:'italic',
                  color: '#4B4B4B',
                  marginTop:-3
                },
              productoPrecio:{
                flex:1.5,
                justifyContent:'center',
                alignItems:'center',
                marginTop:-5
              },
                tipoPrecio:{
                  fontSize:14,
                },
                cantidadPrecio:{
                  fontSize:18,
                  fontWeight:'500',
                  marginTop:-2
                },
            productoBotones:{
              flex:1,
              flexDirection:'row',
              justifyContent:'space-evenly',
              paddingBottom:9,
              paddingTop:8,
              
            },
              touchableBotonEditar:{
                flex:1,
                backgroundColor:'green',
                justifyContent:'center',
                alignItems:'center',
                padding:3
              },
              touchableBotonEliminar:{
                flex:1,
                backgroundColor:'red',
                justifyContent:'center',
                alignItems:'center',
                padding:3
              },
              touchableBotonTexto:{
                fontSize:15,
                color:'white',
                
              },
      //AUTOR
      footerAutor:{
        flex:1,
        backgroundColor:'black', 
        justifyContent:'center',
        alignItems:'center',
        paddingRight:20
      },
      textoFooter:{
        color:'white',
        fontSize:12,
        fontWeight:'bold'
      },

      //MODAL
      containerModal:{
        backgroundColor:'rgba(0,0,0,0.0)',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
        sombraModal:{
          backgroundColor:'rgba(0,0,0,0.4)',
          height:'30%',
          width:'90%',
          borderRadius:20,
          justifyContent:'center',
          alignItems:'center'
        },
          ventanaModal:{
            height:'85%',
            width:'88%',
          },
            tituloModal:{
              flex:2,
              backgroundColor:'#F5F5F5',
              borderTopLeftRadius:15,
              borderTopRightRadius:15,
              justifyContent:'center',
              alignItems:'center'
            },
            cuerpoModal:{
              flex:4,
              backgroundColor:'white',
              justifyContent:'center',
              alignItems:'center',
              paddingHorizontal:5
            },
            botonesModal:{
              flex:2,
              flexDirection:'row',

            },
              botonModalAceptar:{
                flex:1,
                backgroundColor:'#0049B2',
                borderBottomLeftRadius:15,
                justifyContent:'center',
                alignItems:'center'
              },
              botonModalCancelar:{
                flex:1,
                backgroundColor:'#2B2B2B',
                borderBottomRightRadius:15,
                justifyContent:'center',
                alignItems:'center'
              },
                textoBotonModal:{
                  fontSize:18,
                  color:'white',
                  fontWeight:'bold'
                }
})