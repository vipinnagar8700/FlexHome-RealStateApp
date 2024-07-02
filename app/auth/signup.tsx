import colors from '@/constants/colors';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignup = () => {
    // Implement phone login functionality
    alert(`Logging in with phone number: ${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
         <View style={styles.logoContainer}>
        <Image
          source={{uri:'https://flex-home.botble.com/storage/logo/logo.png'}}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}> Register</Text>
      <Text style={[{fontSize:18,fontWeight:'300', marginBottom:10}]}> Please enter your details</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your fullname"
        keyboardType="name-phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
        <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
        <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
       <TextInput
        style={styles.input}
        placeholder="Enter your password"
        keyboardType='visible-password'
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Text>Are you a Real State Agent?</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',gap:10,marginTop:10,marginBottom:10}}>
      <TouchableOpacity style={styles.buttonAgent} onPress={handleSignup}>
        <Text style={styles.buttonText}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonAgent} onPress={handleSignup}>
        <Text style={styles.buttonText}>No</Text>
      </TouchableOpacity>
      </View>
      <View style={{marginBottom:10}}>

      <Text style={{color:colors.black,fontSize:13,fontWeight:'300'}}>I am agree to read your term & condition and privacy & policy of your real state application.</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom:10
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  button: {
    backgroundColor: colors.primaryColor,
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 20,
    alignItems: 'center',width:'100%'
  },
  buttonAgent: {
    backgroundColor: colors.primaryColor,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Signup;
