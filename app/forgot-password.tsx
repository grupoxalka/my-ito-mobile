import Button from "components/Button";
import Input from "components/Input";
import { ThemedText } from "components/ThemedText";
import { Stack, router } from "expo-router";
import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function handleSubmit() {
    if(!email) {
      Alert.alert("Error", "Por favor ingresa tu correo o número de control.");
      return;
    }

    //TODO: Send an email to reset password
    //Meanwhile, just navigates to create-password screen with email as param
    router.push({
      pathname: "/create-password",
      params: { email },
    });
    
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{
        headerShown: true,
        headerTitle: "Recuperación de Contraseña",
        headerTitleAlign: "center",
      }} />
      <ThemedText type="title" >¿Olvidaste tu contraseña?</ThemedText>
      <View style={styles.contentContainer}>
        <ThemedText>Ingresa tu correo institucional o número de control estudiantil para restablecer tu contraseña.</ThemedText>
        <Input
          placeholder="Correo o Número de Control"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Button title="Enviar Enlace de Restablecimiento" onPress={handleSubmit}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  button: {
    marginTop: 16,
  },
  contentContainer: {
    marginTop: 14,
    gap: 24,
  },
});