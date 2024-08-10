import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>Home screen</Text>
      <Button title='View Detail' onPress={() => navigation.navigate("review-detail")} />
    </View>
  );
};
export default HomeScreen;
