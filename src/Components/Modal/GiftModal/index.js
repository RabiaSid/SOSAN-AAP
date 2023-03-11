import React, { useState } from "react";
import { Text, View, Dimensions } from "react-native";
import { styles } from "./style.js";
import Modal from "react-native-modal";
import Button from "../../Buttons/index";
import DarkGradient from "../../Gradient/DarkGradient/index.js";
import { Feather } from "@expo/vector-icons";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function GiftModal() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{ flex: 1 }}>
      <Feather name="bell" size={26} color="black" onPress={toggleModal} />

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

              <Text style={styles.TextSecondery}>
                Lorem Ipsum is that normal distribution of letters
              </Text>

              <DarkGradient styles={styles.ButtonPrimary}>
                <Text style={styles.ButtonTextPrimary}>Send</Text>
              </DarkGradient>
              <Button styles={styles.ButtonDanger}>
                <Text style={styles.ButtonTextDanger}>Cancel</Text>
              </Button>

              <Text style={styles.TextSmallSecondery}>
                when looking at its layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal distribution of letters,
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default GiftModal;
