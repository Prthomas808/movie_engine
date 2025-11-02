import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return <Tabs screenOptions={{
    tabBarShowLabel: false, 
    tabBarActiveTintColor: "green",
    tabBarStyle: {borderTopWidth: 0, backgroundColor: "black"} }}>
    
    <Tabs.Screen name="index" options={{
      headerShown: false,
      tabBarIcon: ({focused, color}) => (
        focused ? <Ionicons name="home" size={20} color={color} /> : <Ionicons name="home-outline" size={20} color={color} />
      )
      }} />

    <Tabs.Screen name="search" options={{
      headerShown: false,
      tabBarIcon: ({focused, color}) => (
        focused ? <Ionicons name="search" size={20} color={color} /> : <Ionicons name="search-outline" size={20} color={color} />
      )
      }} />

    <Tabs.Screen name="saved" options={{
      headerShown: false,
      tabBarIcon: ({focused, color}) => (
        focused ? <Ionicons name="bookmarks" size={20} color={color} /> : <Ionicons name="bookmarks-outline" size={20} color={color} />
      )
      }} />
    
    <Tabs.Screen name="profile" options={{
      headerShown: false,
      tabBarIcon: ({focused, color}) => (
        focused ? <Ionicons name="person" size={20} color={color} /> : <Ionicons name="person-outline" size={20} color={color} />
      )
      }} />
  </Tabs>;
}