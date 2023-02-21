import React from "react";
import { View, Text, ScrollView ,Image, FlatList} from "react-native";
import GradientBackground from "../../../../Components/Gradient/LinearBackground";
import AppHeader from "../../../../Components/AppHeader/index";
import SearchField from "../../../../Components/SearchField/index";
import { ChatData } from "../../../../Config";
import { styles } from "./style";
import ListCard from "../../../../Components/List/ListCard";

function Chat() {
  return (
    <View style={styles.screenContainer}>
      <View>
        <AppHeader styles={styles.headerContainer}>
          <GradientBackground styles={styles.LinearGradient}>
            <View>
              <Text style={styles.HeadingText}>Chat</Text>
            </View>
            <View>
              <SearchField placeholder="Search" styles={styles.SearchField} />
            </View>
          </GradientBackground>
        </AppHeader>
      </View>
      {/* <ScrollView> */}
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.screenMiddle}>
        <FlatList
            data={ChatData}
            renderItem={({ item }) => <ListCard data={item} />}
          />
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default Chat;
