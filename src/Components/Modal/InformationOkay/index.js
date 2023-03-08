import React, { useState  } from "react";
import { Text, View, Dimensions,Image, StyleSheet,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../Buttons/index";
import baseColors from "../../../Constant/color.js";
import Modal from "react-native-modal";
import InputField from "../../InputField/index"



const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function InformationOkay({isVisible, onPress,children}) {
  const Navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={onPress}>
      {children}
      </TouchableOpacity>

      <Modal 
      isVisible={isVisible}
      backdropOpacity={10}
      style={{
        flex: 1,
        height: deviceHeight / 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        
      }}
      >
        
              <View style={styles.modalView}>
              <Text style={styles.formText}>
                Lorem Ipsum is that it has a more or less
                normal distribution Lorem Ipsum is that it has a more or less
                normal distribution 
                </Text>
              <Button styles={styles.Button}
              onPress={() => {
                Navigation.goBack("");
              }}
              >
                <Text style={styles.ButtonText}>Done</Text>
              </Button>
              </View>
              
          
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
	
    
      modalView:{
        flexDirection:'column',
        backgroundColor: baseColors.lightColor,
        alignItems:'center',
        justifyContent:'center',
        width:deviceWidth/1.2,
        height:deviceHeight/4,
        paddingVertical:30,
        borderRadius:15,
        elevation:2
        
      },
      
      Button: {
        elevation: 2,
        backgroundColor: baseColors.sucessColor,
        borderRadius: 50,
        paddingHorizontal: 12,
        width: deviceWidth / 1.5,
        height: 40,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
      },
      ButtonText: {
        color: baseColors.lightTextColor,
        fontSize: 18,
        fontWeight: "bold",
      },
      
      formText: {
        color: baseColors.darkTextColor,
        fontSize: 16,
        textAlign:'center',
        width:deviceWidth/1.3,
        
      },
      InputField: {
        height: 40,
        margin: 5,
        borderColor: baseColors.sucessColor,
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
        width: deviceWidth / 1.5,
      },
      
    
        
 
})

export default InformationOkay