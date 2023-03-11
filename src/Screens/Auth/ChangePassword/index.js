import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import GradientBackground from "../../../Components/Gradient/LinearBackground";
import Button from "../../../Components/Buttons/index";
import InputField from "../../../Components/InputField";
import baseColors from "../../../Constant/color";
import SucessAlert from "../../../Components/Modal/SucessAlert";

const ChangePassword = () => {
  const Navigation = useNavigation();

  return (
    <View style={styles.screenContainer}>
      <GradientBackground>
        <View style={styles.screenBackground}>
          <View style={styles.middleScreen}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-start",
                height: 70,
              }}
            >
              <View
                style={{
                  borderBottomWidth: 3,
                  borderBottomColor: baseColors.lightGreyColor,
                  width: 90,
                  paddingVertical: 3,
                }}
              >
                <View
                  style={{
                    borderBottomWidth: 3,
                    borderBottomColor: baseColors.lightGreyColor,
                    width: 90,
                    paddingVertical: 3,
                  }}
                ></View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  fontWeight: "bold",
                }}
              >
                Change Password
              </Text>

              <Text style={styles.formText}>New Password</Text>
              <InputField
                secureTextEntry={true}
                styles={styles.InputField}
              ></InputField>
              <Text style={styles.formText}>Rewrite New Password</Text>
              <InputField
                secureTextEntry={true}
                styles={styles.InputField}
              ></InputField>
              <Text style={styles.formText}>Confirm with old Password</Text>
              <InputField
                secureTextEntry={true}
                styles={styles.InputField}
              ></InputField>
              <View style={styles.Loginbutton}>
                <Button styles={styles.Button}>
                  <SucessAlert />
                </Button>
              </View>
            </View>
          </View>
        </View>
      </GradientBackground>
    </View>
  );
};
export default ChangePassword;
