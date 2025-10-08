import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "components/ThemedText";
import IconThreeDots from "@icons/IconThreeDots";
import IconTrash from "@icons/IconTrash";
import IconEye from "@icons/IconEye";

type NextClassProps = {
  name: string;
  room: string;
  time: string;
};

export default function NextClass({ room, name, time }: NextClassProps) {
  return (
    <View style={styles.nextClassContainer}>
      <View style={{ flex: 1 }}>
        <ThemedText type="link">Próxima clase</ThemedText>
        <ThemedText type="defaultBold">{name}</ThemedText>
        <ThemedText type="link">Aula {room}</ThemedText>
      </View>

      <View style={styles.timeBox}>
        <ThemedText type="defaultBold">{time}</ThemedText>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 8,
          width: 24,
          height: 24,
          borderRadius: "100%",
          backgroundColor: "#CBD2D6",
        }}
      >
        <TouchableOpacity>
          <IconThreeDots />
        </TouchableOpacity>
      </View>
      {/* <View style={{ flexDirection: "row", gap: 1 }}>
        <View style={[styles.slideOptionBox, { backgroundColor: "#B8EAAB" }]}>
          <IconEye />
        </View>
        <View style={[styles.slideOptionBox, { backgroundColor: "#FFB5B5" }]}>
          <IconTrash />
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  nextClassContainer: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 16,
    flexDirection: "row",
    gap: 16,
  },
  slideOptionBox: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  timeBox: {
    width: 64,
    height: 64,
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B5DAFF",
  },
});
