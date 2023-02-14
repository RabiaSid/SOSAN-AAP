import React from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Chat from "../../Screens/AppHome/Chat/index";
import Feed from "../../Screens/AppHome/Feed/index";
import Notification from "../../Screens/AppHome/Notification/index";
import Profile from "../../Screens/AppHome/Profile/index";
import Document from "../../Screens/AppHome/Document/index";
import baseColors from "../../Constant/color";
// import AgendaScreen from "../../Screens/AppHome/Feed/AgendaScreen/index"


function TabBottomNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer independent={true}>
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

    </NavigationContainer>
  );
}

// const AgendaStack = createNativeStackNavigator();

//  function AgendaNAvigation() {
//   return (
//     <NavigationContainer>
//       <AgendaStack.Navigator
//         initialRouteName="Tabs"
//         screenOptions={{
//             headerShown: false,
//         }}
//       >
        
//         <AgendaStack.Screen name="AgendaScreen"
//                     component={AgendaScreen}
//                     options={{
//                         headerShown: true,
//                     }} />
//         <AgendaStack.Screen name="Tabs" component={TabBottomNavigation} />
//       </AgendaStack.Navigator>
//     </NavigationContainer>
//   );
// }
// export default {TabBottomNavigation, AgendaNAvigation};
export default TabBottomNavigation;


