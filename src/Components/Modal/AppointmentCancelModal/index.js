import React, { useState } from "react";
import { Text, View, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style.js"
// import { alertImg } from "../../../Assets/Images/index";
import Modal from "react-native-modal";
import { Ionicons } from '@expo/vector-icons';
import baseColors from "../../../Constant/color";
import AppointmentSuccessModal from "../AppointmentSuccessModal/index";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function AppointmentCancelModal() {
  const Navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Ionicons name="trash-bin-sharp" size={24} onPress={toggleModal} style={{ color: baseColors.dangerTextColor, paddingTop: 10 }} />

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
              <View style={styles.ImgView}><Image source={alertImg} style={styles.ImageStyling}
              ></Image></View>
              <Text style={styles.Text}
                onPress={() => {
                  Navigation.navigate("SignIn");
                  toggleModal();
                }} >Success!</Text>
              <Text style={styles.modalViewText}>Are you sure to cancel Appointment ?</Text>
              <View style={{ width: deviceWidth / 2.5, flexDirection: 'row',}}>
                <AppointmentSuccessModal/>
                <Text  onPress={() => {
                  navigation.navigate("AppointmentDetail");
                }}>No</Text>
              </View>
            </View>

          </View>
        </View>
      </Modal>
    </View>
  );
}

export default AppointmentCancelModal