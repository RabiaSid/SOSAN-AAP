import React from 'react'
import { View, StyleSheet,Text, Image, Dimensions } from "react-native";
import baseColors from '../../../Constant/color';
import { MaterialIcons,Entypo } from '@expo/vector-icons';


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function PharmacyRequestSelectorCard({ data }) {
  return (
    <View
        style={styles.ActivityView}
      >
        <Image
          source={data?.image}
          style={styles.ActivityImage}
        ></Image>
        <View style={{ flexDirection: "column" }}>
          <Text>{data?.title}</Text>
          <View style={styles.ItemDisc}>
            <Text>{data?.Quantity}</Text>
            </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.itemsViewText}>{data?.Day}</Text>
        </View>
      </View> 
  )
}

const styles = StyleSheet.create({
    
    ActivityView:{
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      height:70,
      width:deviceWidth/1.2,
      backgroundColor:baseColors.LightSecondaryColor,
      borderRadius:15,
      marginTop:10,
    },
    ActivityImage:{
      height: 50, 
      width: 50, 
      borderRadius: 50 
    },
    itemsViewText: {
      color: baseColors.darkTextColor,
      fontWeight: "bold",
      fontSize : 14,
      paddingTop:25
    },
    ItemDisc: {
      flexDirection: "row",
      paddingTop:5
  },
  });

export default PharmacyRequestSelectorCard