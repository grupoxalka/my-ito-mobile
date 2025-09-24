/**
 * SubjectCard component for displaying subject/course information
 * Reusable card component that shows course details with an icon
 * Used in lists to display academic subjects or course modules
 */

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

/**
 * Props interface for SubjectCard component
 */
interface SubjectCardProps {
  title: string;            // Subject/course title
  description: string;      // Subject description or details
  icon: React.ReactNode;    // Icon component to display alongside text
}

/**
 * SubjectCard component
 * Displays a course or subject with icon, title, and description in a horizontal layout
 * @param title - The name/title of the subject or course
 * @param description - Additional details about the subject
 * @param icon - React component (usually an icon) to display with the subject
 * @returns Card component with subject information and icon
 */
export default function SubjectCard({ title, description, icon }: SubjectCardProps) {
  return (
    <View style={styles.cardContainer}>
        {/* Icon container with background styling */}
        <View style={styles.iconContainer}>
            {icon}
        </View>
        
        {/* Text content section */}
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    </View>
  );
}

/**
 * StyleSheet for SubjectCard component
 * Defines card layout and text styling
 */
const styles = StyleSheet.create({
    cardContainer:{
        alignSelf: "stretch",       // Full width of container
        alignItems: "center",       // Center content vertically
        paddingVertical: 8,         // Vertical padding for touch area
        paddingHorizontal: 16,      // Horizontal padding for spacing
        flexDirection: "row",       // Horizontal layout: icon + text
        gap: 16,                    // Space between icon and text
    },
    title: {
        fontSize: 16,               // Standard title size
    },
    description: {
        fontSize: 14,               // Smaller size for secondary text
        color: "#636E87",           // Gray color for description text
    },
    iconContainer: {
        backgroundColor: "#F0F2F5",  // Light gray background for icon
        width: 48,                   // Fixed square dimensions
        height: 48,
        borderRadius: 8,             // Slightly rounded corners
        justifyContent: "center",    // Center icon vertically
        alignItems: "center"         // Center icon horizontally
    }
})