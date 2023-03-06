import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from "react-native";
import AppHeader from "../AppHeader/index";
import baseColors from "../../Constant/color";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { LayoutMap } from "../../Assets/images/index";
import BottomSheet from "react-native-simple-bottom-sheet";
import NearbyModal from "../Modal/NearByModal/index";
import NearByMenuList from "../List/NearByMenuList/index"
import { useNavigation } from "@react-navigation/native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const index = (props) => {
  const Navigation = useNavigation();

  return (
    <View style={styles.screenContainer}>
      <View>
        <AppHeader styles={styles.headerContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: deviceWidth / 9.5,
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <TouchableOpacity
              onPress={() => Navigation.goBack("")}
              >
                <Ionicons
                  name="chevron-back-sharp"
                  size={40}
                  style={{
                    color: baseColors.sucessTextColor,
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
              <Text style={styles.Title}>{props.title}</Text>
            </View>
            <View
              style={{
                width: deviceWidth / 7,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <NearbyModal />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              paddingVertical:5
            }}
          >
            <View
              style={{
                flexDirection: "row",
                borderColor:baseColors.secondaryColor,
                borderWidth: 0.5,
                width: 70,
                justifyContent: "space-around",
                
              }}
            >
              <NearByMenuList />
              <AntDesign name="down" size={18} style={{color:baseColors.secondaryTextColor}} />
            </View>
            <View
              style={{
                flexDirection: "row",
                borderColor:baseColors.secondaryColor,
                borderWidth: 0.5,
                width: 70,
                justifyContent: "space-around",
                
              }}
            >
              <NearByMenuList />
              <AntDesign name="down" size={18} style={{color:baseColors.secondaryTextColor}} />
            </View>
            <View
              style={{
                flexDirection: "row",
                borderColor:baseColors.secondaryColor,
                borderWidth: 0.5,
                width: 70,
                justifyContent: "space-around",
                
              }}
            >
              <NearByMenuList />
              <AntDesign name="down" size={18} style={{color:baseColors.secondaryTextColor}} />
            </View>
            <View
              style={{
                flexDirection: "row",
                borderColor:baseColors.secondaryColor,
                borderWidth: 0.5,
                width: 70,
                justifyContent: "space-around",
                
              }}
            >
              <NearByMenuList />
              <AntDesign name="down" size={18} style={{color:baseColors.secondaryTextColor}} />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical:5,
            }}
          >
            <Text style={{color: baseColors.secondaryTextColor}}>Your Medicine Available Here</Text>
          </View>
        </AppHeader>
      </View>
      {/* <ScrollView> */}
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <View style={styles.screenMiddle}>
          <View
            style={{
              flex: 1,
              width: deviceWidth / 1,
              height: deviceHeight / 1,
            }}
          >
            <ImageBackground
              source={LayoutMap}
              resizeMode={"cover"}
              style={{ flex: 1 }}
            >
              {/* <View>
                <Text>Your content</Text>
              </View> */}

              <BottomSheet
                isOpen={false}
                sliderMaxHeight={Dimensions.get("window").height * 1.1 - 20}
                sliderMinHeight={Dimensions.get("window").height * 0.7-15}
                wrapperStyle={styles.BottomSheet}
                lineStyle={styles.BottomSheetLine}
              >
                {props.children}
              </BottomSheet>
            </ImageBackground>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    flex: 1,
    flexDirection: "column",
    backgroundColor: baseColors.lightColor,
    zIndex: 0,
  },
  container: {
    // backgroundColor: "#fff",
    // marginVertical: 100,
    // marginHorizontal: 100,
    // borderWidth:2
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#7F8487",
  },
  headerContainer: {
    backgroundColor: baseColors.lightColor,
    // height: 70,
    marginTop: 35,
    width: deviceWidth / 1,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    paddingTop: 7,
    borderBottomColor: baseColors.LightSecondaryColor,
    borderBottomWidth: 2,
    elevation: 4,
    zIndex: 1,
  },
  SearchField: {
    width: deviceWidth / 1.3,
    height: 37,
    borderRadius: 20,
  },
  Title: {
    fontSize: 18,
    fontWeight: "bold",
    color:baseColors.primaryColor
  },
  LinearGradient: {
    borderColor: baseColors.lightColor,
    height: 170,
    height: deviceHeight / 4.5,
    width: deviceWidth / 1,
    borderBottomLeftRadius: 27,
    borderBottomRightRadius: 27,
  },
  BottomSheet: {
    // borderWidth:2,
    paddingBottom: 100,
  },
  BottomSheetLine: {
    borderWidth: 0,
  },

  screenMiddle: {
    width: deviceWidth / 1,
    height: deviceHeight / 1,
    flexDirection: "column",
  },
  textColor: {
    color: baseColors.lightTextColor,
    fontWeight: "bold",
  },
  textColorSuccess: {
    color: baseColors.sucessTextColor,
  },
  textColorDanger: {
    color: baseColors.dangerTextColor,
  },
});

export default index;
