import * as React from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {BD} from '.../config/firebase';
import {collection, onSnapshot, orderBy, query} from 'firebase/firestore';
import Objeto from '.../componentes/Objeto';

export default function Inicio(){
    const navegacion = useNavigation();
    const [Objects,setObjects] = React.useState([]);
    React.useLayoutEffect(() =>{
        navegacion.setOptions({
            headerRight: () => <RN.Button title ='AGREGAR' onPress={()=> navegacion.navigate('AGREGAR')}/>
        })
    },[])


    React.useEffect(() =>{
        const collecRef = collection(BD,'Objetos');
        const Q = query(collecRef, orderBy('CreadoEn','desc'))
        const Desuscribir = onSnapshot(Q, querySnapshot=>{
            setObjects(
                querySnapshot.docs.map(doc=> ({
                    id: doc.id,
                    imagen:doc.data().imagen,
                    nombre:doc.data().nombre,
                    descripcion:doc.data().descripcion,
                    precio:doc.data().precio,
                    vendido:doc.data().vendido,
                    creadoen:doc.data().creadoen,
                }))
            )
        })
        return Desuscribir;
    },[])

    return (
        <>
        <RN.Text>OBJETOS</RN.Text>
        {Objects.map(Object=> <Object key= {Objeto.id}{...Object}/>)}
        <RN.Button title ='AGREGAR' onPress={()=> navegacion.navigate('AGREGAR')}/>
        </>
    )
}