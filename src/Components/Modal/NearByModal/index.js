import React, { useState } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { Ionicons, Entypo } from "@expo/vector-icons";
import baseColors from "../../../Constant/color";
import DarkGradient from "../../Gradient/DarkGradient";
import Button from "../../Buttons/index";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function index() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Entypo
        name="menu"
        size={24}
        style={{ color: baseColors.secondaryTextColor }}
        onPress={toggleModal}
      />

      <Modal
        isVisible={isModalVisible}
        animationIn="bounceInRight"
        animationInTiming={1500}
        animationOut="bounceOutRight"
        animationOutTiming={500}
        backdropOpacity={0.3}
        onBackdropPress={toggleModal}
      >
        <View
          style={{
            flex: 1,
            height: deviceHeight / 1,
            flexDirection: "column",
            width: deviceWidth / 1,
            alignItems: "flex-end",
            justifyContent: "flex-start",
            paddingTop: 12,
          }}
        >
          <View style={styles.modal}>
            <View style={styles.modalView}>
              <Text style={styles.DarkTextCenter} onPress={toggleModal}>
                Check Medications
              </Text>
              <View>
                <Text style={styles.secondaryTextLeft} onPress={toggleModal}>
                  Medicine Name
                </Text>
                <Text style={styles.secondaryTextLeft} onPress={toggleModal}>
                  Medicine Name
                </Text>
                <Text style={styles.secondaryTextLeft} onPress={toggleModal}>
                  Medicine Name
                </Text>
              </View>
              <Text style={styles.DarkTextCenter} onPress={toggleModal}>
                Change/Add Name
              </Text>
              <View style={styles.ModalButtonView}>
                <DarkGradient styles={styles.ButtonPrimary}>
                  <Text style={styles.ButtonTextPrimary}>
                    Add Attachment
                  </Text>
                  <Entypo name="attachment" size={18} style={{paddingLeft:5,  color:baseColors.lightTextColor}} />
                </DarkGradient>
                <Button styles={styles.ButtonLight}>
                  <Text style={styles.ButtonTextLight}>Add New</Text>
                </Button>
                <Button styles={styles.ButtonLight}>
                  <Text style={styles.ButtonTextLight}>Change</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  rightModal: {
    flex: 1,
  },
  modal: {
    backgroundColor: baseColors.lightColor,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    height: deviceHeight / 1.7,
    width: deviceWidth / 1.6,
  },
  modalView: {
    flexDirection: "column",
    backgroundColor: baseColors.lightColor,
    width: deviceWidth / 1.5,
    height: deviceHeight / 3.7,
    paddingVertical: 20,
    borderRadius: 30,
  },

  DarkTextCenter: {
    color: baseColors.darkTextColor,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
    paddingVertical: 15,
  },
  secondaryTextLeft: {
    color: baseColors.secondaryTextColor,
    textAlign: "left",
    fontSize: 15,
    paddingLeft: 20,
    paddingVertical: 3,
  },
  ModalButtonView: {
    flexDirection: "column",
    alignItems: "center",
    width: deviceWidth / 1.7,
  },
  ButtonPrimary: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingHorizontal: 12,
    width: deviceWidth / 2,
    height: 50,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'row'
  },
  ButtonTextPrimary: {
    color: baseColors.lightTextColor,
    fontSize: 14,
    fontWeight: "bold",
  },
  ButtonLight: {
    elevation: 8,
    backgroundColor: baseColors.lightColor,
    borderRadius: 50,
    paddingHorizontal: 12,
    width: deviceWidth / 2,
    height: 50,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonTextLight: {
    color: baseColors.secondaryTextColor,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default index;
