import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import AppHeader from "../../../../Components/AppHeader/index";
import baseColors from "../../../../Constant/color";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import DarkGradient from "../../../../Components/Gradient/DarkGradient";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";
import { Visa, Mtn, Mastercard, Paypal } from "../../../../Assets/images";
import PaymentOption from "../../../../Components/PaymentOption";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function Payment() {
 
  const [shouldShow, setShouldShow] = useState(false);

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
                Payment
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
        <ScrollView>
          <View style={styles.screenMiddle}>
            <View style={styles.View}>
              <Text style={styles.TopViewText}>
                Add Attachment Of Your Prescription
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: deviceWidth / 1.3,
                  paddingVertical: 5,
                }}
              >
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.TopViewTextDark}>Medicine Name </Text>
                  <Text style={styles.TopViewTextDark}>Medicine Name </Text>
                  <Text style={styles.TopViewTextDark}>Medicine Name </Text>
                  <Text style={{}}>Total </Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.TopViewTextDarkRight}>$ 50</Text>
                  <Text style={styles.TopViewTextDarkRight}>$ 1.50</Text>
                  <Text style={styles.TopViewTextDarkRight}>$ 7.25</Text>
                  <Text style={styles.TopViewTextDangerRight}>$ 61.25</Text>
                </View>
              </View>
            </View>

            <View style={styles.View}>
              <View style={styles.ViewRow}>
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.TopViewTextDark}>Total Bill </Text>
                  <Text
                    style={{
                      color: baseColors.secondaryTextColor,
                      fontWeight: "400",
                      paddingVertical: 2,
                    }}
                  >
                    Session Fee an hour
                  </Text>
                </View>
                <View>
                  <Text style={styles.TopViewTextDark}>$ 50</Text>
                </View>
              </View>
              <View style={styles.ViewRow}>
                <View>
                  <Text style={styles.TopViewTextSuccess}>Insurance </Text>
                </View>
                <View>
                  <Text style={styles.TopViewTextSuccess}>$ 50</Text>
                </View>
              </View>
              <View style={styles.ViewRow}>
                <View>
                  <Text style={styles.TopViewTextDark}>To pay </Text>
                </View>
                <View>
                  <Text style={styles.TopViewTextDark}>$ 50</Text>
                </View>
              </View>

              <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                <View style={styles.PromoRow}>
                  <View style={styles.promoView}>
                    <View style={styles.promoItems}>
                      <MaterialIcons
                        name="settings"
                        size={22}
                        style={styles.textColorPrimary}
                      />
                    </View>
                    <View style={styles.promoItems}>
                      <Text style={styles.textColorPrimary}>
                        Check Promo Code
                      </Text>
                    </View>
                    <View style={styles.promoItems}>
                      <AntDesign
                        name="right"
                        size={22}
                        style={styles.textColorPrimary}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              {shouldShow ? (
                <View style={styles.ApplyRow}>
                  <View style={styles.ApplyView}>
                    <View style={styles.promoItems}>
                      <Text
                        style={{
                          color: baseColors.darkTextColor,
                          fontSize: 15,
                          fontWeight: "bold",
                        }}
                      >
                        Student@25
                      </Text>
                    </View>
                    <View style={styles.promoItems}>
                      <View
                        style={{
                          width: 70,
                          height: 27,
                          borderRadius: 10,
                          backgroundColor: baseColors.secondaryColor,
                        }}
                      >
                        <Text
                          style={{
                            textAlign: "center",
                            paddingTop: 2,
                            color: baseColors.lightTextColor,
                          }}
                          onPress={() => {
                            Navigation.navigate("PaymentSuccessFull");
                          }}
                        >
                          Apply
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ) : null}
            </View>
            <View style={styles.View}>
            <PaymentOption />
            </View>
            <View style={styles.View}>
              <Text style={styles.TextLeft}>Payment Option</Text>
              <Text style={styles.SmallText}>
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters
              </Text>
            </View>

            <View style={styles.ViewBottom}>
              <DarkGradient
                styles={styles.ButtonPrimary}
                // onPress={() => {
                //   Navigation.navigate("AppHome");
                // }}
              >
                <Text
                  style={styles.ButtonTextPrimary}
                  onPress={() => {
                    Navigation.navigate("PaymentSuccessFull");
                  }}
                >
                  Done
                </Text>
              </DarkGradient>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    width: deviceWidth / 1,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#eff8f9",
  },
  headerContainer: {
    backgroundColor: baseColors.sucessColor,
    height: 60,
    marginTop: 35,
    width: deviceWidth / 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 8,
    marginBottom: 3,
  },

  screenMiddle: {
    width: deviceWidth / 1,
    flexDirection: "column",
    marginBottom: 100,
  },
  View: {
    flexDirection: "column",
    width: deviceWidth / 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: baseColors.lightColor,
    marginBottom: 20,
  },
  ViewBottom: {
    flexDirection: "column",
    width: deviceWidth / 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: baseColors.lightColor,
    elevation: 8,
  },
  ViewRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: deviceWidth / 1.3,
    paddingVertical: 5,
  },

  SmallText: {
    fontSize: 13,
    color: baseColors.secondaryTextColor,
    paddingHorizontal: 5,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 15,
  },
  TopViewText: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: deviceWidth / 1.1,
    paddingVertical: 5,
    color: baseColors.secondaryTextColor,
    fontWeight: "700",
  },
  TextLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: deviceWidth / 1 - 40,
    paddingVertical: 5,
    color: baseColors.darkTextColor,
    fontWeight: "800",
  },
  TopViewTextDark: {
    color: baseColors.darkTextColor,
    fontWeight: "700",
    paddingVertical: 2,
  },
  TopViewTextDanger: {
    color: baseColors.dangerTextColor,
    fontWeight: "700",
    paddingVertical: 2,
  },
  TopViewTextDarkRight: {
    color: baseColors.darkTextColor,
    fontWeight: "700",
    paddingVertical: 2,
  },
  TopViewTextDangerRight: {
    color: baseColors.dangerTextColor,
    fontWeight: "700",
    paddingVertical: 2,
  },
  TopViewTextSuccess: {
    color: baseColors.sucessTextColor,
    fontWeight: "700",
    paddingVertical: 2,
  },

  ButtonPrimary: {
    elevation: 8,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: deviceWidth / 1 - 40,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonTextPrimary: {
    color: baseColors.lightTextColor,
    fontWeight: "bold",
  },
  PromoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  promoView: {
    flexDirection: "row",
    width: deviceWidth / 1 - 50,
    height: 40,
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: baseColors.primaryLightColor,
    borderWidth: 1,
    backgroundColor: baseColors.primaryLightColor,
    borderRadius: 20,
    marginVertical: 10,
  },
  promoItems: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
  },
  ApplyRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ApplyView: {
    flexDirection: "row",
    width: deviceWidth / 1 - 50,
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: baseColors.primaryLightColor,
    borderWidth: 1,
    backgroundColor: baseColors.gradientprimaryColor,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  textColorPrimary: {
    color: baseColors.primaryTextColor,
  },
  paymentOptionView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: deviceWidth / 1.1,
    paddingVertical: 10,
    borderBottomColor: baseColors.secondaryTextColor,
    borderBottomWidth: 0.7,
  },
  paymentOptionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: deviceWidth / 1.1,
  },
  paymentOptionViewTwo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: deviceWidth / 1.1,
  },
});

export default Payment;
