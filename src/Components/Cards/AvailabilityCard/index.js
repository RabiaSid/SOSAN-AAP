import React, {useState} from "react";
import { View, StyleSheet,Text, Image, Dimensions, } from "react-native";
import baseColors from "../../../Constant/color";
import { Ionicons } from '@expo/vector-icons';


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function AvailabilityCard({data}) {

  return (
    <View
          style={styles.ActivityView}
        >
          <Image
            source={data?.image}
            style={styles.ActivityImage}
          ></Image>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.itemsViewText}>{data?.title}</Text>
            <Text style={styles.itemsViewTextSecondery}>{data?.ConfigMin}</Text>
            <Text style={styles.itemsViewTextSecondery}>{data?.ConfigMed}</Text>
            <Text style={styles.itemsViewTextSecondery}>{data?.ConfigHigh}</Text>
          </View>
          <View style={{ flexDirection: 'column', justifyContent:'flex-end',  height:80  }}>
          <Text style={styles.itemsViewTextDanger}>{data?.Distance}</Text>
          </View>
        </View>

  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      alignItems: "center",
      justifyContent: "center",
      width: deviceWidth/1-50,
      marginVertical: 5,
    },
    ActivityView:{
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width:deviceWidth/1-50,
      backgroundColor:baseColors.LightSecondaryColor,
      paddingVertical:10,
      borderRadius:15,
      marginTop:10,
      elevation:2
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
    },
    itemsViewTextDanger: {
        color: baseColors.dangerTextColor,
        fontWeight: "bold",
        fontSize : 14,
      },
      itemsViewTextSecondery: {
        color: baseColors.secondaryTextColor,
        fontWeight: "bold",
        fontSize : 14,
      },
  
    
  });

export default AvailabilityCard