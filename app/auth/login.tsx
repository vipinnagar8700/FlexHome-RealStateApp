import colors from '@/constants/colors';
import { supabase } from '@/supabase/supabase';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


const FACEBOOK_APP_ID = 'your-facebook-app-id';

const Login = () => {
  const [user, setUser] = useState(null);

  const handleGoogleLogin = () => {
    // Implement Google login functionality
    alert('Google Login');
  };

  const handleFacebookLogin = () => {
    // Implement Facebook login functionality
    alert('Facebook Login');
  };

  useEffect(() => {
    const fetchSession = async () => {
      const session = await supabase.auth.getSession();
      setUser(session.data.session?.user ?? null);
    };

    fetchSession();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{uri:'https://flex-home.botble.com/storage/logo/logo.png'}}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.button} onPress={handleGoogleLogin}>
          <FontAwesome name="google" size={20} color="#fff" style={styles.FontAwesome} />
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleFacebookLogin}>
          <FontAwesome name="facebook" size={20} color="#fff" style={styles.FontAwesome} />
          <Text style={styles.buttonText}>Sign in with Facebook</Text>
        </TouchableOpacity>
        <Link href="/phonelogin" asChild>
        <TouchableOpacity style={styles.button} onPress={handlePhoneLogin}>
          <FontAwesome name="phone" size={20} color="#fff" style={styles.FontAwesome} />
          <Text style={styles.buttonText}>Sign in with Phone</Text>
        </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-evenly',
    alignItems: 'center',
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
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,fontFamily:'SpaceMono'
  },
  formContainer: {
    width: '100%',
    marginTop: 30,
  },
  button: {
    backgroundColor: colors.primaryColor,
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 20,
    alignItems: 'center',flexDirection:'row',gap:20,justifyContent:'center',opacity:5,shadowOpacity:2
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',fontFamily:'SpaceMono'
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
  },FontAwesome: {
    marginLeft: 10,fontFamily:'SpaceMono' // Adjust icon spacing as needed
  },
});

export default Login;
