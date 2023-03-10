import React, { useState } from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SuccessImage } from "../../../Assets/images";
import baseColors from "../../../Constant/color.js";
import Modal from "react-native-modal";
import PaymentPayAsOption from "./PaymentPayAsOption";
import InputField from "../../InputField/index";
import SelectDropdown from "../../SelectDropdown/index"
import CheckButton from "../../CheckButton/index";
import  Button  from "../../Buttons/index";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function PaymentPayAsForm({children}) {
  const Navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.ButtonText} onPress={toggleModal}
      >
        {children}
      </Text>

      <Modal isVisible={isModalVisible} backdropOpacity={0.1} onBackdropPress={toggleModal}>
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
              <Text style={styles.modalViewText}>Change/Add Name</Text>
              <View
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                <SelectDropdown />
                <Text style={styles.formText}>Institude Name</Text>
                <InputField
                  placeholder="Your Email"
                  styles={styles.InputField}
                ></InputField>
                <Text style={styles.formText}>Institude Name</Text>
                <InputField
                  placeholder="Your Email"
                  styles={styles.InputField}
                ></InputField>
                <Text style={styles.formText}>Institude Name</Text>
                <InputField
                  placeholder="Your Email"
                  styles={styles.InputField}
                ></InputField>
                <Text style={styles.formText}>Institude Name</Text>
                <InputField
                  placeholder="Your Email"
                  styles={styles.InputField}
                ></InputField>
                <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CheckButton />
              <Text>i agree with the terms and agreements</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingTop: 30,
              }}
            >
              <Button
                styles={{
                  elevation: 8,
                  backgroundColor: baseColors.secondaryColor,
                  borderRadius: 50,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  width: 150,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  Navigation.navigate("Feed");
                }}
              >
                <Text
                  style={{
                    color: baseColors.lightColor,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Signup
                </Text>
              </Button>

              <Button
                styles={{
                  elevation: 8,
                  backgroundColor: baseColors.primaryColor,
                  borderRadius: 50,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  width: 150,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  Navigation.goBack("");
                }}
              >
                
                  <PaymentPayAsOption >
                    <Text style={{color:baseColors.lightTextColor}}>
                    Next
                    </Text>
                  </PaymentPayAsOption>
                
              </Button>
            </View>
              </View>
              
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
    fontWeight: "bold",
    textAlign: "center",
  },
  modal: {
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    width: deviceWidth / 1,
    height: deviceHeight / 1,
  },
  modalView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent:'space-around',
    backgroundColor: baseColors.lightColor,
    width: deviceWidth / 1 - 10,
    height: deviceHeight / 1-50 ,
    marginBottom: 2,
    paddingTop: 10,
    borderRadius: 30,
  },

  modalViewText: {
    color: baseColors.darkTextColor,
  },

  modalIcon: {
    color: baseColors.primaryColor,
  },

  ButtonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  

  modalViewText: {
    color: baseColors.primaryTextColor,
    fontSize: 15,
    fontWeight: "700",
    paddingBottom: 10,
  },
  formText: {
    paddingLeft: 20,
  },
  InputField: {
    height: 40,
    width: deviceWidth / 1.3,
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
});

export default PaymentPayAsForm;
