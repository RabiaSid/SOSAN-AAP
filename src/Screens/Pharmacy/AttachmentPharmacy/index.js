import React from "react";
import { View, Dimensions } from "react-native";
import { styles } from "./style";
import LayoutGeneral from "../../../Components/LayoutGeneral";
import { General } from "../../../Components/General/index";
import Prescription from "../../../Components/Prescription";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function AttachmentPharmacy() {
  return (
    <LayoutGeneral top={<General title="St Thomas Hospital, uk" />}>
      <Prescription />
    </LayoutGeneral>
  );
}

export default AttachmentPharmacy;
