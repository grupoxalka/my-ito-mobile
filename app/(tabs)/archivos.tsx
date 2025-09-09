import IconBack from "@icons/IconBack";
import { Link, Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function ArchivosScreen() {
    return (
        <View>
            <Stack.Screen options={{
                headerLeft: () => (
                    <Link href="/" asChild>
                        <IconBack />
                    </Link>
                ),
            }} />
            <Text>Archivos</Text>
        </View>
    );
}
