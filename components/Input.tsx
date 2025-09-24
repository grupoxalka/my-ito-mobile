/**
 * Custom Input component for consistent form field styling
 * Provides standardized text input appearance with optional label and secure entry
 * Uses forwardRef to support form libraries and focus management
 */

import React, { useState, forwardRef } from 'react';
import { View, Text, TextInput, TextInputProps, StyleSheet, } from 'react-native';

/**
 * Props interface for Input component
 * Extends TextInputProps to inherit all standard TextInput capabilities
 */
interface InputProps extends TextInputProps {
  label?: string;             // Optional label text above input
  secure?: boolean;           // Whether to hide input text (for passwords)
  value?: string;             // Current input value
  onChangeText?: (text:string) => void; // Callback when text changes
}

/**
 * Custom Input component with consistent styling
 * Supports both labeled and unlabeled inputs with secure text entry option
 * Uses forwardRef for compatibility with form libraries and focus management
 * @param label - Optional label text to display above input
 * @param secure - Whether to hide input text for password fields
 * @param value - Current input value
 * @param onChangeText - Callback function when input text changes
 * @param placeholder - Placeholder text when input is empty
 * @param rest - Additional TextInput props
 * @param ref - Reference to the underlying TextInput component
 * @returns Styled text input with optional label
 */
const Input = forwardRef<TextInput, InputProps>(
  ({ label,secure = false, value, onChangeText, placeholder, ...rest }, ref) => {

    return (
      <View style={styles.wrapper}>
        {/* Optional label above input field */}
        {label && <Text style={styles.label}>{label}</Text>}

        <View style={styles.inputContainer}>
          <TextInput
            ref={ref}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#9CA3AF"  // Light gray placeholder text
            secureTextEntry={secure}        // Hide text for password fields
            autoCapitalize="none"           // Disable auto-capitalization for emails/passwords
            style={styles.input}/>
        </View>
      </View>
    );
  }
);

Input.displayName = 'Input'; // Set display name for debugging
export default Input;

/**
 * StyleSheet for Input component
 * Defines consistent input field appearance across the app
 */
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',              // Full width container
  },
  label: {
    fontSize: 16,               // Readable label text size
    marginBottom: 6,            // Space between label and input
    color: '#121217',           // Dark text color for good contrast
    fontWeight: '600',          // Semi-bold for emphasis
  },
  inputContainer: {
    flexDirection: 'row',       // Horizontal layout for future icons/buttons
    alignItems: 'center',       // Center content vertically
    borderWidth: 1,             // Subtle border
    borderColor: '#DBDEE5',     // Light gray border color
    borderRadius: 12,           // Rounded corners matching button style
    paddingHorizontal: 12,      // Horizontal padding for text
    paddingVertical: 10,        // Vertical padding for touch target
    backgroundColor: ' #FFF',   // White background
  },
  input: {
    flex: 1,                    // Take all available horizontal space
    color: '#636E87',           // Medium gray text color
  },
});

