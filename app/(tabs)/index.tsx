import { Link, Redirect, Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import IconNotification from "@icons/IconNotification";
import IconUser from "@icons/IconUser";
import Logo from "components/Logo";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function HomeScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("token");
      setIsAuthenticated(!!token);
    };
    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <View>
      <Stack.Screen options={{
        headerTitle: () => <Logo />,
        headerLeft: () => (
          <Link href="/profile" asChild>
            <IconUser />
          </Link>
        ),
        headerRight: () => (
          <Link href="/news" asChild>
            <IconNotification />
          </Link>
        ),
      }} />

      <Text>Inicio</Text>
    </View>
  );
}
