import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import AppHeader from "../../../Components/AppHeader/index";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import baseColors from "../../../Constant/color";
import { Ionicons } from "@expo/vector-icons";
import SearchField from "../../../Components/SearchField/index";
import AddDrugList from "../../../Components/List/AddDrugList";
import Button from "../../../Components/Buttons/index";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function DrugAdd() {
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
                width: deviceWidth / 3,
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <TouchableOpacity onPress={() => Navigation.goBack("")}>
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
                Add Drug
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.screenMiddle}>
            <View style={styles.items}>
              <Text
                style={styles.ListTitle}
                // onPress={() => {
                //   Navigation.navigate("AddDrug");
                // }}
              >
                Drug Name/Formula
              </Text>
              <SearchField styles={styles.SearchField} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <AddDrugList />
            </View>
            <Button
              styles={styles.Button}
              // onPress={() => {
              //   Navigation.navigate("Services");
              // }}
            >
              <Text
                style={styles.ButtonText}
                onPress={() => {
                  Navigation.navigate("AvailabilityPharmacy");
                }}
              >
                Search Medicine
              </Text>
            </Button>
          </View>
        </ScrollView>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default DrugAdd;
