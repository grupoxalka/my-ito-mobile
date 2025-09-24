/**
 * Files screen component for document management
 * Provides access to course materials, assignments, and other documents
 * Includes back navigation to home screen
 */

import IconBack from "@icons/IconBack";
import { Link, Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

/**
 * Files screen component
 * Displays document library and file management interface
 * Currently shows placeholder content - to be expanded with file browser functionality
 * @returns Files screen with back navigation and placeholder content
 */
export default function FilesScreen() {
    return (
        <View>
            <Stack.Screen options={{
                headerLeft: () => (
                    <Link href="/" asChild>
                        <IconBack /> {/* Back button to return to home screen */}
                    </Link>
                ),
            }} />
            {/* Main files content area - placeholder for document browser */}
            <Text>Archivos</Text>
        </View>
    );
}
