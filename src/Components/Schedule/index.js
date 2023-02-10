import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";
import SwitchButton from "./Switch";
import TimePicker from "./TImePicker";

function Schedule() {
  return (
    <View style={styles.screenContainer}>
      <Text>Schedule</Text>

      <View style={styles.scheduleMain}>
        <View style={styles.schedulecolumn}>
          <Text style={styles.scheduleDay}>Sunday</Text>
          <Text style={styles.scheduleDay}>Monday</Text>
          <Text style={styles.scheduleDay}>Tuesday</Text>
          <Text style={styles.scheduleDay}>Wednesday</Text>
          <Text style={styles.scheduleDay}>Friday</Text>
          <Text style={styles.scheduleDay}>Sunday</Text>
          <Text style={styles.scheduleDay}>Saturday</Text>
          <Text style={styles.scheduleDay}>24/7</Text>
        </View>

        <View style={styles.schedulecolumn}>
          <View style={styles.scheduleBtn}>
            <SwitchButton />
          </View>
          <View style={styles.scheduleBtn}>
            <SwitchButton />
          </View>
          <View style={styles.scheduleBtn}>
            <SwitchButton />
          </View>
          <View style={styles.scheduleBtn}>
            <SwitchButton />
          </View>
          <View style={styles.scheduleBtn}>
            <SwitchButton />
          </View>
          <View style={styles.scheduleBtn}>
            <SwitchButton />
          </View>
          <View style={styles.scheduleBtn}>
            <SwitchButton />
          </View>
          <View style={styles.scheduleBtn}>
            <SwitchButton />
          </View>
        </View>

        <View style={styles.schedulecolumn}>
          <Text style={styles.scheduleTiming}>
            <TimePicker />
            <View>
              <Text>To</Text>
            </View>
            <TimePicker />
          </Text>

          <Text style={styles.scheduleTiming}>
            <TimePicker />
            <View>
              <Text>To</Text>
            </View>
            <TimePicker />
          </Text>
          <Text style={styles.scheduleTiming}>
            <TimePicker />
            <View>
              <Text>To</Text>
            </View>
            <TimePicker />
          </Text>
          <Text style={styles.scheduleTiming}>
            <TimePicker />
            <View>
              <Text>To</Text>
            </View>
            <TimePicker />
          </Text>
          <Text style={styles.scheduleTiming}>
            <TimePicker />
            <View>
              <Text>To</Text>
            </View>
            <TimePicker />
          </Text>
          <Text style={styles.scheduleTiming}>
            <TimePicker />
            <View>
              <Text>To</Text>
            </View>
            <TimePicker />
          </Text>
          <Text style={styles.scheduleTiming}>
            <TimePicker />
            <View>
              <Text>To</Text>
            </View>
            <TimePicker />
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Schedule;
