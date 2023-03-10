import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import AppHeader from "../../../../Components/AppHeader/index";
import { ListOfSchedule, ListOfScheduleTwo } from "../../../../Config/index";
import List from "../../../../Components/List/ListSchedule/index";
import { styles } from "./style";
import baseColors from "../../../../Constant/color";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Calender from "../../../../Components/Calender";
import { MaterialIcons } from '@expo/vector-icons';
import DarkGradient from '../../../../Components/Gradient/DarkGradient'

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const Agenda = () => {
  const [switchValue, setswitchValue] = React.useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.screenContainer}>
      <View>
        <AppHeader styles={styles.headerContainer}>
          <View
            style={styles.FirstView}
          >
            <View
              style={styles.SecondView}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack("Feed");
                }}
              >
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
                style={{ fontWeight: "bold", color: baseColors.lightTextColor, fontSize: 20 }}
              >
                Consultation
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
        <ScrollView  showsVerticalScrollIndicator={false}>
          <View style={styles.screenMiddle}>
            <View style={{flexDirection:'row', paddingTop:10,}}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, }}>August, 2022</Text>
            <Calender/>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignContent: "flex-start",
              }}
            >
              <TouchableOpacity
                  onPress={(value) => setswitchValue(true)} 
                style={{
                  elevation: 8,
                  backgroundColor: "#ADD8E6",
                  borderRadius: 10,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  width: 65,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 80,
                  marginVertical: 20,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: baseColors.lightTextColor,
                    flexDirection: "column",
                    textAlign: "center",
                    fontSize: 18,
                  }}
                >
                  Sun 10
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                    onPress={(value) => setswitchValue(false)}
                style={{
                  elevation: 8,
                  backgroundColor: baseColors.secondaryColor,
                  borderRadius: 10,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  width: 65,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 80,
                  marginVertical: 20,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: baseColors.lightTextColor,
                    flexDirection: "column",
                    textAlign: "center",
                    fontSize: 18,
                  }}
                >
                  Mon 11
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  elevation: 8,
                  backgroundColor: baseColors.secondaryColor,
                  borderRadius: 10,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  width: 65,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 80,
                  marginVertical: 20,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: baseColors.lightTextColor,
                    flexDirection: "column",
                    textAlign: "center",
                    fontSize: 18,
                  }}
                >
                  Tue 12
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  elevation: 8,
                  backgroundColor: baseColors.secondaryColor,
                  borderRadius: 10,
                  paddingVertical: 10,
                  paddingHorizontal: 12,
                  width: 65,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 80,
                  marginVertical: 20,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: baseColors.lightTextColor,
                    flexDirection: "column",
                    textAlign: "center",
                    fontSize: 18,
                  }}
                >
                  Wed 13
                </Text>
              </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, }}>List of Schedule</Text>
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{
                flexDirection: 'column',
                width: deviceWidth / 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,

              }}>
                   {switchValue !== true ? (
                <FlatList
                  data={ListOfScheduleTwo}
                  renderItem={({ item }) => <List data={item} />
                  }
                /> 
                   ) : (
                    <FlatList
                    data={ListOfSchedule}
                    renderItem={({ item }) => <List data={item} />
                    }
                  /> 
                    )}
              </View>
            </View>
            <View style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              width: deviceWidth / 1 - 30,

            }}>

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
                }}>
                <MaterialIcons name="add" size={40} color="white" onPress={() => {
                  navigation.navigate("WorkingDetailAgenda");
                }} />
              </DarkGradient>
            </View>

          </View>
        </ScrollView>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default Agenda;