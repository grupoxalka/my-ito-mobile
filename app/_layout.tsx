import React from "react";
import {Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
export default function RootLayout() {

    return (
        <View style={{ flex: 1 }}>
            <StatusBar style='auto' />
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        color: "#2761ffff"
    }
})
