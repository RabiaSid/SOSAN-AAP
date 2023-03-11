import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import SwitchSelector from "react-native-switch-selector";
import baseColors from "../../../Constant/color";
import { useNavigation } from "@react-navigation/native";
import {
  DiagnosticsDataHospital,
  SpecialistDataHospital,
} from "../../../Config";
import { FontAwesome } from "@expo/vector-icons";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function index() {
  const [switchValue, setswitchValue] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SwitchSelector
        initial={0}
        textColor={baseColors.secondaryTextColor} //'#7a44cf'
        selectedColor={baseColors.lightColor}
        bold
        height={50}
        fontSize={16}
        buttonColor={baseColors.sucessColor}
        borderColor={baseColors.sucessColor}
        onPress={(value) => setswitchValue(value)}
        hasPadding
        options={[
          { label: "Specialist", value: false },
          { label: "Diagnostics", value: true },
        ]}
      />
      <View>
        {switchValue !== true ? (
          <FlatList
            data={SpecialistDataHospital}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate(item?.goto)}>
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: deviceWidth / 2.5,
                    marginVertical: 10,
                    marginHorizontal: 5,
                    paddingVertical: 10,
                    borderRadius: 20,
                    backgroundColor: baseColors.LightSecondaryColor,
                    elevation: 4,
                  }}
                >
                  <FontAwesome
                    name="circle"
                    size={60}
                    style={{ color: baseColors.lightColor }}
                  />
                  <Text style={{ fontSize: 15, fontWeight: "700" }}>
                    {item?.title}
                  </Text>
                  <Text style={{ fontSize: 12, fontWeight: "600" }}>
                    Registered Text:
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "700",
                        color: baseColors.dangerTextColor,
                      }}
                    >
                      21
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <FlatList
            data={DiagnosticsDataHospital}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate(item?.goto)}>
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: deviceWidth / 2.5,
                    marginVertical: 10,
                    marginHorizontal: 5,
                    paddingVertical: 10,
                    borderRadius: 20,
                    backgroundColor: baseColors.LightSecondaryColor,
                    elevation: 4,
                  }}
                >
                  <FontAwesome
                    name="circle"
                    size={60}
                    style={{ color: baseColors.lightColor }}
                  />
                  <Text style={{ fontSize: 15, fontWeight: "700" }}>
                    {item?.title}
                  </Text>
                  <Text style={{ fontSize: 12, fontWeight: "600" }}>
                    Registered Text:
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "700",
                        color: baseColors.dangerTextColor,
                      }}
                    >
                      21
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: deviceWidth / 1 - 50,
    marginTop: 40,
  },
});
export default index;
