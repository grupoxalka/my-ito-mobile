import React, { useState, forwardRef } from 'react';
import { View, Text, TextInput, TextInputProps, StyleSheet, } from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  secure?: boolean;
  value: string;
  onChangeText: (text:string) => void;
}

const Input = forwardRef<TextInput, InputProps>(
  ({ label,secure = false, value, onChangeText, placeholder, ...rest }, ref) => {

    return (
      <View style={styles.wrapper}>
        {label && <Text style={styles.label}>{label}</Text>}

        <View style={styles.inputContainer}>
          <TextInput
            ref={ref}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#9CA3AF"
            secureTextEntry={secure}
            autoCapitalize="none"
            style={styles.input}/>
        </View>
      </View>
    );
  }
);

Input.displayName = 'Input';
export default Input;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#121217',
    fontWeight: '600',
  },
  inputContainer: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DBDEE5',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: ' #FFF',
  },
  input: {
    flex: 1,
    color: '#636E87',
  },
});

