import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Ionicons} from '@expo/vector-icons'

import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import HomeScreen from './screens/HomeScreen'
import MessageScreen from './screens/MessageScreen'
import NotificationScreen from './screens/NotificationScreen'
import PostScreen from './screens/PostScreen'
import ProfileScreen from './screens/ProfileScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDn5eC3JR8z2_NS6bZqQ2rQqEZvNtgjX1E",
  authDomain: "chatkuy-f081d.firebaseapp.com",
  databaseURL: "https://chatkuy-f081d.firebaseio.com",
  projectId: "chatkuy-f081d",
  storageBucket: "chatkuy-f081d.appspot.com",
  messagingSenderId: "1090017335579",
  appId: "1:1090017335579:web:f4d768c97c93c0f4d01bbe",
  measurementId: "G-58312FGCFY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-home" size={24} color={tintColor} />
      }
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-chatboxes" size={24} color={tintColor} />
      }
    },
    Post: {
      screen: PostScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => 
        <Ionicons 
          name="ios-add-circle"
          size={24} color={tintColor} 
          style={{shadowColor: "#E9446A", shadowOffset: {width: 0, height: 0, shadowRadius: 10, shadowOpacity: 0.3}}} />
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-notifications" size={24} color={tintColor} />
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-person" size={24} color={tintColor} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#161F3D",
      inactiveTintColor: "#8888C4",
      showLabel: false
    }
  }
)

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)