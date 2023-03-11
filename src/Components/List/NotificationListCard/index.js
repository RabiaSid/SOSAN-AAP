import React from "react";
import { View, Text, Image } from "react-native";
import Button from "../../Buttons/index";
import baseColors from "../../../Constant/color";

function NotificationListCard({ data }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 5,
      }}
      key={data?.key}
    >
      <Image
        source={data?.image}
        style={{
          height: 45,
          width: 45,
          borderRadius: 50,
          marginHorizontal: 20,
        }}
      ></Image>

      <View style={{ flexDirection: "column" }}>
        <Text>
          {data?.message}
          <Text style={{ color: baseColors.sucessColor }}>
            {data?.ConfirmSucess}
          </Text>
          <Text style={{ color: baseColors.dangerTextColor }}>
            {data?.ConfirmReject}
          </Text>
        </Text>

        <View style={{ flexDirection: "row" }}>
          {data?.Sucess ? (
            <Button
              styles={{
                elevation: 0,
                backgroundColor: baseColors.sucessColor,
                width: 70,
                height: 27,
                borderRadius: 5,
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
                color: baseColors.lightColor,
              }}
            >
              <Text
                style={{
                  color: baseColors.lightColor,
                }}
              >
                {data?.Sucess}
              </Text>
            </Button>
          ) : null}

          {data?.Reject ? (
            <Button
              styles={{
                elevation: 0,
                backgroundColor: baseColors.dangerTextColor,
                width: 70,
                height: 27,
                borderRadius: 5,
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
                color: baseColors.lightColor,
              }}
            >
              <Text
                style={{
                  color: baseColors.lightColor,
                }}
              >
                {data?.Reject}
              </Text>
            </Button>
          ) : null}
        </View>
      </View>
    </View>
  );
}

export default NotificationListCard;
