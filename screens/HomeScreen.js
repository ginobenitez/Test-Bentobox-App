import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Pressable } from 'react-native';
import * as React from 'react';

export default function HomeScreen() {
    return(
        <View style={styles.container}>
        <Text style={styles.testText}>{global.userId}</Text>
        <Text style={styles.testText}>{global.loginName}</Text>
        <Text style={styles.testText}>{global.firstName}</Text>
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
    testText:{
        color:"#fff"
    }
});