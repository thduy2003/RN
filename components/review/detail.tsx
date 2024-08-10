import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles, OPENSANS_REGULAR } from "../../utils/const";
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
const styles = StyleSheet.create({
  review: {
    fontSize: 30,
  },
  reviewText: {
    fontSize: 25,
    padding: 15,
    fontFamily: OPENSANS_REGULAR,
  },
});
const DetailScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route: RouteProp<RootStackParamList, "review-detail"> = useRoute();
  return (
    <View>
      <Text style={[styles.review, globalStyles.globalFont]}>Review Detail</Text>
      <Text style={styles.reviewText}>Id: {route.params?.id}</Text>
      <Text style={styles.reviewText}>Tiêu đề: {route.params?.title}</Text>
      <Text style={styles.reviewText}>Rating: {route.params?.rating}</Text>
      <Button title='Go Home' onPress={() => navigation.navigate("home")} />
    </View>
  );
};
export default DetailScreen;
