import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import InputField from "../../../../Components/InputField";
import SelectDropdown from "../../../../Components/SelectDropdown";
import Button from "../../../../Components/Buttons";
import AppHeader from "../../../../Components/AppHeader";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import { DummyPerson } from "../../../../Assets/images";
import { useNavigation } from "@react-navigation/native";
import baseColors from "../../../../Constant/color";
import { SelectList } from "react-native-dropdown-select-list";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function RequestANewMedicineDetail() {
  const Navigation = useNavigation();
  const [selected, setSelected] = React.useState([]);

  const data = [
    { key: "1", value: "ml" },
    { key: "2", value: "mg" },
  ];

  return (
    <View style={styles.screenContainer}>
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
            <TouchableOpacity
              onPress={() => {
                Navigation.goBack("");
              }}
            >
              <Ionicons name="chevron-back-sharp" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: deviceWidth / 3,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Add Drug</Text>
          </View>
        </View>
      </AppHeader>
      <View style={styles.screen}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.imageStyle}>
              <Image style={styles.image} source={DummyPerson} />
            </View>
            <Text style={styles.formText}>Institude Name</Text>
            <InputField
              placeholder="Your Email"
              styles={styles.InputField}
            ></InputField>

            <Text style={styles.formText}>Institude Name</Text>
            <SelectDropdown />

            <Text style={styles.formText}>Institude Name</Text>
            <View
              style={{
                width: deviceWidth / 1.2,
                flexDirection: "column",
                alignItems: "flex-start",
                paddingLeft: 15,
              }}
            >
              <View
                style={{
                  width: deviceWidth / 1.6,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 5,
                }}
              >
                <InputField
                  placeholder="Your Email"
                  styles={{
                    height: 40,
                    borderColor: baseColors.sucessColor,
                    borderWidth: 1,
                    borderRadius: 50,
                    padding: 10,
                  }}
                ></InputField>
                <View>
                  <SelectList
                    data={data}
                    setSelected={setSelected}
                    defaultOption={{ key: "1", value: "ml" }}
                    boxStyles={{
                      height: 40,
                      borderColor: baseColors.sucessColor,
                      borderWidth: 1,
                      borderRadius: 50,
                      padding: 10,
                    }}
                    dropdownStyles={{
                      backgroundColor: baseColors.lightColor,
                      marginHorizontal: 10,
                      color: baseColors.sucessTextColor,
                      borderColor: baseColors.sucessColor,
                      borderWidth: 1,
                    }}
                  />
                </View>
                <AntDesign
                  name="pluscircle"
                  size={35}
                  style={{
                    color: baseColors.primaryColor,
                  }}
                />
              </View>
              <View
                style={{
                  width: deviceWidth / 2,
                  flexDirection: "row",
                  justifyContent:'space-between',
                  alignItems:'center',
                  paddingVertical: 5,
                }}
              >
                <View
                  style={{
                    width: deviceWidth / 4.2,
                    flexDirection: "row",
                    justifyContent: 'space-evenly',
                    alignItems: "center",
                    paddingVertical: 5,
                    borderRadius:20,
                    backgroundColor:baseColors.secondaryMiddleColor,
                  }}
                >
                  <Text
                  style={{
                    color: baseColors.lightColor,
                  }}>500 mg</Text>
                  <Entypo name="circle-with-cross" size={22} 
                  style={{
                    color: baseColors.primaryColor,
                  }} />
                </View>

                <View
                  style={{
                    width: deviceWidth / 4.2,
                    flexDirection: "row",
                    justifyContent: 'space-evenly',
                    alignItems: "center",
                    paddingVertical: 5,
                    borderRadius:20,
                    backgroundColor:baseColors.secondaryMiddleColor,
                  }}
                >
                  <Text
                  style={{
                    color: baseColors.lightColor,
                  }}>500 mg</Text>
                  <Entypo name="circle-with-cross" size={22} 
                  style={{
                    color: baseColors.primaryColor,
                  }} />
                </View>
              </View>
            </View>

            <Text style={styles.formText}>About</Text>
            <InputField
              placeholder="Type Here"
              multiline={true}
              numberOfLines={6}
              styles={styles.InputFieldAbout}
            ></InputField>
          </View>

          <Button
            styles={styles.Button}
            onPress={() => {
              Navigation.goBack("");
            }}
          >
            <Text style={styles.ButtonText}>Add Drug</Text>
          </Button>
        </ScrollView>
      </View>
    </View>
  );
}

export default RequestANewMedicineDetail;
