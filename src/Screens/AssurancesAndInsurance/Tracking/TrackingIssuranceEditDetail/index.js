import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View, Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import InputField from "../../../../Components/InputField";
import Darkbtn from "../../../../Components/Gradient/DarkGradient";
import { RadioButton } from "react-native-paper";

const deviceWidth = Dimensions.get("window").width;

function TrackingIssuranceEditDetail() {
  const [value, setValue] = useState("");
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.screenTop}>
        <Text style={styles.Text}>Edit Details</Text>
        <Text style={styles.LightText}>Inssurance Details</Text>
        <Text style={styles.formText}>Name</Text>
        <InputField
          placeholder="Institution Name"
          styles={styles.InputStyling}
        />
        <Text style={styles.formText}>Email</Text>
        <InputField
          placeholder="Heart International Hospital Islamabad"
          styles={styles.InputStyling}
        />
        <Text style={styles.formText}>Inssurance Plan</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <Text style={styles.formText}>Inssurance code</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <Text style={styles.formText}>Phone</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <Text style={styles.formText}>Inssurance code</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <Text style={styles.formText}>Inssurance Expiry Detail</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <Text style={styles.LightText}>Basic Details</Text>
        <Text style={styles.formText}>Height</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <Text style={styles.formText}>Blood Group</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <Text style={styles.formText}>Weight</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <Text style={styles.formText}>Identity Matric</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <Text style={styles.LightText}>Personal History</Text>

        <RadioButton.Group
          onValueChange={(value) => setValue(value)}
          value={value}
        >
          <Text style={styles.formText}>Diet</Text>
          <View
            style={{
              flexDirection: "row",
              width: deviceWidth / 1.3,
              justifyContent: "space-around",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="first" />
              <Text>Vegitarion</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="second" />
              <Text>Non Vegitarion</Text>
            </View>
          </View>
          <Text style={styles.formText}>Habit</Text>
          <View
            style={{
              flexDirection: "row",
              width: deviceWidth / 1.3,
              justifyContent: "space-around",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="first" />
              <Text>Smoker</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="second" />
              <Text>Non Smoker</Text>
            </View>
          </View>
          <Text style={styles.formText}>Drug Reaction</Text>
          <View
            style={{
              flexDirection: "row",
              width: deviceWidth / 1.6,
              justifyContent: "space-around",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="first" />
              <Text>Yes</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="second" />
              <Text>No</Text>
            </View>
          </View>
        </RadioButton.Group>
        <Text style={styles.LightText}>Basic History</Text>
        <Text style={styles.formText}>Post Illness</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <Text style={styles.formText}>Physical Handicam</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <Text style={styles.formText}>Mental Disorder</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <Text style={styles.formText}>Skin Demages</Text>
        <InputField placeholder="Type Here" styles={styles.InputStyling} />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Darkbtn styles={styles.LoginBtn}>
            <Text
              onPress={() => {
                navigation.goBack("");
              }}
              style={styles.LoginTextSty}
            >
              Done
            </Text>
          </Darkbtn>
        </View>
      </View>
    </ScrollView>
  );
}

export default TrackingIssuranceEditDetail;
