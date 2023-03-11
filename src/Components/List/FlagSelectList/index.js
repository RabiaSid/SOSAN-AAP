import React, { useState } from "react";
import { Image, Text, Dimensions, View } from "react-native";
import baseColors from "../../../Constant/color";
import {
  FlagButtonOne,
  FlagButtonTwo,
  FlagButtonThree,
} from "../../../Assets/images";
import ModalDropdown from "react-native-modal-dropdown";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

// const options = ['Option 1', 'Option 2', 'Option 3'];

// const Images = {
//    image:FlagButtonOne ,
//    image:FlagButtonTwo ,
//    image:FlagButtonThree ,
// };

const options = [
  { label: "Option 1", image: FlagButtonOne },
  { label: "Option 2", image: FlagButtonTwo },
  { label: "Option 3", image: FlagButtonThree },
];

function index() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedImage, setSelectedImage] = useState(selectedOption.image);
  // const [selectedImage, setSelectedImage] = useState('Option 1');

  // const handleImageChange = (index, value) => {
  //   setSelectedImage(value);
  // };

  return (
    <View>
      <ModalDropdown
        options={options}
        defaultValue={selectedOption.image}
        onSelect={(option) => {
          setSelectedOption(option);
          setSelectedImage(option.image);
        }}
      />

      <Image source={selectedImage} style={{ height: 20, width: 35 }} />
    </View>
    // <View style={{flexDirection:'column', borderWidth:2}}>
    //   <ModalDropdown
    //     options={options}
    //     onSelect={handleImageChange}
    //   />
    //   <Image source={Images[selectedImage]} style={{ height: 20, width: 35, borderWidth:2 }}/>
    // </View>
  );
}

export default index;
