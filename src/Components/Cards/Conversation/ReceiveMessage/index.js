import React from "react";
import { Text, Dimensions } from "react-native";
import DarkGradient from "../../../../Components/Gradient/DarkGradient";
const deviceWidth = Dimensions.get("window").width;

function ReceiveMessage() {
    
  return (
    <DarkGradient
      styles={{
        width: deviceWidth / 1 - 80,
        height: 45,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft: 50,
        justifyContent: "flex-start",
        marginVertical: 10,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          paddingLeft: 18,
          paddingVertical: 8,
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        Hello ... How are you ?
      </Text>
    </DarkGradient>
  );
}

export default ReceiveMessage;
