import IconGraduation from "@icons/IconGraduation";
import IconGraph from "@icons/IconGraph";
import Logo from "components/Logo";
import SubjectCard from "components/SubjectCard";
import { ThemedText } from "components/ThemedText";
import { Stack } from "expo-router";
import { head } from "node_modules/axios/index.cjs";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {

    //TODO: Fetch user data from API
    const userData = {
        id: '12345678',
        name: 'Ricardo',
        career: 'Ciencias de la computación',
        semester: 6,
        grade: "8.5",
        profileImage: 'https://randomuser.me/api/portraits/lego/5.jpg'
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                headerTitle: () => <Logo />
            }} />

            <View style={styles.header}>
                <Image source={{ uri: userData.profileImage }} style={styles.profileImage} />
                <ThemedText type="title">{userData.name}</ThemedText>
                <ThemedText type="description">ID de Estudiante: {userData.id}</ThemedText>
                <ThemedText type="description">{userData.career}</ThemedText>
            </View>

            <ThemedText
                type="title"
                style={styles.padding}
            >
                Información Académica
            </ThemedText>

            <SubjectCard
                title="Estado Académico"
                description={`Semestre Actual: ${userData.semester}`}
                icon={<IconGraduation />}
            />

            <SubjectCard
                title="Desempeño Académico"
                description={`GPA: ${userData.grade}`}
                icon={<IconGraph />}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        gap: 24,
    },
    header: {
        alignItems: 'center',   
    },
    profileImage: {
        width: 128,
        height: 128,
        borderRadius: 64,
        marginBottom: 16,
    },
    padding: {
        paddingHorizontal: 16,
    }
});