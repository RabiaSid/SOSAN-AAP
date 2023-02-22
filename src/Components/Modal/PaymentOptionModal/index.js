import React, { useState  } from "react";
import { Text, View, Dimensions,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {styles} from "./style.js"
import { SuccessImage } from "../../../Assets/images";
import Modal from "react-native-modal";
import PaymentFormModal from "../PaymentFormModal/index.js";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function PaymentOptionModal() {
  const Navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      
      <Text style={styles.ButtonText} onPress={toggleModal}>Payment Option Modal</Text>

      <Modal isVisible={isModalVisible} >
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
              <Image source={SuccessImage} style={{height: 100, width: 100, borderRadius:50 }}
              ></Image>
              <Text style={styles.Text}
              onPress={() => {
                Navigation.navigate("PaymentSuccessFull"); 
                toggleModal();
              }} 
              >Payment Success Full</Text>
              <Text style={styles.modalViewText}>Three</Text>
              </View>
              
          </View>
        </View>
      </Modal>

      
    </View>
    
  );
}

export default PaymentOptionModal;
