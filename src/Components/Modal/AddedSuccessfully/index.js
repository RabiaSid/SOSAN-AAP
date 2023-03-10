import React, { useState  } from "react";
import { Text, View, Dimensions,Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SuccessImage } from "../../../Assets/images";
import Modal from "react-native-modal";
import baseColors from '../../../Constant/color'
import DarkGradient from "../../Gradient/DarkGradient";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function AddedSuccessfully({children}) {
  const Navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      
      <Text style={styles.ButtonText} onPress={toggleModal}>{children}</Text>

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
              <Image source={SuccessImage} style={{height: 160, width: 160, borderRadius:50 }}
              ></Image>
              <Text style={styles.Text}
               >Added SuccessFully</Text>
               <DarkGradient  styles={{
                  elevation: 8,
                  backgroundColor: baseColors.primaryColor,
                  borderRadius: 50,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  width:deviceWidth/1.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
              <Text style={styles.modalViewText}
              onPress={() => {
                Navigation.goBack("");
              }}
              >Done</Text>
              </DarkGradient>
              </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    Text:{
        color: baseColors.sucessTextColor,
        width:deviceWidth/3,
        fontWeight: "bold",
        textAlign:"center",
      },
      modal: {
        backgroundColor:baseColors.lightColor,
        borderRadius:10,
      },
      modalView:{
        flexDirection:'column',
        backgroundColor: baseColors.lightColor,
        alignItems:'center',
        justifyContent:'space-evenly',
        width:deviceWidth/1.2,
        height:deviceHeight/2.5,
        paddingVertical:10,
        borderRadius:30
        
      },
     
      modalViewText:{
        fontSize: 16,
        fontWeight:'bold',
        color: baseColors.lightTextColor,
  
      },
     
      modalIcon:{
        color: baseColors.primaryColor,
      },
      
     
      ButtonText: {
        color: baseColors.lightColor,
        fontWeight: "bold",
        textTransform: "uppercase",
      },
})

export default AddedSuccessfully