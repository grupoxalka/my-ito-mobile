import { Link, Redirect, Stack } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import IconNotification from "@icons/IconNotification";
import IconUser from "@icons/IconUser";
import Logo from "components/Logo";
import { useAppStore } from "store";
import { ROUTES } from "@constants";
import { useAuth } from "hooks/useAuth";

export default function HomeScreen() {
  const {isAuthenticated} = useAppStore();
  useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <View>
      <Stack.Screen options={{
        headerTitle: () => <Logo />,
        headerLeft: () => (
          <Link href={ROUTES.PROFILE} asChild>
            <IconUser />
          </Link>
        ),
        headerRight: () => (
          <Link href={ROUTES.ANNOUNCEMENTS} asChild>
            <IconNotification />
          </Link>
        ),
      }} />

      <Text>Inicio</Text>
    </View>
  );
}
