import React from "react";
import LayoutPersonalDetail from "../../../../Layout/LayoutPersonalDetail";
import { useNavigation } from "@react-navigation/native";


function PersonalDetail() {
  const Navigation = useNavigation();
  return (
    <LayoutPersonalDetail 
    title="Personal Detail"
    onPress={() => {
      Navigation.navigate("UserSignIn");
    }}
    />
  );
}

export default PersonalDetail;
