import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function RootLayout() {

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }} >
                <StatusBar style='auto' />
                <Stack
                    screenOptions={{
                        headerShown: false,
                    }}
                />
            </SafeAreaView>
        </SafeAreaProvider>

    )
}