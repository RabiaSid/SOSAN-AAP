import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import AppHeader from "../../../Components/AppHeader/index";
import { styles } from "./style";
import baseColors from "../../../Constant/color";
import {
  Ionicons,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  Octicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { AvatarPerson1 } from "../../../Assets/images";
import Button from "../../../Components/Buttons/index";
import EpargneList from "../../../Components/List/EpargneList";
import { EpargneListData } from "../../../Config";
import GiftModal from "../../../Components/Modal/GiftModal/index";
import { useNavigation } from "@react-navigation/native";
import SendModal from "../../../Components/Modal/SendModal/index";
import PaymentPayAsOption from "../../../Components/Modal/PaymentModal/PaymentPayAsOption";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function Epargne() {
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
              width: deviceWidth / 4,
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity onPress={() => Navigation.goBack("Feed")}>
              <Ionicons
                name="chevron-back-sharp"
                size={37}
                style={{ color: baseColors.lightTextColor }}
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
            <Text
              style={{ fontWeight: "bold", color: baseColors.lightTextColor }}
            >
              Epargne SOSAN
            </Text>
          </View>
          <View
            style={{
              width: deviceWidth / 5,
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <AntDesign
              name="exclamationcircleo"
              size={20}
              style={{ fontWeight: "bold", color: baseColors.lightTextColor }}
            />
          </View>
        </View>
      </AppHeader>

      <View style={styles.screenMiddle}>
        <View style={styles.TitleRow}>
          <View style={styles.TitleRowImage}>
            <Image source={AvatarPerson1} style={styles.Image}></Image>
          </View>
          <View style={styles.TitleRowView}>
            <View>
              <Text>HI Jane</Text>
            </View>
            <View style={styles.TitleTextView}>
              <Text>$1,264</Text>
              <Text>Total Balance</Text>
            </View>
          </View>
          <View style={styles.TitleIconView}>
            <GiftModal />
          </View>
        </View>

        <View style={styles.ButtonRow}>
          <View styles={styles.ButtonView}>
            <Button styles={styles.ButtonIcons}>
              <FontAwesome5
                name="telegram-plane"
                size={30}
                style={styles.textColorPrimary}
              />
            </Button>
            <SendModal />
          </View>
          <View styles={styles.ButtonView}>
            <Button styles={styles.ButtonIcons}>
              <MaterialCommunityIcons
                name="arrow-down-box"
                size={30}
                style={styles.textColorSuccess}
              />
            </Button>
            <PaymentPayAsOption>
              <Text style={styles.TextButton}>Deposit</Text>
            </PaymentPayAsOption>
          </View>
          <View styles={styles.ButtonView}>
            <Button styles={styles.ButtonIcons}>
              <Octicons
                name="graph"
                size={25}
                style={styles.textColorPrimary}
                onPress={() => {
                  Navigation.navigate("Earning");
                }}
              />
            </Button>
            <Text
              onPress={() => {
                Navigation.navigate("Earning");
              }}
              style={styles.TextButton}
            >
              Stat
            </Text>
          </View>
          <View styles={styles.ButtonView}>
            <Button styles={styles.ButtonIcons}>
              <MaterialIcons
                name="settings"
                size={28}
                style={styles.textColorSuccess}
              />
            </Button>
            <Text style={styles.TextButton}>Manager</Text>
          </View>
        </View>

        <View style={styles.PromoRow}>
          <View style={styles.promoView}>
            <View style={styles.promoItems}>
              <MaterialIcons
                name="settings"
                size={22}
                style={styles.textColorPrimary}
              />
            </View>
            <View style={styles.promoItems}>
              <Text style={styles.textColorPrimary}>Check Promo Code</Text>
            </View>
            <View style={styles.promoItems}>
              <AntDesign
                name="right"
                size={22}
                style={styles.textColorPrimary}
              />
            </View>
          </View>
        </View>

        <View style={styles.ListTitleRow}>
          <View style={styles.ListMainView}>
            <Text style={styles.ListTitle}>Balance History</Text>
          </View>
          <View style={styles.Listmain}>
            <FlatList
              data={EpargneListData}
              renderItem={({ item }) => <EpargneList data={item} />}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default Epargne;
