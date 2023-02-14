import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import AppHeader from "../../../Components/AppHeader/index";
import { NotificationData } from "../../../Config/index";
import Button from "../../../Components/Buttons/index";
import { styles } from "./style";
import baseColors from "../../../Constant/color";
import { Ionicons } from "@expo/vector-icons";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function Notification() {
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
                width: deviceWidth / 3,
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <TouchableOpacity>
                <Ionicons
                  name="chevron-back-sharp"
                  size={30}
                  style={{ color: baseColors.lightTextColor }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: deviceWidth / 3,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ fontWeight: "bold", color: baseColors.lightTextColor }}
              >
                Notification
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
        <FlatList
  data={NotificationData}
  renderItem={({item}) => (
          <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center', padding:5}} key={item?.key}>
            
          <Image source={item?.image} style={{height: 40, width: 40, borderRadius:50 }}></Image>
            
          <View style={{flexDirection:'column'}}>

            <Text>{item?.message}{item?.ConfirmSucess} {item?.ConfirmReject} </Text>

            <View style={{flexDirection:'row'}}>

            <View><Button> {item?.Sucess} </Button></View>
            <View><Button>{item?.Reject}</Button></View>

            </View>

          </View>
          </View>
          )}
          />
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default Notification;
