import React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import AppHeader from "../../../Components/AppHeader/index";
import { styles } from "./style";
import baseColors from "../../../Constant/color";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import SkipSwitchButton from "../../../Components/SkipSwitchButton/index";
import Button from "../../../Components/Buttons";
import { useNavigation } from "@react-navigation/native";
import AccountReviewModal from "../../../Components/Modal/AccountReviewModal";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function StuffDetailPharmacy() {
  const Navigation = useNavigation();
  return (
    <ScrollView
      style={styles.screenContainer}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <AppHeader styles={styles.headerContainer}>
          <View style={styles.Headeritems}>
            <Text style={styles.HeaderText}>Skip</Text>
            <AntDesign
              name="doubleright"
              size={22}
              style={{ color: baseColors.primaryTextColor }}
            />
          </View>
        </AppHeader>
      </View>
      {/* <ScrollView> */}

      <View style={styles.screenMiddle}>
        <View style={{ paddingVertical: 10, width: deviceWidth / 1 - 40 }}>
          <SkipSwitchButton
            onPress={() => {
              Navigation.navigate("AddANewDoctorPharmacy");
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            height: 100,
            width: deviceWidth / 1 - 40,
            backgroundColor: baseColors.lightColor,
            elevation: 4,
          }}
        >
          <MaterialIcons name="person-add-alt-1" size={24} color="black" />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              color: baseColors.secondaryTextColor,
            }}
            onPress={() => {
              Navigation.navigate("AddANewDoctorPharmacy");
            }}
          >
            Add New Staff
          </Text>
        </View>

        <View
          style={{
            height: 60,
            flexDirection: "column",
            justifyContent: "flex-end",
            marginTop: 10,
          }}
        >
          <Button
            styles={styles.Button}
            onPress={() => {
              Navigation.navigate("PharmacyAppHome");
            }}
          >
            <Text style={styles.ButtonText}>Continue</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

export default StuffDetailPharmacy;
