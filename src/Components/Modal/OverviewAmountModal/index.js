import React, { useState } from "react";
import { Text, View, Dimensions } from "react-native";
import { styles } from "./style.js";
import Modal from "react-native-modal";
import Button from "../../Buttons/index";
import DarkGradient from "../../Gradient/DarkGradient/index.js";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import baseColors from "../../../Constant/color.js";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function OverviewAmountModal() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{ flex: 1 }}>
      <FontAwesome
        name="pencil"
        size={24}
        style={{ color: baseColors.secondaryTextColor, paddingTop: 25 }}
        onPress={toggleModal}
      />

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
              <Text style={styles.Text}>set an amount to send</Text>
              <View style={styles.TextAmountView}>
                <Text style={styles.TextAmount}>$ 200</Text>
              </View>
              <DarkGradient styles={styles.ButtonPrimary}>
                <Text style={styles.ButtonTextPrimary}>Send</Text>
              </DarkGradient>
              <Button styles={styles.ButtonSecondary}>
                <Text style={styles.ButtonTextSecondery}>Cancel</Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default OverviewAmountModal;
