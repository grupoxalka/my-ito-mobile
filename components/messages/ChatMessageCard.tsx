import { StyleSheet, Text, View } from "react-native";
import { formatDate } from "utils";

/**
 * Props interface for ChatMessageCard component
 * Defines the structure of data needed to render an individual chat message
 */
interface ChatMessageCardProps {
    /** Unique identifier for the message */
    id: number;
    /** Title or subject of the message */
    title: string;
    /** Main content/body of the message */
    message: string;
    /** Unix timestamp of when the message was sent */
    date: number;
}

/**
 * ChatMessageCard Component
 * 
 * Displays an individual message within a chat conversation.
 * Shows the message title, content, and formatted timestamp.
 * Designed with a card-like appearance with rounded corners and subtle background.
 * 
 * @component
 * @param {ChatMessageCardProps} props - The props for the ChatMessageCard component
 * @returns A styled card containing the message information
 * 
 * @example
 * ```tsx
 * <ChatMessageCard 
 *   id={1}
 *   title="Meeting Reminder"
 *   message="Don't forget about our meeting tomorrow at 3 PM"
 *   date={1695830400000}
 * />
 * ```
 */
export default function ChatMessageCard({ id, title, message, date }: ChatMessageCardProps) {
    return (
        <View style={styles.container}>
            {/* Message title/subject */}
            <Text style={styles.title}>{title}</Text>
            {/* Message content/body */}
            <Text style={styles.message}>{message}</Text>
            {/* Formatted timestamp aligned to the right */}
            <Text style={styles.date}>{formatDate(date)}</Text>
        </View>
    );
}

/**
 * Styles for the ChatMessageCard component
 * Defines the card layout, colors, typography, and spacing for individual chat messages
 */
const styles = StyleSheet.create({
    /** Main container for the message card */
    container: {
        padding: 16,
        backgroundColor: "#E6EFF4",
        marginHorizontal: 16,
        marginTop: 16,
        borderRadius: 12,
        gap: 4,
    },
    
    /** Message title/subject styling */
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    
    /** Message content/body styling */
    message: {
        fontSize: 16,
        color: "#61758A",
    },
    
    /** Message timestamp styling */
    date: {
        fontSize: 16,
        color: "#464646",
        alignSelf: "flex-end",
    },
});