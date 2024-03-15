import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator,createAppContainer } from '@react-navigation/native-stack';
import LoginScreen from "../screens/Login";
import SignUpScreen from "../screens/SignUp";
import HomeScreen from '../screens/HomeScreen';
import HomeStack from './HomeStack';

const Stack = createNativeStackNavigator();

function SignUpStack() {
  return (
    <NavigationContainer
    independent={true}
    >
      <Stack.Navigator initialRouteName="SignUp" >
        <Stack.Screen name="SignUp"  
        component={SignUpScreen} 
        options={{
          headerShown:false
      }
      }
        />
        <Stack.Screen name="Home" 
        component={HomeStack} 
        options={{
          headerShown:false
      }
      }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SignUpStack;
 