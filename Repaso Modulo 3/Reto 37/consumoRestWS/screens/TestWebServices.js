import { View, StyleSheet } from 'react-native'
import { Button, Text } from '@rneui/base'
import { getAllPostsService, createPostService, updatePostService, getByUserIdService, getFakeStoreService, createFakeProductService, updateFakeProductService, getDocumentTypesService } from '../services/TestServices'

const getAllPosts = () => {
  getAllPostsService();
}

const createPost = () => {
  createPostService();
}

const updatePost = () => {
  updatePostService();
}

const getByUserId =() =>{
  getByUserIdService();
}

const getFakeStore =()=>{
  getFakeStoreService()
}

const createFakeProducto = ()=>{
  createFakeProductService();
}

const updateFakeProduct = () => {
  updateFakeProductService();
}

const getDocumentType = () => {
  getDocumentTypesService();
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
        onPress={updatePost}
      />
        <Button
        title="4. Filtrar"
        onPress={getByUserId}
      />
          <Button
        title="GET FAKESTOREAPI"
        onPress={getFakeStore}
      />

      <Button
        title="CREATE FAKE PRODUCT"
        onPress={createFakeProducto}
      />

      <Button
        title="UPDATE FAKE PRODUCT"
        onPress={updateFakeProduct}
      />
      
      <Button
        title="TIPOS DE DOCUMENTOS"
        onPress={getDocumentType}
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