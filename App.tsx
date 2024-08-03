import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <View style={styles.container}>
      <Text>Hello world!!</Text>
      <Text style={styles.hello}>Hello world2</Text>
      <View>
        <Text>{count}</Text>
        <Button title='Increase' onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  hello: {
    fontSize: 30,
    color: "red",
  },
});
