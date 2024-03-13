import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

  
const Stack = createNativeStackNavigator();

const App = () => {

  
  

  // Pantalla de inicio
  const HomeScreen = ({navigation}) => {

    const [userName, onChangeText] = React.useState('Username');
    const [password, onChangePassword] = React.useState('Password');

    return (
      <View style={styles.container}>
        <Text style = {styles.textTitle}>Welcome Back!</Text>
        <Text style = {styles.textSubTitle}>Please sign in to your account</Text>


        <TextInput
          style = {styles.inputText}
          onChangeText={onChangeText}
          placeholder='Username'
          placeholderTextColor='#6E6D73'
        />

        <TextInput
          style = {styles.inputText}
          onChangeText={onChangePassword}
          placeholder='Password'
          secureTextEntry={true}
          placeholderTextColor='#6E6D73'
        />

        <View style={styles.forgotText}>
          <TouchableOpacity  onPress={() => {}}>
            <Text style={[styles.textSubTitle]}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => {}} style={[styles.signButton, styles.flexCenterTotal]}>
          <Text style={styles.signText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={[styles.googleAppleButton, styles.flexCenterTotal]}>
          {/* <Icon name="google" size={24} color="#fff" style={[styles.logoGoogleApple, styles.logos]} /> */}
          <Image
          source={require('./assets/google.png')}
          style={styles.logoGoogle}
        />
          <Text style={styles.textSign}>Sign In With Google</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={[styles.facebookButton, styles.flexCenterTotal]}>
          <Icon name="facebook" size={24} color="#fff" style={[styles.logoFacebook, styles.logos]} />
          <Text style={[styles.textSign, styles.textColorFacebook]}>Sign In With Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={[styles.googleAppleButton, styles.flexCenterTotal]}>
          <Icon name="apple" size={24} color="#fff" style={[styles.logoGoogleApple, styles.logos]} />
          <Text style={styles.textSign}>Sign In With Apple</Text>
        </TouchableOpacity>
        
        <View style={styles.footer}>
          <Text style={styles.noaccount}>Don't have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.textSignUp}>Sign Up</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  };
  // Fin de Pantalla de inicio

  // Inicio de Pantalla de Registro
  const SignUpScreen = ({navigation}) => {

    const [userName, onChangeText] = React.useState('Username');
    const [password, onChangePassword] = React.useState('Password');
    const [email, onChangeEmail] = React.useState('Email');
    return (
      <View style={styles.container}>
        <Text style = {styles.textTitle}>Create New Account</Text>
        <Text style = {styles.textSubTitle}>Please fill in the form to continue</Text>


        <TextInput
          style = {styles.inputText}
          onChangeText={onChangeText}
          placeholder='Full Name'
          placeholderTextColor='#6E6D73'
        />

        <TextInput
          style = {styles.inputText}
          onChangeText={onChangeEmail}
          placeholder='Email Address'
          placeholderTextColor='#6E6D73'
        />

        <TextInput
          style = {styles.inputText}
          onChangeText={onChangePassword}
          placeholder='Password'
          secureTextEntry={true}
          placeholderTextColor='#6E6D73'
        />

        

        <TouchableOpacity onPress={() => {}} style={[styles.signButton, styles.flexCenterTotal, styles.marginTopMore]}>
          <Text style={styles.signText}>Sign In</Text>
        </TouchableOpacity>

        
        
        <View style={styles.footer}>
          <Text style={styles.noaccount}>Have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textSignUp}>Sign In</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  };
  // Fin de Pantalla de Registro
  

  



  return(

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: 'slide_from_left' }}>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
      
    
  );
};


const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black', alignItems: 'center'},
  textTitle: {fontSize: 25, marginTop: 60, color: '#fff', paddingTop: 15, paddingBottom: 15},
  textSubTitle: {color: '#6E6D73', fontSize: 15, marginBottom: 25},
  inputText: {height: 70, paddingStart: 30, backgroundColor: '#262A34', width: '85%', borderRadius: 20, color: '#6E6D73', marginBottom: 15},
  forgotText: {alignSelf: 'flex-end', width: '39%', marginTop: 5, marginBottom: 15},
  signButton: {backgroundColor: '#5566FF', width: '85%', height: 65,  borderRadius: 20, marginBottom: 120},
  signText: {color: '#fff'},
  flexCenterTotal: {display: 'flex', justifyContent: 'center', alignItems: 'center'},
  logos: {marginEnd: 10, fontSize: 37},
  logoGoogle: {marginEnd: 10, width: 32, height: 32},

  googleAppleButton: {backgroundColor: '#fff', width: '85%', height: 65,  borderRadius: 20, flexDirection: 'row', marginBottom: 10},
  logoGoogleApple: {color: '#000'},
  textSign: {fontSize: 13},
  logoFacebook: {color: '#fff'},
  facebookButton: {backgroundColor: '#3A569B', width: '85%', height: 65,  borderRadius: 20, flexDirection: 'row', marginBottom: 10},
  textColorFacebook: {color: '#fff'},

  textSignUp: {color: '#57A7FF', fontSize: 18, marginLeft: 10},
  noaccount : {color: '#fff', textTransform: 'capitalize'},
  footer: {flexDirection: 'row', marginTop: 10, alignItems: 'center'},

  marginTopMore: {marginTop: 320, marginBottom: 10},


})

export default App




