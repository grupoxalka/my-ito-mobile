import { dummyMessages } from "@constants";
import IconSearch from "@icons/IconSearch";
import MessageCard from "components/messages/MessageCard";
import React from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";

/**
 * MessagesScreen Component
 * 
 * This screen displays the user's conversations/chats list.
 * It includes a search bar to filter messages and a list of
 * recent conversations with contact information, last message,
 * and timestamp.
 * 
 * @component
 * @returns The messages screen with search bar and conversations list
 * 
 * @todo Implement fetch messages from API
 * @todo Implement real-time search functionality
 */
export default function MessagesScreen() {

    // TODO: Replace with real API fetch
    // For now, using dummy data for development
    const data = dummyMessages;

    return (
        <View style={styles.container}>
            {/* Search bar */}
            <View style={styles.searchContainer}>
                <IconSearch color="#636E87" />
                <TextInput
                    placeholder="Search"
                    style={styles.searchInput}
                    // TODO: Implement search logic
                    // onChangeText={handleSearch}
                />
            </View>
            
            {/* Conversations list */}
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => 
                    <MessageCard 
                        chat_id={item.id}
                        name={item.name} 
                        rol={item.rol} 
                        image={item.image}
                        last_message={item.last_message} 
                        // TODO: Use real timestamp from last message
                        timestamp={Date.now() - 60000}
                    />
                }
            />
        </View>
    );
}

/**
 * Styles for the messages screen
 * Includes styles for main container, search bar and input
 */
const styles = StyleSheet.create({
    /** Main screen container */
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    
    /** Container for search bar with icon and input */
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#F0F2F5", // Light gray for contrast
        borderRadius: 12,
        margin: 16,
        paddingHorizontal: 12,
    },
    
    /** Text input for search */
    searchInput: {
        flex: 1,
        height: 40,
        paddingVertical: 8,
        paddingLeft: 8,
        fontSize: 16,
        color: "#333",
    },
    
    /** Style for message text (currently unused) */
    messageText: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10,
    },
})