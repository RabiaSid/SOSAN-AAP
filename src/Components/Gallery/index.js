import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./style";

function Gallary() {
  return (
    <View style={styles.MainConatiner}>
      <Text style={styles.formText}>Gallary</Text>
      <Text style={styles.TextStyle}>Add Minimum 2 Photos</Text>
      <View style={styles.TopImage}>
        
        <Image
          style={{ height: 150, width:300, borderRadius: 10, resizeMode: "cover" }}
          source={require("../../../src/Assets/images/vector.png")}
        />
      </View>
      <View style={styles.RowImages}>
        <Image
          style={styles.ImgSty}
          source={require("../../../src/Assets/images/vector.png")}
        />
        <Image
          style={styles.ImgSty}
          source={require("../../../src/Assets/images/vector.png")}
        />
        <Image
          style={styles.ImgSty}
          source={require("../../../src/Assets/images/vector.png")}
        />
      </View>
    </View>
  );
};

export default Gallary;