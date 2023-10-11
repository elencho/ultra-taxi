import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {OTPInput} from '../components/OTPInput';

const OTPScreen = () => {
  const [code, setCode] = useState('');
  const handleVerify = () => {};
  return (
    <View>
      <OTPInput
        code={code}
        onCodeChanged={setCode}
        onCodeFilled={handleVerify}
      />
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({});
