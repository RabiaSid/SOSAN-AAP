import React from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chat from "../../Screens/Common/AppHome/Chat/index";
import Feed from "../../Screens/Pharmacy/AppHome/Feed/index";
import Notification from "../../Screens/Common/AppHome/Notification/index";
import Profile from "../../Screens/Hospital/AppHome/Profile/index";
import Document from "../../Screens/Pharmacy/AppHome/Document/index";
import baseColors from "../../Constant/color";


function PharmacyTabBottomNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: baseColors.primaryColor,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="chatbubble-ellipses-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Document"
          component={Document}
          options={{
            
            tabBarLabel: "Document",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="document-text-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: "Notification",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="notifications-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
       
      </Tab.Navigator>

   
  );
}


export default PharmacyTabBottomNavigation;


