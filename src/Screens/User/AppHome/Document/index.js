import React from "react";
import { View, Text, Dimensions, StyleSheet,  ScrollView } from "react-native";
import AppHeader from "../../../../Components/AppHeader";
import baseColors from "../../../../Constant/color";
import RecieptCard from "../../../../Components/Cards/RecieptCard";
import AppointmentList from "../../../../Components/List/AppointmentList";
import TestList from "../../../../Components/List/TestList";
import BillSummary from "../../../../Components/List/BillSummary";
import { BannerBlue, BannerOrange } from '../../../../Assets/images/index'
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const Document = () => {
  return (
    <View style={styles.screenContainer}>
      <AppHeader styles={styles.headerContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 15,
            backgroundColor: baseColors.sucessColor,
            borderBottomEndRadius: 7,
            borderBottomStartRadius: 7,
          }}
        >
          <View
            style={{
              width: deviceWidth / 3,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontWeight: "bold", color: baseColors.lightTextColor, fontSize: 18 }}
            >
              Documents
            </Text>
          </View>
        </View>
      </AppHeader>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 10,
          backgroundColor: "#effef9",
        }}
      ><ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.screenMiddle}>
            <RecieptCard
              image={BannerBlue}
              title='Ongoing'
            />
            <View>
              <Text style={styles.FollowTitle}>Prescribed Medicine</Text>
              <AppointmentList />
              <Text style={styles.FollowTitle}>Prescribed Test </Text>
              <TestList />
              <Text style={styles.FollowBillTitle}>Bill Summary</Text>
              <BillSummary />
            </View>
            <View style={{ marginTop: 30 }}>
              <RecieptCard
                image={BannerBlue}
                title='Ongoing'
              />
              <View>
                <Text style={styles.FollowTitle}>Prescribed Medicine</Text>
                <AppointmentList />
                <Text style={styles.FollowTitle}>Prescribed Test </Text>
                <TestList />
                <Text style={styles.FollowBillTitle}>Bill Summary</Text>
                <BillSummary />
              </View>
            </View>
            <View style={{ marginTop: 30 }}>
              <RecieptCard
                image={BannerOrange}
                title='Complete'
              />
              <View>
                <Text style={styles.FollowTitle}>Prescribed Medicine</Text>
                <AppointmentList />
                <Text style={styles.FollowTitle}>Prescribed Test </Text>
                <TestList />
                <Text style={styles.FollowBillTitle}>Bill Summary</Text>
                <BillSummary />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: baseColors.lightColor,
    height: 50,
    marginTop: 25,
    width: deviceWidth / 1,
  },
  screenContainer: {
    // height: deviceHeight / 1,
    width: deviceWidth / 1,
    flex: 1,
    flexDirection: "column",

  },
  screenMiddle: {
    width: deviceWidth / 1,
    backgroundColor: baseColors.lightColor,
    flexDirection: 'column',
    // paddingVertical: 10,
    // borderWidth: 1,
    marginTop: 30,
    marginBottom: 150,
    justifyContent: 'center'
    // borderWidth: 2

  },
  FollowTitle: {
    fontSize: 16,
    color: baseColors.primaryColor,
    marginHorizontal: 10,
    paddingTop: 20,
    fontWeight: 'bold'
  },
  FollowBillTitle: {
    fontSize: 16,
    color: baseColors.primaryColor,
    marginHorizontal: 30,
    fontWeight: 'bold',
    paddingTop: 20
  }
});

export default Document;