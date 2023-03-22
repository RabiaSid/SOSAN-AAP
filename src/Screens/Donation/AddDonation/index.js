import React from "react";
import { View, Text, Dimensions } from "react-native";
import { styles } from "./style";
import LayoutGeneral from "../../../Layout/LayoutGeneral";
import { General } from "../../../Components/General/index";
import DarkGradient from "../../../Components/Gradient/DarkGradient";
import PaymentPayAsOption from "../../../Components/Modal/PaymentModal/PaymentPayAsOption";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function AddDonation() {
  return (
    <LayoutGeneral top={<General title="St Thomas Hospital, uk" />}>
      <View style={styles.View}>
        <DarkGradient styles={styles.Button}>
          <PaymentPayAsOption>
            <Text style={styles.ButtonText}>Add Donation</Text>
          </PaymentPayAsOption>
        </DarkGradient>
      </View>
    </LayoutGeneral>
  );
}

export default AddDonation;
