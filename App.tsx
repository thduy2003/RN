import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Duy1" },
    { id: 2, name: "Duy2" },
    { id: 3, name: "Duy3" },
    { id: 4, name: "Duy4" },
    { id: 5, name: "Duy5" },
    { id: 6, name: "Duy6" },
    { id: 7, name: "Duy7" },
    { id: 8, name: "Duy8" },
    { id: 9, name: "Duy9" },
    { id: 10, name: "Duy10" },
  ]);
  return (
    <View style={styles.container}>
      <Text style={{ paddingVertical: 30 }}>Hello world!!</Text>
      {/* <ScrollView>
        {students.map((item) => {
          return (
            <View
              key={item.id}
              style={{
                padding: 30,
                backgroundColor: "pink",
                marginBottom: 30,
              }}
            >
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View
              key={item.id}
              style={{
                padding: 30,
                backgroundColor: "pink",
                marginBottom: 30,
              }}
            >
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  hello: {
    fontSize: 30,
    color: "red",
  },
});
