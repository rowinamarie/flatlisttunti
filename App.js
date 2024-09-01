import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState('');


  const handlePress = () => { //funktio
    setTodos([...todos, { key: todo }]);
    setTodo("");
  }

  console.log(todos)

  return (
    <View style={styles.container}>
      <TextInput placeholder='Enter a new task'
        onChangeText={text => setTodo(text)}
        value={todo}
      />

      <Button title="Add" onPress={handlePress}></Button>
      <FlatList
        data={todos}
        renderItem={({ item }) => <Text>{item.key}</Text>}
        ListEmptyComponent={<Text>No data</Text>}
        ItemSeparatorComponent = {
        <View 
        style={{height: 1, backgroundColor: 'grey', width: 100}}>
        </View>}
      />
  < StatusBar style = "auto" />
    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
});
