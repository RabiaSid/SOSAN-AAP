import React from "react";
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import AppHeader from "../../../Components/AppHeader";
import baseColors from "../../../Constant/color";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../../Components/Buttons/index";
import SearchField from "../../../Components/SearchField";
import {
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { styles } from "./style";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function Feed() {
  return (
    <View style={{ flex: 1, backgroundColor: baseColors.lightColor }}>
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
            }}
          >
            <Image
              source={require("../../../../src/Assets/images/Logo.png")}
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
                source={require("../../../../src/Assets/images/FlagButtonOne.png")}
                style={{ height: 20, width: 35 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <SearchField placeholder="Search" styles={styles.SearchField} />
        </View>
      </AppHeader>
      <View style={styles.modal}>
        <Text style={styles.Text}>Select Institude Type</Text>

        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          <View style={styles.modalView}>
            <FontAwesome5
              name="clinic-medical"
              size={26}
              style={styles.modalIcon}
            />
            <Text
              onPress={() => {
                Navigation.navigate("CommonDetail");
                toggleModal();
              }}
              style={styles.modalViewText}
            >
              Hospital Prive/public
            </Text>
          </View>

          <View style={styles.modalViewReverse}>
            <FontAwesome5
              name="capsules"
              size={24}
              style={styles.modalIconReverse}
            />
            <Text
              onPress={() => {
                Navigation.navigate("CommonDetail");
                toggleModal();
              }}
              style={styles.modalViewTextReverse}
            >
              Pharmacie
            </Text>
          </View>

          <View style={styles.modalViewReverse}>
            <Fontisto name="doctor" size={26} style={styles.modalIconReverse} />
            <Text
              onPress={() => {
                Navigation.navigate("PersonalDetail");
                toggleModal();
              }}
              style={styles.modalViewTextReverse}
            >
              prise de rdv medecin
            </Text>
          </View>

          <View style={styles.modalView}>
            <FontAwesome5
              name="clinic-medical"
              size={26}
              style={styles.modalIcon}
            />
            <Text
              onPress={() => {
                Navigation.navigate("CommonDetail");
                toggleModal();
              }}
              style={styles.modalViewText}
            >
              Hospital Prive/public
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
        style={{ height: 270,resizeMode: 'contain' }}
        
      />
    </View>
  );
}

export default Feed;
