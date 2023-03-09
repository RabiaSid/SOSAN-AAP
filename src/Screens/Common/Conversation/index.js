import React from 'react'
import { View, TouchableOpacity, Dimensions, Text , Image} from 'react-native'
import AppHeader from "../../../Components/AppHeader/index";
import {styles} from './style'
import baseColors from '../../../Constant/color';
import { Ionicons } from "@expo/vector-icons";
import { AvatarPerson1 } from '../../../Assets/images/index';
import SendMessage from '../../../Components/Cards/Conversation/SendMessage';
import ReceiveMessage from "../../../Components/Cards/Conversation/ReceiveMessage"


const deviceWidth = Dimensions.get("window").width;

const Conversation = () => {
    return (
        <View style={styles.screenContainer}>
            <View>
                <AppHeader styles={styles.headerContainer}>
                    <View
                        style={styles.HeaderRow}
                    >
                        <View
                            style={styles.HeaderRowitems}
                        >
                            <TouchableOpacity>
                                <Ionicons
                                    name="chevron-back-sharp"
                                    size={45}
                                    style={{ color: baseColors.lightTextColor , justifyContent:'center', alignItems:'center' }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                            }}
                        >
                            <View style={styles.Listmain}>
                                <View style={styles.ListBottom}>
                                    <Image
                                        source={AvatarPerson1}
                                        style={styles.ActivityImage}
                                    ></Image>
                                    <View style={styles.Listitems}>
                                        <Text style={styles.textHeading}>Dr. Umair Rana</Text>
                                        <Text style={styles.text}>Online</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </AppHeader>
            </View>
            <View
                style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 10
                }}
            >
   <View style={styles.screenMiddle}>
<View style={{
    flexDirection:'column'
}}>
<SendMessage/>
<ReceiveMessage/>
<SendMessage/>
<ReceiveMessage/>
<SendMessage/>
<ReceiveMessage/>
</View>


<View>

</View>
   </View>
            </View>
        </View>
    )
}

export default Conversation