import { Alert, Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { IReview } from "../../types/review";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "red",
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 20,
  },
  groupInput: {
    marginBottom: 15,
  },
  text: {
    fontSize: 25,
    fontWeight: "400",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 10,
    padding: 5,
  },
});
interface IProps {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  addNew: (item: IReview) => void;
}
const CreateModal = ({ modalVisible, setModalVisible, addNew }: IProps) => {
  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [title, setTitle] = useState("");
  const [star, setStar] = useState("");
  const handleSubmit = () => {
    if (!title) {
      Alert.alert("Thông tin không hợp lệ", "Nội dung không được để trống");
      return;
    }
    if (!star) {
      Alert.alert("Thông tin không hợp lệ", "Rating không được để trống");
      return;
    }
    addNew({
      id: randomInteger(2, 2000000),
      title,
      rating: Number(star),
    });
    setModalVisible(false);
    setStar("");
    setTitle("");
  };
  return (
    <>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{ fontSize: 25 }}>Create a review</Text>
            <AntDesign
              name='close'
              size={24}
              color='black'
              onPress={() => {
                setModalVisible(false);
                setTitle("");
                setStar("");
              }}
            />
          </View>
          <View>
            <View style={styles.groupInput}>
              <Text style={styles.text}>Nội dung</Text>
              <TextInput style={styles.input} value={title} onChangeText={(v) => setTitle(v)} />
            </View>
            <View style={styles.groupInput}>
              <Text style={styles.text}>Rating</Text>
              <TextInput keyboardType='numeric' style={styles.input} value={star} onChangeText={(v) => setStar(v)} />
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Button title='Add' onPress={handleSubmit} />
          </View>
        </View>
      </Modal>
    </>
  );
};
export default CreateModal;
