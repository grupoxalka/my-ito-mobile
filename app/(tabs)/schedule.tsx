/**
 * Schedule screen component for class timetables and calendar
 * Displays student class schedules, exam dates, and academic calendar
 * Includes back navigation to home screen
 */

import IconBack from "@icons/IconBack";
import { Link, Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

/**
 * Schedule screen component
 * Shows academic schedule including class times, exam dates, and important deadlines
 * Currently displays placeholder content - to be expanded with calendar functionality
 * @returns Schedule screen with back navigation and placeholder content
 */
export default function ScheduleScreen() {
    return (
        <View>
            <Stack.Screen options={{
                headerLeft: () => (
                    <Link href="/" asChild>
                        <IconBack /> {/* Back button to return to home screen */}
                    </Link>
                ),
            }} />
            {/* Main schedule content area - placeholder for calendar view */}
            <Text>Horario</Text>
        </View>
    );
}
