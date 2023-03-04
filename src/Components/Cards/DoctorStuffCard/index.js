import React from "react";
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import baseColors from "../../../Constant/color";
import Button from "../../Buttons/index";
import DarkGradient from "../../Gradient/DarkGradient";
import { useNavigation } from "@react-navigation/native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function index({ data }) {
  const Navigation = useNavigation();

  return (
   <TouchableOpacity 
    onPress={()=>{Navigation.navigate(data?.goTo)}}>
    <View style={styles.StuffCardItem}>
      <View style={styles.StuffView}>
        <DarkGradient styles={styles.StuffImageView}>
          <Image source={data?.image} style={styles.StuffImage} />
        </DarkGradient>
      </View>
      <View style={styles.StuffViewText}>
        <Text style={styles.StaffCardHeading}>{data?.title}</Text>
        <Text style={styles.StaffCardText}>{data?.designation}</Text>
        <Text style={styles.StaffCardText}>{data?.quafication}</Text>
      </View>
      <Button styles={styles.Button}>
        <Text style={styles.ButtonText}>Book An Appointment</Text>
      </Button>
    </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  StuffCardItem: {
    flexDirection: "column",
    alignItems:'center',
    marginVertical: 10,
    marginHorizontal:2,
    paddingVertical: 5,
    width: deviceWidth / 3.2,
    backgroundColor: baseColors.lightColor,
    elevation: 6,
    borderRadius: 10,
  },
  StuffImageView: {
    height: 95,
    width: 95,
    borderRadius: 100,
    padding: 2.5,
  },
  StuffImage: {
    height: 90,
    width: 90,
    borderRadius: 50,
  },
  StuffView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  StuffViewText: {
    
    paddingVertical: 5,
  },
  StaffCardHeading: {
    color: baseColors.secondaryTextColor,
    fontSize: 15,
    fontWeight: "700",
  },
  StaffCardText: {
    color: baseColors.secondaryTextColor,
  },
  Button: {
    elevation: 8,
    backgroundColor: baseColors.purpleColor,
    borderRadius: 2,
   //  paddingVertical: 5,
   //  paddingHorizontal: 12,
    width: deviceWidth / 3.5,
    height:15,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize:9
  },
});

export default index;
