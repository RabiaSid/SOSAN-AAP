import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import Carousel from "react-native-anchor-carousel";
import baseColors from "../../Constant/color";
import DarkGradient from "../Gradient/DarkGradient/index";
import { AntDesign } from "@expo/vector-icons";
import Button from "../Buttons/index";
import PaymentPayAsOption from "../Modal/PaymentModal/PaymentPayAsOption";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const data = [
  {
    title: "Basic",
  },
  {
    title: "premium",
  },
  {
    title: "premium",
  },
];

const INITIAL_INDEX = 0;
export default function ImageCarousel(props) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

  function handleCarouselScrollEnd(item, index) {
    setCurrentIndex(index);
  }

  function renderItem({ item, index }) {
    const { uri, title, content } = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}
      >
        <DarkGradient
          styles={{
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 20,
            borderRadius: 20,
            height: deviceHeight / 2.1,
          }}
        >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>For USD</Text>
          <Text style={styles.price}>$ 40.5 /month</Text>
          <Text style={styles.seconderytext}>*local taxes may Apply</Text>
          <View style={{ flexDirection: "row", paddingVertical: 7 }}>
            <AntDesign
              name="checkcircle"
              size={24}
              style={{ color: baseColors.primaryTextColor, paddingEnd: 10 }}
            />
            <Text style={styles.text}>1290+ Health Recovery</Text>
          </View>
          <View style={{ flexDirection: "row", paddingVertical: 7 }}>
            <AntDesign
              name="checkcircle"
              size={24}
              style={{ color: baseColors.primaryTextColor, paddingEnd: 10 }}
            />
            <Text style={styles.text}>1290+ Health Recovery</Text>
          </View>
          <View style={{ flexDirection: "row", paddingVertical: 7 }}>
            <AntDesign
              name="checkcircle"
              size={24}
              style={{ color: baseColors.primaryTextColor, paddingEnd: 10 }}
            />
            <Text style={styles.text}>1290+ Health Recovery</Text>
          </View>
          <View style={{ flexDirection: "row", paddingVertical: 7 }}>
            <AntDesign
              name="checkcircle"
              size={24}
              style={{ color: baseColors.primaryTextColor, paddingEnd: 10 }}
            />
            <Text style={styles.text}>1290+ Health Recovery</Text>
          </View>
          <Button styles={styles.Button}>
            <PaymentPayAsOption>
              <Text style={styles.ButtonText}>Select Period</Text>
            </PaymentPayAsOption>
          </Button>
        </DarkGradient>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        style={styles.carousel}
        data={data}
        renderItem={renderItem}
        itemWidth={0.7 * deviceWidth}
        inActiveScale={0.8}
        inActiveOpacity={1}
        containerWidth={deviceWidth}
        onScrollEnd={handleCarouselScrollEnd}
        ref={carouselRef}
        itemContainerStyle={styles.itemContainerStyle} //image container
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    paddingTop: 20,
  },

  carousel: {
    backgroundColor: "transparent",
    aspectRatio: 1,
    flexGrow: 0,
    height: deviceHeight / 2,
  },
  item: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: baseColors.lightTextColor,
    fontWeight: "700",
  },
  price: {
    fontSize: 20,
    color: baseColors.darkColor,
    fontWeight: "500",
  },
  text: {
    fontSize: 14,
    color: baseColors.darkColor,
    fontWeight: "500",
  },
  seconderytext: {
    fontSize: 13,
    color: baseColors.LightSecondaryColor,
    fontWeight: "500",
  },
  Button: {
    width: deviceWidth / 2.2,
    backgroundColor: baseColors.secondaryColor,
    marginVertical: 10,
    paddingVertical: 15,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    fontSize: 13,
    color: baseColors.LightSecondaryColor,
    fontWeight: "500",
  },
});
