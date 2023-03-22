import React from "react";
import LayoutPersonalDetail from "../../../Layout/LayoutPersonalDetail";
import { useNavigation } from "@react-navigation/native";

function AddANewDoctorHospital() {
  const Navigation = useNavigation();
  return (
    <LayoutPersonalDetail 
    title="Add A New Detail"
    onPress={() => {
      Navigation.navigate("WorkingDetailHospital");
    }}
    />
  );
}

export default AddANewDoctorHospital;


