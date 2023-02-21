import React from "react";
import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import baseColors from "../../../Constant/color";

const ListCard = ({ data }) => {
  return (
    
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', padding:5}} key={data?.key}>
            <Image source={data?.image} style={{height: 50, width: 50, borderRadius:50 }}></Image>
            <View style={{flexDirection:'column'}}>
            <Text>{data?.title}</Text>
            <Text>{data?.message}</Text>
            </View>
            <View style={{flexDirection:'column'}}>
            <Text>{data?.time}</Text>
            <Entypo name="mail-with-circle" size={20} style={{color: baseColors.dangerTextColor}} />
            </View>
    </View>
  );
};
export default ListCard;
