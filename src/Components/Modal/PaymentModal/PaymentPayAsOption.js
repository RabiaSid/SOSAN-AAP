import React, { useState } from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Logo } from "../../../Assets/images";
import baseColors from "../../../Constant/color.js";
import Modal from "react-native-modal";
import PaymentOption from "../../PaymentOption";
import Button from "../../Buttons/index";
import DarkGradient from "../../Gradient/DarkGradient/index";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function PaymentPayAsOption({children}) {
  const Navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text  onPress={toggleModal} onBackdropPress={toggleModal}>
      {children}
      </Text>

      <Modal isVisible={isModalVisible} backdropOpacity={0.1}>
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
              <Image source={Logo} style={{ height: 30, width: 125 }} />
              <Text style={styles.Text}>Edit Amount</Text>
              <View style={styles.TextAmountView}>
                <Text style={styles.TextAmount}>$ 200</Text>
              </View>
              <View style={styles.View}>
                <PaymentOption />
              </View>

              <DarkGradient styles={styles.ButtonPrimary}>
                <Text
                  style={styles.ButtonTextPrimary}
                  onPress={() => {
                    Navigation.navigate("PaymentSuccessFull");
                    toggleModal();
                  }}
                >
                  Pay
                </Text>
              </DarkGradient>
              <Button styles={styles.ButtonLight}>
                <Text style={styles.ButtonTextLight}
                onPress={() => {
                  Navigation.goBack("");
                  toggleModal();
                }}
                >Cancel</Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: baseColors.darkTextColor,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
  TextAmountView: {
    paddingVertical: 3,
    paddingHorizontal: 30,
    marginVertical: 10,
    borderColor: baseColors.sucessColor,
    borderRadius: 50,
    borderWidth: 2,
  },
  TextAmount: {
    color: baseColors.darkTextColor,
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
  },
  modal: {
    borderRadius: 10,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: "flex-end",
    width: deviceWidth / 1,
    height: deviceHeight / 1,
  },
  modalView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'space-evenly',
    backgroundColor: baseColors.lightColor,
    width: deviceWidth / 1 - 10,
    height: deviceHeight / 1.1 - 20,
    marginBottom: 2,
    borderRadius: 30,
    paddingVertical:20
  },

  modalViewText: {
    color: baseColors.darkTextColor,
  },

  modalIcon: {
    color: baseColors.primaryColor,
  },

  ButtonText: {
    color: "#000",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  View: {
    flexDirection: "column",
    width: deviceWidth / 1 - 20,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: baseColors.lightColor,
  },
  ButtonPrimary: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: deviceWidth / 1 - 40,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonTextPrimary: {
    color: baseColors.lightTextColor,
    fontWeight: "bold",
  },
  ButtonLight: {
    elevation: 8,
    backgroundColor: baseColors.lightColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: deviceWidth / 1 - 40,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonTextLight: {
    color: baseColors.secondaryTextColor,
    fontWeight: "bold",
  },
});

export default PaymentPayAsOption;
