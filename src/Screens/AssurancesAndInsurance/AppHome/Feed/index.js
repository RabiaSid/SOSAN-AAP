import React from "react";
import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import AppHeader from "../../../../Components/AppHeader";
import baseColors from "../../../../Constant/color";
import SearchField from "../../../../Components/SearchField";
import { useNavigation } from "@react-navigation/native";
import { FlagButtonOne, Logo , BottomImage} from "../../../../Assets/images";
import {
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import { styles } from "./style";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
function Feed() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: baseColors.lightColor ,height: deviceHeight/1, }}>
      <AppHeader styles={styles.headerContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 15,
            width: deviceWidth / 1,
          }}
        >
          <View
            style={{
              width: deviceWidth / 1.2,
              paddingLeft: 35,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={Logo}
              style={{ height: 30, width: 125 ,}}
            />
          </View>
          <View
            style={{
              width: deviceWidth / 3.8,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
             <TouchableOpacity
            onPress={()=>navigation.navigate('UserAppHome')}>
              <Image
                source={FlagButtonOne}
                style={{ height: 20, width: 35 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <SearchField placeholder="Search" styles={styles.SearchField} />
        </View>
      </AppHeader>
      <View style={styles.items}>

        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          <View style={styles.itemsView}>
            <FontAwesome5
              name="clinic-medical"
              size={26}
              style={styles.itemsIcon}
            />
            <Text
              onPress={() => {
                navigation.navigate("AssuranceAgendaReports");
              }}
              style={styles.itemsViewText}
            >
              AGENDA
            </Text>
          </View>

          <View style={styles.itemsViewReverse}>
          <Entypo name="calendar" size={24}  style={styles.itemsIconReverse}  />
            <Text
            // onPress={() => {
            //   navigation.navigate("AssuranceTracking");
            // }}
              style={styles.itemsViewTextReverse}
            >
            Tracking
            </Text>
          </View>

          <View style={styles.itemsViewReverse}>
          <Entypo name="wallet" size={24}
              style={styles.itemsIconReverse}
            />
            <Text
            //  onPress={() => {
            //   navigation.navigate("Epargne");
            // }}
              style={styles.itemsViewTextReverse}
            >
            EARNING
            </Text>
          </View>

          <View style={styles.itemsView}>
          <FontAwesome5
              name="clinic-medical"
              size={26}
              style={styles.itemsIcon}
            />
            <Text
            //  onPress={() => {
            //   navigation.navigate("Epargne");
            // }}
              style={styles.itemsViewText}
            >
              PLANS
            </Text>
          </View>
        </View>
      </View>
      <Image
        source={BottomImage}
        style={{ height: 270,resizeMode: 'contain' }}
        
      />
    </View>
  );
}

export default Feed;