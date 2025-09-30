import { dummyMessages } from "@constants";
import ChatMessageCard from "components/messages/ChatMessageCard";
import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

/**
 * ChatScreen Component
 * 
 * Individual chat screen that displays the notifications of a specific contact.
 * Uses dynamic routing with [chat_id] parameter to show the correct conversation.
 * Includes a header with contact information and a scrollable list of messages.
 * 
 * @component
 * @returns The chat screen with header, contact info, and messages list
 * 
 * 
 * @route /chat/[chat_id]
 * 
 * @todo Implement real API fetch for chat messages using chat_id
 */
export default function ChatScreen() {
    // Extract chat_id from URL parameters (dynamic route)
    const { chat_id } = useLocalSearchParams();

    // TODO: Fetch chat messages from API using chat_id
    // For now, use dummy data for development
    // Find the current chat from dummy data using the chat_id parameter
    const currentChat = dummyMessages.find(chat => chat.id === parseInt(chat_id as string));
    
    // TODO: Replace with real chat messages from API
    // Dummy chat messages for development and testing
    const dummyChatMessages = [
        {
            id: 1,
            title: "ITO Organiza el Simposio Tecnologico Anual",
            message: "El Instituto Tecnológico de Orizaba se enorgullece en anunciar su simposio tecnológico anual, que contará con talleres, charlas y competencias.",
            date: Date.now() - 86400000
        },
        {
            id: 2,
            title: "Feria de Empleo Conecta a Estudiantes con Empresas Líderes",
            message: "Se llevó a cabo una feria de empleo en ITO, conectando a estudiantes con empresas líderes para prácticas y oportunidades laborales.",
            date: Date.now()
        }
    ];

    // Handle case when chat_id doesn't match any existing chat
    if (!currentChat) {
        return (
            <View>
                <Stack.Screen options={{
                    headerShown: true,
                    headerTitle: "Chat no encontrado",
                    headerTitleAlign: "center",
                }} />
                <Text>Chat no encontrado</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* Configure navigation header */}
            <Stack.Screen options={{
                headerShown: true,
                headerTitle: "Mensajes",
                headerTitleAlign: "center",
            }} />

            {/* Chat header with contact information */}
            <View style={styles.chatHeader}>
                {/* Contact profile image */}
                <Image source={{ uri: currentChat.image }} style={styles.profileImage} />
                <View>
                    {/* Contact name and role */}
                    <Text style={styles.chatTitle}>{currentChat.name}</Text>
                    <Text style={styles.chatRole}>{currentChat.rol}</Text>
                </View>
            </View>

            {/* Messages list */}
            <FlatList
                data={dummyChatMessages}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <ChatMessageCard
                        id={item.id}
                        title={item.title}
                        message={item.message}
                        date={item.date}
                    />
                }
            />
        </View>
    );
}
/**
 * Styles for the ChatScreen component
 * Includes styles for container, header, profile image, and text elements
 */
const styles = StyleSheet.create({
    /** Main container for the entire chat screen */
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    
    /** Header section containing contact info */
    chatHeader: {
        backgroundColor: "#f0f0f0", // Light gray background
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#eee", // Subtle border separator
        paddingVertical: 8,
        paddingHorizontal: 16,
        gap: 16, // Space between profile image and text
    },
    
    /** Circular profile image */
    profileImage: {
        width: 56,
        height: 56,
        borderRadius: 28, // Makes it circular (width/2)
    },
    
    /** Contact name styling */
    chatTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    
    /** Contact role/subtitle styling */
    chatRole: {
        fontSize: 14,
        color: "#636E87", // Muted gray color
    }
});