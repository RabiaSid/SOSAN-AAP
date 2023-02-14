import React from "react";
import { View, Image, Text } from "react-native";
import { Vector } from "../../Assets/images/index";
import { styles } from "./style";

function Gallary() {
  return (
    <View style={styles.MainConatiner}>
      <Text style={styles.formText}>Gallary</Text>
      <Text style={styles.TextStyle}>Add Minimum 2 Photos</Text>
      <View style={styles.TopImage}>
        
        <Image
          style={styles.columnImages}
          source={Vector}
        />
      </View>
      <View style={styles.RowImages}>
        <Image
          style={styles.ImgSty}
          source={Vector}
        />
        <Image
          style={styles.ImgSty}
          source={Vector}
        />
        <Image
          style={styles.ImgSty}
          source={Vector}
        />
      </View>
    </View>
  );
};

export default Gallary;