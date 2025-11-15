import { Link, Redirect, Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
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
import { ModalNotification } from "components/ModalNotification";

const dummyTodayClassesData = {
  classes: [
    {
      id: "1",
      name: "Calculo II",
      initial_time: "00:00",
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
  current_credits: 70,
  remaining_credits: 30,
};

const dummyGradesData = {
  average_grade: 86,
  semesters: [
    {
      semester_number: 1,
      grade: 80,
    },
    {
      semester_number: 2,
      grade: 100,
    },
    {
      semester_number: 3,
      grade: 85,
    },
    {
      semester_number: 4,
      grade: 76,
    },
    {
      semester_number: 5,
      grade: 82,
    },
    {
      semester_number: 6,
      grade: 85,
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
const creditPercentage = Math.round(
  (dummyCreditsData.current_credits /
    (dummyCreditsData.current_credits + dummyCreditsData.remaining_credits)) *
    100
);

function getTimeLeft(classTime: string | Date) {
  const now = new Date();
  let target: Date;

  if (typeof classTime === "string" && classTime.length <= 5) {
    const [hours, minutes] = classTime.split(":").map(Number);
    target = new Date(now);
    target.setHours(hours, minutes, 0, 0);

    if (target <= now) {
      target.setDate(target.getDate() + 1);
    }
  } else {
    target = new Date(classTime);
  }

  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    return { display: "0:00", finished: true, milliseconds: 0 };
  }

  const totalHours = diff / (1000 * 60 * 60);
  const totalMinutes = diff / (1000 * 60);
  const totalSeconds = diff / 1000;

  let display: string;

  if (totalHours >= 1) {
    display = `${totalHours.toFixed(1)}hr`;
  } else {
    const minutes = Math.floor(totalMinutes);
    const seconds = Math.floor(totalSeconds % 60);
    display = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  return { display, finished: false, milliseconds: diff };
}

function useCountdown(classTime: string | Date) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(classTime));

  useEffect(() => {
    const getInterval = (ms: number) => {
      if (ms < 60 * 60 * 1000) return 1000;
      return 60000;
    };

    let intervalId: NodeJS.Timeout | null = null;

    const update = () => {
      const newTimeLeft = getTimeLeft(classTime);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.finished) {
        if (intervalId) clearInterval(intervalId);
        return;
      }

      const newInterval = getInterval(newTimeLeft.milliseconds);
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(update, newInterval);
    };

    update();

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [classTime]);

  return timeLeft;
}

function ClassCountdown({ classTime }: { classTime: string }) {
  const timeLeft = useCountdown(classTime);

  return <>{timeLeft.display}</>;
}

export default function HomeScreen() {
  const { isAuthenticated, setIsAuthenticated } = useAppStore();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedClass, setSelectedClass] = useState<
    typeof dummyTodayClassesData.classes
  >([]);

  const handleSelectClass = (newClass: any) => {
    setSelectedClass((prev) => {
      const updated = [...prev, newClass];
      return updated.sort((a, b) =>
        a.initial_time.localeCompare(b.initial_time)
      );
    });
  };

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
          {selectedClass.map((classItem) => (
            <View key={classItem.id}>
              <NextClass
                name={classItem.name}
                room="L6"
                time={<ClassCountdown classTime={classItem.initial_time} />}
              />
            </View>
          ))}
          <View style={styles.boxContainer}>
            <Button
              title="Añadir nuevo recordatorio"
              onPress={() => setModalVisible(true)}
            >
              <IconAdd />
            </Button>
          </View>

          <View style={styles.boxContainer}>
            <ThemedText type="title">Grafica pendiente</ThemedText>
          </View>
          <View style={{ gap: 16 }}>
            <View style={styles.chartBoxContainer}>
              <ThemedText>Creditos Completados</ThemedText>
              <ThemedText type="percentage">{creditPercentage}%</ThemedText>
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
              <ThemedText type="percentage">
                {dummyGradesData.average_grade}
              </ThemedText>
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
                  endSpacing={-30}
                  spacing={100}
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
      <ModalNotification
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={handleSelectClass}
        classes={dummyTodayClassesData.classes}
        selectedClasses={selectedClass}
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
