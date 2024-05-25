import { View, Text, StyleSheet, Button } from 'react-native'

export const Contacts = ({navigation})=>{
    return (
    <View style={styles.container}>
        <View style={styles.contenedorCuerpo}>
            <Text style={styles.textoTitulo}>CONTACTOS</Text>
            <View style={styles.botonera}>
                <Button
                    title='HOME'
                    onPress={()=>{
                        navigation.navigate('HomeNav')
                    }}
                >
                </Button>
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