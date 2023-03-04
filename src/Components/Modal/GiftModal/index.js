import React, { useState  } from "react";
import { Text, View, Dimensions,Image } from "react-native";
import {Feather} from "@expo/vector-icons";
import {styles} from "./style.js"
import { SuccessImage } from "../../../Assets/images";
import Modal from "react-native-modal";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function GiftModal() {
    const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
    return (
        <View style={{ flex: 1 }}>
          <Feather
              name="bell"
              size={26}
              color="black"
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
                  
                  </View>
                  
              </View>
            </View>
          </Modal>
        </View>
      );
}

export default GiftModal