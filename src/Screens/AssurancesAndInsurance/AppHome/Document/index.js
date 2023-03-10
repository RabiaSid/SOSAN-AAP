import React from "react";
import { View, TouchableOpacity, Dimensions, Text,  ScrollView } from "react-native";
import AppHeader from "../../../../Components/AppHeader";
import { styles } from "./style";
import baseColors from "../../../../Constant/color";
import NewRequestsAndObjections from "../../../../Components/SwitchSelector/NewRequestsAndObjections";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SearchField from "../../../../Components/SearchField"


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const Document = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <View>
        <AppHeader styles={styles.headerContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 10,
              // justifyContent:'center'
            }}
          >
            <View
              style={{
                width: deviceWidth / 6,
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <TouchableOpacity>
                <Ionicons
                  onPress={() => {
                    navigation.goBack("");
                  }}
                  name="chevron-back-sharp"
                  size={37}
                  style={{
                    color: baseColors.lightTextColor,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: deviceWidth / 1.5,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={styles.textHeading}>Request</Text>
            </View>
          </View>
        </AppHeader>
      </View>
      <ScrollView>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.screenMiddle}>
       
        <View style={{ height: deviceHeight / 1, }}>
             <NewRequestsAndObjections>
             <View>
                <SearchField
                  placeholder="Search"
                  styles={{
                    width: deviceWidth / 1 - 40,
                    height: 55,
                    borderRadius: 20,
                    elevation: 2,
                    marginHorizontal: 15,
                    marginVertical: 15,
                    backgroundColor: baseColors.lightColor,
                    color: baseColors.lightGreyColor,
                  }}
                />
              </View>
              </NewRequestsAndObjections>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default Document;