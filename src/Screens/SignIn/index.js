import React from "react";
import Button from "../../Components/Buttons";
import InputField from "../../Components/InputField";
import { styles } from "./style";

import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import baseColors from "../../Constant/color";



const SignIn = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <View style={styles.screenTop}>
        <Text>
          <Text style={styles.textColorSuccess}>English</Text> | French
        </Text>
      </View>

      <View style={styles.screenMiddle}>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',}}>
        <Image
          source={require("../../Assets/images/Logo.png")}
          style={{ height: 50 }}
        />
        </View>
        
        <Text style={styles.formText}>Enter Your Email</Text>
        <InputField placeholder="Your Email"></InputField>
        <Text style={styles.formText}>Enter Your Password</Text>
        <InputField placeholder="Password" secureTextEntry={true}></InputField>
        <View style={styles.Loginbutton}>
          <Button
            styles={{ 
            elevation: 8,
            backgroundColor: baseColors.primaryColor,
            borderRadius: 50,
            paddingVertical: 10,
            paddingHorizontal: 12, 
            width:200,
            justifyContent: 'center',
            alignItems: 'center'
          }}
            onPress={() => {
              Navigation.navigate("SignUp");
            }}
          >
            <Text 
            style={{
              color: "#fff",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}>Login</Text>
          </Button>
        </View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop:20}} >
          <Text style={styles.textColorDanger}>Forget Password</Text>
          <Text>create a new account</Text>
          <Text
            style={styles.textColorSuccess}
            onPress={() => {
              Navigation.navigate("SignUp");
            }}
          >
            Registered Now
          </Text>
        </View>
        <Image
          source={require("../../Assets/images/btmImage.png")}
          style={{ height: 300 }}
        />
      </View>
    </View>
  );
};

export default SignIn;
