import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style.js";
import SelectServiceAssurance from "../../Modal/SelectServiceAssurance/index";
const PreciptionList = () => {
  return (
    <View style={styles.Container}>
      <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
        <Text style={{ paddingTop: 10, color: "gray" }}>Prescription</Text>
      </View>
      <View style={styles.List}>
        <View style={styles.firstRow}>
          <Text style={styles.title}>Precription</Text>
          <Text style={styles.title}>Bill</Text>
          <Text style={styles.title}>Status</Text>
        </View>
        <View style={styles.secondRow}>
          <View style={styles.ListItems1}>
            <Text style={styles.textStyling}>Prescription 1 </Text>
            <Text style={styles.textStyling}>Prescription 2 </Text>
            <Text style={styles.textStyling}>Prescription 3 </Text>
            <Text style={styles.textStyling}>Prescription 4 </Text>
          </View>
          <View style={styles.ListItems2}>
            <Text style={styles.textStyling}>$ 52.2</Text>
            <Text style={styles.textStyling}>$ 52.2</Text>
            <Text style={styles.textStyling}>$ 52.2</Text>
            <Text style={styles.textStyling}>$ 52.2</Text>
          </View>
          <View style={styles.ListItems3}>
            <SelectServiceAssurance />

            <Text style={styles.textStyling1}>Pending</Text>
            <Text style={styles.textStyling1}>Pending</Text>
            <Text style={styles.textStyling1}>Pending</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PreciptionList;
