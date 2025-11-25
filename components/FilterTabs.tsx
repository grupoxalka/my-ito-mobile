import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";


export type FilesFilterKey = "subject" | "type" | "date";

export interface FilterTab {
  key: FilesFilterKey;
  label: string;
}
export interface FilterTabsProps {
  tabs: FilterTab[];
  activeKey: FilesFilterKey;
  onChange: (key: FilesFilterKey) => void;
}

export function FilterTabs({ tabs, activeKey, onChange }: FilterTabsProps) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = tab.key === activeKey;
        return (
          <Pressable
            key={tab.key}
            onPress={() => onChange(tab.key)}
            style={[styles.tab, isActive && styles.tabActive]}
          >
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    marginTop: 12,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  tabActive: {
    borderBottomColor: "#070a11ff",
  },
  label: {
    fontSize: 14,
    fontWeight: "400",
    color: "#637087",
  },
  labelActive: {
    fontWeight: "600",
    color: "#070a11ff",
  },
});
