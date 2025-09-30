import { dummyMessages } from "@constants";
import IconAdd from "@icons/IconAdd";
import IconSearch from "@icons/IconSearch";
import MessageCard from "components/messages/MessageCard";
import { Stack } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function MessagesScreen() {

    //TODO: fetch messages from API
    // For now, use dummy data
    const data = dummyMessages;

    return (
        <View style= {styles.container}>
            <View style={styles.searchContainer}>
                <IconSearch color="#636E87" />
                <TextInput
                    placeholder="Buscar"
                    style={styles.searchInput}
                />
            </View>
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
                    timestamp={Date.now() - 60000}
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#F0F2F5",
        borderRadius: 12,
        margin: 16,
        paddingHorizontal: 12,
    },
    searchInput: {
        flex: 1,
        height: 40,
        paddingVertical: 8,
        paddingLeft: 8,
        fontSize: 16,
    },
    messageText: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10,
    },
})