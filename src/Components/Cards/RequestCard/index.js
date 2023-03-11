import React from "react";
import { View, Text, Image } from "react-native";
import Button from "../../Buttons/index";
import { Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { styles } from "./style.js";
import baseColors from "../../../Constant/color";

const RequestCard = ({ data }) => {
  return (
    <View style={styles.CardStyling}>
      <View style={styles.item} key={data.key}>
        {data?.image ? <Image source={data?.image} style={styles.img} /> : null}

        <View style={styles.TitleHead}>
          {data?.title ? <Text style={styles.title}>{data?.title}</Text> : null}
          <View style={styles.ItemDisc}>
            <Entypo
              name="location"
              size={14}
              style={{ color: baseColors.dangerTextColor, paddingRight: 6 }}
            />
            <Text style={styles.discp}>{data?.location}</Text>
          </View>
          <View style={styles.ItemDisc}>
            <FontAwesome5
              name="calendar-week"
              size={14}
              style={{ color: baseColors.primaryColor, paddingRight: 6 }}
            />
            <Text style={styles.discp}>{data?.dateDay}</Text>
          </View>
          <View style={styles.ItemDisc}>
            <Ionicons
              name="time"
              size={14}
              style={{ color: baseColors.sucessColor, paddingRight: 6 }}
            />
            <Text style={styles.discp}>{data?.time}</Text>
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
        {data?.Sucess ? (
          <Button styles={styles.ButtonSucess}>
            <Text style={styles.ButtonText}>{data?.Sucess}</Text>
          </Button>
        ) : null}
        {data?.Reject ? (
          <Button styles={styles.ButtonReject}>
            <Text style={styles.ButtonText}>{data?.Reject}</Text>
          </Button>
        ) : null}
      </View>
    </View>
  );
};
export default RequestCard;
