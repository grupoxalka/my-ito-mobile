import React, { use, useEffect, useState } from "react";
import IconGraduation from "@icons/IconGraduation";
import IconGraph from "@icons/IconGraph";
import Logo from "components/Logo";
import SubjectCard from "components/SubjectCard";
import { ThemedText } from "components/ThemedText";
import { Stack } from "expo-router";
import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import { userService } from "services/userService";
import { useAppStore } from "store";
import { UserProfile } from "types";

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
export default function ProfileScreen() {
    const { userId } = useAppStore();

    const [userData, setUserData] = useState<UserProfile>({
        id: '',
        email: '',
        phone: '',
        name: '',
        paternalSurname: '',
        maternalSurname: '',
        studentDetails: {
            career: '',
            currentSemester: 0,
            gpa: 0,
            controlNumber: ''
        }
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchUserProfile() {
            if (!userId) {
                setIsLoading(false);
                return;
            }
            try {
                setIsLoading(true);
                const profile = await userService.getUserProfile(userId);
                setUserData(profile);
                console.log("userProfile:", profile);
            } catch (error) {
                console.error("Error fetching profile:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchUserProfile();
    }, [userId]);

    // Loading state
    if (isLoading) {
        return (
            <View style={styles.screenContainer}>
                <Stack.Screen options={{ headerTitle: () => <Logo /> }} />
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#0066CC" />
                    <ThemedText style={styles.loadingText}>Cargando perfil...</ThemedText>
                </View>
            </View>
        );
    }

    // No data state
    if (!userData.id) {
        return (
            <View style={styles.screenContainer}>
                <Stack.Screen options={{ headerTitle: () => <Logo /> }} />
                <View style={styles.container}>
                    <ThemedText type="title">No se encontraron datos</ThemedText>
                </View>
            </View>
        );
    }

    // Destructure user data for easier access
    const { studentDetails: { career, currentSemester, gpa, controlNumber } } = userData;
    const fullName = `${userData.name} ${userData.paternalSurname} ${userData.maternalSurname}`;
    const profileImage = 'https://randomuser.me/api/portraits/lego/5.jpg';

    // Capitalize the first letter of the career string
    const capitalizedCareer = career.charAt(0).toUpperCase() + career.slice(1);

    return (
        <View style={styles.screenContainer}>
            {/* Configure header with app logo */}
            <Stack.Screen options={{
                headerTitle: () => <Logo />
            }} />

            {/* User Profile Header Section */}
            <View style={styles.header}>
                {/* Profile picture - circular image display */}
                <Image source={{ uri: profileImage }} style={styles.profileImage} />

                {/* User's name as main title */}
                <ThemedText type="title">{fullName}</ThemedText>

                {/* Student identification number */}
                <ThemedText type="description">ID de Estudiante: {controlNumber}</ThemedText>

                {/* Academic program/career information */}
                <ThemedText type="description">{capitalizedCareer}</ThemedText>
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
                description={`Semestre Actual: ${currentSemester}`}
                icon={<IconGraduation />}
            />

            {/* Academic Performance Card - displays GPA */}
            <SubjectCard
                title="Desempeño Académico"
                description={`GPA: ${gpa}`}
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
    screenContainer: {
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
    },

    // Loading state container - centers loading indicator
    // Error state container - centers error message
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    // Loading text styling - margin above the indicator
    loadingText: {
        marginTop: 16,
        textAlign: 'center',
    },
});