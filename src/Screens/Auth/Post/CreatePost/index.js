import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import DarkGradient from "../../../../Components/Gradient/DarkGradient/index";
import Button from "../../../../Components/Buttons/index";
import AppHeader from "../../../../Components/AppHeader/index";
import { styles } from "./style";
import baseColors from "../../../../Constant/color";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";
import { AvatarPerson1 } from "../../../../Assets/images";
import { CreatePostData } from "../../../../Config";
import { useNavigation } from "@react-navigation/native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function CreatePost() {
  const Navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <View>
        <AppHeader styles={styles.headerContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 5,
            }}
          >
            <View
              style={{
                width: deviceWidth / 3,
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <TouchableOpacity onPress={() => Navigation.goBack("Feed")}>
                <Ionicons
                  name="chevron-back-sharp"
                  size={30}
                  style={{ color: baseColors.lightTextColor }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: deviceWidth / 3,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ fontWeight: "bold", color: baseColors.lightTextColor }}
              >
                Create Post
              </Text>
            </View>
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
          <View style={styles.Listmain}>
            <View style={styles.ListBottom}>
              <Image
                source={AvatarPerson1}
                style={styles.ActivityImage}
              ></Image>
              <View style={styles.Listitems}>
                <Text style={styles.textHeading}>Dr. Umair Rana</Text>
                <Text style={styles.text}>Sosan ID: 00000</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FlatList
              data={CreatePostData}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: deviceWidth / 1 - 30,
                    paddingVertical: 5,
                    marginVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 15,
                    backgroundColor: baseColors.lightColor,
                    elevation: 4,
                  }}
                >
                  <View>
                    <Text style={styles.textHeadingPrimary}>{item?.title}</Text>
                  </View>
                  <View style={{ paddingBottom: 10 }}>
                    <Text>{item?.description}</Text>
                  </View>
                  <View style={{ flexDirection: "row", paddingLeft: 10 }}>
                    <Ionicons
                      name="time"
                      size={14}
                      style={{ color: baseColors.sucessColor, paddingRight: 6 }}
                    />
                    <Text>{item?.time}</Text>
                  </View>
                  <View style={{ flexDirection: "row", paddingLeft: 10 }}>
                    <Entypo
                      name="location"
                      size={14}
                      style={{
                        color: baseColors.dangerTextColor,
                        paddingRight: 6,
                      }}
                    />
                    <Text>{item?.location}</Text>
                  </View>
                </View>
              )}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              width: deviceWidth / 1 - 40,
              height: deviceHeight / 3,
            }}
          >
            <DarkGradient
              styles={{
                elevation: 8,
                backgroundColor: baseColors.sucessColor,
                borderRadius: 50,
                padding: 10,
                // paddingHorizontal: 12,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                height: 60,
                // marginVertical: 20,
              }}
            >
              <MaterialIcons
                name="add"
                size={40}
                color="white"
                onPress={() => {
                  Navigation.navigate("PostDetail");
                }}
              />
            </DarkGradient>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

export default CreatePost;
