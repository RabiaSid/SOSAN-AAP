import React from "react";
import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import baseColors from "../../../Constant/color";
import { useNavigation } from '@react-navigation/native'

const ChatList = ({ data }) => {
  const Navigation = useNavigation();
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', padding:5}} key={data?.key}>
            <Image source={data?.image} style={{height: 50, width: 50, borderRadius:50 }}></Image>
            <View style={{flexDirection:'column'}}>
            <Text>{data?.title}</Text>
            <Text
            onPress={()=> {
              Navigation.navigate(data?.goTo)}}
            >{data?.message}</Text>
            </View>
            <View style={{flexDirection:'column'}}>
            <Text>{data?.time}</Text>
            <Entypo name="mail-with-circle" size={20} style={{color: baseColors.dangerTextColor}} />
            </View>
    </View>
  );
};
export default ChatList;
