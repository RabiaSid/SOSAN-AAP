import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import AppHeader from "../../../../Components/AppHeader/index";
import { styles } from "./style";
import baseColors from "../../../../Constant/color";
import { Ionicons,EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CurrentChampaignDataPharmacy } from "../../../../Config";
import { MaterialIcons } from '@expo/vector-icons';
import DarkGradient from '../../../../Components/Gradient/DarkGradient'

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

let colors = [baseColors.lightColor, baseColors.LightSecondaryColor];

function CurrentCampaignPharmacy() {
  const Navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <View>
        <AppHeader styles={styles.headerContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 5,
            }}
          >
            <View
              style={{
                width: deviceWidth / 5,
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  Navigation.goBack("");
                }}
              >
                <Ionicons
                  name="chevron-back-sharp"
                  size={30}
                  style={{ color: baseColors.lightTextColor }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: deviceWidth / 1.6,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: baseColors.lightTextColor,
                  fontSize: 18,
                }}
              >
                 Current Champaign
              </Text>
            </View>
          </View>
        </AppHeader>
      </View>
      {/* <ScrollView> */}
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.screenMiddle}>
          
          <View
            style={{
              flexDirection:'column',
              alignItems:'center',
              width: deviceWidth / 1-10,
              height:deviceHeight/1.3,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              paddingTop: 10,
            }}
          >
            <View
              style={{
                height: 55,
                width: deviceWidth / 1-20,
                borderTopRightRadius: 25,
                borderTopLeftRadius: 25,
                backgroundColor: baseColors.primaryColor,
                flexDirection: "row",
                justifyContent:'center'
                
              }}
            >
              <View
                style={{
                  width: deviceWidth / 1.2,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: baseColors.lightTextColor,
                  }}
                >
                   Medicine
                </Text>
                <Text
                  style={{
                    color: baseColors.lightTextColor,
                  }}
                >
                   Old Price
                </Text>
                <Text
                  style={{
                    color: baseColors.lightTextColor,
                  }}
                >
                   New Price
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
            
            <TouchableOpacity 
            onPress={()=>{Navigation.navigate('SetCampaignPharmacy') }}
            >
              <FlatList
                data={CurrentChampaignDataPharmacy}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      width: deviceWidth / 1 - 25,
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      height: 55,

                      backgroundColor: colors[index % colors.length],
                    }}
                  >
                    <Text>{item?.title}</Text>
                    <Text>$ 50</Text>
                    <Text>$ 50</Text>
                    <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                    >
                    <Ionicons name="ios-trash-bin-sharp" size={20} color='red'  
                   />
                   <EvilIcons name="pencil" size={28} color="grey" 
                   onPress={()=>{Navigation.navigate('SetCampaignPharmacy') }}
                   />
                   </View>
                  </View>
                )}
              />
            </TouchableOpacity>
          </View>
          
          <View style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              width: deviceWidth / 1 - 30,


            }}>

              <DarkGradient
                styles={{
                  elevation: 8,
                  backgroundColor: baseColors.sucessColor,
                  borderRadius: 50,
                  padding: 10,
                  // paddingHorizontal: 12,
                  width: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 60,
                  // marginVertical: 20,
                }}>
                <MaterialIcons name="add" size={40} color="white"  
                onPress={()=>{Navigation.navigate('SetCampaignPharmacy') }}
                />
              </DarkGradient>
            </View>
          
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default CurrentCampaignPharmacy;
