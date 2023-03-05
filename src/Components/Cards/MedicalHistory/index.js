import React from 'react'
import { View, Image } from 'react-native'
import { styles } from './style.js';
import { AvatarPerson1 } from '../../../Assets/images/index';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Text } from 'react-native';
const MedicalHistoryID = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.item}>
                <View style={styles.imgView}>
                    <Image source={AvatarPerson1} style={styles.imageSty} />
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.title}>Kianna Levin</Text>
                    <Text style={styles.email}>jane20@gmail.com</Text>
                    <View style={styles.idView}>
                        <Text style={styles.idName}>SOSAN ID:</Text>
                        <Text style={styles.id}>25ln55</Text>
                    </View>
                    <View style={styles.icons}>
                        <View style={styles.lockSty}>
                            <Entypo name="lock" size={17} style={styles.iconsSty1} />
                            <Text style={styles.id}>3 years</Text>
                        </View>
                        <View style={styles.heartSty}>
                            <FontAwesome name="heart" size={17} style={styles.iconsSty2} />
                            <Text style={styles.id}>Cov: 60%</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default MedicalHistoryID