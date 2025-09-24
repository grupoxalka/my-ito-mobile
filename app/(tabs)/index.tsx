/**
 * Home screen component - main dashboard after user authentication
 * Displays the main content and handles authentication checking
 * Redirects to login if user is not authenticated
 */

import { Link, Redirect, Stack } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import IconNotification from "@icons/IconNotification";
import IconUser from "@icons/IconUser";
import Logo from "components/Logo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppStore } from "store";

/**
 * Main home screen component
 * Checks authentication status on load and provides navigation to profile and notifications
 * Shows main dashboard content for authenticated users
 * @returns Home screen with header navigation or redirect to login
 */
export default function HomeScreen() {
  const {isAuthenticated, setIsAuthenticated} = useAppStore();

  // Check authentication status when component mounts
  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("token"); // Check for stored auth token
      setIsAuthenticated(!!token); // Update auth state based on token presence
    };
    checkAuth();
  }, []);

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <View>
      <Stack.Screen options={{
        headerTitle: () => <Logo />, // App logo in header center
        headerLeft: () => (
          <Link href="/profile" asChild>
            <IconUser /> {/* Profile navigation button */}
          </Link>
        ),
        headerRight: () => (
          <Link href="/news" asChild>
            <IconNotification /> {/* Notifications navigation button */}
          </Link>
        ),
      }} />

      {/* Main content area - to be expanded with dashboard widgets */}
      <Text>Inicio</Text>
    </View>
  );
}
