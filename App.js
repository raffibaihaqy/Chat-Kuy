import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

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

const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)