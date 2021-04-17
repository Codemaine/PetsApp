import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default class LoginScreen extends Component {
  render() {
    return (
     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
         <View style={styles.loginTextContainer}>
             <Text style={styles.loginText}>Sign Up</Text>
         </View>
         <View>
             <TextInput 
             placeholder="Username"
             style={styles.input}
             placeholderTextColor="#aaaaaa"
             />
             <TextInput 
             placeholder="Email"
             style={styles.input}
             placeholderTextColor="#aaaaaa"
             />
             <TextInput 
             placeholder="Password"
             style={styles.input}
             secureTextEntry={true}
             placeholderTextColor="#aaaaaa"
             />
             <TextInput 
             placeholder="Confirm Password"
             style={styles.input}
             secureTextEntry={true}
             placeholderTextColor="#aaaaaa"
             />
         </View>
         <View>
             <TouchableOpacity style={styles.buttonContainer}>
                 <Text style={styles.buttonText}>Sign Up</Text>
             </TouchableOpacity>
         </View>
         <View style={styles.noAccountContainer}>
             <Text style={styles.noAccountText}>Have an account? </Text>
             <Text style={styles.signupText}>Log In</Text>
         </View>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      margin: 50
  },
  loginText: {
      fontSize: 50,
      color: "#5128AA"
  },
  loginTextContainer: {
      marginBottom: 30
  },
  input: {
      borderBottomWidth: 2,
      borderBottomColor: "#704FB8",
      fontSize: 20,
      height: 50,
      marginTop: 20
  },
  forgotPassword: {
      alignSelf: "flex-end",
      marginVertical: 3,
      color: "#0069B0"
  }, 
  buttonContainer: {
      height: 50,
      backgroundColor: "#5A2FAE",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      marginVertical: 50
  },
  buttonText: {
      color: "#fff",
      fontSize: 25,
  },
  noAccountContainer: {
      flexDirection: "row",
      justifyContent: "center"
  },
  noAccountText: {
      fontSize: 16
  },
  signupText: {
      fontSize: 16,
      color: "#5A2FAE"
  }
});