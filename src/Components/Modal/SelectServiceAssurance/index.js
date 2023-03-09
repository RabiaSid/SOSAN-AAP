import React, { useState } from "react";
import { Text, View, Dimensions, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style.js"
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Modal from "react-native-modal";
import TestNameModal from "../TestNameModal/index";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function SelectServiceAssurance() {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <View style={{ flex: 1 }}>
            
                <Text style={{

                }}onPress={toggleModal}>Cleared</Text>
           

            <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
                <View
                    style={{
                        flex: 1,
                        height: deviceHeight / 1,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View style={styles.modal}>
                        <View style={styles.modalView}>
                            <Text style={styles.Text}>Select Services</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: deviceWidth / 1 - 50, }}>
                                <View style={styles.ImgView}>
                                    <View style={styles.ImgViewLittle}>
                                        <FontAwesome5 name="pills" size={24} color="blue" />
                                    </View>
                                    <Text style={styles.ImgText}>Add Medicine</Text>
                                </View>
                                <View onPress={toggleModal} style={styles.ImgView}>
                                    <View style={styles.ImgViewLittle}>
                                        <Ionicons name="document-text-sharp" size={24} color="brown" />
                                    </View>
                                  <Text style={{alignItems:'center', justifyContent:'center'}}>
                                   <TestNameModal>
                                   Prescribed Test
                                   </TestNameModal>
                                   </Text>
 
                                </View>
                            </View>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default SelectServiceAssurance