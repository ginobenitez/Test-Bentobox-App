import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator,createAppContainer } from '@react-navigation/native-stack';
import LoginScreen from "../screens/Login";
import HomeScreen from '../screens/HomeScreen';
import HomeStack from './HomeStack';
import AnimeCard from '../screens/AnimeCard';

const Stack = createNativeStackNavigator();

export default function aniStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name="Home"  
        component={HomeScreen} 
        options={{
          headerShown:false
      }
      }
        />
        <Stack.Screen name="AnimeCard" 
        component={AnimeCard} 
        options={{
          headerShown:false
      }
      }
        />
      </Stack.Navigator>
      </NavigationContainer>
  );
}