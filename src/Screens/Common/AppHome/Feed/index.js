import React from "react";
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import AppHeader from "../../../../Components/AppHeader";
import baseColors from "../../../../Constant/color";
import SearchField from "../../../../Components/SearchField";
import { useNavigation } from "@react-navigation/native";
import { Logo, FlagButtonOne, FullBottomImageTwo } from "../../../../Assets/images";
import {
  FontAwesome5,
  Fontisto,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import { styles } from "./style";
import FlagSelectList from "../../../../Components/List/FlagSelectList";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function Feed() {
  const navigation = useNavigation();

  return (
    <View style={styles.ScreenContainer}>
      <AppHeader styles={styles.headerContainer}>
        <View style={styles.headerContainerView}>
          <View style={styles.HeaderFirstRow}>
            <Image source={Logo} style={{ height: 30, width: 125 }} />
          </View>
          <View style={styles.HeaderSecondRow}>
            <TouchableOpacity
              onPress={() => navigation.navigate("UserAppHome")}
            >
              <Image source={FlagButtonOne} style={{ height: 20, width: 35 }} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <SearchField placeholder="Search" styles={styles.SearchField} />
        </View>
      </AppHeader>
      <View style={styles.items}>
        <View style={styles.itemsMainView}>
          <View style={styles.itemsView}>
            <FontAwesome5
              name="clinic-medical"
              size={26}
              style={styles.itemsIcon}
            />
            <Text
              onPress={() => navigation.navigate("Agenda")}
              style={styles.itemsViewText}
            >
              Agenda
            </Text>
          </View>

          <View style={styles.itemsViewReverse}>
            <Entypo name="calendar" size={24} style={styles.itemsIconReverse} />
            <Text
              onPress={() => navigation.navigate("Appointment")}
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
              onPress={() => navigation.navigate("CreatePost")}
              style={styles.itemsViewTextReverse}
            >
              Publicity
            </Text>
          </View>

          <View style={styles.itemsView}>
            <Entypo name="wallet" size={24} style={styles.itemsIcon} />
            <Text
              onPress={() => navigation.navigate("Epargne")}
              style={styles.itemsViewText}
            >
              Earning
            </Text>
          </View>
        </View>
      </View>

      <Image
        source={FullBottomImageTwo}
        style={{ height: 250, resizeMode: "contain", width:380 }}
      />
    </View>
  );
}

export default Feed;
