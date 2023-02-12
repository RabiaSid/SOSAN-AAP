import React from "react";
import { View, Text } from "react-native";
import GradientBackground from "../../../Components/LinearBackground";

function Chat() {
  return (
    <GradientBackground>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Chat!</Text>
      </View>
    </GradientBackground>
  );
}

export default Chat;
