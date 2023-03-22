import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import InputField from "../../../Components/InputField";
import Button from "../../../Components/Buttons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import baseColors from "../../../Constant/color";
// import CheckButton from "../../../Components/CheckButton/index";
import ModalTester from "../../../Components/Modal/SectionModal";
import GradientBackground from "../../../Components/Gradient/LinearBackground";
import { Checkbox } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function SignUp() {
  const Navigation = useNavigation();
  const [checked, setChecked] = React.useState(false);
  const [switchValue, setswitchValue] = React.useState(false);
  const [Agreechecked, setAgreeChecked] = React.useState(false);

  const [estado, setEstado] = React.useState(false);

  const agregarFavoritos = () => {
    setEstado(!estado);
  };

  return (
    <View style={styles.screenContainer}>
      <GradientBackground >
        <View style={styles.screenBackground}>
          <Text style={styles.headingTop}>SOSAN</Text>
          <View style={styles.screenMiddle}>
            <Text style={styles.Text}>create a new account</Text>
            <Text style={styles.formText}>Enter Email</Text>
            <InputField
              placeholder="abc@gmail.com"
              styles={styles.InputField}
            ></InputField>
            <Text style={styles.formText}>Enter Username</Text>
            <InputField
              placeholder="Your Username"
              styles={styles.InputField}
            ></InputField>
            <Text style={styles.formText}>Enter PhoneNumber</Text>
            <InputField
              placeholder="0092331524568"
              styles={styles.InputField}
            ></InputField>
            <Text style={styles.formText}>Enter Password</Text>
            <InputField
              placeholder="*************"
              secureTextEntry={true}
              styles={styles.InputField}
            ></InputField>
            <Text style={styles.Textleft}> What are You? </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: deviceWidth / 1.1,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: deviceWidth / 2.3,
                  alignItems: "center",
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                }}
              >
                <TouchableOpacity onPress={checked}>
                  <AntDesign
                    name="checkcircle"
                    size={20}
                    color={checked  ?baseColors.secondaryTextColor : baseColors.sucessTextColor }
                    onPress={() => {
                      setChecked(!checked);
                      setswitchValue(false);
                    }}
                  />
                </TouchableOpacity>

                <Text>Individual</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: deviceWidth / 2.3,
                  alignItems: "center",
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                }}
              >
                <TouchableOpacity onPress={checked}>
                  <AntDesign
                    name="checkcircle"
                    size={20}
                    color={checked  ? baseColors.sucessTextColor  : baseColors.secondaryTextColor }
                    onPress={() => {
                      setChecked(!checked);
                      setswitchValue(true);
                    }}
                  />
                </TouchableOpacity>
                <Text>Professional</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: deviceWidth / 1.1 - 5,
              }}
            >
              <Checkbox
                status={Agreechecked ? "checked" : "unchecked"}
                onPress={() => {
                  setAgreeChecked(!Agreechecked);
                }}
                color={baseColors.sucessTextColor}
              />

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
                  width: 130,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  Navigation.goBack("");
                }}
              >
                <Text
                  style={{
                    color: baseColors.lightColor,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Cancel
                </Text>
              </Button>
              {switchValue !== true ? (
                <Button
                  styles={{
                    elevation: 8,
                    backgroundColor: baseColors.primaryColor,
                    borderRadius: 50,
                    paddingVertical: 10,
                    paddingHorizontal: 12,
                    width: 130,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => {
                    Navigation.navigate("Verification");
                  }}
                >
                  <Text
                    style={{
                      color: baseColors.lightColor,
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    Next
                  </Text>
                </Button>
              ) : (
                <Button
                  styles={{
                    elevation: 8,
                    backgroundColor: baseColors.primaryColor,
                    borderRadius: 50,
                    paddingVertical: 10,
                    paddingHorizontal: 12,
                    width: 130,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ModalTester />
                </Button>
              )}
            </View>
          </View>
        </View>
      </GradientBackground>
    </View>
  );
}

export default SignUp;
