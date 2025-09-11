
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";


export default function Logo() {

    const [fontLoaded] = useFonts({
        QwitcherGrypen: require('../assets/fonts/QwitcherGrypen-Bold.ttf'),
    });

    const fontFamily = fontLoaded ? 'QwitcherGrypen' : 'System';

    return (
        <View style= {styles.container}>
            <Text style={[styles.customFont, { fontFamily }]}>My</Text>
            <Text style={styles.text}> ITO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    customFont: {
        fontFamily: 'QwitcherGrypen',
        fontSize: 28,
        lineHeight: 35,
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    container: {
        flexDirection: 'row',
    }
});