import React from "react";
import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import AppHeader from "../../../../Components/AppHeader/index";
import { styles } from "./style";
import baseColors from "../../../../Constant/color";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { SuccessImage } from "../../../../Assets/images";
import DarkGradient from "../../../../Components/Gradient/DarkGradient";
import { useNavigation } from "@react-navigation/native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function PaymentSuccessFull() {
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
                width: deviceWidth / 4,
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <TouchableOpacity onPress={() => Navigation.navigate("Feed")}>
                <Ionicons
                  name="chevron-back-sharp"
                  size={37}
                  style={{ color: baseColors.lightTextColor }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: deviceWidth / 2,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ fontWeight: "bold", color: baseColors.lightTextColor }}
              >
                Epargne SOSAN
              </Text>
            </View>
            <View
              style={{
                width: deviceWidth / 5,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <AntDesign
                name="exclamationcircleo"
                size={20}
                style={{ fontWeight: "bold", color: baseColors.lightTextColor }}
              />
            </View>
          </View>
        </AppHeader>
      </View>
      {/* <ScrollView> */}
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // paddingHorizontal:10
        }}
      >
        <View style={styles.screenMiddle}>
          <View style={styles.borderView}>
            <Text style={styles.borderTextView}>Your Medication</Text>
            <View style={styles.borderItemsView}>
              <View
                style={{
                  paddingTop: 10,
                }}
              >
                <Text style={styles.borderDarkText}>Medicine Name</Text>
                <Text style={styles.borderDangerText}>Total</Text>
              </View>
              <View>
                <Text style={styles.borderDarkText}>$ 7.25</Text>
                <Text style={styles.borderDangerText}>$ 61.25</Text>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.paymentView}>
              <View style={styles.paymentViewItems}>
                <View style={{ height: deviceHeight / 5 }}>
                  <Text style={styles.paymentSecondaryText}>
                    Payment Has Been Done
                  </Text>
                </View>
                <View style={{ height: deviceHeight / 6 }}>
                  <Image
                    source={SuccessImage}
                    style={{ height: 150, width: 150 }}
                  />
                </View>
                <View
                  style={{
                    height: deviceHeight / 6,
                    paddingTop: 50,
                    width: deviceWidth / 3,
                  }}
                >
                  <Text style={styles.paymentSuccessText}>
                    Payment SuccessFul
                  </Text>
                </View>
                <View style={{ height: deviceHeight / 7 }}>
                  <DarkGradient styles={styles.Button}>
                    <Text
                      style={styles.ButtonText}
                      onPress={() => Navigation.navigate("UserAppHome")}
                    >
                      Login
                    </Text>
                  </DarkGradient>
                </View>
              </View>
            </View>
          </View>
          <View></View>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default PaymentSuccessFull;
