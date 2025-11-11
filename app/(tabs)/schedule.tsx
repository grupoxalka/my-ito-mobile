import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { Link } from "expo-router";
import IconBack from "@icons/IconBack";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import userService from "services/userService";
import { useAppStore } from "store";
import Logo from "components/Logo";
import { ThemedText } from "components/ThemedText";
import IconCode from "@icons/IconCode";
import { Schedule, DayOfWeek } from "types";
import { DAYS } from "constants/index";


export default function ScheduleScreen() {

    const [selectedDay, setSelectedDay] = useState<DayOfWeek>('MONDAY');
    const [schedule, setSchedule] = useState<Schedule[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const { userId } = useAppStore();

    useEffect(() => {
        const getUserSchedule = async () => {
            if (!userId) {
                setIsLoading(false);
                return;
            };

            try {
                setIsLoading(true);
                const data = await userService.getStudentSchedule(userId);
                setSchedule(data);
                console.log("cargando horario");
            } catch (error) {
                console.error("Error fetching schedule:", error);
            } finally {
                setIsLoading(false);
            }
        }
        getUserSchedule();
    }, []);

    // Loading state
    if (isLoading) {
        return (
            <View style={styles.screenContainer}>
                <Stack.Screen options={{ headerTitle: () => <Logo /> }} />
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#0066CC" />
                    <ThemedText style={styles.loadingText}>Cargando horario...</ThemedText>
                </View>
            </View>
        );
    }

    // No data state
    if (!schedule.length) {
        return (
            <View style={styles.screenContainer}>
                <Stack.Screen options={{ headerTitle: () => <Logo /> }} />
                <View style={styles.container}>
                    <ThemedText>No tienes un horario asignado</ThemedText>
                </View>
            </View>
        );
    }

    // Filter schedule by selected day
    const daySchedule = schedule.filter(item => item.dayOfWeek === selectedDay);

    return (

        <View style={styles.fullWhite}>
            <Stack.Screen options={{
                headerLeft: () => (
                    <Link href="/" asChild>
                        <IconBack />
                    </Link>
                ),
                headerTitle: "Horario",
                headerTitleAlign: 'center',
                headerShown: true,
            }} />

            {/* Days tabs */}
            <View style={styles.daysContainer}>
                {DAYS.map((day) => (
                    <TouchableOpacity
                        key={day.key}
                        onPress={() => setSelectedDay(day.key)}
                    >
                        <Text style={[
                            styles.dayText,
                            selectedDay === day.key ? styles.dayTextActive : styles.dayTextInactive
                        ]}>
                            {day.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.separator} />

            {/* Render schedule for selected day */}
            <ScrollView style={styles.scheduleList}>
                {daySchedule.length > 0 ? (
                    daySchedule.map((item, index) => (
                        <Link
                            key={index}
                            href={{
                                pathname: "/attendance/[subject]",
                                params: { 
                                    subject: item.subjectName.toLowerCase().replace(/\s+/g, '-'),
                                    subjectName: item.subjectName,
                                    teacherName: item.teacherName,
                                    classroomName: item.classroomName,
                                    startTime: item.startTime,
                                    endTime: item.endTime
                                }
                            }}
                            asChild
                        >
                            <TouchableOpacity style={styles.scheduleItem}>
                                <View style={styles.subjectIconContainer}>
                                    <IconCode />
                                </View>
                                <View style={styles.scheduleInfo}>
                                    <ThemedText>{item.subjectName}</ThemedText>

                                    <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                                        <ThemedText style={styles.schedule}>
                                            {item.startTime} - {item.endTime}
                                        </ThemedText>
                                        <ThemedText style={styles.classroomText}>{item.classroomName}</ThemedText>
                                    </View>
                                    <ThemedText style={styles.teacherText}>Catedratico: {item.teacherName}</ThemedText>
                                </View>
                            </TouchableOpacity>
                        </Link>
                    ))
                ) : (
                    <View style={styles.noClassesContainer}>
                        <ThemedText>No hay clases este día</ThemedText>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    fullWhite: {
        flex: 1,
        backgroundColor: "white",
    },

    daysContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 32,
        marginBottom: 16,
        marginTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 1,
    },

    dayText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#000",

    },

    dayyText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#876363",

    },

    separator: {
        height: 1,
        backgroundColor: "#E5DBDB",
        marginHorizontal: 0,
        marginBottom: 0,
    },

    schedule: {
        color: "#876363",
    },

    // Loading and error styles
    screenContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        gap: 24,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 16,
        textAlign: 'center',
    },

    dayTextActive: {
        color: "#000",
    },

    dayTextInactive: {
        color: "#876363",
    },

    scheduleList: {
        flex: 1,
    },

    scheduleItem: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },

    subjectImage: {
        width: 48,
        height: 48,
        borderRadius: 8,
    },

    scheduleInfo: {
        marginLeft: 16,
        flex: 1,
        justifyContent: 'center',
    },

    teacherText: {
        color: "#876363",
        fontWeight: "400",
    },

    classroomText: {
        color: "#876363",
    },

    noClassesContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
    },

    subjectIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f0f0',
    },


});

