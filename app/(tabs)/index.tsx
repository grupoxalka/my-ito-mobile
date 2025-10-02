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
      <View style={styles.nextClassContainer}>
        <View style={{ flex: 1 }}>
          <ThemedText type="link">Próxima clase</ThemedText>
          <ThemedText type="defaultBold">Cálculo II</ThemedText>
          <ThemedText type="link">Aula 203</ThemedText>
        </View>
        <View style={styles.classImage}>
          <Image
            style={styles.classImage}
            source={require("../../assets/calculus.svg")}
          ></Image>
        </View>
      </View>

      <View style={styles.timeRemainingContainer}>
        <View style={styles.timeBox}>
          <View style={styles.timeSectionContainer}>
            <ThemedText type="defaultBold">02</ThemedText>
          </View>
          <ThemedText style={styles.className}>Horas</ThemedText>
        </View>
        <View style={styles.timeBox}>
          <View style={styles.timeSectionContainer}>
            <ThemedText type="defaultBold">30</ThemedText>
          </View>
          <ThemedText style={styles.className}>Minutos</ThemedText>
        </View>
      </View>

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
  nextClassContainer: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 16,
    flexDirection: "row",
    gap: 16,
  },
  className: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: "#636E87",
  },
  classImage: {
    maxWidth: 130,
    height: 70,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E4F0FF",
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
  timeBox: {
    gap: 16,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
});
