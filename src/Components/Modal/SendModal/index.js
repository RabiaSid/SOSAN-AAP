import React, { useState } from "react";
import { Text, View, Dimensions } from "react-native";
import { styles } from "./style.js";
import Modal from "react-native-modal";
import Button from "../../Buttons/index";
import DarkGradient from "../../Gradient/DarkGradient/index.js";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function SendModal() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.TextButton} onPress={toggleModal}>
        Send
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
              <Text style={styles.Text}>set an amount to send</Text>
              <View style={styles.TextAmountView}>
                <Text style={styles.TextAmount}>$ 200</Text>
              </View>
              <Text style={styles.Text}>Sender Name or code of SOSAN</Text>
              <Button styles={styles.ButtonLight}>
                <Text style={styles.ButtonTextLight}>
                  User Name or User Code
                </Text>
              </Button>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: deviceWidth / 1.3,
                }}
              >
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.TextCode}>Transaction Code</Text>
                  <Text style={styles.TextCode}>Reference Code</Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.TextCodeNumber}>25H11J14</Text>
                  <Text style={styles.TextCodeNumber}>KHGM21654GH</Text>
                </View>
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

export default SendModal;
