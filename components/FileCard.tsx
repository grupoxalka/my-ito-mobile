import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface FielCardProps {
    title: string;
    type: string;
    icon: React.ReactNode;
}
export default function FielCard({ title, type, icon }: FielCardProps) {
return (
    <View style={styles.cardContainer}>
        <View style={styles.iconContainer}>{icon}</View>
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.type}>{type}</Text>
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
        color:  "#121217",
    },
    type: {
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