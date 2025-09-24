import AnnouncementCard from "components/AnnouncementCard";
import { Stack } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

/**
 * Interface for announcement data structure
 */
interface AnnouncementItem {
  /** Unique identifier for the announcement */
  id: number;
  /** URL of the announcement image */
  image: string;
  /** Title of the announcement */
  title: string;
  /** Description or content of the announcement */
  description: string;
  /** Timestamp of the announcement publication date */
  date: number;
}

/**
 * AnnouncementsScreen Component
 * 
 * Displays a screen with a list of announcements and news. Each announcement is rendered
 * using the AnnouncementCard component in a scrollable FlatList. Currently uses dummy data
 * that should be replaced with real API data in the future.
 * 
 * Features:
 * - Header with title "Noticias y Eventos" (News and Events)
 * - Scrollable list of announcement cards
 * - Responsive layout with proper spacing
 * - Optimized rendering using FlatList
 * 
 * @returns Announcements screen that renders the announcements received from the API
 */
export default function AnnouncementsScreen() {

  // TODO: Replace with real data from API
  /** 
   * Dummy data for announcements - should be replaced with API call
   * @type {AnnouncementItem[]}
   */
  const dummyData: AnnouncementItem[] = [
    {
      id: 1,
      image: "https://tinyurl.com/imgtecnm1",
      title: "ITO Organiza el Simposio Tecnológico Anual",
      description: "El Instituto Tecnológico de Orizaba se enorgullece en anunciar su simposio tecnológico anual, que contará con talleres, charlas y competencias.",
      date: Date.now()
    },
    {
      id: 2,
      image: "https://tinyurl.com/imgtecnm4",
      title: "Feria de Empleo Conecta a Estudiantes con Empresas Líderes",
      description: "Se llevó a cabo una feria de empleo en ITO, conectando a estudiantes con empresas líderes para prácticas y oportunidades laborales.",
      date: Date.now()
    },
    {
      id: 3,
      image: "https://tinyurl.com/imgtecnm3",
      title: "Nuevo Laboratorio de Robótica Abre en ITO",
      description: "ITO inauguró un nuevo laboratorio de robótica, equipado con tecnología de vanguardia para apoyar proyectos y investigaciones estudiantiles.",
      date: Date.now()
    }
  ];

  return (
    <>
      {/* Screen header configuration with centered title */}
      <Stack.Screen
        options={{
          title: "Noticias y Eventos",
          headerTitleAlign: "center",
          headerShown: true
        }}
      />
      
      {/* Main container with horizontal padding */}
      <View style={styles.container}>
        {/* 
          FlatList for efficient rendering of announcement cards
          - Optimized for performance with large datasets
          - Each item is rendered using AnnouncementCard component
          - Uses item.id as unique key for React optimization
        */}
        <FlatList
          data={dummyData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <AnnouncementCard
              title={item.title}
              description={item.description}
              image={item.image}
              date={item.date}
            />
          )}
        />
      </View>
    </>
  );
}

/**
 * Styles for the AnnouncementsScreen component
 */
const styles = StyleSheet.create({
  /** 
   * Main container style
   * - White background for clean appearance
   */
  container: {
    backgroundColor: '#fff',
  }
});