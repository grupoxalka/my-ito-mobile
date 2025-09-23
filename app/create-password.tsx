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

export default function CreatePassword() {
  const { email } = useLocalSearchParams();

  const [newPassword, setNewPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  async function handleSubmit() {
    if (!newPassword || !confirmedPassword) {
      Alert.alert(AlertType.Error, "Por favor ingresa y confirma tu nueva contraseña.");
      return;
    }

    if (newPassword !== confirmedPassword) {
      Alert.alert(AlertType.Error, "Las contraseñas no coinciden.");
      return;
    }

    try {
      const body : ForgotPasswordParams = {
        email: email as string,
        newPassword,
        confirmedPassword,
      }
      await authServiceForgotPassword(body);
      Alert.alert(AlertType.Success, "Tu contraseña ha sido restablecida correctamente.");
      router.navigate(ROUTES.LOGIN);

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
        <ThemedText>Asegúrate de elegir una contraseña segura que puedas recordar fácilmente.</ThemedText>
        <Input
          placeholder="Nueva Contraseña"
          value={newPassword}
          onChangeText={setNewPassword}
          secure
        />
        <Input
          placeholder="Repite la Contraseña"
          value={confirmedPassword}
          onChangeText={setConfirmedPassword}
          secure
        />
        <Button title="Restablecer" onPress={handleSubmit}/>
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