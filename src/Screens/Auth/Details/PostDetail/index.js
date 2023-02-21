import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image
} from "react-native";
import AppHeader from "../../../../Components/AppHeader/index";
import InputField from "../../../../Components/InputField";
import Button from "../../../../Components/Buttons/index";
import { styles } from "./style";
import baseColors from "../../../../Constant/color";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AvatarPerson1 } from "../../../../Assets/images";
import Map from "../../../../Components/Map/index"


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function PostDetail() {
  const Navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
    
      <AppHeader styles={styles.headerContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 5,
            
          }}
        >
          <View
            style={{
              width: deviceWidth / 3,
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity>
              <Ionicons
                name="chevron-back-sharp"
                size={30}
                style={{ color: baseColors.lightTextColor }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: deviceWidth / 3,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontWeight: "bold", color: baseColors.lightTextColor }}
            >
              Notification
            </Text>
          </View>
        </View>
      </AppHeader>
    
    {/* <ScrollView> */}
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <View style={styles.screenMiddle}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.ListBottom}>
              <Image
                source={AvatarPerson1}
                style={styles.ActivityImage}
              ></Image>
              <View style={styles.Listitems}>
                <Text style={styles.textHeading}>Dr. Umair Rana</Text>
                <Text style={styles.text}>Sosan ID: 00000</Text>
              </View>
        </View>
        <Text style={styles.formText}>Post Title</Text>
        <InputField
          placeholder="Your Email"
          styles={styles.InputField}
        ></InputField>
        <Text style={styles.formText}>Post About</Text>
        <InputField
          placeholder="Type Here"
          multiline={true}
          numberOfLines={6}
          styles={styles.InputFieldAbout}
        ></InputField>
        <Text style={styles.formText}>Enter Your location</Text>
        <InputField
          placeholder="location"
          styles={styles.InputField}
        ></InputField>
        <View>
          <Map />
          <Button
            styles={styles.Button}
            onPress={() => {
              Navigation.navigate("SignIn");
            }}
          >
            <Text style={styles.ButtonText}>Login</Text>
          </Button>
        </View>
      </ScrollView>
      </View>
    </View>
    {/* </ScrollView> */}
  </View>
    
  );
}

export default PostDetail;
