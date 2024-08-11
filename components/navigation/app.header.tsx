import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { globalStyles } from "../../utils/const";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
  },
  headerText: {
    marginLeft: 0,
    flex: 1,
    textAlign: "center",
    fontSize: 25,
  },
});
const AppHeader = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <MaterialIcons name='menu' size={40} color='black' />
      </TouchableOpacity>
      <Text style={[styles.headerText, globalStyles.globalFont]}>Hoang Duy</Text>
    </View>
  );
};
export default AppHeader;
