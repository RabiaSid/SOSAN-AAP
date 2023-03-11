import React, { useState } from "react";
import { Text, View, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style.js";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function AppointmentSuccessModal() {
  const Navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Text onPress={toggleModal}>Yes</Text>

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View
          style={{
            flex: 1,
            height: deviceHeight / 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.modal}>
            <View style={styles.modalView}>
              <View style={styles.ImgView}>
                <Ionicons name="trash-bin-sharp" size={60} color="red" />
              </View>
              <Text
                style={styles.Text}
                onPress={() => {
                  Navigation.navigate("SignIn");
                  toggleModal();
                }}
              >
                Success!
              </Text>
              <Text style={styles.modalViewText}>
                Are you sure to cancel Appointment ?
              </Text>
              <View
                style={{
                  width: deviceWidth / 1,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Text>Yes</Text>
                <Text
                  onPress={() => {
                    navigation.goBack("");
                  }}
                >
                  No
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default AppointmentSuccessModal;
