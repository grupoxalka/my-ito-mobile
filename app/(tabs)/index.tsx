import { Link, Redirect, Stack } from "expo-router";
import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import IconNotification from "@icons/IconNotification";
import IconUser from "@icons/IconUser";
import Logo from "components/Logo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppStore } from "store";
import { ROUTES } from "@constants";
import { ThemedText } from "components/ThemedText";
import SubjectCard from "components/SubjectCard";
import IconFile from "@icons/IconFile";
import IconCalendar from "@icons/IconCalendar";
import IconGraph from "@icons/IconGraph";
import NextClass from "components/NextClass";

export default function HomeScreen() {
  const { isAuthenticated, setIsAuthenticated } = useAppStore();

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
    <View style={{ backgroundColor: "#FFFFFF", flex: 1 }}>
      <Stack.Screen
        options={{
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
        }}
      />

      <ThemedText type="title">Hola, Alejandro</ThemedText>

      <NextClass />

      <ThemedText type="title">Notifiaciones Recientes</ThemedText>

      <SubjectCard
        title="Cálculo"
        description="Nueva tarea publicada"
        icon={<IconFile />}
      />
      <SubjectCard
        title="Física I"
        description="Clase cancelada"
        icon={<IconCalendar />}
      />
      <SubjectCard
        title="Laboratorio de Química"
        description="Calificación actualizada"
        icon={<IconGraph />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  className: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: "#636E87",
  },
  timeRemainingContainer: {
    flexDirection: "row",
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 16,
  },
  timeSectionContainer: {
    backgroundColor: "#F0F2F5",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    paddingHorizontal: 8,
    borderRadius: 12,
  },
});
