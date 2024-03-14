import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View, TextInput, Button, Image, Pressable } from 'react-native';
import * as React from 'react';
import HomeScreen from './HomeScreen';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeStack from '../Navigation/HomeStack';
import LoginStack from '../Navigation/LoginStack';
import {doLogin} from '../api/doLogin'
global.loginName = '';
global.password = '';
global.userId = -1;
global.firstName = '';
global.lastName = '';


export default function Login() {
  const navigation = useNavigation()
  handleClick = async () =>
{
  await doLogin();
  navigation.navigate('Home');
}

changeLoginNameHandler = async (val) =>
    {
    global.loginName = val;

    }
    changePasswordHandler = async (val) =>
    {
    global.password = val;
    }
  return (
    
    <View style={styles.container}>
      <Image 
      style={styles.image}
      source={require('../assets/BB Logo Icon_COLOR.png')}
      />
      <Text style={styles.text}>Login: </Text>
      <TextInput
        style={styles.input}
        placeholder="Username*"
        onChangeText={(val) => { this.changeLoginNameHandler(val) }}
        
      />
      <Text style={styles.text}>Password: </Text>
      <TextInput
        style={styles.input}
        placeholder="Password*"
        type="password"
        secureTextEntry={true}
        onChangeText={(val) => { this.changePasswordHandler(val) }}
        
      />
      
      <Pressable
        style = {styles.submitButton}
        onPress={() =>{
          this.handleClick()
          
          }
        }
        //this.handleClick</View>
        
      >
        <Text style={styles.text}>Login</Text>
      </Pressable>
      
      
      <StatusBar style="auto" />
    </View>
  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111920',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    width: 200,
    padding: 10,
    borderRadius: 15,
    backgroundColor:"#ffffff",
    borderColor:'#3077b2'
  },
  image: {
    width: 105,
    height: 110,
    margin:20,
    marginLeft: 25
  },

  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 3, 
    backgroundColor: '#3077b2',
  },
  text:{
    color:'white'
  }
});