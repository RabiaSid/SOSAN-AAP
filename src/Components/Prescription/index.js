import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import baseColors from "../../Constant/color";
import Button from "../Buttons/index";
import DarkGradient from "../Gradient/DarkGradient";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const deviceWidth = Dimensions.get("window").width;

function Prescription() {
  const Navigation = useNavigation();
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>Add Attachment Of Your Prescription</Text>
      <Button styles={styles.ButtonLight}>
      <FontAwesome name="search" size={18} style={styles.IconView} />
        <Text style={styles.ButtonTextLight}>
            Add MachineName</Text>
      </Button>
      <DarkGradient
        styles={styles.ButtonPrimary}
        
        
      >
        <Text style={styles.ButtonTextPrimary}
        onPress={() => {
          Navigation.navigate("SearchDrug");
        }}
        >Add Your Prescription</Text>
      </DarkGradient>
      <Button
        styles={styles.ButtonPrimary}
        onPress={() => {
          Navigation.navigate("SearchDrug");
        }}
      >
        <Text style={styles.ButtonTextPrimary}>Use Previous Attachment</Text>
      </Button>
      <Button
        styles={styles.ButtonLight}
       onPress={() => {
          Navigation.navigate("MedicationPharmacy");
        }}
      >
        <Text style={styles.ButtonTextLight}>Done</Text>
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

export default Prescription;
