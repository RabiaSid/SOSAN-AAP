import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";
import AppHeader from "../../../../Components/AppHeader";
import { styles } from "./style";
import { Ionicons, AntDesign , Foundation, Entypo , FontAwesome5} from "@expo/vector-icons";
import baseColors from "../../../../Constant/color"
import Description from "../../../../Components/Description"

const deviceWidth = Dimensions.get("window").width;

export default function AssuranceTermsAndCondition() {
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
                width: deviceWidth / 3,
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <TouchableOpacity>
                <Ionicons
                  onPress={() => {
                    navigation.goBack(" ");
                  }}
                  name="chevron-back-sharp"
                  size={37}
                  style={{
                    color: baseColors.lightTextColor,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                // width: deviceWidth / 3,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={styles.textHeading}>Plan Detail</Text>
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
            paddingHorizontal: 10,
            marginBottom: 150,
          }}
        >
          <View style={styles.screenMiddle}>
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  // borderWidth: 1,
                  flexDirection: "column",
                  marginVertical: 10,
                  justifyContent:'center',
                  marginHorizontal:10,
                  width: deviceWidth / 1 - 60,
                }}
              >
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems:'center', 
                    
                  }} >
                    <Text style={styles.title}>ASCOMA</Text>
                    <Foundation
                    style={{marginHorizontal:20}}
                    onPress={()=>{
                      navigation.navigate("AssuranceEditPlanDetail")
                    }}
                    name="pencil"
                    size={20}
                    color="black"
                  />
                  </View>
                <Text style={styles.BlueText}>ASCOMA</Text>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-around",
                    marginHorizontal: 40,
                    paddingVertical:5,
                    marginBottom: 6,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <AntDesign name="heart" size={12} color="green" />
                    <Text style={styles.IconText}>Coverage 60%</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" ,}}>
                  <FontAwesome5 name="dollar-sign" size={12} style={{color:baseColors.primaryColor}} />
                    <Text style={styles.IconText}>250 per year</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Entypo name="lock" size={12} style={{color:baseColors.primaryColor}} />
                    <Text style={styles.IconText}>15 years</Text>
                  </View>
                
                </View>
              

              </View>
              
              <View style={{ justifyContent:'space-around', marginTop:15}}>
                <Text style={styles.title}>Converge Detail</Text>
              <Description/>
              </View>
              <View style={{justifyContent:'space-around', marginTop:15}}>
                <Text style={styles.title}>Terms And Conditions</Text>
              <Description/>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}