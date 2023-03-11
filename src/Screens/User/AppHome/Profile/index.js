import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import AppHeader from "../../../../Components/AppHeader";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AvatarPerson3 } from "../../../../Assets/images";
import Button from "../../../../Components/Buttons/index";
import SwitchButton from "../../../../Components/Schedule/Switch";
import baseColors from "../../../../Constant/color";
import { styles } from "./style";
import SwitchSelector from "../../.././../Components/SwitchSelector/UserProfile/index";
import PaymentPayAs from "../../../../Components/Modal/PaymentModal/PaymentPayAs";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function Profile() {
  const Navigation = useNavigation();

  return (
    <View style={styles.screenContainer}>
      <View>
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
              <Pressable onPress={() => Navigation.goBack("")}>
                <Ionicons
                  name="chevron-back-sharp"
                  size={30}
                  style={styles.TextSecondary}
                />
              </Pressable>
            </View>
            <View
              style={{
                width: deviceWidth / 3,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Personal Detail</Text>
            </View>
          </View>
        </AppHeader>
      </View>
      <ScrollView>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={styles.imageStyle}>
            <Image style={styles.image} source={AvatarPerson3} />
          </View>
          <View
            style={{
              flexDirection: "column",
              width: deviceWidth / 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginVertical: 5,
              }}
            >
              <View
                style={{
                  width: deviceWidth / 1.6,
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>John Smith</Text>
              </View>
              <View
                style={{
                  width: deviceWidth / 2.2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome
                  name="pencil-square-o"
                  size={22}
                  style={styles.TextSecondary}
                  onPress={() => Navigation.navigate("PersonalDetail")}
                />
              </View>
            </View>
            <Text style={styles.TextSecondary}>johnSmith1234@gmail.com</Text>
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
              <View style={{ flexDirection: "column", paddingHorizontal: 15 }}>
                <Text style={styles.TextSecondary}>Email:</Text>
                <Text style={styles.TextSecondary}>Phone:</Text>
                <Text style={styles.TextSecondary}>SOSAN ID:</Text>
              </View>
              <View style={{ flexDirection: "column", paddingHorizontal: 10 }}>
                <Text style={styles.TextSecondary}>jsmth14@gmail.com</Text>
                <Text style={styles.TextSecondary}>+923 0000 0000</Text>
                <Text style={styles.TextSecondary}>25ln555</Text>
              </View>
            </View>
            <View style={styles.ButtonView}>
              <Button
                styles={styles.TopButton}
                onPress={() => {
                  Navigation.navigate("PersonalDetail");
                }}
              >
                <Text style={styles.TopButtonText}>My Detail</Text>
              </Button>

              <Button
                styles={styles.TopTwoButton}
                onPress={() => {
                  Navigation.navigate("Invite");
                }}
              >
                <Text style={styles.TopTwoButtonText}>Invite Friend</Text>
              </Button>
            </View>
            <Button
              styles={styles.Button}
              onPress={() => {
                Navigation.navigate("AppHome");
              }}
            >
              <Text style={styles.ButtonText}>Medical History</Text>
            </Button>
            <Button
              styles={styles.Button}
              onPress={() => {
                Navigation.navigate("AppHome");
              }}
            >
              <Text
                style={styles.ButtonText}
                onPress={() => {
                  Navigation.navigate("Epargne");
                }}
              >
                Transaction Detail
              </Text>
            </Button>
            <Button styles={styles.ButtonSuccess}>
              <PaymentPayAs />
            </Button>

            <Button
              styles={styles.ButtonSuccess}
              onPress={() => {
                Navigation.navigate("ProtecteeDetail");
              }}
            >
              <Text style={styles.ButtonSuccessText}>Create A Protectee</Text>
            </Button>
            <SwitchSelector />
          </View>

          <View style={styles.Listmain}>
            <View style={styles.ListBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.TextSecondary}>Previous appointment</Text>
                <MaterialIcons
                  name="navigate-next"
                  size={28}
                  style={styles.TextSecondary}
                />
              </View>
            </View>

            <View style={styles.ListBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.TextSecondary}>Notification</Text>
                <View>
                  <SwitchButton />
                </View>
              </View>
            </View>

            <View style={styles.ListBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.TextSecondary}>Allow your Location</Text>
                <View>
                  <SwitchButton />
                </View>
              </View>
            </View>

            <View style={styles.ListBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.TextSecondary}>Insurance Detail</Text>
                <MaterialIcons
                  name="navigate-next"
                  size={28}
                  style={styles.TextSecondary}
                />
              </View>
            </View>

            <View style={styles.ListBottomGape}>
              <View style={styles.Listitems}>
                <Text style={styles.TextSecondary}>Your Appointment</Text>
                <MaterialIcons
                  name="navigate-next"
                  size={28}
                  style={styles.TextSecondary}
                  // onPress={()=>{
                  //   Navigation.navigate("ChangePassword");
                  // }}
                />
              </View>
            </View>

            <View style={styles.ListBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.TextSecondary}>Change Password</Text>
                <MaterialIcons
                  name="navigate-next"
                  size={28}
                  style={styles.TextSecondary}
                  onPress={() => {
                    Navigation.navigate("ChangePassword");
                  }}
                />
              </View>
            </View>

            <View style={styles.ListBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.TextSecondary}>Help Center</Text>
                <MaterialIcons
                  name="navigate-next"
                  size={28}
                  style={styles.TextSecondary}
                  onPress={() => {
                    Navigation.navigate("HelpCenter");
                  }}
                />
              </View>
            </View>

            <View style={styles.ListBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.TextSecondary}>Terms and Conditions</Text>
                <MaterialIcons
                  name="navigate-next"
                  size={28}
                  style={styles.TextSecondary}
                  onPress={() => {
                    Navigation.navigate("TermsAndConditions");
                  }}
                />
              </View>
            </View>

            <View style={styles.ListBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.TextSecondary}>Faq</Text>
                <MaterialIcons
                  name="navigate-next"
                  size={28}
                  style={styles.TextSecondary}
                  onPress={() => {
                    Navigation.navigate("Faq");
                  }}
                />
              </View>
            </View>

            <View style={styles.ListBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.TextSecondary}>Privacy</Text>
                <MaterialIcons
                  name="navigate-next"
                  size={28}
                  style={styles.TextSecondary}
                  onPress={() => {
                    Navigation.navigate("Privacy");
                  }}
                />
              </View>
            </View>

            <View style={styles.ListBottomGape}>
              <View style={styles.Listitems}>
                <Text style={styles.TextDanger}>cancelled appointment</Text>
                <MaterialIcons
                  name="navigate-next"
                  size={28}
                  style={styles.TextSecondary}
                  // onPress={() => {
                  //   Navigation.navigate("CancelledAppointment");
                  // }}
                />
              </View>
            </View>

            <View style={styles.ListBottomGapeBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.TextSecondary}>Log Out</Text>
                <MaterialIcons
                  name="navigate-next"
                  size={28}
                  style={styles.TextSecondary}
                  onPress={() => {
                    Navigation.navigate("SignIn");
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        {/* </View> */}
      </ScrollView>
    </View>
  );
}

export default Profile;
