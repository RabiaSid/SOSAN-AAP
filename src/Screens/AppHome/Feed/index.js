import React from "react";
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import AppHeader from "../../../Components/AppHeader";
import baseColors from "../../../Constant/color";
import SearchField from "../../../Components/SearchField";
import { Logo, FlagButtonOne } from "../../../Assets/images";
import {
  FontAwesome5,
  Fontisto,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import { styles } from "./style";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function Feed(props) {

const gotoAgendaStackScreen = () => {
    props.Navigation.navigate('Test');
};
// const gotoAppointmentStackScreen = () => {
//   props.navigation.navigate('Test');
// };
// const gotoPublicityStackScreen = () => {
//   props.navigation.navigate('Test');
// };
// const gotoEarningStackScreen = () => {
//   props.navigation.navigate('Test');
// };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: baseColors.lightColor,
        height: deviceHeight / 1,
      }}
    >
      <AppHeader styles={styles.headerContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 15,
            width: deviceWidth / 1,
          }}
        >
          <View
            style={{
              width: deviceWidth / 1.2,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 35,
            }}
          >
            <Image
              source={Logo}
              style={{ height: 30, width: 125 }}
            />
          </View>
          <View
            style={{
              width: deviceWidth / 3.8,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Image
                source={FlagButtonOne}
                style={{ height: 20, width: 35 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <SearchField placeholder="Search" styles={styles.SearchField} />
        </View>
      </AppHeader>
      <View style={styles.items}>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          <View style={styles.itemsView}>
            <FontAwesome5
              name="clinic-medical"
              size={26}
              style={styles.itemsIcon}
            />
            <Text
              onPress={gotoAgendaStackScreen}
              style={styles.itemsViewText}
            >
              Agenda
            </Text>
          </View>

          <View style={styles.itemsViewReverse}>
            <Entypo name="calendar" size={24} style={styles.itemsIconReverse} />
            <Text
              // onPress={gotoAppointmentStackScreen}
              style={styles.itemsViewTextReverse}
            >
              Appointment
            </Text>
          </View>

          <View style={styles.itemsViewReverse}>
            <MaterialIcons
              name="public"
              size={24}
              style={styles.itemsIconReverse}
            />
            <Text
               // onPress={gotoPublicityStackScreen}
              style={styles.itemsViewTextReverse}
            >
              Publicity
            </Text>
          </View>

          <View style={styles.itemsView}>
            <Entypo name="wallet" size={24} style={styles.itemsIcon} />
            <Text
              // onPress={gotoEarningStackScreen}
              style={styles.itemsViewText}
            >
              Earning
            </Text>
          </View>
        </View>
      </View>

      {/* <Button
        styles={styles.Button}
        // onPress={() => {
        //   Navigation.navigate("Services");
        // }}
      >
        <Text styles={styles.ButtonText}>Login</Text>
      </Button> */}
      <Image
        source={require("../../../Assets/images/btmImage.png")}
        style={{ height: 270, resizeMode: "contain" }}
      />
    </View>
  );
}

export default Feed;
