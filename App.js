import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [arrayLength, setArrayLength] = useState(4);

  const list = [arrayLength];
  for (let i=0; i<arrayLength; i++) {
    list[i] = [];
  }
  console.log(list)


const addEdge = (v, w) => {
    list[v] = [...list[v], w];
    list[w] = [...list[w], v];
}

addEdge(1, 0);
addEdge(0, 2);
addEdge(2, 1);
addEdge(0, 3);

console.log(list)

let paratlan = []

list.map((item, i) => {
  if(item.length % 2 === 1) {
    paratlan.push(i)
  }
})
console.log(paratlan)

for(let i = 0; i < paratlan.length; i++){
  addEdge(paratlan[i], paratlan[i+1])
  if(!i+2) break;

}
console.log(list)
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
