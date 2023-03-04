import React from "react";
import { View, Dimensions } from "react-native";
import { styles } from "./style";
import LayoutGeneral from "../../../Components/LayoutGeneral";
import { General } from "../../../Components/General/index";
import AvailabilityComponent from "../../../Components/Availability/index"
// import Prescription from "../../../Components/Prescription";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function Availability() {
  return (
    <LayoutGeneral 
    top={<AvailabilityComponent />}
    center={<General title="St Thomas Hospital, uk" />}
    >
        
      {/* <Prescription /> */}
    </LayoutGeneral>
  );
}

export default Availability;
