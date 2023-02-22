import React, { useState  } from "react";
import { Text, View, Dimensions,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {styles} from "./style.js"
import { SuccessImage } from "../../../Assets/images";
import Modal from "react-native-modal";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function PaymentModal() {
  const Navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  // const [isModalVisibleTwo, setModalVisibleTwo] = useState(false);
  // const [isModalVisibleThree, setModalVisibleThree] = useState(false);


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    // setModalVisible(!isModalVisibleTwo);
    // setModalVisible(!isModalVisibleThree);
  };

  return (
    <View style={{ flex: 1 }}>
      
      <Text style={styles.ButtonText} onPress={toggleModal}>Payment Modal</Text>

      <Modal isVisible={isModalVisible} 
      // onModalHide={isModalVisibleTwo}
      >
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
              
              ></Text>
              <Text style={styles.modalViewText}>one</Text>
              </View>
              
          </View>
        </View>
      </Modal>

      {/* <Text style={styles.ButtonText} onPress={toggleModal}>Payment Form Modal</Text>

      <Modal isVisible={isModalVisibleTwo} onModalHide={isModalVisibleThree}>
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
             
              ></Text>
              <Text style={styles.modalViewText}>Two</Text>
              </View>
              
          </View>
        </View>
      </Modal>
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
              
              }} 
              >Payment Success Full</Text>
              <Text style={styles.modalViewText}>Three</Text>
              </View>
              
          </View>
        </View>
      </Modal>*/}
    </View> 
  );
}

export default PaymentModal;

