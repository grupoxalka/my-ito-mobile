import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Button from "components/Button";
import Logo from "components/Logo";

interface ClassItem {
  id: string;
  name: string;
  initial_time: string;
  end_time: string;
  category: string;
}

interface Props {
  visible: boolean;
  onClose: () => void;
  onSelect: (selectedClass: ClassItem) => void;
  classes: ClassItem[];
  selectedClasses?: ClassItem[];
}

export const ModalNotification: React.FC<Props> = ({
  visible,
  onClose,
  onSelect,
  classes,
  selectedClasses = [],
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState<
    { label: string; value: string; disabled?: boolean }[]
  >([]);

  useEffect(() => {
    const formattedItems = classes.map((classItem) => ({
      label: `${classItem.name} (${classItem.initial_time})`,
      value: classItem.id,
      disabled: selectedClasses.some((sel) => sel.id === classItem.id),
    }));
    setItems(formattedItems);
  }, [classes, selectedClasses]);

  const handleSelect = () => {
    if (!value) return;
    const classToSelect = classes.find((c) => c.id === value);
    if (classToSelect) {
      onSelect(classToSelect);
    }
    setValue(null);
    setOpen(false);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <Pressable
            style={styles.modalContainer}
            onPress={() => {
              if (open) {
                setOpen(false);
              }
            }}
          >
            <View style={styles.boxContainer}>
              <Text style={styles.title}>Mi Aula</Text>
              <Logo />
            </View>
            <View
              style={{
                alignItems: "flex-start",
                width: "100%",
                paddingVertical: 12,
              }}
            >
              <Text style={styles.title}>Crea tu recordatorio</Text>
            </View>

            <View style={{ zIndex: 1000, width: "100%", marginVertical: 12 }}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Selecciona tu clase"
                disabledItemLabelStyle={{ opacity: 0.5 }}
                style={styles.pickerContainer}
                dropDownContainerStyle={styles.dropDownContainer}
                onClose={() => setOpen(false)}
              />
            </View>

            <Button
              title="Crear recordatorio"
              onPress={handleSelect}
              // disabled={!value}
            />
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContainer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    borderTopStartRadius: 36,
    borderTopEndRadius: 36,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 28,
    marginTop: 8,
    color: "#121217",
  },
  pickerContainer: {
    width: "100%",
    borderRadius: 12,
    borderWidth: 0,
    tintColor: "#636E87",
    backgroundColor: "#F0F2F5",
    justifyContent: "center",
    marginVertical: 12,
    color: "#636E87",
    padding: 16,
  },
  dropDownContainer: {
    borderRadius: 12,
    // borderWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: "#DBDEE5",
    backgroundColor: "#F0F2F5",
    justifyContent: "center",
    marginVertical: 12,
    color: "#636E87",
  },
  // (styles.item, selectedItem, itemText ya no son necesarios)
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  boxContainer: {
    paddingTop: 12,
    paddingBottom: 12,
    width: "100%",
    alignItems: "center",
  },
});
