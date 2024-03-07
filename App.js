import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      style={styles.image}
      source={require('./assets/BB Logo Icon_COLOR.png')}/>
      <Text style={styles.text}>Login: </Text>
      <TextInput
        style={styles.input}
        placeholder="Username*"
        
      />
      <Text style={styles.text}>Password: </Text>
      <TextInput
        style={styles.input}
        placeholder="Password*"
        type="password"
        
      />
      
      <Pressable
        style = {styles.submitButton}
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
