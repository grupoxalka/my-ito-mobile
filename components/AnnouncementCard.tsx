import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";

/**
 * Props for the AnnouncementCard component
 */
interface AnnouncementCardProps {
    /** Title of the announcement */
    title: string;
    /** Description or content of the announcement */
    description: string;
    /** URL of the announcement image */
    image: string;
    /** Timestamp of the announcement publication date */
    date: number;
};

/**
 * AnnouncementCard Component
 * 
 * Displays an announcement card that includes an image, title, description and publication date.
 * The date is automatically formatted to Spanish using the provided timestamp.
 * 
 * @param props - Props for the AnnouncementCard component
 * @param props.title - Title of the announcement to display
 * @param props.description - Description or content of the announcement
 * @param props.image - URL of the image to be displayed in the card
 * @param props.date - Timestamp (number) of the announcement publication date
 * 
 * @returns TSX component that renders the announcement card
 * 
 * @example
 * ```tsx
 * <AnnouncementCard
 *   title="New class schedule"
 *   description="Please note that starting next Monday there will be changes to the schedules."
 *   image="https://example.com/image.jpg"
 *   date={1695565200000}
 * />
 * ```
 */
export default function AnnouncementCard({ title, description, image, date }: AnnouncementCardProps) {

    /**
     * Formats a timestamp to a readable date in Spanish
     * 
     * @param timestamp - Timestamp in milliseconds since Unix epoch
     * @returns Formatted string as "Publicado el [date]"
     * 
     * @example
     * formatDate(1695565200000) // "Publicado el 24 de septiembre de 2023"
     */
    function formatDate(timestamp: number) {
        const date = new Date(timestamp);
        const options: Intl.DateTimeFormatOptions = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        const formattedDate = date.toLocaleDateString('es-ES', options);
        return `Publicado el ${formattedDate}`;
    }

    return (
        <View style={styles.container}>
            {/* Announcement image with rounded corners */}
            <Image source={{ uri: image }} accessibilityLabel={title} style={styles.image} />
            
            {/* Text content container */}
            <View style={styles.descriptionContainer}>
                {/* Announcement title */}
                <ThemedText type="title" style={styles.title}>{title}</ThemedText>
                
                {/* Announcement description */}
                <ThemedText type="description">{description}</ThemedText>
                
                {/* Formatted publication date */}
                <ThemedText type="description">{formatDate(date)}</ThemedText>
            </View>
        </View>
    );
}

/**
 * Styles for the AnnouncementCard component
 */
const styles = StyleSheet.create({
    /** Main container of the card */
    container: {
        padding: 16,
    },
    /** Title style with bottom margin */
    title: {
        marginBottom: 4,
    },
    /** Description and date container with vertical padding */
    descriptionContainer: {
        paddingVertical: 12,
    },
    /** Responsive image with rounded corners and fixed height */
    image: {
        width: '100%',
        height: 200,
        borderRadius: 12,
    },
});