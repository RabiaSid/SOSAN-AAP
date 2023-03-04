import React, { useState  } from "react";
import { Text, View, Dimensions,Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SuccessImage } from "../../../Assets/images";
import baseColors from "../../../Constant/color.js";
import Modal from "react-native-modal";
import PaymentPayAsForm from "./PaymentPayAsForm.js";
import  Button  from "../../Buttons/index"

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function PaymentPayAs() {
  const Navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      
      <Text style={styles.ButtonText} onPress={toggleModal}>Ask</Text>

      <Modal 
      isVisible={isModalVisible}
      onBackdropPress={toggleModal}
      backdropOpacity={0.1}>
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
              <Text style={styles.modalViewText} onPress={toggleModal}>
                Change/Add Name
              </Text> 
              <Button styles={styles.ButtonLight}>
              <PaymentPayAsForm>
              <Text style={{color:baseColors.secondaryTextColor}}>
                  Pay to individual
                </Text>
              </PaymentPayAsForm>
                </Button>
                <Button styles={styles.ButtonLight}>
              <PaymentPayAsForm>
              <Text style={{color:baseColors.secondaryTextColor}}>
                  Pay to any Hospital/Pharmacy
                </Text>
              </PaymentPayAsForm>
                </Button>
                <Button styles={styles.ButtonLight}>
                <PaymentPayAsForm>
                <Text style={{color:baseColors.secondaryTextColor}}>
                  Donation Any Institude
                </Text>
                </PaymentPayAsForm>
                </Button>
                <Button styles={styles.ButtonSecondery}
                onPress={() => {
                  Navigation.goBack("");
                  toggleModal();
                }} 
                >
                <Text style={styles.ButtonTextSecondery}>Cancel</Text>
                </Button>
              

              </View>
              
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
	
    Text:{
        color: baseColors.darkTextColor,
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
        justifyContent:'center',
        width:deviceWidth/1.2,
        height:deviceHeight/2.4,
        paddingVertical:10,
        borderRadius:30
        
      },
      ButtonLight: {
        elevation: 2,
        backgroundColor: baseColors.lightColor,
        borderColor:baseColors.secondaryColor,
        borderWidth:0.2,
        borderRadius: 50,
        paddingHorizontal: 12,
        width: deviceWidth / 1.5,
        height: 35,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
      },
      ButtonTextLight: {
        color: baseColors.secondaryTextColor,
        fontSize: 12,
        fontWeight: "bold",
      },
      ButtonSecondery:{
        elevation: 2,
        backgroundColor: baseColors.secondaryColor,
        borderRadius: 50,
        paddingHorizontal: 12,
        width: deviceWidth / 1.5,
        height: 35,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
      },
      ButtonTextSecondery:{
        color: baseColors.lightTextColor,
        fontSize: 12,
        fontWeight: "bold",
      },
     
      modalViewText:{
        color: baseColors.primaryTextColor,
        fontSize:15,
        fontWeight:'700',
        paddingBottom:10
  
      },
     
      modalIcon:{
        color: baseColors.primaryColor,
      },
      
     
      ButtonText: {
        color: baseColors.lightTextColor,
    fontWeight: "bold",
    textTransform: "uppercase",
      },
    
        
 
})

export default PaymentPayAs