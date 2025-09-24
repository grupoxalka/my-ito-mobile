/**
 * Profile screen component for user account management
 * Displays user profile information and account settings
 * Accessible from the main tab navigation and home screen header
 */

import Logo from "components/Logo";
import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

/**
 * Profile screen component
 * Shows user account information and profile management options
 * Currently displays placeholder content - to be expanded with user data
 * @returns Profile screen with logo header and placeholder content
 */
export default function ProfileScreen() {
    return (
        <View>
            <Stack.Screen options={{
                headerTitle: () => <Logo /> // Display app logo in header
            }} />
            {/* Main profile content area - placeholder for user information */}
            <Text>Perfil</Text>
        </View>
    );
}
