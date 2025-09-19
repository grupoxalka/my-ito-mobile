import Input from "components/Input";
import Logo from "components/Logo";
import Button from "components/Button";
import { ThemedText } from "components/ThemedText";
import React, { useState } from "react";
import { View, StyleSheet, Alert, } from "react-native";
import { Link, useRouter } from "expo-router";
import { authServiceLogin } from "services/authService";
import { useAppStore } from "store";
import IconQuestion from "@icons/IconQuestion";


export default function LoginScreen() {
  const { setIsAuthenticated } = useAppStore();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {

    if (!email || !password) {
      Alert.alert("Error", "Por favor ingresa correo y contraseña.");
      return;
    }

    try {
      await authServiceLogin({ email, password });
      router.replace("/");
      setIsAuthenticated(true);
    } catch (error) {
      Alert.alert("Error", "Credenciales incorrectas o error de red.");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Logo />
        <IconQuestion style={styles.icon} />
      </View>
      <View style={styles.fieldContainer}>
        <ThemedText>Correo electrónico</ThemedText>
        <Input
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.fieldContainer}>
        <ThemedText>Contraseña</ThemedText>
        <Input
          placeholder="Ingresa tu contraseña"
          value={password}
          onChangeText={setPassword}
          secure
        />
      </View>

      <Button title="Iniciar sesión" onPress={handleLogin} />

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
    paddingHorizontal: 16,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  icon:{
    position: "absolute",
    right: 0,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  fieldContainer: {
    marginBottom: 12,
    gap: 8,
  },
  centered: {
    alignItems: "center",
    gap: 14,
    marginTop: 16,
  }
});