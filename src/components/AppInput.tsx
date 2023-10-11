import React, {useEffect, useRef, useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  type StyleProp,
  type ViewStyle,
  Text,
} from 'react-native';
//import {Text} from 'components';
//import {colors} from 'constants';

interface AppInputProps {
  label?: string;
  style?: StyleProp<ViewStyle>;
  value?: string;
  // change when you have backend
  error?: any;
  errorText?: string;
  labelBackgroundColor?: string;
  onChangeText: (text: string) => void;
  autoCapitalize?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
}

export const AppInput = (props: AppInputProps) => {
  const {
    label = '',
    style,
    value,
    error = false,
    errorText = '',
    labelBackgroundColor = 'white',
    placeholderTextColor,
    onChangeText = () => {},
    ...rest
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef(null);
  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocused, value]);

  const isPlaceholder = !isFocused && !value;
  const animatedViewStyle = {
    width: isPlaceholder ? '100%' : null,
    backgroundColor: labelBackgroundColor,
    transform: [
      {
        scale: focusAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0.75],
        }),
      },
      {
        translateY: focusAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -31],
        }),
      },
      {
        translateX: focusAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [10, 0],
        }),
      },
    ],
  };

  return (
    <View style={style}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          ref={inputRef}
          onBlur={() => {
            setIsFocused(false);
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
          value={value}
          placeholderTextColor={placeholderTextColor || 'black'}
          onChangeText={text => {
            onChangeText(text);
          }}
          {...rest}
        />

        {label && (
          <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
            <Animated.View style={[styles.labelContainer, animatedViewStyle]}>
              <Text
                style={{
                  color: isFocused ? 'black' : error ? '#F45E8C' : 'black',
                }}>
                {label}
              </Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        )}
      </View>
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: '#F45E8C',
    marginTop: 8,
  },
  input: {
    // fontFamily: defaultFont.inputFont,
    fontSize: 14,
    flex: 1,
    color: 'black',
    height: '100%',
    marginRight: 10,
  },

  inputContainer: {
    borderWidth: 1,
    height: 48,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 11,
    borderColor: 'gray',
    borderRadius: 8,
  },
  labelContainer: {
    position: 'absolute',
    paddingHorizontal: 8,
    height: 25,
    justifyContent: 'center',
  },
  icon: {
    alignItems: 'flex-end',
    zIndex: -1,
  },
});
