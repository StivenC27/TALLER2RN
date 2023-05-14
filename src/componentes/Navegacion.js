import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Inicio from "../Pantallas/Inicio";
import Agregar from "../Pantallas/Agregar";

const Stack = createNativeStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name= "Home" component={Inicio}/>
            <Stack.Screen name= "Agregar" component={Agregar}/>
        </Stack.Navigator>

    )
}

export default function navegacion(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}