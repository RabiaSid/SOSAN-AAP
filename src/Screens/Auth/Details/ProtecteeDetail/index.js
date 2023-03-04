import React from "react";
import { Text, View, ScrollView, Image,Dimensions, TouchableOpacity } from "react-native";
import { styles } from "./style";
import InputField from "../../../../Components/InputField";
import SelectDropdown from "../../../../Components/SelectDropdown";
import Button from "../../../../Components/Buttons";
import AppHeader from "../../../../Components/AppHeader";
import { Ionicons } from "@expo/vector-icons";
import { DummyPerson } from "../../../../Assets/images";
import { useNavigation } from "@react-navigation/native";
import SelectPlan from "../../../../Components/Modal/SelectPlan";
import baseColors from "../../../../Constant/color";


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function ProtecteeDetail() {
  const Navigation = useNavigation();
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
                onPress={() => Navigation.goBack("")}>
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
                  style={{
                    fontWeight: "bold",
                    color: baseColors.lightTextColor,
                  }}
                >
                  Protectee Detail
                </Text>
              </View>
            </View>
          </AppHeader>
          <View style={styles.screenMiddle}>
      <ScrollView showsVerticalScrollIndicator={false}>
       
        
        <View style={styles.Container}>
        <Text style={styles.formText}>Institude Name</Text>
        <InputField
          placeholder="Your Email"
          styles={styles.InputField}
        ></InputField>
        <Text style={styles.formText}>Institude Name</Text>
        <InputField
          placeholder="Your Email"
          styles={styles.InputField}
        ></InputField>
        <Text style={styles.formText}>Institude Name</Text>
        <InputField
          placeholder="Your Email"
          styles={styles.InputField}
        ></InputField>
       
        <Text style={styles.formText}>Phone</Text>
        <InputField
          placeholder="Type Here"
          styles={styles.InputField}
        ></InputField>
        <Text style={styles.formText}>Website</Text>
        <InputField
          placeholder="Type Here"
          styles={styles.InputField}
        ></InputField>
       
        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <Button
            styles={styles.Button}
          >
            <SelectPlan>
            <Text style={styles.ButtonText}>Create</Text>
            </SelectPlan>
          </Button>
          </View>
        
          </View>
      </ScrollView>
      
      </View>
    </View>
  );
}

export default ProtecteeDetail;
