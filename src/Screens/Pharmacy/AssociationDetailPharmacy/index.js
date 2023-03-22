import React from "react";
import { Text, View, style } from "react-native";
import baseColors from "../../../Constant/color";
import LayoutCommonDetail from "../../../Layout/LayoutCommonDetail";
import { useNavigation } from "@react-navigation/native";

function AssociationDetailPharmacy() {
  const Navigation = useNavigation();
  return (
    <LayoutCommonDetail>
      <Text
        style={{
          color: baseColors.lightTextColor,
          fontWeight: "bold",
          fontSize: 20,
        }}
        onPress={() => {
          Navigation.navigate("AddServicesPharmacy");
        }}
      >
        Continue
      </Text>
    </LayoutCommonDetail>
  );
}

export default AssociationDetailPharmacy;
