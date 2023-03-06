import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image
} from "react-native";


import LayoutReservationPharmacy from "../../../../Components/LayoutReservationPharmacy/index"
import { useNavigation } from "@react-navigation/native";





function Documents() {
  const Navigation= useNavigation();

  return (
    <LayoutReservationPharmacy
    title='Reservation'
    onPress={()=>{Navigation.navigate('Feed')}}
    >

    </LayoutReservationPharmacy>
  );
}

export default Documents;

