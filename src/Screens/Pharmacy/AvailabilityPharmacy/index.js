import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList
} from "react-native";
import AppHeader from "../../../Components/AppHeader/index";
import { styles } from "./style";
import baseColors from "../../../Constant/color";
import {
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AvailabilityCard from "../../../Components/Cards/AvailabilityCard/index";
import { AvailabilityPharmacyData } from "../../../Config";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function AvailabilityPharmacy() {
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
            <TouchableOpacity
            onPress={() => Navigation.goBack("")}
            >
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
              Availability 
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
      <View>
      <FlatList
        data={AvailabilityPharmacyData}
        renderItem={({ item }) => <AvailabilityCard data={item} />}
      />
      </View>
      </View>

    </View>
  );
}

export default AvailabilityPharmacy;
