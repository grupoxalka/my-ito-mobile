import { dummyMessages } from "@constants";
import ChatMessageCard from "components/messages/ChatMessageCard";
import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function ChatScreen() {
    const { chat_id } = useLocalSearchParams();

    //TODO: fetch chat messages from API using chat_id
    // For now, use dummy data
    const currentChat = dummyMessages.find(chat => chat.id === parseInt(chat_id as string));
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
            <Stack.Screen options={{
                headerShown: true,
                headerTitle: "Mensajes",
                headerTitleAlign: "center",
            }} />

            <View style={styles.chatHeader}>
                <Image source={{ uri: currentChat.image }} style={styles.profileImage} />
                <View>
                    <Text style={styles.chatTitle}>{currentChat.name}</Text>
                    <Text style={styles.chatRole}>{currentChat.rol}</Text>
                </View>
            </View>

            <FlatList
                data={dummyChatMessages}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <ChatMessageCard
                        id={item.id}
                        title={item.title}
                        message={item.message}
                        date={item.date}
                    />}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    chatHeader: {
        backgroundColor: "#f0f0f0",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        paddingVertical: 8,
        paddingHorizontal: 16,
        gap: 16,
    },
    profileImage: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    chatTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    chatRole: {
        fontSize: 14,
        color: "#636E87",
    }
});