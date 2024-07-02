import colors from '@/constants/colors';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { supabase } from '../../supabase/supabase';

const PhoneLogin = () => {
  const [phone, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [session, setSession] = useState(null);
  const [error, setError] = useState('');

  const handlePhoneLogin = async () => {
    setError('');
    setIsOtpSent(false);

    const { error } = await supabase.auth.signInWithOtp({ phone });
    console.log(error);
    if (error) {
      setError(error.message);
    } else {
      setIsOtpSent(true);
      alert('OTP sent to your phone!');
    }
  };

  const handleVerifyOtp = async () => {
    setError('');

    const { session, error } = await supabase.auth.verifyOtp({ phone, token: otp , type: 'sms' });
    console.log(error);
    if (error) {
      setError(error.message);
    } else {
      setSession(session);  
      alert('Phone number verified successfully!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://flex-home.botble.com/storage/logo/logo.png' }}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>Login</Text>
      <Text style={[{ fontSize: 18, fontWeight: '300', marginBottom: 10, fontFamily: 'SpaceMono' }]}>
        {isOtpSent ? 'Please enter the OTP' : 'Please enter your phone number'}
      </Text>
      {!isOtpSent ? (
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhoneNumber}
        />
      ) : (
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          keyboardType="number-pad"
          value={otp}
          onChangeText={setOtp}
        />
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={isOtpSent ? handleVerifyOtp : handlePhoneLogin}
      >
        <Text style={styles.buttonText}>{isOtpSent ? 'Verify OTP' : 'Login'}</Text>
      </TouchableOpacity>
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
    marginBottom: 10,
    fontFamily: 'SpaceMono',
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
    fontFamily: 'SpaceMono',
  },
  button: {
    backgroundColor: colors.primaryColor,
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'SpaceMono',
  },
});

export default PhoneLogin;
