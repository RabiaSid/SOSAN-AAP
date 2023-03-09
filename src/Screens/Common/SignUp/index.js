import React from "react";
import { View, Text, Dimensions } from "react-native";
import InputField from "../../../Components/InputField";
import Button from "../../../Components/Buttons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import baseColors from "../../../Constant/color";
import CheckButton from "../../../Components/CheckButton/index";
import ModalTester from "../../../Components/Modal/SectionModal";
import GradientBackground from "../../../Components/Gradient/LinearBackground";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function SignUp() {
  const Navigation = useNavigation();

 
  return (
    <View style={styles.screenContainer}>
      <GradientBackground>
        <View style={styles.screenBackground}>
          <View style={styles.screenMiddle}>
            <Text style={styles.Text}>create a new account</Text>
            <Text style={styles.formText}>Enter Email</Text>
            <InputField
              placeholder="abc@gmail.com"
              styles={{
                height: 40,
                margin: 12,
                borderColor: baseColors.sucessColor,
                borderWidth: 1,
                borderRadius: 50,
                padding: 10,
              }}
            ></InputField>
            <Text style={styles.formText}>Enter Username</Text>
            <InputField
              placeholder="Your Username"
              styles={{
                height: 40,
                margin: 12,
                borderColor: baseColors.sucessColor,
                borderWidth: 1,
                borderRadius: 50,
                padding: 10,
              }}
            ></InputField>
            <Text style={styles.formText}>Enter PhoneNumber</Text>
            <InputField
              placeholder="0092331524568"
              styles={{
                height: 40,
                margin: 12,
                borderColor: baseColors.sucessColor,
                borderWidth: 1,
                borderRadius: 50,
                padding: 10,
              }}
            ></InputField>
            <Text style={styles.formText}>Enter Password</Text>
            <InputField
              placeholder="*************"
              secureTextEntry={true}
              styles={{
                height: 40,
                margin: 12,
                borderColor: baseColors.sucessColor,
                borderWidth: 1,
                borderRadius: 50,
                padding: 10,
              }}
            ></InputField>
            <Text style={styles.Textleft}> What are You? </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                width:deviceWidth/1.1,
                alignItems: "center",
              }}
            >
              <View
              style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                width:deviceWidth/2.5,
                alignItems: "center",
                paddingVertical: 5,
                paddingHorizontal: 15,
              }}
              >
              <CheckButton />
              <Text
                onPress={() => {
                  Navigation.navigate("Verification");
                }}
              >
                Individual
              </Text>
              </View>
              <View
              style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                width:deviceWidth/2.3,
                alignItems: "center",
                paddingVertical: 5,
                paddingHorizontal: 10,
                
              }}
              >
              <CheckButton />
              <ModalTester />

              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: 'space-evenly',
                width:deviceWidth/1-50,
              }}
            >
              <CheckButton />
              <Text>i agree with the terms and agreements</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingTop: 30,
              }}
            >
              <Button
                styles={{
                  elevation: 8,
                  backgroundColor: baseColors.secondaryColor,
                  borderRadius: 50,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  width: 150,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  Navigation.goBack("SignIn");
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Cancel
                </Text>
              </Button>

              <Button
                styles={{
                  elevation: 8,
                  backgroundColor: baseColors.primaryColor,
                  borderRadius: 50,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  width: 150,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  Navigation.navigate("SignIn");
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Next
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </GradientBackground>
    </View>
  );
}

export default SignUp;
