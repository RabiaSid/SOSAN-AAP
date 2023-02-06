import React, { useState } from "react";
import { Text, View ,Dimensions} from "react-native";
import {useNavigation} from "@react-navigation/native"
import { styles } from './style';
import { FontAwesome5,Fontisto,MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from 'react-native-modal';


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function ModalTester() {
  const Navigation = useNavigation ()
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  return (
    <View style={{ flex: 1 }}>
      <Text  onPress={toggleModal} > professional</Text>

      <Modal isVisible={isModalVisible} >
        <View style={{ 
          flex: 1,
          height:deviceHeight / 2 ,
          flexDirection:'column',
          alignItems:'center',
          justifyContent:"center"
        }}>
        <View style={styles.modal}>
          <Text style={styles.Text}>Select Institude Type</Text>

          <View style={{
          flexWrap:'wrap',
          flexDirection: "row",
          
        }}>
          <View style={styles.modalView} >
          <FontAwesome5 name="clinic-medical" size={26} style={styles.modalIcon} />
            <Text
            
            onPress={() => {
              Navigation.navigate("CommonDetail");
              toggleModal()
            }}
            style={styles.modalViewText}
            >Hospital Prive/public
              </Text>

            </View>

          <View style={styles.modalViewReverse}>

          <FontAwesome5 name="capsules" size={24} style={styles.modalIconReverse} />
          <Text
          onPress={() => {
            Navigation.navigate("CommonDetail");
            toggleModal()
          }}
          style={styles.modalViewTextReverse}
          >Pharmacie
            </Text>

          </View>

          <View style={styles.modalViewReverse}>
          
          <Fontisto name="doctor" size={26} style={styles.modalIconReverse} />
          <Text
          onPress={() => {
            Navigation.navigate("PersonalDetail");
            toggleModal()
          }}
          style={styles.modalViewTextReverse}
          >prise de rdv medecin
            </Text>

          </View>

            <View style={styles.modalView}>
          
            <FontAwesome5 name="hand-holding-heart" size={26} style={styles.modalIcon} />
            <Text
            onPress={() => {
              Navigation.navigate("CommonDetail");
              toggleModal()
            }}
            style={styles.modalViewText}
            >Dons ong/ associations
              </Text>

            </View>

            <View style={styles.modalView}>
          
            <MaterialCommunityIcons name="clipboard-plus" size={26} style={styles.modalIcon} />
            <Text
            onPress={() => {
              Navigation.navigate("CommonDetail");
              toggleModal()
            }}
            style={styles.modalViewText}
            >insurance / Company
              </Text>

            </View>
          
          </View>

          
          {/* <Button title="Hide modal" onPress={toggleModal} /> */}
        </View>
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;