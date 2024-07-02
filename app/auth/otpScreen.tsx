import colors from '@/constants/colors';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const OTPScreen = () => {
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const handleVerifyOTP = () => {
    const otp = otp1 + otp2 + otp3 + otp4;
    // Implement OTP verification functionality
    if (otp.length === 4) {
      alert(`Verifying OTP: ${otp}`);
      // You can proceed with OTP verification logic here
    } else {
      alert('Please enter a 4-digit OTP.');
    }
  };

  const handleInputFocus = (inputRef) => {
    inputRef.current.focus();
  };

  const handleInputTextChange = (text, index) => {
    switch (index) {
      case 1:
        setOtp1(text);
        if (text.length === 1) {
          handleInputFocus(input2Ref);
        }
        break;
      case 2:
        setOtp2(text);
        if (text.length === 1) {
          handleInputFocus(input3Ref);
        }
        break;
      case 3:
        setOtp3(text);
        if (text.length === 1) {
          handleInputFocus(input4Ref);
        }
        break;
      case 4:
        setOtp4(text);
        break;
      default:
        break;
    }
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
      <Text style={styles.title}> OTP Verification</Text>
      <Text style={{fontSize:18,fontWeight:'600'}}>Verify uour mobile number +918700504218</Text>
      <View style={styles.otpInputContainer}>
        <OTPInput value={otp1} onChangeText={(text) => handleInputTextChange(text, 1)} />
        <OTPInput value={otp2} onChangeText={(text) => handleInputTextChange(text, 2)} ref={input2Ref} />
        <OTPInput value={otp3} onChangeText={(text) => handleInputTextChange(text, 3)} ref={input3Ref} />
        <OTPInput value={otp4} onChangeText={(text) => handleInputTextChange(text, 4)} ref={input4Ref} />
      </View>
      <Text style={{fontSize:16,fontWeight:'300',marginBottom:10}}>Didn't receive the code? Resend code</Text>
      <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>Verify </Text>
      </TouchableOpacity>
    </View>
  );
};

const OTPInput = React.forwardRef(({ value, onChangeText }, ref) => (
  <TextInput
    ref={ref}
    style={styles.otpInput}
    keyboardType="numeric"
    maxLength={1}
    value={value}
    onChangeText={onChangeText}
  />
));

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30,
      },
      logo: {
        width: 300,
        height: 300,
      },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 0,
    marginTop: 30,marginBottom:10
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 24,
    textAlign: 'center', 
  },
  button: {
    backgroundColor: colors.primaryColor,
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 20,
    alignItems: 'center',width:'100%',justifyContent:'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OTPScreen;
