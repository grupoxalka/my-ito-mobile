/**
 * Messages screen component for communication features
 * Provides access to student-teacher messaging and notifications
 * Includes add button in header for creating new messages
 */

import IconAdd from "@icons/IconAdd";
import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

/**
 * Messages screen component
 * Displays messaging interface for communication with instructors and peers
 * Currently shows placeholder content - to be expanded with message list and chat functionality
 * @returns Messages screen with add button and placeholder content
 */
export default function MessagesScreen() {
    return (
        <View>
            <Stack.Screen options={{ 
                headerRight: () => ( <IconAdd/> ), // Add button for creating new messages
            }} />

            {/* Main messages content area - placeholder for message list */}
            <Text>Mensajes</Text>
        </View>
    );
}
