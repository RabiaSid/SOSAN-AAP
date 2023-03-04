import React from "react";
import {
  View,
  Text,
  Dimensions,
  FlatList,
} from "react-native";
import baseColors from "../../../Constant/color";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { AddDrugData } from "../../../Config";
import { useNavigation } from "@react-navigation/native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
let colors = [baseColors.lightColor, baseColors.LightSecondaryColor ];

function AddDrugList() {
  const Navigation = useNavigation();
  return (
    <View
                style={{
                  width: deviceWidth / 1.1,
                  borderTopRightRadius: 30,
                  borderTopLeftRadius: 30,
                  
                }}
              >
                <View
                  style={{
                    height: 55,
                    width: deviceWidth / 1.1 - 7,
                    borderTopRightRadius: 25,
                    borderTopLeftRadius: 25,
                    backgroundColor: baseColors.primaryColor,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <View
                    style={{
                      width: deviceWidth / 1.5,
                      flexDirection: "row",
                      justifyContent: 'space-evenly',
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: baseColors.lightTextColor,
                      }}
                    >
                      Catergory
                    </Text>
                    <Text
                      style={{
                        color: baseColors.lightTextColor,
                      }}
                    >
                      Formula
                    </Text>
                    <Text
                      style={{
                        color: baseColors.lightTextColor,
                      }}
                    >
                      Qnty
                    </Text>
                    <Text
                      style={{
                        color: baseColors.lightTextColor,
                      }}
                    >
                      Action
                    </Text>
                  </View>
                </View>
                <View>
                <FlatList
                  data={AddDrugData}
                  keyExtractor={(item, index) => index}
                  renderItem={({ item, index }) => 
                    <View
                      style={{
                        width: deviceWidth / 1 - 40,
                        flexDirection: "row",
                        justifyContent: 'space-around',
                        alignItems: "center",
                        height: 55,
                        
                        backgroundColor: colors[index % colors.length]
                        
                      }}
                    >
                      <Text>{item?.title}</Text>
                      <Text>{item?.catergory}</Text>
                      <Text>{item?.formula}</Text>
                      <Text>{item?.Quantity}</Text>
                      <View style={{flexDirection:'row', justifyContent:'space-evenly',alignItems:'center', width:45}}>
                      <FontAwesome name="pencil" size={20} style={{color: baseColors.secondaryTextColor}} 
                      onPress={() => {
                        Navigation.navigate("SearchDrug");
                      }}/>
                      <MaterialIcons name="delete" size={20} style={{color: baseColors.dangerTextColor}} />
                      </View>
                      
                    </View>

                }
                />

                
                </View>
              </View>
  )
}

export default AddDrugList