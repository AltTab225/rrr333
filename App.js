import React, {Component, useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

export default function App() {

  const [result, setResult] = useState("");
  
  function WriteNumbers(){
    let number = "";
    for(var i = 0; i <= 100; i++){
      number += i + " ";
    }
    setResult(number);
}

  return (
    <View style={styles.container}>
      <Button title="Выполнить" onPress={WriteNumbers} />
      {result}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
