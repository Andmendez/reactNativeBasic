import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Alert } from "react-native";

// useState(0) inicializa el estado contador con un valor inicial de 0. setContador es una función que se utiliza para actualizar el estado contador.
// Cuando setContador se llama con un nuevo valor (en este caso, contador + 1), React se encarga de actualizar el estado y de volver a renderizar el 
// componente con el nuevo valor del estado, lo que hace que la interfaz de usuario se actualice para reflejar el cambio en el contador.


const App = () => {

  const [contador, setContador] = useState(0);

  const contadorfun = () => {
    
    setContador(contador + 1)
    return;
  }

  const restartfun = () => {
    if (contador > 0) {
      Alert.alert('Contador Reiniciado')
    }
    setContador(0)
    
    return;
  }

  return (
    <View style={styles.container}>
      <Text style = {styles.texto}>Contador: {contador}</Text>
      <Button
        title = "Press me!"
        onPress={contadorfun}
      />
      <Text></Text>
      <Button
        title="Restart"
        onPress={restartfun}
      />
    </View>
  );
};
  
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'aquamarine'},
  texto: {fontSize: 30, marginBottom: 15},
})


export default App







