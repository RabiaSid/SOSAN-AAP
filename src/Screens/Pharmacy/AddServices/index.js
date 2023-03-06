import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CheckButton from '../../../Components/CheckButton';
import Button from "../../../Components/Buttons";
import {styles} from "./style"

const AddServicesPharmacy = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <View style={styles.screenTop}>
        <Text style={styles.Text}>Add Services</Text>
        <View style={styles.Box}>
          <Text style={styles.TextSty}>Services</Text>
          <View style={styles.span}>
            <CheckButton />
            <Text style={styles.TextSpan}>Laboratory</Text>
          </View>
          <View style={styles.span}>
            <CheckButton />
            <Text style={styles.TextSpan}>X-Ray</Text>
          </View>
          <View style={styles.span}>
            <CheckButton />
            <Text style={styles.TextSpan}>Ultrasound</Text>
          </View>
        </View>
      </View>
      <View style={styles.BottomBtn}>
        <Button
          styles={styles.LoginBtn}
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Text style={styles.LoginBtnTextSty}
           onPress={() => {
            navigation.navigate("SkipDetailsPharmacy");
          }}
          >Continue</Text>
        </Button>
        {/* <TabBottom>
        <Button
          styles={styles.LoginBtn}
          onPress={() => {
            navigation.navigate("SignIn");
          }}>
          <Text style={styles.LoginBtnTextSty}>Login</Text>
        </Button>
        </TabBottom> */}
      </View>
    </View>
  );
};

export default AddServicesPharmacy;
