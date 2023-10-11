import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppInput} from '../components/AppInput';
import {AppText} from '../components/AppText';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.jpg')} />
      <AppInput
        // onChangeText={setLogin}
        // value={login}
        autoCapitalize={'none'}
        style={styles.password}
        // error={error && !password}
        // right={
        //   <PurpleText
        //     text="Forgot?"
        //     style={{ marginLeft: 10 }}
        //     onPress={forgotPassword}
        //   />
        // }
        label={'Mobile Number/ Email'}
        // labelBackgroundColor={colors.white}
      />
      <AppInput
        // onChangeText={setLogin}
        // value={login}
        autoCapitalize={'none'}
        style={styles.password}
        // error={error && !password}
        // right={
        //   <PurpleText
        //     text="Forgot?"
        //     style={{ marginLeft: 10 }}
        //     onPress={forgotPassword}
        //   />
        // }
        label={'Password'}
        secureTextEntry
        // labelBackgroundColor={colors.white}
      />
      <Pressable style={styles.btn}>
        <AppText>Submit</AppText>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 30,
  },
  password: {
    marginHorizontal: 16,
    marginVertical: 10,
  },
  logo: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    borderRadius: 50,
    marginVertical: 20,
  },
  btn: {
    backgroundColor: '#FFCB00',
    padding: 15,
    color: 'black',
    textAlign: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 10,
  },
});
