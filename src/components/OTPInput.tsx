import OTPInputView from '@twotalltotems/react-native-otp-input';
import {StyleSheet} from 'react-native';

interface OTPInputProps {
  code: string;
  onCodeFilled?: () => void;
  onCodeChanged?: (code: string) => void;
}
export const OTPInput = (props: OTPInputProps) => {
  const {code, onCodeFilled, onCodeChanged} = props;

  return (
    <OTPInputView
      style={styles.inputWrapper}
      pinCount={4}
      code={code}
      onCodeChanged={onCodeChanged}
      autoFocusOnLoad
      codeInputFieldStyle={styles.underlineStyleBase}
      codeInputHighlightStyle={styles.underlineStyleHighLighted}
      onCodeFilled={onCodeFilled}
      placeholderCharacter={'0'}
      placeholderTextColor={'gray'}
    />
  );
};

export const styles = StyleSheet.create({
  underlineStyleBase: {
    borderWidth: 1,
    height: 80,
    width: 80,
    borderRadius: 8,
    fontSize: 50,
    color: 'black',
  },
  inputWrapper: {
    height: 100,
  },
  underlineStyleHighLighted: {
    color: 'black',
  },
});
