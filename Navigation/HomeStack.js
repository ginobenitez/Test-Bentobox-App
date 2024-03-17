import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SearchStack from './SearchStack';

const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Tab.Navigator 
      initialRouteName="Home" 
      barStyle={{ backgroundColor: '#111920' }}
      >
        <Tab.Screen name="Collection"  
        component={HomeScreen} 
        options={{
            headerShown:true,
            
        }}/>
         <Tab.Screen name="Discover"  
        component={SearchStack}
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
 