import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
GoogleSignin.configure();

export const LoginWithGoogleScreen = () => {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const signIn = async () => {
    try {
      GoogleSignin.configure({
        webClientId:
          '1034594634150-4ksatpcjj4p6c91tjans3pk9ch8npp0o.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      });

      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const { user } = userInfo;
      setUser({ user });
      console.log(user);

      setIsLogged(true);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error);
      } else {
        console.log(error);

        // some other error happened
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser({}); // Remember to remove the user from your app's state as well
      setIsLogged(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {isLogged ? (
        <>
          <Text style={styles.title}>Hola: </Text>
          <Text>{JSON.stringify(user, undefined, 2)}</Text>
        </>
      ) : (
        <Text style={styles.title}>No estas logeado</Text>
      )}
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
      <TouchableOpacity onPress={signOut} style={styles.logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
  },
  logout: {
    width: 100,
    height: 50,
    borderRadius: 5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    color: 'white',
    fontSize: 20,
  },
});
