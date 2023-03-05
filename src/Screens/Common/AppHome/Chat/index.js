import React from "react";
import { View, Text, ScrollView ,Image, FlatList} from "react-native";
import GradientBackground from "../../../../Components/Gradient/DarkGradient/index";
import AppHeader from "../../../../Components/AppHeader/index";
import SearchField from "../../../../Components/SearchField/index";
import { ChatData } from "../../../../Config/index";
import { styles } from "./style";
import ChatList from "../../../../Components/List/ChatList/index";

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
        style={styles.middle}
      >
        <View style={styles.screenMiddle}>
        <FlatList
            data={ChatData}
            renderItem={({ item }) => <ChatList data={item} />}
          />
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default Chat;
