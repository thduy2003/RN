import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IReview } from "../../types/review";

const HomeScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const [reviews, setReviews] = useState<IReview[]>([
    { id: 1, title: "React Native", rating: 5 },
    { id: 2, title: "Hoang Duy", rating: 2 },
  ]);
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Review List:</Text>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("review-detail", item)}>
              <View style={styles.reviewItem}>
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  reviewItem: {
    padding: 15,
    backgroundColor: "#ccc",
    margin: 15,
  },
});
export default HomeScreen;
