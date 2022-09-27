import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './assets/bottom/home.png';
import HomeFilled from "./assets/bottom/home-filled.png";
import Chat from "./assets/bottom/chat.png";
import ChatFilled from "./assets/bottom/chat-filled.png";
import Community from "./assets/bottom/community.png";
import CommunityFilled from "./assets/bottom/community-filled.png";
import Person from "./assets/bottom/person.png";
import PersonFilled from "./assets/bottom/person-filled.png";
import HomeScreen from "./pages/HomeScreen";
import CommunityScreen from "./pages/CommunityScreen";
import ChatScreen from "./pages/ChatScreen";
import ProfileScreen from "./pages/ProfileScreen";
import LoginScreen from "./pages/LoginScreen";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false
        }}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => focused ? (
                    <Image style={{height: 30, width: 30}} source={HomeFilled} />
                ) : (
                    <Image style={{height: 30, width: 30}} source={Home} />
                )
            }}/>
            <Tab.Screen name="CommunityScreen" component={CommunityScreen} options={{
                tabBarIcon: ({ focused }) => focused ? (
                    <Image style={{height: 30, width: 30}} source={CommunityFilled} />
                ) : (
                    <Image style={{height: 30, width: 30}} source={Community} />
                )
            }}/>
            <Tab.Screen name="ChatScreen" component={ChatScreen} options={{
                tabBarIcon: ({ focused }) => focused ? (
                    <Image style={{height: 30, width: 30}} source={ChatFilled} />
                ) : (
                    <Image style={{height: 30, width: 30}} source={Chat} />
                )
            }}/>
            <Tab.Screen name="ProfileScreen" component={LoginScreen} options={{
                tabBarIcon: ({ focused }) => focused ? (
                    <Image style={{height: 30, width: 30}} source={PersonFilled} />
                ) : (
                    <Image style={{height: 30, width: 30}} source={Person} />
                )
            }}/>
        </Tab.Navigator>
    );
};