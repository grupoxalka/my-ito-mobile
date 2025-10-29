import { Link, Redirect, Stack } from "expo-router";
import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import IconNotification from "@icons/IconNotification";
import IconUser from "@icons/IconUser";
import Logo from "components/Logo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppStore } from "store";
import { ROUTES } from "@constants";
import { ThemedText } from "components/ThemedText";
import Button from "components/Button";
import NextClass from "components/NextClass";
import IconAdd from "@icons/IconAdd";
import { BarChart, LineChart } from "react-native-gifted-charts";

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

const colors = ["#98CAFD", "#4CA6FF", "#2196f3", "#ff9800"];

const dummyCreditsData = {
  current_credits: 70,
  remaining_credits: 30,
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
      grade: 10.0,
    },
    {
      semester_number: 3,
      grade: 8.5,
    },
    {
      semester_number: 4,
      grade: 7.6,
    },
    {
      semester_number: 5,
      grade: 8.2,
    },
    {
      semester_number: 6,
      grade: 8.5,
    },
  ],
};

const barData = [
  {
    value: dummyCreditsData.current_credits,
    label: "Créditos",
    frontColor: "#98CAFD",
  },
  {
    value: dummyCreditsData.remaining_credits,
    label: "Restantes",
    frontColor: "#4CA6FF",
  },
];

const lineData = dummyGradesData.semesters.map((semester) => ({
  value: semester.grade,
  label: `Semestre ${semester.semester_number}`,
}));

const minValue = Math.min(...dummyGradesData.semesters.map((s) => s.grade));
const maxValue =
  Math.max(...dummyGradesData.semesters.map((s) => s.grade)) - minValue;

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
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ padding: 16 }}>
          <View style={styles.boxContainer}>
            <ThemedText type="title">Hola, Alejandro</ThemedText>
          </View>
          <View style={styles.boxContainer}>
            <ThemedText type="title">Recordatorio</ThemedText>
          </View>
          <NextClass name="Calculo" room="L6" time="02:00" />
          <View style={styles.boxContainer}>
            <Button title="Añadir nuevo recordatorio">
              <IconAdd />
            </Button>
          </View>

          <View style={styles.boxContainer}>
            <ThemedText type="title">Grafica pendiente</ThemedText>
          </View>
          <View style={{ gap: 16 }}>
            <View style={styles.chartBoxContainer}>
              <ThemedText>Creditos Completados</ThemedText>
              <ThemedText type="percentage">75%</ThemedText>
              <ThemedText type="link">Total:</ThemedText>
              <View style={{ padding: 10, alignSelf: "center" }}>
                <BarChart
                  data={barData}
                  barWidth={60}
                  height={181}
                  barBorderRadius={4}
                  maxValue={barData[0].value}
                  yAxisThickness={0}
                  xAxisThickness={0}
                  hideRules
                  hideYAxisText
                  xAxisLabelTextStyle={styles.xChartLabel}
                />
              </View>
            </View>
            <View style={styles.chartBoxContainer}>
              <ThemedText>Calificaciones/Puntajes</ThemedText>
              <ThemedText type="percentage">88</ThemedText>
              <ThemedText type="link">Promedio</ThemedText>
              {/* Grafica */}
              <View style={{ padding: 10, alignItems: "center" }}>
                <LineChart
                  data={lineData}
                  color="#636E87"
                  thickness={3}
                  yAxisThickness={0}
                  xAxisThickness={0}
                  height={181}
                  maxValue={maxValue}
                  yAxisOffset={minValue}
                  initialSpacing={40}
                  spacing={90}
                  hideDataPoints
                  hideRules
                  hideYAxisText
                  curved
                  xAxisLabelTextStyle={styles.xChartLabel}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
  boxContainer: {
    paddingTop: 20,
    paddingBottom: 8,
  },
  chartBoxContainer: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 24,
    borderColor: "#DBDEE5",
  },
  xChartLabel: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: "bold",
    color: "#636E87",
  },
});
