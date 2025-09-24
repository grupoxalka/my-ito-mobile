/**
 * ThemedText component for consistent typography across the app
 * Provides predefined text styles for different content types
 * Ensures consistent appearance and hierarchy in the user interface
 */

// StyledText.tsx
import { StyleSheet, Text, type TextProps } from "react-native";

/**
 * Props for ThemedText component
 * Extends standard TextProps with predefined style types
 */
export type ThemedTextProps = TextProps & {
  type?: "default" | "defaultBold" | "title" | "link"; // Predefined text style variants
};

/**
 * ThemedText component
 * Provides consistent text styling based on content type
 * @param style - Additional custom styles to apply
 * @param type - Predefined style type (default, defaultBold, title, link)
 * @param rest - Standard Text component props
 * @returns Styled Text component with consistent typography
 */
export function ThemedText({
  style,
  type = "default",
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[styles[type], style]} // Apply predefined style and custom overrides
      {...rest}
    />
  );
}

/**
 * StyleSheet defining text styles for different content types
 * Maintains consistent typography hierarchy throughout the app
 */
const styles = StyleSheet.create({
  default: {
    fontSize: 16,               // Standard readable text size
    lineHeight: 24,             // Proper line spacing for readability
    fontWeight: '500',          // Medium weight for body text
    color: "#121217",           // Dark text color for good contrast
  },
  defaultBold: {
    fontSize: 16,               // Same size as default
    lineHeight: 20,             // Tighter line height for emphasis
    fontWeight: '700',          // Bold weight for important text
    color: "#121217",           // Same color as default
  },
  title: {
    fontSize: 24,               // Larger size for headings
    fontWeight: "bold",         // Bold weight for hierarchy
    lineHeight: 28,             // Proper spacing for larger text
    color: "#121217",           // Dark color for maximum impact
  },
  link: {
    fontSize: 14,               // Smaller size for secondary actions
    lineHeight: 21,             // Balanced spacing
    color: "#636E87",           // Gray color to indicate interactive links
  },
});
