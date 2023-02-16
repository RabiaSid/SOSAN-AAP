import React from "react";
import { View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TouchableButton from "../../../Components/Buttons";
import Boxes from "../../../Components/BoxVerify";
import baseColors from "../../../Constant/color";
import styles from "./style";
import GradientBackground from "../../../Components/LinearBackground";

const Verification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screenContainer}>
      <GradientBackground>
      <View style={styles.screenBackground}>
        <View style={styles.middleScreen}>
          <Text style={styles.heading}>Confirm your Email</Text>
          <View style={styles.BoxScreen} />
          <Text style={styles.headingMini}>Confirm email id</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            {/* <Boxes><TextInput placeholder="4"></TextInput></Boxes> */}
            <Boxes />
            <Boxes />
            <Boxes />
            <Boxes />
            <Boxes />
          </View>
          <View style={styles.TextContainer}>
            <Text style={styles.TextNormal}>
              By singing up , agree to Photo`s{" "}
              <Text style={styles.underline}>Term of Service</Text> and{" "}
              <Text style={styles.underline}>Privacy Policy</Text>
            </Text>
            <Text style={styles.TextNormal}>
              There is a code sent to your email please check. if not press{" "}
              <Text
                style={{
                  textDecorationLine: "underline",
                  color: baseColors.sucessTextColor,
                }}
              >
                Resend
              </Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 30,
            }}
          >
            <TouchableButton
              styles={{
                elevation: 8,
                backgroundColor: baseColors.secondaryColor,
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 12,
                justifyContent: "center",
                alignItems: "center",
                width: 130,
              }}
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "#fff",
                  fontWeight: "600",
                  alignSelf: "center",
                  textTransform: "uppercase",
                  borderRadius: 50,
                  textAlign: "center",
                }}
              >
                Back
              </Text>
            </TouchableButton>
            <TouchableButton
              styles={{
                elevation: 8,
                backgroundColor: baseColors.primaryColor,
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 12,
                justifyContent: "center",
                alignItems: "center",
                width: 130,
              }}
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "#fff",
                  fontWeight: "600",
                  alignSelf: "center",
                  textTransform: "uppercase",
                  borderRadius: 50,
                  textAlign: "center",
                }}
              >
                Next
              </Text>
            </TouchableButton>
          </View>
        </View>
      </View>
      </GradientBackground>
    </View>
  );
};
export default Verification;
