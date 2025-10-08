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
import Button from "components/Button";
import SubjectCard from "components/SubjectCard";
import IconFile from "@icons/IconFile";
import IconCalendar from "@icons/IconCalendar";
import IconGraph from "@icons/IconGraph";
import NextClass from "components/NextClass";
import IconAdd from "@icons/IconAdd";
import { Bar, CartesianChart } from "victory-native";

const dummyTodayClassesData = {
  classes: [
    {
      id: "1",
      name: "Calculo II",
      initial_time: "16:00",
      end_time: "18:00",
      category: "Math",
    },
    {
      id: "2",
      name: "Física I",
      initial_time: "18:00",
      end_time: "20:00",
      category: "Physics",
    },
    {
      id: "3",
      name: "Química I",
      initial_time: "20:00",
      end_time: "22:00",
      category: "Chemistry",
    },
  ],
};

const dummyCreditsData = {
  current_credits: 30,
  remaining_credits: 70,
};

const dummyGradesData = {
  average_grade: 8.5,
  semesters: [
    {
      semester_number: 1,
      grade: 8.0,
    },
    {
      semester_number: 2,
      grade: 9.0,
    },
    {
      semester_number: 3,
      grade: 8.5,
    },
  ],
};

const data = Array.from({ length: 6 }, (_, index) => ({
  // Starting at 1 for January
  month: index + 1,
  // Randomizing the listen count between 100 and 50
  listenCount: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
}));

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

      <View style={{ padding: 16 }}>
        <ThemedText type="title">Hola, Alejandro</ThemedText>

        <ThemedText type="title">Recordatorio</ThemedText>

        <NextClass name="Calculo" room="L6" time="02:00" />
        <Button title="Añadir nuevo recordatorio">
          <IconAdd />
        </Button>

        <ThemedText type="title">Grafica Pendiente</ThemedText>

        <View>
          <ThemedText>Creitos Complementarios</ThemedText>
          <ThemedText>75%</ThemedText>
          <ThemedText>Total:</ThemedText>

          {/* Grafica */}
          <CartesianChart
            data={data}
            /**
             * 👇 the xKey should map to the property on data of you want on the x-axis
             */
            xKey="month"
            /**
             * 👇 the yKey is an array of strings that map to the data you want
             * on the y-axis. In this case we only want the listenCount, but you could
             * add additional if you wanted to show multiple song listen counts.
             */
            yKeys={["listenCount"]}
          >
            {({ points, chartBounds }) => (
              <Bar
                chartBounds={chartBounds} // 👈 chartBounds is needed to know how to draw the bars
                points={points.listenCount} // 👈 points is an object with a property for each yKey
              />
            )}
          </CartesianChart>
        </View>
        <View>
          <ThemedText>Calificacones/Puntajes</ThemedText>
          <ThemedText>88</ThemedText>
          <ThemedText>Promedio</ThemedText>
          {/* Grafica */}
        </View>
      </View>
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
