// StyledText.tsx
import { StyleSheet, Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  type?: "default" | "defaultBold" | "title" | "link";
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
});
