import React from "react";
import {
  View,
  Text,
  Dimensions,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import GradientBackground from "../../../Components/Gradient/LinearBackground";
import AppHeader from "../../../Components/AppHeader/index";
import { Ionicons, Entypo, FontAwesome5, Fontisto, EvilIcons,AntDesign } from "@expo/vector-icons";
import { EmailGif } from "../../../Assets/images";
import baseColors from "../../../Constant/color";
baseColors;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const Invite = () => {
  const Navigation = useNavigation();

  return (
    <View style={styles.screenContainer}>
      <GradientBackground>
        <View style={styles.screenBackground}>
          <AppHeader styles={styles.headerContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  width: deviceWidth / 3,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginVertical: 20,
                }}
              >
                <Pressable onPress={() => Navigation.goBack("Profile")}>
                  <Ionicons
                    name="chevron-back-sharp"
                    size={30}
                    style={styles.TextLight}
                  />
                </Pressable>
              </View>
              <View
                style={{
                  width: deviceWidth / 3,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.TextLight}>SOSAN</Text>
              </View>
            </View>
          </AppHeader>
          <View style={styles.middleScreen}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image source={EmailGif} style={{ height: 100, width: 140 }} />
                <View>
                  <Text style={styles.EmailSecondaryText}>
                    Let Get More People Consultation At Door Step
                  </Text>
                </View>
                <View style={styles.LinkInput}>
                  <TextInput style={styles.LinkInputField}></TextInput>
                  <Pressable style={styles.LinkInputButton}>
                    <Entypo
                      name="link"
                      size={24}
                      style={{
                        color: baseColors.lightTextColor,
                      }}
                    />
                  </Pressable>
                </View>
                <Text style={styles.SocialSecondaryText}>
                    Share to your Friend By Using These
                </Text>

                <View style={styles.SocialIconView}>
                  <View style={styles.SocialIconItemsRow}>
                      <View style={styles.IconViewPrimary}>
                      <FontAwesome5 name="facebook" size={32} style={{color: baseColors.lightTextColor}} />
                      </View>
                  </View>
                  <View style={styles.SocialIconItemsRow}>
                      <View style={styles.IconViewSucess}>
                      <Fontisto name="whatsapp" size={30} style={{color: baseColors.lightTextColor}} />
                      </View>
                  </View>
                  <View style={styles.SocialIconItemsRow}>
                      <View style={styles.IconViewLightPrimary}>
                      <FontAwesome5 name="twitter" size={30} style={{color: baseColors.lightTextColor}} />
                      </View>
                  </View>
                </View>
                <View style={styles.SocialIconView}>
                  <View style={styles.SocialIconItemsRow}>
                      <View style={styles.IconViewLightPrimary}>
                      <Entypo name="vimeo" size={30} style={{color: baseColors.lightTextColor}}  />
                      </View>
                  </View>
                  <View style={styles.SocialIconItemsRow}>
                      <View style={styles.IconViewPrimary}>
                      <FontAwesome5 name="telegram-plane" size={35} style={{color: baseColors.lightTextColor}} />
                      </View>
                  </View>
                  <View style={styles.SocialIconItemsRow}>
                      <View style={styles.IconViewPrimary}>
                      <AntDesign name="skype" size={30} style={{color: baseColors.lightTextColor}} />
                      </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </GradientBackground>
    </View>
    
  );
};
export default Invite;
