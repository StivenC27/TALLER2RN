import * as React from 'react';
import * as RN from 'react-native';
import { BD } from '../config/firebase';
import {collection,addDoc} from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default function Agregar(){
    const navigation = useNavigation();
    const [NuevoObjeto, setNuevoObjeto] = React.useState({
        imagen:'🛒',
        nombre:'',
        descripcion:'',
        precio:0,
        vendido: false,
        creadoEn: new Date(),
    })

    const Enviar = async () => {
        await addDoc(collection(BD,'OBJETOS'),NuevoObjeto);
        navigation.goBack();
    }

    return(
        <RN.View style={styles.container}>   
            <RN.Text style={styles.title}>Añadir Objeto</RN.Text>
            <RN.Text style={styles.imagen}>{NuevoObjeto.imagen}</RN.Text>
            <RN.TextInput style={styles.inputContainer} placeholder='Nombre' onChangeText={(Text)=>setNuevoObjeto({...NuevoObjeto,nombre:text})}/>
            <RN.TextInput style={styles.inputContainer} placeholder='Descripción' onChangeText={(Text)=>setNuevoObjeto({...NuevoObjeto,descripcion:text})}/>
            <RN.TextInput style={styles.inputContainer} placeholder='Precio' keyboardType='number-pad' onChangeText={(Text)=>setNuevoObjeto({...NuevoObjeto,precio:text})}/>
            <RN.Button title = 'GUARDAR'onPress={Enviar}/>
        </RN.View> 
    )
}