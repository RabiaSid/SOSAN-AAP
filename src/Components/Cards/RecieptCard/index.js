import React from 'react'
import { View, TouchableOpacity, Dimensions, Text, ImageBackground } from 'react-native'
import baseColors from '../../../Constant/color';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import DoctorAccountID from '../DoctorAccountID';

const deviceWidth = Dimensions.get("window").width;

export default function RecieptCard(props) {
    const navigation = useNavigation();
    return (
        <View>

            <View style={styles.CardContainer}>
                <View style={styles.ImgDiv}>
                    {/* <ImageBackground resizeMode='cover' source={BannerOrange} style={{ height: 25, width: 120 }} >
                        <Text style={{ color: '#fff', fontSize: 16, paddingHorizontal: 20, }}>Ongoing</Text>
                        </ImageBackground> */}
                         <ImageBackground resizeMode='cover' source={props.image} style={{ height: 25, width: 120 }} >
                        <Text style={{ color: '#fff', fontSize: 16, paddingHorizontal: 20, }}>{props.title}</Text>
                        </ImageBackground>
                    <TouchableOpacity
                        style={{
                            elevation: 8,
                            backgroundColor: baseColors.sucessColor,
                            borderRadius: 5,
                            width: 80,
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            marginTop: 15,
                            height: 25,
                            flexDirection: 'row'
                        }}
                    >
                        <Text
                            style={{
                                color: baseColors.lightTextColor,
                                flexDirection: "column",
                                textAlign: "center",
                                fontSize: 14,
                            }}
                        >
                            Reciept
                        </Text>
                        <Ionicons name="download" size={20} color="blue" />
                    </TouchableOpacity>
                </View>
                <DoctorAccountID/>
                </View>
            
        </View>
    )
}