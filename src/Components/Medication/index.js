import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import baseColors from "../../Constant/color";
import Button from "../Buttons/index";
import DarkGradient from "../Gradient/DarkGradient";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const deviceWidth = Dimensions.get("window").width;

function Medication() {
  const Navigation = useNavigation();
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>Add Attachment Of Your Prescription</Text>
      <Text style={{flexDirection:'row',justifyContent:'flex-start',width:deviceWidth/1.1,paddingVertical:5, color:baseColors.secondaryTextColor,fontWeight:'700'}}>Add Attachment Of Your Prescription</Text>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:deviceWidth/1.3, paddingVertical:5}}>
        <View style={{flexDirection:'column'}}>
        <Text style={{color:baseColors.darkTextColor, fontWeight:'700', paddingVertical:2}}>Medicine Name </Text>
        <Text style={{color:baseColors.darkTextColor, fontWeight:'700', paddingVertical:2}}>Medicine Name </Text>
        <Text style={{color:baseColors.darkTextColor, fontWeight:'700', paddingVertical:2}}>Medicine Name </Text>
        <Text style={{color:baseColors.dangerTextColor, fontWeight:'700',paddingVertical:2}}>Total </Text>
        </View>
        <View style={{flexDirection:'column'}}>
        <Text style={{color:baseColors.darkTextColor, fontWeight:'700',paddingVertical:2}}>$ 50</Text>
        <Text style={{color:baseColors.darkTextColor, fontWeight:'700', paddingVertical:2}}>$ 1.50</Text>
        <Text style={{color:baseColors.darkTextColor, fontWeight:'700', paddingVertical:2}}>$ 7.25</Text>
        <Text style={{color:baseColors.dangerTextColor, fontWeight:'700', paddingVertical:2}}>$ 61.25</Text>
        </View>
      </View>
      <DarkGradient
        styles={styles.ButtonPrimary}
        // onPress={() => {
        //   Navigation.navigate("AppHome");
        // }}
      >
        <Text style={styles.ButtonTextPrimary}
        onPress={() => {
          Navigation.navigate("Payment");
        }}
       >Reverse Medication $1.50</Text>
      </DarkGradient>
      <Text style={styles.SmallText}>Lorem Ipsum is that it has a distribution of letters</Text>
      <Button
        styles={styles.ButtonLight}
        onPress={() => {
          Navigation.navigate("Payment");
        }}
      >
        <Text style={styles.ButtonTextLight}>Reverse And Purchase Now</Text>
      </Button>
      <Text style={styles.SmallText}>Lorem Ipsum is that it has a more-or-less
                normal distribution of letters</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    flexDirection: "column",
    width: deviceWidth / 1 ,
    justifyContent:'center',
    alignItems: "center",
  },
  Text:{
        paddingVertical:10,
        fontSize:15,
        fontWeight:'bold'
  },
  SmallText:{
    fontSize:13,
    color:baseColors.secondaryTextColor,
    paddingHorizontal:5,
    textAlign:'center',
    fontWeight:'bold',
    paddingVertical:15
  },
  IconView:{
   color:baseColors.secondaryTextColor,

  },
  ButtonPrimary: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: deviceWidth / 1 - 40,
    marginVertical:5,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonTextPrimary: {
    color: baseColors.lightTextColor,
    fontWeight: "bold",
  },
  ButtonLight: {
    elevation: 8,
    backgroundColor: baseColors.lightColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: deviceWidth / 1 - 40,
    marginVertical:5,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonTextLight: {
    color: baseColors.secondaryTextColor,
    fontWeight: "bold",
  },
});

export default Medication;
