import {
  View,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { useState, useRef, useEffect } from "react";
import { ThemedText } from "components/ThemedText";
import IconThreeDots from "@icons/IconThreeDots";
import IconTrash from "@icons/IconTrash";
import IconEye from "@icons/IconEye";

type NextClassProps = {
  name: string;
  room: string;
  time: any;
  onView?: () => void;
  onDelete?: () => void;
};

export default function NextClass({
  room,
  name,
  time,
  onView,
  onDelete,
}: NextClassProps) {
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: menuVisible ? 0 : 100,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [menuVisible]);

  const closeMenu = () => setMenuVisible(false);

  return (
    <TouchableWithoutFeedback onPress={closeMenu}>
      <View style={styles.nextClassContainer}>
        <View style={{ flex: 1 }}>
          <ThemedText type="link">Próxima clase</ThemedText>
          <ThemedText type="defaultBold">{name}</ThemedText>
          <ThemedText type="link">Aula {room}</ThemedText>
        </View>
        {!menuVisible && (
          <View style={styles.timeBox}>
            <ThemedText type="defaultBold">{time}</ThemedText>
          </View>
        )}
        {!menuVisible && (
          <Pressable
            style={styles.menuTrigger}
            onPress={(e) => {
              e.stopPropagation();
              setMenuVisible(true);
            }}
          >
            <IconThreeDots />
          </Pressable>
        )}

        {menuVisible && (
          <Animated.View
            style={[
              styles.menuContainer,
              { transform: [{ translateX: slideAnim }] },
            ]}
          >
            <Pressable
              style={[styles.menuItem, { backgroundColor: "#B8EAAB" }]}
              onPress={onView}
            >
              <IconEye />
            </Pressable>
            <Pressable
              style={[styles.menuItem, { backgroundColor: "#FFB5B5" }]}
              onPress={onDelete}
            >
              <IconTrash />
            </Pressable>
          </Animated.View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  nextClassContainer: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 16,
    gap: 16,
    position: "relative",
  },
  timeBox: {
    width: 64,
    height: 64,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B5DAFF",
  },
  menuTrigger: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    width: 24,
    height: 24,
    borderRadius: 100,
    backgroundColor: "#CBD2D6",
  },
  menuContainer: {
    position: "absolute",
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    zIndex: 10,
  },
  menuItem: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
});
