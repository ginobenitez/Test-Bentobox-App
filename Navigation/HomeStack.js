import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from "../screens/Login";
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Tab.Navigator 
      initialRouteName="Home" 
      barStyle={{ backgroundColor: '#111920' }}
      >
        <Tab.Screen name="Home"  
        component={HomeScreen} 
        options={{
            headerShown:true,
            
        }}/>
         <Tab.Screen name="Discover"  
        component={SearchScreen}
        options={{
          headerShown:false,
           headerTintColor:"#ffffff",
           headerStyle:{
            backgroundColor:"#111920"
           },
        }}/>
      </Tab.Navigator>
  );
}

export default HomeStack;
 