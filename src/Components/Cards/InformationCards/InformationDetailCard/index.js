import React from 'react'
import { View, Image } from 'react-native'
import { styles } from './style.js';
import { Text } from 'react-native';
const InformationDetailCard = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.item}>
                <View style={styles.listItem}>
                    <Text style={styles.title}>Basic Information</Text>
                    <View style={styles.TextSty}>
                    <Text style={styles.idName}>Height(feet/cm)</Text>
                    <Text style={styles.idName}>Blood Group</Text>
                    <Text style={styles.idName}>Weight Kg</Text>
                    <Text style={styles.idName}>Identity Mark</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default InformationDetailCard