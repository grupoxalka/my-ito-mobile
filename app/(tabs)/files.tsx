import React, { useMemo, useState } from "react";
import {View,ScrollView,StyleSheet,TextInput,Text,} from "react-native";
import { Stack, Link } from "expo-router";
import { FilterTabs } from "components/FilterTabs";
import { mockFiles } from "@constants";
import FielCard from "components/FileCard";
import Button from "components/Button";
import IconSearch from "@icons/IconSearch";
import IconBack from "@icons/IconBack";
import IconFile from "@icons/IconFile";

type FilesFilterKey = "subject" | "type" | "date"; 


interface AcademicFile {
  id: string;
  subject: string;
  title: string;
  type: "PDF" | "DOCX" | "PPTX";
  uploadedAt?: string; 
}

const FILTER_TABS: { key: FilesFilterKey; label: string }[] = [
  { key: "subject", label: "Asignaturas" },
  { key: "type", label: "Tipo de archivo" },
  { key: "date", label: "Fecha de carga" },
];

export default function FilesScreen() {
 
  const data = mockFiles as AcademicFile[];

  const [activeFilter, setActiveFilter] = useState<FilesFilterKey>("subject");
  const [search, setSearch] = useState("");


  const filteredFiles = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return data;

    return data.filter((file) => {
      const title = file.title?.toLowerCase() ?? "";
      const subject = file.subject?.toLowerCase() ?? "";
      const type = file.type.toLowerCase();

      return (
        title.includes(term) || 
        subject.includes(term) || 
        type.includes(term)
      );
    });
  }, [search, data]);


  const groups = useMemo(() => {
    const record: Record<string, AcademicFile[]> = {};

    filteredFiles.forEach((file) => {
      let groupKey: string;

      switch (activeFilter) {
        case "subject": {
          groupKey = file.subject || "Sin asignatura";
          break;
        }
        case "type": {
          groupKey = file.type; 
          break;
        }
        case "date": {
         
          if (file.uploadedAt) {
            groupKey = file.uploadedAt.slice(0, 10);
          } else {
            groupKey = "Sin fecha";
          }
          break;
        }
        default: {
          groupKey = "Otros";
        }
      }

      if (!record[groupKey]) { 
        record[groupKey] = []; 
      }
      record[groupKey].push(file); 
    });

   
    if (activeFilter === "date") {
      return Object.entries(record)
        .sort(([a], [b]) => b.localeCompare(a)) 
        .map(([label, files]) => ({ label, files }));
    }

    return Object.entries(record).map(([label, files]) => ({ label, files }));
  }, [filteredFiles, activeFilter]);

  const showEmptyState = groups.length === 0;

  return (
    <>
      <Stack.Screen
        options={{
          title: "Archivos",
          headerLeft: () => (
            <Link href="/" asChild>
              <IconBack />
            </Link>
          ),
        }}
      />

      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <IconSearch color="#636E87" />
          <TextInput
            placeholder="Buscar archivos"
            style={styles.searchInput}
            placeholderTextColor="#636E87"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <View style={styles.tabsWrapper}>
          <FilterTabs
            tabs={FILTER_TABS}
            activeKey={activeFilter}
            onChange={(key) => setActiveFilter(key as FilesFilterKey)}
          />
        </View>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          {showEmptyState ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyTitle}>Sin datos</Text>
              <Text style={styles.emptyText}>
                No se encontraron archivos para este filtro.
              </Text>
            </View>
          ) : (
            groups.map(({ label, files }) => (
              <View key={label} style={styles.group}>
                <Text style={styles.groupTitle}>{label}</Text>

                {files.map((file) => (
                  <FielCard
                    key={file.id}
                    title={file.title}
                    type={file.type}
                    icon={<IconFile />}
                  />
                ))}
              </View>
            ))
          )}
        </ScrollView>
        <View style={styles.bottomBar}>
          <Button
            title="Añadir nuevo archivo"
            onPress={() => {

            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F2F5",
    borderRadius: 12,
    margin: 16,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingVertical: 8,
    fontSize: 16,
    color: "#333",
  },
  tabsWrapper: {
    marginHorizontal: 16,
    marginTop: 4,
  },
  scroll: {
    flex: 1,
    marginTop: 8,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  group: {
    marginBottom: 16,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#121217",
    marginBottom: 8,
  },
  bottomBar: {
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 16,
  },
  emptyContainer: {
    alignItems: "center",
    marginTop: 24,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#121217",
  },
  emptyText: {
    fontSize: 14,
    color: "#636E87",
    marginTop: 6,
    textAlign: "center",
  },
});


