import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReservationScreen from '../Screens/Reservation';
import ChatScreen from '../Screens/Chat';
import ChattingScreen from '../Screens/Chatting';
import MapScreen from '../Screens/Map';
import DiscoverScreen from '../Screens/Discover';
import DescriptionDetailsScreen from '../Screens/DescriptionDetails';
import DescriptionDetails1Screen from '../Screens/DescriptionDetails1';
import DiscoverViewScreen from '../Screens/DiscoverView';
import DiscoverView1Screen from '../Screens/DiscoverView1';
import CreatepostScreen from '../Screens/Createpost';
import ProfileScreen from '../Screens/Profile';
import PersonalProfileScreen from '../Screens/PersonalProfile';
import LoginScreen from '../Screens/Auth/Login';
import SliderScreen from '../Screens/Auth/SliderScreen';
import SplashScreen from '../Screens/Auth/Splash';
import WelcomeScreen from '../Screens/Auth/Welcome';
import ForgetpassScreen from '../Screens/Auth/Forgetpass';
import ResetpassScreen from '../Screens/Auth/Resetpass';
import CodepassScreen from '../Screens/Auth/Codepass';
import RegisterScreen from '../Screens/Auth/Register';
import DetailsScreen from '../Screens/Details';
import SettingsScreen from '../Screens/Settings';
import ResetPasswordScreen from '../Screens/ResetPassword';
import FollowingScreen from '../Screens/Following';
import FollowersScreen from '../Screens/Followers';
import { connectAuthRedirectPage } from '../Redux/connects';
import tabBarIcon from 'react';
import styles from '../Screens/Reservation/styles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { RNNSearchBar } from "react-native-navigation-search-bar";
import Header from '../Components/Header/Title';
import centerComponent from '../Components/Header/Title';
import HeaderTitle from '../Components/Header/Title';



// Stack Navigators for Bottom Tab

const ReservationStack = createStackNavigator();

export const ReservationNavigator = () => (
    <ReservationStack.Navigator initialRouteName="Reservation">
        <ReservationStack.Screen name="G4LT" component={DetailsScreen} />
        <ReservationStack.Screen name="profile" component={ProfileScreen} />
        <ReservationStack.Screen name="PersonalProfile" component={PersonalProfileScreen} />
        <ReservationStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <ReservationStack.Screen name="Settings" component={SettingsScreen} />
        <ReservationStack.Screen name="Following" component={FollowingScreen} />
        <ReservationStack.Screen name="Followers" component={FollowersScreen} />
        <ReservationStack.Screen name="description1" component={DescriptionDetails1Screen} />
        <ReservationStack.Screen name="DiscoverView1" component={DiscoverView1Screen} />
    </ReservationStack.Navigator>
);


const DiscoverStack = createStackNavigator();
export const DiscoverNavigator = () => (
    <DiscoverStack.Navigator initialRouteName="Discover" >
        <DiscoverStack.Screen name="discover" component={DiscoverScreen} />
        <ChatStack.Screen name="Chatting" component={ChattingScreen} />
        <ReservationStack.Screen name="first" component={DetailsScreen} />
        <ReservationStack.Screen name="DiscoverView" component={DiscoverViewScreen} />
        <ReservationStack.Screen name="description" component={DescriptionDetailsScreen} />
    </DiscoverStack.Navigator>
);

const CreatepostStack = createStackNavigator();
export const CreatepostNavigator = () => (
    <CreatepostStack.Navigator initialRouteName="Createpost">
        <CreatepostStack.Screen name="Cancel" component={CreatepostScreen} />
        <CreatepostStack.Screen name="first" component={DetailsScreen} />
        <CreatepostStack.Screen name="firstPage" component={DetailsScreen} />
        <CreatepostStack.Screen name="map" component={MapScreen} />
        <ChatStack.Screen name="createpost" component={CreatepostScreen} initialParams={{ location: "" }} />
    </CreatepostStack.Navigator>
);

const ChatStack = createStackNavigator();
export const ChatNavigator = () => (
    <ChatStack.Navigator initialRouteName="Chat">
        <ChatStack.Screen name="Chat" component={ChatScreen} />
        <ChatStack.Screen name="Chatting" component={ChattingScreen} />
    </ChatStack.Navigator>
);

// Stack Navigator for Profile page inside Draw Navigator

const ProfileStack = createStackNavigator();
export const ProfileNavigator = () => (
    <ProfileStack.Navigator initialRouteName="Profile">
        <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
);

// Auth Navigator

const AuthStack = createStackNavigator();
const AuthInnerNavigator = ({ redirect }) => (
    <AuthStack.Navigator initialRouteName={redirect || "Splash"} headerMode="none">
         <AuthStack.Screen name="Splash" component={SplashScreen} />
         <AuthStack.Screen name="Slider" component={SliderScreen} />
        <AuthStack.Screen name="Forgetpass" component={ForgetpassScreen} />
        <AuthStack.Screen name="Resetpass" component={ResetpassScreen} />
        <AuthStack.Screen name="Codepass" component={CodepassScreen} />
        <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
);
export const AuthNavigator = connectAuthRedirectPage(AuthInnerNavigator);
