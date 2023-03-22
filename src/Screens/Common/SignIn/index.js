import React from "react";
import Button from "../../../Components/Buttons/index";
import InputField from "../../../Components/InputField";
import { Logo, FullBottomImage } from "../../../Assets/images/index";
import { styles } from "./style";
import { View, Text, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import baseColors from "../../../Constant/color";


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const SignIn = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <View style={styles.screenTop}>
        <Text style={styles.textColorSuccess} >
        English
        </Text>
        <View style={{borderLeftWidth:1, marginLeft:5, paddingLeft:5, borderLeftColor:baseColors.secondaryTextColor}}>
        <Text style={{color: baseColors.secondaryTextColor}}>
             French
        </Text>
        </View>
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
        <Text style={{width:deviceWidth/1.1, textAlign:'center', color:baseColors.sucessTextColor, fontWeight:'600', fontSize:16, paddingVertical:5 }}>Log In</Text>
        <Text style={styles.formText}>Enter Your Email</Text>
        <InputField
          placeholder="Your Email"
          styles={styles.InputField}
        ></InputField>
        <Text style={styles.formText}>Enter Your Password</Text>
        <InputField
          placeholder="Password"
          secureTextEntry={true}
          styles={styles.InputField}
        ></InputField>
        <View style={styles.Loginbutton}>
          <Button
            styles={styles.Button}
            onPress={() => {
              Navigation.navigate("AppHome");
            }}
          >
            <Text style={styles.ButtonText}>Login</Text>
          </Button>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          <Text
            style={styles.textColorDanger}
          >
            Forget Password
          </Text>
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
          source={FullBottomImage}
          style={{ height: 250, resizeMode: "contain", width:370 }}
        />
      </View>
    </View>
  );
};

export default SignIn;
