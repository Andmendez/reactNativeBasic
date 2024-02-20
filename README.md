# reactNativeBasic
Guide the React Native, basis is the Documentation.


For programming in React Native is necessary, the  having install:

Node.js -> https://nodejs.org/en
npm -> At install Node.js this is installing.
expo.io -> npm install -g expo-cli



For use Navigation first install in the proyect:

npm install @react-navigation/native @react-navigation/native-stack
+
npx expo install react-native-screens react-native-safe-area-context

Example Basic Navigation:

////////////////////////////////////////
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

    const HomeScreen = ({navigation}) => {
    return (
        <Button
        title="Go to Jane's profile"
        onPress={() =>
            navigation.navigate('Profile', {name: 'Jane'})
        }
        />
    );
    };
    const ProfileScreen = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
    };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
////////////////////////////////////////
