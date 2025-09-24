/**
 * Login screen component for user authentication
 * Handles user email/password input and authentication flow
 * Provides links to password recovery and account registration
 */

import Input from "components/Input";
import Logo from "components/Logo";
import Button from "components/Button";
import { ThemedText } from "components/ThemedText";
import React, { useState } from "react";
import { View, StyleSheet, Alert, } from "react-native";
import { Link, router } from "expo-router";
import { authServiceLogin } from "services/authService";
import { useAppStore } from "store";
import IconQuestion from "@icons/IconQuestion";
import { AlertType } from "enums";
import { ROUTES } from "@constants";

/**
 * Login screen component
 * Renders login form with email/password fields and authentication logic
 * Redirects to home screen on successful login
 * @returns Login form with input fields and navigation links
 */
export default function LoginScreen() {
  const { setIsAuthenticated } = useAppStore();

  // Form state for user credentials
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Handle user login attempt
   * Validates form data, calls authentication service, and navigates on success
   * Shows error alerts for validation failures or authentication errors
   */
  async function handleLogin() {
    // Validate required fields
    if (!email || !password) {
      Alert.alert(AlertType.Error, "Por favor ingresa correo y contraseña.");
      return;
    }

    try {
      // Attempt authentication with backend service
      await authServiceLogin({ email, password });
      router.replace("/"); // Navigate to home screen
      setIsAuthenticated(true); // Update global auth state
    } catch (error) {
      Alert.alert(AlertType.Error, "Credenciales incorrectas o error de red.");
    }
  }

  return (
    <View style={styles.container}>

      {/* Header section with logo and help icon */}
      <View style={styles.titleContainer}>
        <Logo />
        <IconQuestion style={styles.icon} />
      </View>

      {/* Email input field */}
      <View style={styles.fieldContainer}>
        <ThemedText>Correo electrónico</ThemedText>
        <Input
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Password input field */}
      <View style={styles.fieldContainer}>
        <ThemedText>Contraseña</ThemedText>
        <Input
          placeholder="Ingresa tu contraseña"
          value={password}
          onChangeText={setPassword}
          secure
        />
      </View>

      {/* Login button */}
      <Button title="Iniciar sesión" onPress={handleLogin} style={styles.button} />

      {/* Navigation links for account recovery and registration */}
      <View style={styles.linksContainer}>

        <Link href={ROUTES.REGISTER} asChild>
          <ThemedText type="link">¿Olvidó su número de control?</ThemedText>
        </Link>

        <Link href={ROUTES.FORGOT_PASSWORD} asChild>
          <ThemedText type="link">¿Olvidó su contraseña?</ThemedText>
        </Link>

      </View>

    </View>
  );
}

/**
 * StyleSheet for login screen layout and appearance
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  icon:{
    position: "absolute",        // Position help icon absolutely
    right: 0,                   // Align to right edge
    top: "50%",                 // Center vertically
    transform: [{ translateY: -12 }], // Adjust for perfect centering
  },
  fieldContainer: {
    marginVertical: 12,         // Vertical spacing between form fields
    gap: 8,                     // Space between label and input
  },
  linksContainer: {
    alignItems: "center",       // Center navigation links
    gap: 16,                    // Space between links
    marginTop: 12,              // Space above links section
  },
  button: {
    marginVertical: 12,         // Space around login button
  },
});