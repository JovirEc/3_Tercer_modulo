import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { useState } from 'react'
import { Button, Icon, Input } from '@rneui/base'

export default function App() {
  
  const [name,setName] = useState();

  return (
    <View style={styles.container}>
      <Text>RNE</Text>
      <Input
        value={name}
        onChangeText={setName}
        placeholder='Ingrese su nombre'
        label='Nombre'
      />
      <Text>{name}</Text>
      <Button
        title='OK'
        icon={{
          name: 'hand-pointer-o',
          type: 'font-awesome',
          size: 20,
          color: 'white'
        }}
        onPress={()=>{
          Alert.alert('Info','Su nombre es: '+name)
        }}
      />
      <Button
        title='CANCEL'
        icon={<Icon
          name='plancast'
          type='zocial'
          color='white'
        />}
      />
      <Icon
          name='plancast'
          type='zocial'
          color='black'
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
