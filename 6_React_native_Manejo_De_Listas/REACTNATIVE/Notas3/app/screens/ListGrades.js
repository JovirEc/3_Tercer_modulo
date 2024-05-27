import {View, Text, StyleSheet, FlatList, TouchableHighlight} from 'react-native'
import { FAB, ListItem, Avatar } from '@rneui/themed';
import { getGrades,  } from '../services/GradesServices'
import { useState } from 'react';

export const ListGrades = ({navigation})=>{

    const [time,setTime] = useState();
    
    const refreshList = () => {
        setTime(new Date().getTime())
    }
    
    const ItemGrade =({nota}) => {
        return (
            <TouchableHighlight onPress={()=>{
                navigation.navigate("GradeFormNav",{notaX:nota,fnRefresh:refreshList})
            }}>
                <ListItem bottomDivider>
                    <Avatar
                        title={nota.subject.substring(0,1)}
                        containerStyle={{backgroundColor:'black'}}
                        rounded
                    />
                    <ListItem.Content>
                        <ListItem.Title>{nota.subject}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Content>
                        <ListItem.Title>{nota.grade}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron/>
                </ListItem>
            </TouchableHighlight>
        )
    }

    return (
        <View style = {styles.container}>
            <FlatList
                data={getGrades()}
                renderItem={({item})=>
                    <ItemGrade
                        nota={item}
                    ></ItemGrade>
                }
                keyExtractor={(item)=>{
                    return item.subject
                }}
                extraData={time}

            />
            <FAB
                title='+'
                placement='right'
                onPress={()=>{
                    navigation.navigate('GradeFormNav',{notaX:null,fnRefresh:refreshList})
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        alignItems:'stretch',
        justifyContent:'center'
    }
})