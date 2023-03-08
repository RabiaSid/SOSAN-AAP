import React from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    FlatList,
} from "react-native";
import AppHeader from "../../../../Components/AppHeader/index";
import { ScheduledCardData } from "../../../../Config/index";
import { styles } from "./style";
import { Ionicons } from '@expo/vector-icons';
import baseColors from "../../../../Constant/color";
import { useNavigation } from "@react-navigation/native";
import AppointmentID from '../../../../Components/Cards/AppointmentID'
import ScheduledCard from "../../../../Components/Cards/ScheduledCard";
import AppointmentList from '../../../../Components/List/AppointmentList'
import TestList from '../../../../Components/List/TestList'
import SelectServiceModal from "../../../../Components/Modal/SelectServiceModal";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const TestAppointmentDetailPharmacy = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.screenContainer}>
            <View>
                <AppHeader styles={styles.headerContainer}>
                    <View
                        style={styles.FirstView}
                    >
                        <View
                            style={styles.SecondView}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.goBack("Appointment");
                                }}
                            >
                                <Ionicons
                                    name="chevron-back-sharp"
                                    size={30}
                                    style={{ color: baseColors.lightTextColor }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                width: deviceWidth / 1.2,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: 'center'
                            }}
                        >
                            <Text
                                style={{ fontWeight: "bold", color: baseColors.lightTextColor, fontSize: 20, textAlign: 'center' }}
                            >
                                Appointment Detail
                            </Text>
                        </View>
                    </View>
                </AppHeader>
            </View>
            

                <ScrollView showsVerticalScrollIndicator={false}>
                    
                    <View style={styles.screenMiddle}>
                   
                        
                        <AppointmentID />
                            <View style={{
                                flexDirection: 'column',
                                width: deviceWidth / 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <FlatList
                                    data={ScheduledCardData}
                                    renderItem={({ item }) => <ScheduledCard data={item} />
                                    }
                                />
                            </View>

                            <View>
                            
                            <Text style={styles.FollowTitle}>Test Report </Text>
                            <TestList />
                        
                    </View>
                </View>
                        
                </ScrollView>
            
        </View>
    )
}

export default TestAppointmentDetailPharmacy