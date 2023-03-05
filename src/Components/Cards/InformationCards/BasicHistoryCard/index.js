import React from 'react'
import { View, Image } from 'react-native'
import { styles } from './style.js';
import { Text } from 'react-native';
const BasicHistoryCard = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.item}>
                <View style={styles.listItem}>
                    <Text style={styles.title}>Basic History</Text>
                    <View style={styles.TextSty}>
                    <Text style={styles.idName}>Post illness</Text>
                    <Text style={styles.idName}>Physical Handicap</Text>
                    <Text style={styles.idName}>Mental illness/disorder</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default BasicHistoryCard