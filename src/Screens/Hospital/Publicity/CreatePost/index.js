import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import InputField from "../../../../Components/InputField";
import Button from "../../../../Components/Buttons";
import AppHeader from "../../../../Components/AppHeader";
import { Ionicons } from "@expo/vector-icons";
import { AvatarPerson1 } from "../../../../Assets/images";
import { useNavigation } from "@react-navigation/native";
import baseColors from "../../../../Constant/color";
import Map from "../../../../Components/Map";
import MapMarkHere from "../../../../Components/MapMarkHere";
import SucessAlert from "../../../../Components/Modal/SucessAlert";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function CreatePostHospital() {
  const Navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <AppHeader styles={styles.headerContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <View
            style={{
              width: deviceWidth / 8,
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Navigation.goBack("UserAppHome");
              }}
            >
              <Ionicons
                name="chevron-back-sharp"
                size={30}
                style={{ color: baseColors.lightColor }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: deviceWidth / 1.3,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                color: baseColors.lightColor,
              }}
            >
              Create Post
            </Text>
          </View>
        </View>
      </AppHeader>
      <View style={styles.screen}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.Listmain}>
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
          </View>

          <Text style={styles.formText}>Post Title</Text>
          <InputField
            placeholder="50% off on first Checkup"
            styles={styles.InputField}
          ></InputField>
          <Text style={styles.formText}>About</Text>
          <InputField
            placeholder="Describe Your Tittle Here"
            multiline={true}
            numberOfLines={6}
            styles={styles.InputFieldAbout}
          ></InputField>
          <Text style={styles.formText}>Location</Text>
          <InputField
            placeholder="22 Remil NEar London daar, birhamingham"
            styles={styles.InputField}
          ></InputField>

          <MapMarkHere />
          <Map />
          <Button styles={styles.Button}>
            <SucessAlert />
          </Button>
        </ScrollView>
      </View>
    </View>
  );
}

export default CreatePostHospital;
