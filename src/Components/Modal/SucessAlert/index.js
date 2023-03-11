import React, { useState } from "react";
import { Text, View, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style.js";
import { SuccessImage } from "../../../Assets/images";
import Modal from "react-native-modal";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function SucessAlert() {
  const Navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.ButtonText} onPress={toggleModal}>
        Save
      </Text>

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
              <Image
                source={SuccessImage}
                style={{ height: 100, width: 100, borderRadius: 50 }}
              ></Image>
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
                Password Changed Successfully
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default SucessAlert;
