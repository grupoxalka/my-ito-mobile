
import { ComponentProps } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ViewProps } from 'react-native';

interface ButtonProps extends ViewProps {
  title: string;
  onPress?: () => void;
}

export default function Button({ title, onPress, style }: ButtonProps) {
  return (
    <View style={[styles.container, style]}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        alignItems: "center",
    },
    button: {
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#12388F",
        borderRadius: 12,
        height: 48,
        width: "100%",
        minWidth: 84,
        maxWidth: 480,
    },
    text: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "700",
    },
});