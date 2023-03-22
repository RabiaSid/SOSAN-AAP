import React from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TouchableButton from "../../../Components/Buttons";
import AppHeader from "../../../Components/AppHeader/index"
import baseColors from "../../../Constant/color";
import styles from "./style";
import GradientBackground from "../../../Components/Gradient/LinearBackground";
import InputField  from "../../../Components/InputField"

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const Verification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screenContainer}>
      <GradientBackground>
      <AppHeader styles={styles.headerContainer}>
              <Text style={styles.textHeading}>SOSAN</Text>
        </AppHeader>
        <View style={styles.screenBackground}>
          <View style={styles.middleScreen}>
            <Text style={styles.heading}>Confirm your Email</Text>
            <View style={styles.BoxScreen} />
            <Text style={styles.headingMini}>Confirm email id</Text>
            <View
              style={{
                flexDirection: "row",
                width: deviceWidth / 1,
                justifyContent: 'space-evenly',
                paddingHorizontal:15
              }}>
              <InputField
                placeholderTextColor={baseColors.secondaryTextColor}
                placeholder="4"
                maxLength={1}
                styles={{
                  border: "1px solid",
                  borderColor: baseColors.sucessTextColor,
                  height: 100,
                  width: 60,
                  borderRadius: 6,
                  borderWidth: 1,
                  fontSize: 50,
                  textAlign: "center",
                }}
              />
              <InputField
                placeholderTextColor={baseColors.secondaryTextColor}
                placeholder="4"
                maxLength={1}
                styles={{
                  border: "1px solid",
                  borderColor: baseColors.sucessTextColor,
                  height: 100,
                  width: 60,
                  borderRadius: 6,
                  borderWidth: 1,
                  fontSize: 50,
                  textAlign: "center",
                }}
              />
              <InputField
                placeholderTextColor={baseColors.secondaryTextColor}
                placeholder="0"
                maxLength={1}
                styles={{
                  border: "1px solid",
                  borderColor: baseColors.sucessTextColor,
                  height: 100,
                  width: 60,
                  borderRadius: 6,
                  borderWidth: 1,
                  fontSize: 50,
                  textAlign: "center",
                }}
              />
              <InputField
                placeholderTextColor={baseColors.secondaryTextColor}
                placeholder="0"
                maxLength={1}
                styles={{
                  border: "1px solid",
                  borderColor: baseColors.sucessTextColor,
                  height: 100,
                  width: 60,
                  borderRadius: 6,
                  borderWidth: 1,
                  fontSize: 50,
                  textAlign: "center",
                }}
              />
              <InputField
                placeholderTextColor={baseColors.secondaryTextColor}
                placeholder="3"
                maxLength={1}
                styles={{
                  border: "1px solid",
                  borderColor: baseColors.sucessTextColor,
                  height: 100,
                  width: 60,
                  borderRadius: 6,
                  borderWidth: 1,
                  fontSize: 50,
                  textAlign: "center",
                }}
              />
            </View>
            <View style={styles.TextContainer}>
              <Text style={styles.TextNormal}>
                By singing up , agree to Photo`s
                <Text style={styles.underline}>Term of Service</Text> and   
                <Text style={styles.underline}>Privacy Policy</Text>
              </Text>
              <Text style={styles.TextNormal}>
                There is a code sent to your email please check. if not press
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
                  elevation: 4,
                  backgroundColor: baseColors.secondaryColor,
                  borderRadius: 20,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 130,
                }}
                onPress={() => {
                  navigation.goBack("");
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: baseColors.lightColor,
                    fontWeight: "600",
                    alignSelf: "center",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  Back
                </Text>
              </TouchableButton>
              <TouchableButton
                styles={{
                  elevation: 4,
                  backgroundColor: baseColors.primaryColor,
                  borderRadius: 20,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 130,
                }}
                onPress={() => {
                  navigation.navigate("UserSignIn");
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: baseColors.lightColor,
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
