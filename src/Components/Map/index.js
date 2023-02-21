import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { MapImage } from "../../Assets/images/index";
import baseColors from "../../Constant/color";

function Map() {
  return (
    <View>
    <Text style={styles.MapText}>location</Text>
        <View style={styles.Map}>
          <Image
            source={MapImage}
            style={styles.MapImage}
          />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    MapText: {
        paddingLeft: 20,
        color: baseColors.secondaryTextColor,
      },
      Map: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 5,
      },
      MapImage: {
        height: 200,
        width: 300,
        borderRadius: 15,
      },
  });
export default Map