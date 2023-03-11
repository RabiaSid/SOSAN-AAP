import React from "react";
import { View, Dimensions, Text } from "react-native";
const deviceWidth = Dimensions.get("window").width;
import baseColors from "../../../Constant/color";
import { FontAwesome } from "@expo/vector-icons";
export default function BillSummary() {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: deviceWidth / 1 - 50,
          marginHorizontal: 10,
          borderBottomWidth: 1,
          borderBottomColor: baseColors.lightGreyColor,
        }}
      >
        <View style={{ flexDirection: "column", paddingVertical: 5 }}>
          <Text
            style={{
              paddingBottom: 1,
              margin: 3,
            }}
          >
            Consultation fee
          </Text>
          <Text
            style={{
              paddingBottom: 1,
              margin: 3,
            }}
          >
            Pharmacy Bill
          </Text>
          <Text
            style={{
              paddingBottom: 1,
              margin: 3,
            }}
          >
            Reimbursement
          </Text>
        </View>
        <View style={{ flexDirection: "column", paddingVertical: 5 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome name="dollar" size={16} color="black" />
            <Text
              style={{
                paddingBottom: 1,
                margin: 3,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              50
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome name="dollar" size={16} color="black" />
            <Text
              style={{
                paddingBottom: 1,
                margin: 3,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              50
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome name="dollar" size={16} color="black" />
            <Text
              style={{
                paddingBottom: 1,
                margin: 3,
                fontSize: 16,
                fontWeight: "bold",
                color: baseColors.sucessColor,
              }}
            >
              50
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: deviceWidth / 1 - 99,
          marginHorizontal: 35,
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            paddingBottom: 1,
          }}
        >
          Total
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome name="dollar" size={16} color="black" />
          <Text
            style={{
              paddingBottom: 1,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            50
          </Text>
        </View>
      </View>
    </>
  );
}
