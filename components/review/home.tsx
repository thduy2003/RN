import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IReview } from "../../types/review";
import AntDesign from "@expo/vector-icons/AntDesign";
import CreateModal from "./create.modal";

const HomeScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [reviews, setReviews] = useState<IReview[]>([
    { id: 1, title: "React Native", rating: 5 },
    { id: 2, title: "Hoang Duy", rating: 2 },
  ]);
  const addNew = (item: IReview) => {
    setReviews([...reviews, item]);
  };
  return (
    <View>
      <Text style={{ fontSize: 30, padding: 10 }}>Review List:</Text>
      <View style={{ alignItems: "center" }}>
        <AntDesign onPress={() => setModalVisible(true)} name='plussquareo' size={40} color='orange' />
      </View>
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
      <CreateModal modalVisible={modalVisible} setModalVisible={setModalVisible} addNew={addNew} />
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
