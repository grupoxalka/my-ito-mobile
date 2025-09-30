import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Link } from "expo-router";


interface MessageCardProps {
    chat_id: number;
    name: string;
    rol: string;
    image: string;
    last_message: string;
    timestamp: number;
}

export default function MessageCard({ chat_id, name, rol, image, last_message, timestamp }: MessageCardProps) {

    function formatTimestamp(ts: number) {
        const date = new Date(ts);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    return (
        <Link href={`/chat/${chat_id}`} asChild>
            <Pressable style={styles.container}>
                <Image source={{ uri: image }} style={styles.image} />
                <View style={{ flex: 1 }}>
                    <View style={styles.header}>
                        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
                        <Text style={styles.timestamp}>{formatTimestamp(timestamp)}</Text>
                    </View>
                    <Text style={styles.rol}>{rol}</Text>
                    <Text style={styles.lastMessage} numberOfLines={1} ellipsizeMode="tail">{last_message}</Text>
                </View>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        backgroundColor: "#fff",
    },
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    image: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    name: {
        fontWeight: "bold",
        fontSize: 16,
        flex: 1,
        marginRight: 8,
    },
    lastMessage: {
        color: "#666",
        marginTop: 6,
    },
    timestamp: {
        fontSize: 12,
        color: "#999",
    },
    rol: {
        fontSize: 14,
        color: "#636E87",
    },
});