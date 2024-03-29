import React from "react";
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
import { styles } from "./style";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function Profile() {
  const Navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>

      <View>
        <AppHeader styles={styles.headerContainer}>
          <View style={styles.HeaderMainRow}>
            <View style={styles.HeaderPressable}>
              <Pressable onPress={() => Navigation.goBack("Feed")}>
                <Ionicons
                  name="chevron-back-sharp"
                  size={30}
                  style={styles.TextSecondary}
                />
              </Pressable>
            </View>
            <View style={styles.HeaderText}>
              <Text style={{ fontWeight: "bold" }}>Personal Detail</Text>
            </View>
          </View>
        </AppHeader>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ScreenMiddle}>
          <View style={styles.imageStyle}>
            <Image style={styles.image} source={AvatarPerson3} />
          </View>
          <View style={styles.TopView}>
            <View style={styles.TopViewMiddle}>
              <View style={styles.TopViewHeading}>
                <Text style={{ fontWeight: "bold" }}>John Smith</Text>
              </View>
              <View style={styles.TopViewItem}>
                <FontAwesome
                  name="pencil-square-o"
                  size={22}
                  style={styles.TextSecondary}
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
            <Button
              styles={styles.Button}
              onPress={() => {
                Navigation.navigate("AppHome");
              }}
            >
              <Text style={styles.ButtonText}>Transaction Detail</Text>
            </Button>
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
                <Text style={styles.TextSecondary}
                onPress={() => {
                  Navigation.navigate("ChangePassword");
                }}
                >Change Password</Text>
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
                <Text style={styles.TextSecondary}
                onPress={() => {
                  Navigation.navigate("HelpCenter");
                }}
                >Help Center</Text>
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
                <Text style={styles.TextSecondary}
                onPress={() => {
                  Navigation.navigate("TermsAndConditions");
                }}
                >Terms and Conditions</Text>
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

            <View style={styles.ListBottom}>
              <View style={styles.Listitems}>
                <Text style={styles.TextSecondary}
                onPress={() => {
                  Navigation.navigate("SignIn");
                }}
                >Log Out</Text>
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
