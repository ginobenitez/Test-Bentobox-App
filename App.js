import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
<<<<<<< Updated upstream
      style={styles.image}
      source={require('./assets/BB Logo Icon_COLOR.png')}/>
      <Text style={styles.text}>Login: </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        
      />
      <Text style={styles.text}>Password: </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        type="password"
        
      />
      
=======
        style={styles.image}
        source={require('./assets/logo.png')}
      />
>>>>>>> Stashed changes
      <Pressable
        style={styles.button}
        onPress={() => {
          // Handle sign in action
          console.log("Sign in button pressed");
        }}
      >
<<<<<<< Updated upstream
        <Text style={styles.text}>Submit</Text>
      </Pressable>
      
      <Text style={styles.text}> Hi!</Text>
=======
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
      <Pressable
        style={[styles.button, { backgroundColor: '#3077b2' }]}
        onPress={() => {
          // Handle sign up action
          console.log("Sign up button pressed");
        }}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
>>>>>>> Stashed changes
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
  image: {
    width: 105,
    height: 110,
    marginBottom: 50,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  buttonText: {
    color: '#111920',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
