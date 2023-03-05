import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import SwitchSelector from "react-native-switch-selector";
import baseColors from "../../../Constant/color";
import { DummyPerson } from "../../../Assets/images";
import InputField from "../../InputField/index";
import SelectDropdown from "../../SelectDropdown/index";
import Button from "../../Buttons/index";
import { useNavigation } from "@react-navigation/native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function index() {
  const Navigation = useNavigation();
  const [switchValue, setswitchValue] = useState(false);

  return (
    <View style={styles.container}>
      <SwitchSelector
        initial={0}
        textColor={baseColors.secondaryTextColor} //'#7a44cf'
        selectedColor={baseColors.lightColor}
        bold
        fontSize={16}
        buttonColor={baseColors.sucessColor}
        borderColor={baseColors.sucessColor}
        onPress={(value) => setswitchValue(value)}
        hasPadding
        options={[
          { label: "Stuff Detail", value: false },
          { label: "Doctor Detail", value: true },
        ]}
      />

      <View>
        {switchValue !== true ? (
          <View
            style={{
              width: deviceWidth / 1.2,
              backgroundColor: baseColors.lightColor,
              elevation: 2,
              borderRadius: 15,
              marginVertical: 20,
            }}
          >
            <View style={styles.imageStyle}>
              <Image style={styles.image} source={DummyPerson} />
            </View>

            <Text style={styles.formText}>Stuff Name</Text>
            <InputField
              placeholder="Your Email"
              styles={styles.InputField}
            ></InputField>

            <Text style={styles.formText}>Educational backgroundColor</Text>
            <InputField
              placeholder="Your Email"
              styles={styles.InputField}
            ></InputField>
            <Text style={styles.formText}>Stuff Role</Text>
            <SelectDropdown />
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Button
                styles={styles.Button}
                onPress={() => {
                  Navigation.navigate("SkipAppointments");
                }}
              >
                <Text style={styles.ButtonText}>Save</Text>
              </Button>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: deviceWidth / 1 - 50,
  },
  ActivityView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    width: deviceWidth / 1 - 50,
    backgroundColor: baseColors.LightSecondaryColor,
    borderRadius: 15,
    marginTop: 10,
  },
  ActivityImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  itemsViewText: {
    color: baseColors.darkTextColor,
    fontWeight: "bold",
    fontSize: 14,
  },
  icon: {
    color: baseColors.dangerTextColor,
  },
  ItemDisc: {
    flexDirection: "row",
    paddingTop: 5,
  },
  InputField: {
    height: 40,
    margin: 12,
    borderColor: baseColors.sucessColor,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
  imageStyle: {
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
  },
  Button: {
    elevation: 5,
    backgroundColor: baseColors.primaryColor,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 20,
    marginVertical: 10,
    width: deviceWidth / 1.7,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  formText: {
    paddingLeft: 20,
    fontWeight: "bold",
  },
});
export default index;
