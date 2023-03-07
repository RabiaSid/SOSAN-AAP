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
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { AddDrugData } from "../../../../Config";
import { AvatarPerson1 } from "../../../../Assets/images";
import { Checkbox } from "react-native-paper";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

let colors = [baseColors.lightColor, baseColors.LightSecondaryColor];

function AgendaSendBill(props) {
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
                title="Reversation"
              >
                Drugs Requests
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
          paddingHorizontal: 10,
        }}
      >
        <View style={styles.screenMiddle}>
          {props.children}
          <View
            style={{
              flexDirection:'column',
              alignItems:'center',
              width: deviceWidth / 1,
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
                  width: deviceWidth / 1.15,
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
                  Select
                </Text>
                <Text
                  style={{
                    color: baseColors.lightTextColor,
                  }}
                >
                  Medicine Name
                </Text>
                <Text
                  style={{
                    color: baseColors.lightTextColor,
                  }}
                >
                  Dosage
                </Text>
                <Text
                  style={{
                    color: baseColors.lightTextColor,
                  }}
                >
                  Qnty.
                </Text>
                <Text
                  style={{
                    color: baseColors.lightTextColor,
                  }}
                >
                  Add Price
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={props.onPress}>
              <FlatList
                data={AddDrugData}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      width: deviceWidth / 1 - 40,
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      height: 55,

                      backgroundColor: colors[index % colors.length],
                    }}
                  >
                    <Checkbox
                     
                    />
                    <Text>{item?.title}</Text>
                    <Text>{item?.formula}</Text>
                    <Text>{item?.Quantity}</Text>
                    <View style={{
                      borderWidth:1,
                      borderColor:baseColors.sucessColor,
                      width:42,
                      height:25,
                      borderRadius:8,
                      backgroundColor:baseColors.lightColor
                    }}>

                    </View>
                  </View>
                )}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default AgendaSendBill;
