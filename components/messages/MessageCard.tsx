import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Link } from "expo-router";
import { formatTimestamp } from "utils";

/**
 * Props interface for MessageCard component
 * Defines the structure of data needed to render a conversation preview
 */
interface MessageCardProps {
    /** Unique identifier for the chat conversation */
    chat_id: number;
    /** Display name of the contact */
    name: string;
    /** Role or title of the contact (e.g., "Student", "Teacher") */
    rol: string;
    /** URL or URI for the contact's profile image */
    image: string;
    /** Preview text of the most recent message in the conversation */
    last_message: string;
    /** Unix timestamp of when the last message was sent */
    timestamp: number;
}

/**
 * MessageCard Component
 * 
 * A reusable card component that displays a conversation preview in the messages list.
 * Shows contact information, last message preview, and timestamp. 
 * Navigates to the individual chat screen when pressed.
 * 
 * @component
 * @param {MessageCardProps} props - The props for the MessageCard component
 * @returns A pressable card with contact info and message preview
 * 
 * @example
 * ```tsx
 * <MessageCard 
 *   chat_id={123}
 *   name="John Doe"
 *   rol="Student"
 *   image="https://example.com/avatar.jpg"
 *   last_message="Hey, how are you?"
 *   timestamp={1695830400000}
 * />
 * ```
 * 
 * @features
 * - Displays contact profile image (circular)
 * - Shows contact name and role
 * - Previews last message with text truncation
 * - Shows formatted timestamp
 * - Navigates to chat screen on press
 * - Responsive layout with proper spacing
 */
export default function MessageCard({ chat_id, name, rol, image, last_message, timestamp }: MessageCardProps) {

    return (
        // Link wrapper for navigation to individual chat screen
        <Link href={`/chat/${chat_id}`} asChild>
            <Pressable style={styles.container}>
                {/* Contact profile image */}
                <Image source={{ uri: image }} style={styles.image} />
                
                {/* Content area with contact info and message preview */}
                <View style={{ flex: 1 }}>
                    {/* Header with name and timestamp */}
                    <View style={styles.header}>
                        {/* Contact name with text truncation */}
                        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
                        {/* Formatted timestamp */}
                        <Text style={styles.timestamp}>{formatTimestamp(timestamp)}</Text>
                    </View>
                    {/* Contact role/title */}
                    <Text style={styles.rol}>{rol}</Text>
                    {/* Last message preview with text truncation */}
                    <Text style={styles.lastMessage} numberOfLines={1} ellipsizeMode="tail">{last_message}</Text>
                </View>
            </Pressable>
        </Link>
    );
}

/**
 * Styles for the MessageCard component
 * Defines layout, spacing, colors, and typography for the conversation preview card
 */
const styles = StyleSheet.create({
    /** Main container for the entire message card */
    container: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        backgroundColor: "#fff",
    },
    
    /** Header row containing name and timestamp */
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    
    /** Circular profile image */
    image: {
        width: 56,
        height: 56,
        borderRadius: 28, // Half of width/height for perfect circle
    },
    
    /** Contact name styling */
    name: {
        fontWeight: "bold", // Bold text for prominence
        fontSize: 16,       // Standard readable size
        flex: 1,           // Take available space (pushes timestamp right)
        marginRight: 8,    // Small gap before timestamp
    },
    
    /** Last message preview styling */
    lastMessage: {
        color: "#666",    // Muted gray for secondary information
        marginTop: 6,     // Space above the message preview
    },
    
    /** Timestamp styling */
    timestamp: {
        fontSize: 12,     // Smaller text for less prominence
        color: "#999",    // Light gray for subtle appearance
    },
    
    /** Contact role/title styling */
    rol: {
        fontSize: 14,       // Medium size between name and message
        color: "#636E87",  // Muted blue-gray for secondary info
    },
});