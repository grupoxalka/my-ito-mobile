import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface SubjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function SubjectCard({ title, description, icon }: SubjectCardProps) {
  return (
    <View style={styles.cardContainer}>
        <View style={styles.iconContainer}>
            {icon}
        </View>
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    cardContainer:{
        alignSelf: "stretch",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: "row",
        gap: 16,
    },
    title: {
        fontSize: 16,
    },
    description: {
        fontSize: 14,
        color: "#636E87",
    },
    iconContainer: {
        backgroundColor: "#F0F2F5",
        width: 48,
        height: 48,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    }
})