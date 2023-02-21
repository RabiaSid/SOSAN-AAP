import React from "react";
import { View, FlatList, Text, Image } from "react-native";
import { AppointmentCard } from "../../../Config/index";
import Button from "../../Buttons/index";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {styles} from "./style.js"
import baseColors from "../../../Constant/color";

const CancelledAppointmentCard = () => {
  return (
    <View style={styles.Container}>
      <FlatList
        data={AppointmentCard}
        renderItem={({ item }) => (
          <View style={styles.CardStyling}>
            <View style={styles.item} key={item.key}>
              <Image source={item?.image} style={styles.img} />
              <View style={styles.TitleHead}>
                <Text style={styles.title}>{item?.title}</Text>
                <View style={styles.ItemDisc}>
                  <Entypo
                    name="location"
                    size={14}
                    style={{ color: baseColors.dangerTextColor , paddingRight:6 }}
                  />
                  <Text style={styles.discp}>{item?.location}</Text>
                </View>
                <View style={styles.ItemDisc}>
                  <FontAwesome5
                    name="calendar-week"
                    size={14}
                    style={{ color: baseColors.primaryColor , paddingRight:6  }}
                  />
                  <Text style={styles.discp}>{item?.dateDay}</Text>
                </View>
                <View style={styles.ItemDisc}>
                  <Ionicons
                    name="time"
                    size={14}
                    style={{ color: baseColors.sucessColor , paddingRight:6 }}
                  />
                  <Text style={styles.discp}>{item?.time}</Text>
                </View>
              </View>
              <View>
                <Ionicons
                  name="settings"
                  size={24}
                  style={{ color: baseColors.primaryColor }}
                />
              </View>
            </View>
            <View style={styles.ButtonView}>
              <Button styles={styles.ButtonSucess}>
                <Text style={styles.ButtonText}>{item?.Sucess}</Text>
              </Button>
              <Button styles={styles.ButtonReject}>
                <Text style={styles.ButtonText}>{item?.Reject}</Text>
              </Button>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default CancelledAppointmentCard;
