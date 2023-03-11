import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";
import AppHeader from "../../../../Components/AppHeader";
import InputField from "../../../../Components/InputField";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import baseColors from "../../../../Constant/color";
import Button from "../../../../Components/Buttons";

const deviceWidth = Dimensions.get("window").width;

function AssuranceAddplanDetail() {
  const navigation = useNavigation();
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
                width: deviceWidth / 4,
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
                    color: baseColors.darkColor,
                    justifyContent: "center",
                    alignItems: "center",
                    marginStart: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: deviceWidth / 2,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={styles.textHeading}>Add Plan Detail</Text>
            </View>
            <View
              style={{
                width: deviceWidth / 5,
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            ></View>
          </View>
        </AppHeader>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
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
                flexDirection: "column",
              }}
            >
              <View style={{ marginHorizontal: 10, marginTop: 15 }}>
                <Text style={styles.formText}>Plan name:</Text>
                <InputField
                  placeholder=" Javne Sethi "
                  styles={styles.InputStyling}
                />
                <Text style={styles.formText}>Health Covergae:</Text>
                <InputField placeholder=" 80 % " styles={styles.InputStyling} />
                <Text style={styles.formText}>Total fee(per year):</Text>
                <InputField placeholder=" $ 80 " styles={styles.InputStyling} />
                <Text style={styles.formText}>Tenure</Text>
                <InputField
                  placeholder=" 20 years "
                  styles={styles.InputStyling}
                />
                <Text style={styles.formText}>Coverege</Text>
                <InputField
                  placeholder="Mention Details Here"
                  multiline={true}
                  numberOfLines={8}
                  styles={styles.AboutSty}
                />
                <Text style={styles.formText}>Terms and Conditions</Text>
                <InputField
                  placeholder="Mention Details Here"
                  multiline={true}
                  numberOfLines={8}
                  styles={styles.AboutSty}
                />
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Button styles={styles.LoginBtn}>
                  <Text
                    onPress={() => {
                      navigation.goBack("");
                    }}
                    style={styles.LoginTextSty}
                  >
                    Save
                  </Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default AssuranceAddplanDetail;
