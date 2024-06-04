import { View, StyleSheet } from 'react-native'
import { Button, Text } from '@rneui/base'


export const TestWebServices = () => {

  return <View style={styles.container}>
    <Text style={styles.textContainer}>MODULO 3</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="Recuperar Posts"
      />
      <Button
        title="Crear Post"
      />
        <Button
        title="Actualizar Post"
      />
        <Button
        title="Filtrar"
      />
          <Button
        title="XXX"
      />

      <Button
        title="YYY"
      />

      <Button
        title="ZZZ"
      />
      
    </View>
  </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10
  },
  buttonContainer: {
    flex: 6,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginHorizontal:10

  }
});