/**
 * Create password screen for completing password reset
 * Second step in password recovery flow - allows users to set new password
 * Validates password confirmation and submits to authentication service
 */

import { ROUTES } from "@constants";
import Button from "components/Button";
import Input from "components/Input";
import { ThemedText } from "components/ThemedText";
import { AlertType } from "enums";
import { router, Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { authServiceForgotPassword } from "services/authService";
import { ForgotPasswordParams } from "types";

/**
 * Create password screen component
 * Allows users to set new password after email verification
 * Includes password confirmation and validation logic
 * @returns Password creation form with validation and submission
 */
export default function CreatePassword() {
  const { email } = useLocalSearchParams(); // Get email from navigation parameters

  // Password form state
  const [newPassword, setNewPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  /**
   * Handle password reset submission
   * Validates password inputs, checks confirmation match, and calls auth service
   * Shows success/error alerts and navigates appropriately
   */
  async function handleSubmit() {
    // Validate required fields
    if (!newPassword || !confirmedPassword) {
      Alert.alert(AlertType.Error, "Por favor ingresa y confirma tu nueva contraseña.");
      return;
    }

    // Validate password confirmation match
    if (newPassword !== confirmedPassword) {
      Alert.alert(AlertType.Error, "Las contraseñas no coinciden.");
      return;
    }

    try {
      // Prepare request parameters
      const body : ForgotPasswordParams = {
        email: email as string,
        newPassword,
        confirmedPassword,
      }
      
      // Submit password reset to backend
      await authServiceForgotPassword(body);
      Alert.alert(AlertType.Success, "Tu contraseña ha sido restablecida correctamente.");
      router.navigate(ROUTES.LOGIN); // Return to login screen

    } catch (error) {
      Alert.alert(AlertType.Error, "No se pudo restablecer la contraseña. Intenta de nuevo.");
    }
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{
        headerShown: true,
        headerTitle: "Restablece tu Contraseña",
        headerTitleAlign: "center",
      }} />
      
      <ThemedText type="title" >Restablece tu contraseña</ThemedText>
      
      <View style={styles.contentContainer}>
        <ThemedText>
          Asegúrate de elegir una contraseña segura que puedas recordar fácilmente.
        </ThemedText>
        
        {/* New password input field */}
        <Input
          placeholder="Nueva Contraseña"
          value={newPassword}
          onChangeText={setNewPassword}
          secure
        />
        
        {/* Password confirmation input field */}
        <Input
          placeholder="Repite la Contraseña"
          value={confirmedPassword}
          onChangeText={setConfirmedPassword}
          secure
        />
        
        {/* Submit button to complete password reset */}
        <Button title="Restablecer" onPress={handleSubmit}/>
      </View>
    </View>
  )
}

/**
 * Styles for create password screen layout
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