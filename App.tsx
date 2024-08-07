import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
interface ITodo {
  id: number;
  name: string;
}
export default function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([]);
  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function handleAddTodo() {
    if (!todo) return;
    setListTodo([...listTodo, { id: randomInteger(2, 2000000), name: todo }]);
    setTodo("");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo APP</Text>
      <View style={styles.body}>
        <TextInput value={todo} onChangeText={(value) => setTodo(value)} style={styles.todoInput}></TextInput>
        <Button title='Add todo' onPress={handleAddTodo} />
      </View>
      <View style={styles.body}>
        <FlatList
          data={listTodo}
          renderItem={({ item }) => {
            return <Text style={styles.todoItem}>{item.name}</Text>;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 60,
  },
  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    padding: 5,
    margin: 15,
  },
  body: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  todoItem: {
    fontSize: 20,
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom: 20,
    padding: 10,
  },
});
