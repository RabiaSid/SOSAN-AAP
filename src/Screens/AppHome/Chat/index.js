import React from "react";
import { View, Text, ScrollView ,Image, FlatList} from "react-native";
import GradientBackground from "../../../Components/LinearBackground";
import AppHeader from "../../../Components/AppHeader/index";
import SearchField from "../../../Components/SearchField/index";
import { Entypo } from '@expo/vector-icons';
import { ChatData } from "../../../Config";

import { styles } from "./style";
import baseColors from "../../../Constant/color";
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
  renderItem={({item}) => (
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', padding:5}} key={item?.key}>
            <Image source={item?.image} style={{height: 50, width: 50, borderRadius:50 }}></Image>
            <View style={{flexDirection:'column'}}>
            <Text>{item?.title}</Text>
            <Text>{item?.message}</Text>
            </View>
            <View style={{flexDirection:'column', }}>
            <Text>{item?.time}</Text>
            <Entypo name="mail-with-circle" size={20} style={{color: baseColors.dangerTextColor}} />
            </View>
          </View>
          )}
          />
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default Chat;
