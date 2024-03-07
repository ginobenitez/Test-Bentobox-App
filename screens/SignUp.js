import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={require('./assets/BB_Logo_Icon_COLOR.png')}
      />
      <Text style={styles.text}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name*"
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name*"
      />

      <TextInput
        style={styles.input}
        placeholder="Username*"
      />

      <TextInput
        style={styles.input}
        placeholder="Email Address*"
      />

      <TextInput
        style={styles.input}
        placeholder="Password*"
        secureTextEntry={true}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password*"
        secureTextEntry={true}
      />

      <Pressable
        style={styles.submitButton}
        onPress={() => {
          console.log("Sign up button pressed");
        }}
      >
        <Text style={styles.text}>Sign Up</Text>
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
    marginVertical: 8,
    borderWidth: 2,
    width: 300,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor:"#ffffff",
    borderColor:'#3077b2'
  },
  image: {
    width: 105,
    height: 110,
    marginVertical: 20,
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 3, 
    backgroundColor: '#3077b2',
    marginTop: 20,
  },
  text:{
    color:'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
