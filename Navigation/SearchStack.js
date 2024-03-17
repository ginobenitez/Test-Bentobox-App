import * as React from 'react';
import { StyleSheet, Button, Text, View, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from "../screens/SearchScreen";
import AnimeInfoScreen from"../screens/AnimeInfoScreen";

const Stack = createNativeStackNavigator()

export default function SearchStack() {
  return (
      <Stack.Navigator >
        <Stack.Screen 
        name="Discover" 
        component = {SearchScreen}
        options = {{
          title:"Discover",
          headerShown:true,
          headerStyle:{
            backgroundColor:'#111920'
          },
          headerTintColor: '#111920',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Search"
              color="#fff"
            />
          ),
        }}
        />
         <Stack.Screen 
        name="Info"
        component = {AnimeInfoScreen}
        options = {{
          headerShown:true,
          headerStyle:{
            backgroundColor:'#111920',
            headerTintColor: '#111920',
          },


        }}
        />
      </Stack.Navigator>
  
  );
}