import React, { useState } from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SuccessImage } from "../../../Assets/images";
import Modal from "react-native-modal";
import baseColors from "../../../Constant/color";
import DarkGradient from "../../Gradient/DarkGradient";
import InputField from "../../InputField";
import { Children } from "react";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function Mention({children}) {
  const Navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.ButtonText} onPress={toggleModal}>
        {children}
        {/* Add Objection */}
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
              <Text style={styles.Text}>Mention Reason</Text>
              <InputField
                placeholder="I have Another Appointment"
                multiline={true}
                numberOfLines={6}
                styles={styles.InputFieldAbout}
              ></InputField>

              <DarkGradient
                styles={{
                  elevation: 8,
                  backgroundColor: baseColors.primaryColor,
                  borderRadius: 50,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  width: deviceWidth / 1.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.modalViewText}
                 onPress={() => {
                    Navigation.goBack("");
                  }}
                >Submit</Text>
              </DarkGradient>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    fontSize: 18,
    color: baseColors.darkTextColor,
    fontWeight: "bold",
    textAlign: "center",
  },
  modal: {
    backgroundColor: baseColors.lightColor,
    borderRadius: 10,
  },
  modalView: {
    flexDirection: "column",
    backgroundColor: baseColors.lightColor,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: deviceWidth / 1.2,
    height: deviceHeight / 2.8,
    paddingVertical: 10,
    borderRadius: 30,
  },
  InputFieldAbout: {
    margin: 12,
    borderColor: baseColors.sucessColor,
    width: deviceWidth / 1.5,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: "top",
  },

  modalViewText: {
    fontSize: 16,
    fontWeight: "bold",
    color: baseColors.lightTextColor,
  },

  modalIcon: {
    color: baseColors.primaryColor,
  },

  ButtonText: {
    color: baseColors.lightColor,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Mention;
