import { Asset } from "expo-asset";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Link } from "expo-router";
import IconBack from "@icons/IconBack";
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity, Modal, ScrollView } from "react-native";
import { PieChart } from "react-native-gifted-charts"



export default function ScheduleScreen() {
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    return (

        <View style={styles.fullWhite}>
            <Stack.Screen options={{
                headerLeft: () => (
                    <Link href="/" asChild>
                        <IconBack />
                    </Link>
                ),
            }} />
            <StatusBar backgroundColor="white" barStyle="dark-content" />


            <View style={styles.daysContainer}>

                <Text style={styles.dayText}>Lun</Text>
                <Text style={styles.dayyText}>Mar</Text>
                <Text style={styles.dayyText}>Mié</Text>
                <Text style={styles.dayyText}>Jue</Text>
                <Text style={styles.dayyText}>Vie</Text>


            </View>
            <View style={styles.separator} />
            <Link href={{ pathname: "/attendance/[subject]", params: { subject: "calculo" } }} asChild>
                <TouchableOpacity>
                    <Image
                        source={require("../../assets/images/Calculo.png")}
                        style={{ width: 48, height: 48, borderRadius: 8, marginLeft: 16, marginTop: 20 }}
                    />
                    <Text style={styles.titlee}>Cálculo I</Text>
                    <Text style={styles.schedule}>8:00 AM - 9:00 AM</Text>
                </TouchableOpacity>
            </Link>


            <Link href={{ pathname: "/attendance/[subject]", params: { subject: "fisica" } }} asChild>
                <TouchableOpacity>
                    <Image
                        source={require("../../assets/images/Fisica.png")}
                        style={{ width: 48, height: 48, borderRadius: 8, marginLeft: 16, marginTop: 20 }}
                    />
                    <Text style={styles.titlee}>Física II</Text>
                    <Text style={styles.schedule}>9:00 AM - 10:00 AM</Text>
                </TouchableOpacity>
            </Link>



            <Link href={{ pathname: "/attendance/[subject]", params: { subject: "quimica" } }} asChild>
                <TouchableOpacity>
                    <Image
                        source={require("../../assets/images/Quimica.png")}
                        style={{ width: 48, height: 48, borderRadius: 8, marginLeft: 16, marginTop: 20 }}
                    />
                    <Text style={styles.titlee}>Química</Text>
                    <Text style={styles.schedule}>10:00 AM - 11:00 AM</Text>
                </TouchableOpacity>
            </Link>



            <Link href={{ pathname: "/attendance/[subject]", params: { subject: "algebra" } }} asChild>
                <TouchableOpacity>
                    <Image
                        source={require("../../assets/images/AlgebraLineal.png")}
                        style={{ width: 48, height: 48, borderRadius: 8, marginLeft: 16, marginTop: 20 }}
                    />
                    <Text style={styles.titlee}>Álgebra Lineal</Text>
                    <Text style={styles.schedule}>11:00 AM - 12:00 PM</Text>
                </TouchableOpacity>
            </Link>

            <Link href={{ pathname: "/attendance/[subject]", params: { subject: "programacion" } }} asChild>
  <TouchableOpacity>
    <Image 
      source={require("../../assets/images/Programacion.png")} 
      style={{width: 48, height: 48, borderRadius:8, marginLeft:16, marginTop:20}} 
    />
    <Text style={styles.titlee}>Programación</Text>
    <Text style={styles.schedule}>1:00 PM - 2:00 PM</Text>
  </TouchableOpacity>
</Link>





        </View>
    );
}

const styles = StyleSheet.create({
    fullWhite: {
        flex: 1,
        backgroundColor: "white",
    },

    daysContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 32,
        marginBottom: 16,
        marginTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 1,
    },

    dayText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#000",

    },

    dayyText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#876363",

    },

    separator: {
        height: 1,
        backgroundColor: "#E5DBDB",
        marginHorizontal: 0,
        marginBottom: 0,
        padding: 1,
        gap: 32,

    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
        paddingHorizontal: 16,

    },

    titlee: {
        fontSize: 16,
        marginTop: -45,
        marginLeft: 80,
        gap: 16,

    },

    schedule: {
        fontSize: 14,
        color: "#876363",
        marginLeft: 80,

    }


});

