
/**
 * Custom Button component for consistent app-wide button styling
 * Provides standardized appearance and behavior for all button interactions
 * Uses app's primary blue color scheme and proper accessibility
 */

import { ComponentProps } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ViewProps } from 'react-native';

/**
 * Props interface for Button component
 * Extends ViewProps to allow style customization
 */
interface ButtonProps extends ViewProps {
  title: string;              // Text to display on the button
  onPress?: () => void;       // Optional callback function for button press
}

/**
 * Custom Button component
 * Renders a styled touchable button with consistent app theming
 * @param title - Button text label
 * @param onPress - Function to call when button is pressed
 * @param style - Optional additional styling to apply
 * @returns Styled button component with proper touch handling
 */
export default function Button({ title, onPress, style }: ButtonProps) {
  return (
    <View style={[styles.container, style]}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    </View>
  );
}

/**
 * StyleSheet for Button component
 * Defines consistent button appearance across the app
 */
const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",     // Fill available width
        alignItems: "center",     // Center button horizontally
    },
    button: {
        alignItems: 'center',     // Center text horizontally
        justifyContent: "center", // Center text vertically
        backgroundColor: "#12388F", // App's primary blue color
        borderRadius: 12,         // Rounded corners for modern look
        height: 48,              // Standard button height for good touch target
        width: "100%",           // Fill container width
        minWidth: 84,            // Minimum width for small buttons
        maxWidth: 480,           // Maximum width for large screens
    },
    text: {
        color: "#FFFFFF",        // White text for contrast on blue background
        fontSize: 16,            // Readable font size
        fontWeight: "700",       // Bold text for emphasis
    },
});