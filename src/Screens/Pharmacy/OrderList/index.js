import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import AppHeader from "../../../Components/AppHeader/index";
import { styles } from "./style";
import baseColors from "../../../Constant/color";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Button from "../../../Components/Buttons/index";
import SwitchSelector from "../../../Components/SwitchSelector/PharmacyRequestAndReserved/index";
import { useNavigation } from "@react-navigation/native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function OrderList() {
  const Navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
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
              width: deviceWidth / 4,
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity onPress={() => Navigation.goBack("")}>
              <Ionicons
                name="chevron-back-sharp"
                size={37}
                style={{ color: baseColors.lightTextColor }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: deviceWidth / 2,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontWeight: "bold", color: baseColors.lightTextColor }}
            >
              Pharmacy
            </Text>
          </View>
          <View
            style={{
              width: deviceWidth / 5,
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <AntDesign
              name="exclamationcircleo"
              size={20}
              style={{ fontWeight: "bold", color: baseColors.lightTextColor }}
            />
          </View>
        </View>
      </AppHeader>

      <View style={styles.screenMiddle}>
        <View style={styles.ButtonView}>
          <Button
            styles={styles.TopButton}
            onPress={() => {
              Navigation.navigate("NearbyPharmacy");
            }}
          >
            <Text style={styles.TopButtonText}>Near By Pharmacies</Text>
          </Button>

          <Button
            styles={styles.TopTwoButton}
            onPress={() => {
              Navigation.navigate("SearchDrug");
            }}
          >
            <Text style={styles.TopTwoButtonText}>Search medicine</Text>
          </Button>
        </View>
        <View style={styles.switchView}>
          <SwitchSelector />
        </View>
      </View>
    </View>
  );
}

export default OrderList;
