// StyledText.tsx
import { StyleSheet, Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  type?: "default" | "defaultBold" | "title" | "link" | "description";
};

export function ThemedText({
  style,
  type = "default",
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[styles[type], style]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: "#121217", 
  },
  defaultBold: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
    color: "#121217",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 28,
    color: "#121217",
  },
  link: {
    fontSize: 14,
    lineHeight: 21,
    color: "#636E87",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#61758A",
  },
});
