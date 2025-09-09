import { Link, Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import IconNotification from "@icons/IconNotification";
import IconUser from "@icons/IconUser";
import Logo from "components/Logo";

export default function InicioScreen() {

  return (
    <View>
      <Stack.Screen options={{
        headerTitle : () => <Logo />,
        headerLeft: () => (
          <Link href="/perfil" asChild>
            <IconUser />
          </Link>
        ),
        headerRight: () => (
          <Link href="/noticias" asChild>
            <IconNotification />
          </Link>
        ),
      }} />

      <Text>Inicio</Text>
    </View>
  );
}
