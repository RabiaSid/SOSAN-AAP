import React from "react";
import Button from "../../../Components/Buttons/index";
import InputField from "../../../Components/InputField";
import { Logo, BottomImage } from "../../../Assets/images/index";
import { styles } from "./style";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import baseColors from "../../../Constant/color";

const UserSignIn = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <View style={styles.screenTop}>
        <Text>
          <Text style={styles.textColorSuccess}>English</Text> | French
        </Text>
      </View>

      <View style={styles.screenMiddle}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={Logo} style={{ height: 50 }} />
        </View>
        <Text style={styles.formText}>Enter Your Email</Text>
        <InputField
          placeholder="abc123@gmail.com"
          styles={styles.InputField}
          placeholderTextColor={baseColors.darkColor}
        />

        <Text style={styles.formText}>Enter Your Password</Text>
        <InputField
          placeholder="215456423"
          secureTextEntry={true}
          styles={styles.InputField}
          placeholderTextColor={baseColors.darkColor}
        />
        <View style={styles.Loginbutton}>
          <Button
            styles={styles.Button}
            onPress={() => Navigation.navigate("UserAppHome")}
          >
            <Text style={styles.ButtonText}>Login</Text>
          </Button>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <Text style={styles.textColorDanger}>Forget Password</Text>
          <Text>create a new account</Text>
          <Text style={styles.textColorSuccess}>Registered Now</Text>
        </View>
        <Image
          source={BottomImage}
          style={{ height: 270, resizeMode: "contain" }}
        />
      </View>
    </View>
  );
};

export default UserSignIn;
