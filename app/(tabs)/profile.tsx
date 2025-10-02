import React from "react";
import IconGraduation from "@icons/IconGraduation";
import IconGraph from "@icons/IconGraph";
import Logo from "components/Logo";
import SubjectCard from "components/SubjectCard";
import { ThemedText } from "components/ThemedText";
import { Stack } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

/**
 * ProfileScreen Component
 * 
 * Displays the user's profile information including personal details,
 * academic status, and performance metrics. This screen shows:
 * - Profile picture and basic information
 * - Student ID and career information
 * - Current semester and GPA
 * 
 * @returns The profile screen component
 */
// TODO: Replace with actual API call to fetch user data
// Currently using mock data for development purposes
const userData = {
    id: '12345678',
    name: 'Ricardo',
    career: 'Ciencias de la computación',
    semester: 6,
    grade: "8.5",
    profileImage: 'https://randomuser.me/api/portraits/lego/5.jpg'
}

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            {/* Configure header with app logo */}
            <Stack.Screen options={{
                headerTitle: () => <Logo />
            }} />

            {/* User Profile Header Section */}
            <View style={styles.header}>
                {/* Profile picture - circular image display */}
                <Image source={{ uri: userData.profileImage }} style={styles.profileImage} />
                
                {/* User's name as main title */}
                <ThemedText type="title">{userData.name}</ThemedText>
                
                {/* Student identification number */}
                <ThemedText type="description">ID de Estudiante: {userData.id}</ThemedText>
                
                {/* Academic program/career information */}
                <ThemedText type="description">{userData.career}</ThemedText>
            </View>

            {/* Academic Information Section Title */}
            <ThemedText
                type="title"
                style={styles.padding}
            >
                Información Académica
            </ThemedText>

            {/* Academic Status Card - displays current semester */}
            <SubjectCard
                title="Estado Académico"
                description={`Semestre Actual: ${userData.semester}`}
                icon={<IconGraduation />}
            />

            {/* Academic Performance Card - displays GPA */}
            <SubjectCard
                title="Desempeño Académico"
                description={`GPA: ${userData.grade}`}
                icon={<IconGraph />}
            />

        </View>
    );
}

/**
 * StyleSheet for ProfileScreen component
 * Defines the visual styling and layout for all profile screen elements
 */
const styles = StyleSheet.create({
    // Main container - full screen with white background
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        gap: 24,
    },
    
    // Header section containing profile image and basic info
    header: {
        alignItems: 'center',   
    },
    
    // Profile picture styling - circular image
    profileImage: {
        width: 128,
        height: 128,
        borderRadius: 64,
        marginBottom: 16,
    },
    
    // Utility class for horizontal padding
    padding: {
        paddingHorizontal: 16,
    }
});