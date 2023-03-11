import React, { useState } from "react";
import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import baseColors from "../../Constant/color";
import { MaterialIcons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { Visa, Mtn, Mastercard, Paypal } from "../../Assets/images/index";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function PaymentOption() {
  const [value, setValue] = useState("");
  return (
    <View>
      <Text style={styles.TextLeft}>Payment Option</Text>
      <RadioButton.Group
        onValueChange={(value) => setValue(value)}
        value={value}
      >
        <View style={styles.paymentOptionView}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton value="first" />
            <Text
              style={{
                color: baseColors.secondaryTextColor,
                fontWeight: "700",
              }}
            >
              Sosan Balance
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: baseColors.secondaryTextColor,
                fontWeight: "700",
              }}
            >
              $ 1,256
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            paddingVertical: 10,
            borderBottomColor: baseColors.secondaryTextColor,
            borderBottomWidth: 0.7,
          }}
        >
          <View style={styles.paymentOptionRow}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="second" />
              <Image
                source={Mastercard}
                resizeMode={"contain"}
                style={{ height: 30, width: 80 }}
              />
              <Text
                style={{
                  color: baseColors.secondaryTextColor,
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                **** **** **** 4152
              </Text>
            </View>
            <MaterialIcons name="cancel" size={24} color="black" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: deviceWidth / 1.3,
              paddingLeft: 50,
            }}
          >
            <Image
              source={Visa}
              resizeMode={"contain"}
              style={{ height: 30, width: 80 }}
            />
            <Image
              source={Mastercard}
              resizeMode={"contain"}
              style={{ height: 30, width: 80 }}
            />
            <Text
              style={{
                color: baseColors.secondaryTextColor,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              New Credit / Card
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: deviceWidth / 1.1,
            paddingVertical: 10,
            borderBottomColor: baseColors.secondaryTextColor,
            borderBottomWidth: 0.7,
          }}
        >
          <RadioButton value="third" />
          <Image
            source={Paypal}
            resizeMode={"contain"}
            style={{ height: 40, width: 120 }}
          />
        </View>

        <View
          style={{
            width: deviceWidth / 1.1,
            paddingTop: 10,
            borderBottomColor: baseColors.secondaryTextColor,
            borderBottomWidth: 0.7,
            paddingBottom: 20,
            marginBottom: 25,
          }}
        >
          <View style={styles.paymentOptionViewTwo}>
            <RadioButton value="fourth" />

            <Text
              style={{
                color: baseColors.secondaryTextColor,
                fontWeight: "bold",
                fontSize: 18,
                paddingLeft: 10,
              }}
            >
              **** **** **** 4152
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingLeft: 30,
            }}
          >
            <Image
              source={Mtn}
              resizeMode={"contain"}
              style={{ height: 40, width: 80 }}
            />
            <Text
              style={{
                color: baseColors.secondaryTextColor,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              New Credit / Card
            </Text>
          </View>
        </View>
      </RadioButton.Group>
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

export default PaymentOption;
