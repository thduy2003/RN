import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../utils/const";
import { NavigationProp, useNavigation } from "@react-navigation/native";
const styles = StyleSheet.create({
  review: {
    fontSize: 30,
  },
});
const DetailScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View>
      <Text style={[styles.review, globalStyles.globalFont]}>Detail screen google</Text>
      <Button title='Go Home' onPress={() => navigation.navigate("home")} />
    </View>
  );
};
export default DetailScreen;
