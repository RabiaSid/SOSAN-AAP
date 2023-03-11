import React from "react";
import { View, Dimensions } from "react-native";
import SearchField from "../../../../Components/SearchField/index";
import baseColors from "../../../../Constant/color";
import LayoutReservationPharmacy from "../../../../Components/LayoutReservationPharmacy/index";
import { useNavigation } from "@react-navigation/native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function AgendaDrugRequest() {
  const Navigation = useNavigation();
  return (
    <LayoutReservationPharmacy
      title="Drugs Reservation"
      onPress={() => {
        Navigation.navigate("AgendaSendBill");
      }}
    >
      <View style={{ width: deviceWidth / 1.2 }}>
        <SearchField
          style={{
            height: 50,
            borderColor: baseColors.lightColor,
            borderWidth: 1,
            borderRadius: 50,
          }}
        />
      </View>
    </LayoutReservationPharmacy>
  );
}

export default AgendaDrugRequest;
