import { StyleSheet, Text, View } from "react-native";
import { formatDate } from "utils";


interface ChatMessageCardProps {
    id: number;
    title: string;
    message: string;
    date: number;
}

export default function ChatMessageCard({ id, title, message, date }: ChatMessageCardProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.message}>{message}</Text>
            <Text style={styles.date}>{formatDate(date)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#E6EFF4",
        marginHorizontal: 16,
        marginTop: 16,
        borderRadius: 12,
        gap: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    message: {
        fontSize: 16,
        color: "#61758A",
    },
    date: {
        fontSize: 16,
        color: "#464646",
        alignSelf: "flex-end",
    },
});