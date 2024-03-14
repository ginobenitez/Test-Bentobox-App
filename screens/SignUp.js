import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Pressable, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { doSignUp } from '../api/doSignUp';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    try {
      if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
        Alert.alert('All fields are required');
        return;
      }

      if (password !== confirmPassword) {
        Alert.alert('Passwords do not match');
        return;
      }

      const { success, error, data } = await doSignUp(firstName, lastName, username, email, password);

      if (success) {
        Alert.alert('Registration successful');
        // Navigate to login screen or perform any other action
      } else {
        Alert.alert('Registration failed', error);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Registration failed', 'An error occurred');
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={require('../assets/BB Logo Icon_COLOR.png')}
      />
      <Text style={styles.text}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name*"
        onChangeText={setFirstName}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name*"
        onChangeText={setLastName}
      />

      <TextInput
        style={styles.input}
        placeholder="Username*"
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Email Address*"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password*"
        secureTextEntry={true}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password*"
        secureTextEntry={true}
        onChangeText={setConfirmPassword}
      />

      <Pressable
        style={styles.submitButton}
        onPress={handleSignUp}
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
