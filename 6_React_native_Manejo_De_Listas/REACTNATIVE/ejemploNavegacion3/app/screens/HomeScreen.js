import { View, Text, StyleSheet, Button } from 'react-native'

export const Home = ({navigation})=>{
    return (
    <View style={styles.container}>
        <View style={styles.contenedorCuerpo}>
            <Text style={styles.textoTitulo}>HOME</Text>
            <View style={styles.botonera}>
                <Button
                    title='CONTACTOS'
                    onPress={()=>{
                        navigation.navigate('ContactosNav')
                    }}
                />
                <View style={{flexDirection:'row',marginHorizontal:10}}></View>
                <Button
                    title='PRODUCTOS'
                    onPress={()=>{
                        navigation.navigate('ProductosNav')
                    }}
                />
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center'
    },
    contenedorCuerpo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
        textoTitulo:{
            fontSize:25,
            fontWeight:'bold',
            marginBottom:5
        },
        botonera:{
            
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
        }
})