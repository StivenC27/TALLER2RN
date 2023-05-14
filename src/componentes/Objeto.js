import * as React from 'react';
import * as RN from 'react-native';
import { BD } from '../config/firebase';
import { deleteDoc,doc,updateDoc } from 'firebase/firestore';
import {AntDesign} from '@expo/vector-icons';

export default function Objeto({
    id,
    imagen,
    nombre,
    descripcion,
    precio,
    vendido,
}) {

    const Edit = () =>{
        const docRef = doc(BD,'OBJETOS', id);
        updateDoc(docRef,{
            vendido: true,
        });
    };

    const Elim = () =>{
        const docRef = doc(BD,'OBJETOS', id);
        deleteDoc(docRef);
    };
    

    return(
        <RN.View style={styles.objetoContainer}>
            <RN.View style = {styles.ConEliminar}>
                <RN.Text style={styles.imagen}>{imagen}</RN.Text>
                <AntDesign onPress ={Elim} name ='ELIMINAR' size = {20}/>
            </RN.View> 

            <RN.Text style={styles.nombre}>{nombre}</RN.Text>
            <RN.Text style={styles.descripcion}>{descripcion}</RN.Text>
            <RN.Text style={styles.precio}>{precio}</RN.Text>

            {vendido ? (
                <RN.TouchableOpacity style ={styles.button}>
                    <RN.Txt style = {styles.button}>CARGADO ✔</RN.Txt>
                </RN.TouchableOpacity>
            ) : (

                <RN.TouchableOpacity
                    style={styles.button}
                    onPress={Edit}>
                    <RN.text style = {styles.button}>CARGAR ↑</RN.text>
                 </RN.TouchableOpacity>

            )}
        </RN.View>
    );
}

const styles = RN.StyleSheet.create({
   objetoContainer:{
    flex: 2,
    backgroundColor: 'yellow',
    alignItems:'center',
   },
   
   nombre:{
    fontSize: 30,
    fontWeight: '650',
   },

   descripcion:{
    fontSize: 15,
    fontWeight:'650'
   },

   imagen:{
    fontSize: 85,
    borderWidth: 1,
    borderColor:'#000',
    borderRadius: 8,
    padding: 8,
    marginVertical: 5,
   },

   inputContainer: {
    width: '88%',
    padding: 12,
    marginVertical:5,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
   },

  ConEliminar:{
    flexDirection:'row',
    justifyContent:'space.between'
  },

  button:{
    borderRadius: 8,
    color:'#880808',
    backgroundColor:'#fff'
  }



});
