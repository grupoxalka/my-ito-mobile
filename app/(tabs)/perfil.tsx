import Logo from "components/Logo";
import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function PerfilScreen() {
    return (
        <View>
            <Stack.Screen options={{
                headerTitle: () => <Logo />
            }} />
            <Text>Perfil</Text>
        </View>
    );
}
