import Input from "components/Input";
import Logo from "components/Logo";
import Button from "components/Button";
import { ThemedText } from "components/ThemedText";
import React from "react";
import { View, Text, TextInput, StyleSheet, } from "react-native";
import { Link } from "expo-router";

export default function LoginScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <Logo />
      </View>
      <View style={styles.fieldContainer}>
        <ThemedText>Numero de control</ThemedText>
        <Input placeholder="Ingresa tu numero de control" />
      </View>

      <View style={styles.fieldContainer}>
        <ThemedText>Contraseña</ThemedText>
        <Input placeholder="Ingresa tu contraseña" secure />
      </View>

      <Button title="Iniciar sesión" onPress={() => { }} />

      <View style={styles.centered}>
        <Link href="/register" asChild>
          <ThemedText type="link">¿Olvidó su número de control?</ThemedText>
        </Link>
        <Link href="/reset-password" asChild>
          <ThemedText type="link">¿Olvidó su contraseña?</ThemedText>
        </Link>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

  },
  fieldContainer: {
    marginBottom: 12,
    paddingHorizontal: 16,
    gap: 8,
  },
  centered: {
    alignItems: "center",
    gap: 8,
    marginTop: 16,
  }
});