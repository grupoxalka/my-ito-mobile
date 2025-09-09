import IconAdd from "@icons/IconAdd";
import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function MensajesScreen() {
    return (
        <View>
            <Stack.Screen options={{ 
                headerRight: () => ( <IconAdd /> ),
            }} />

            <Text>Mensajes</Text>
        </View>
    );
}
