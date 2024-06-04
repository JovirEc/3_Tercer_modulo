import { View, StyleSheet } from 'react-native'
import { Button, Text } from '@rneui/base'
import { getAllPostsService } from '../services/TestServices'
import { createPostService } from '../services/TestServices'


const getAllPosts = () => {
  getAllPostsService();
}

const createPost = () => {
  createPostService();
}

export const TestWebServices = () => {

  return <View style={styles.container}>
    <Text style={styles.textContainer}>MODULO 3</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="1. Recuperar Posts"
        onPress={() => {
          getAllPosts();
        }}
        />
      <Button
        title="2. Crear Post"
        onPress={()=>{
          createPost();
        }}
      />
        <Button
        title="3. Actualizar Post"
      />
        <Button
        title="4. Filtrar"
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