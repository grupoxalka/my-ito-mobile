
/**
 * Logo component for the My ITO application
 * Displays the app logo with custom font styling and consistent branding
 * Used in headers throughout the app for brand recognition
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

/**
 * Logo component
 * Renders the "My ITO" logo with custom font for "My" and system font for "ITO"
 * Automatically falls back to system font if custom font fails to load
 * @returns Styled logo text component with horizontal layout
 */
export default function Logo() {

    // Load custom QwitcherGrypen font for the "My" portion
    const [fontLoaded] = useFonts({
        QwitcherGrypen: require('../assets/fonts/QwitcherGrypen-Bold.ttf'),
    });

    // Use custom font if loaded, otherwise fall back to system font
    const fontFamily = fontLoaded ? 'QwitcherGrypen' : 'System';

    return (
        <View style= {styles.container}>
            {/* "My" with custom handwriting-style font */}
            <Text style={[styles.customFont, { fontFamily }]}>My</Text>
            {/* "ITO" with bold system font */}
            <Text style={styles.text}> ITO</Text>
        </View>
    )
}

/**
 * StyleSheet for Logo component
 * Defines consistent logo appearance across the app
 */
const styles = StyleSheet.create({
    customFont: {
        fontFamily: 'QwitcherGrypen', // Custom decorative font
        fontSize: 28,                 // Large size for logo prominence
        lineHeight: 35,               // Proper line height for font
    },
    text: {
        fontSize: 28,                 // Matching size for consistent height
        fontWeight: 'bold',           // Bold system font for "ITO"
    },
    container: {
        flexDirection: 'row',         // Horizontal layout for text pieces
    }
});