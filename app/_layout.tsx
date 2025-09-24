/**
 * Root layout component for the entire application
 * Sets up the base navigation structure using Expo Router
 * Provides consistent status bar styling across all screens
 */

import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

/**
 * Root layout component that wraps the entire app
 * Configures global navigation settings and status bar appearance
 * @returns Root navigation container with hidden headers by default
 */
export default function RootLayout() {

    return (
        <View style={{ flex: 1 }}>
            {/* Configure status bar appearance for iOS/Android */}
            <StatusBar style='auto' />
            
            {/* Main navigation stack with hidden headers by default */}
            <Stack
                screenOptions={{
                    headerShown: false // Individual screens control their own header visibility
                }}
            />
        </View>

    )
}