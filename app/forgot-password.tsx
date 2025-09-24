/**
 * Forgot password screen for account recovery
 * Allows users to initiate password reset process using email or student ID
 * First step in the password recovery flow
 */

import { ROUTES } from "@constants";
import Button from "components/Button";
import Input from "components/Input";
import { ThemedText } from "components/ThemedText";
import { AlertType } from "enums";
import { Stack, router } from "expo-router";
import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

/**
 * Forgot password screen component
 * Collects user email/student ID and initiates password reset process
 * Navigates to create password screen after validation
 * @returns Password recovery form with input validation
 */
export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  /**
   * Handle password reset request submission
   * Validates email input and navigates to password creation screen
   * TODO: Integrate with actual email sending service
   */
  function handleSubmit() {
    if(!email) {
      Alert.alert(AlertType.Error, "Por favor ingresa tu correo o número de control.");
      return;
    }

    //TODO: Send an email to reset password
    //Meanwhile, just navigates to create-password screen with email as param
    router.push({
      pathname: ROUTES.CREATE_PASSWORD,
      params: { email }, // Pass email to next screen
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
        <ThemedText>
          Ingresa tu correo institucional o número de control estudiantil para restablecer tu contraseña.
        </ThemedText>
        
        {/* Email/student ID input field */}
        <Input
          placeholder="Correo o Número de Control"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        
        {/* Submit button to proceed with reset */}
        <Button title="Enviar Enlace de Restablecimiento" onPress={handleSubmit}/>
      </View>
    </View>
  )
}

/**
 * Styles for forgot password screen layout
 */
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
    gap: 24,                    // Vertical spacing between content elements
  },
});