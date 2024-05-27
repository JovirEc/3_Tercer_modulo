import {View, Text, StyleSheet, Alert} from 'react-native'
import { Input, Button } from '@rneui/base'
import { useState } from 'react'
import { saveGrade, updateGrade, getGrades } from '../services/GradesServices'

export const GradeForm = ({navigation,route})=>{
    
    let isNew = true;
    let subjectR;
    let gradeR;

    if(route.params.notaX != null){
        isNew = false;
    }else{
        isNew = true;//borrar el else
    }

    if(!isNew){
        subjectR = route.params.notaX.subject;
        gradeR = route.params.notaX.grade
    }

    const [subject,setSubject] = useState(subjectR)
    const [grade,setGrade] = useState(gradeR)
    const [errorSubject,setErrorSubject] = useState()
    const [errorGrade,setErrorGrade] = useState()
    let hasErrors = false;

    
    const save=()=>{
        setErrorGrade(null)
        setErrorSubject(null)
        validate()
        if(!hasErrors){
            if(isNew){
                let arrayGrades = getGrades()
                let existeMateria = false;
                for(let i=0;i<arrayGrades.length;i++){
                    let gradeX = arrayGrades[i];
                    if(gradeX.subject == subject){
                        existeMateria = true;
                    }
                }
                if(existeMateria == true){
                    Alert.alert('Materia existente','La materia '+subject+' ya existe. Por favor ingrese otra materia')
                }else{
                    saveGrade({subject:subject,grade:grade}) //quitar todo el for y dejar solo esta linea
                }
            }else{
                updateGrade({subject:subject,grade:grade})
            }
            navigation.goBack();
            route.params.fnRefresh();
        }

    }

    const validate = () => {        
        if(subject == null || subject == ''){
            setErrorSubject("Debe ingresar una materia")
            hasErrors = true
        }
        let gradeFloat = parseFloat(grade);
        if(gradeFloat == null || isNaN(gradeFloat) || gradeFloat < 0 || gradeFloat > 10){
            setErrorGrade("Debe inigresar una nota entre 0 y 10")
            hasErrors = true;
        }
    }

    return(
        <View style = {styles.container}>
            <Input
                value={subject}
                onChangeText={setSubject}
                placeholder='Ejemplo: Matemáticas'
                label = 'Materia'
                errorMessage={errorSubject}
                disabled = {!isNew}
            />
            <Input
                value={grade}
                onChangeText={setGrade}
                placeholder='0-10'
                label='Nota'
                errorMessage={errorGrade}
                keyboardType='numeric'
            />
            <Button
                title='Guardar'
                icon={{
                    name:'save',
                    type:'entypo',
                    color:'white'
                }}
                buttonStyle={styles.saveButton}
                onPress={save}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    saveButton:{
        backgroundColor:'green'
    }
})