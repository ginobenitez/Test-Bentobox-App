import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator,createAppContainer } from '@react-navigation/native-stack';
import LoginScreen from "../screens/Login";
import HomeScreen from '../screens/HomeScreen';
import HomeStack from './HomeStack';

const Stack = createNativeStackNavigator();

function LoginStack() {
  return (
    <NavigationContainer
    independent={true}
    >
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login"  
        component={LoginScreen} 
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

export default LoginStack;
 