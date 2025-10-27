import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import { Link } from "expo-router";
import IconBack from "@icons/IconBack";
import { PieChart } from "react-native-gifted-charts";

export default function AttendanceScreen() {
    const { subject } = useLocalSearchParams();

    const getSubjectData = () => {
        const subjects = {
            programacion: {
                title: "Programación",
                schedule: "1:00 PM - 2:00 PM",
            },
            calculo: {
                title: "Cálculo I", 
                schedule: "8:00 AM - 9:00 AM",
            },
            fisica: {
                title: "Física II",
                schedule: "9:00 AM - 10:00 AM", 
            },
            quimica: {
                title: "Química",
                schedule: "10:00 AM - 11:00 AM",
            },
            algebra: {
                title: "Álgebra Lineal",
                schedule: "11:00 AM - 12:00 PM",
            }
        };
        return subjects[subject as keyof typeof subjects] || subjects.programacion;
    };

    const subjectData = getSubjectData();

    
    const pieData = [
        {
            value: 55, 
            color: '#1EACFF',
            text: '45%',
            textSize: 16,
        },
        {
            value: 45,
            color: '#F44336', 
            text: '55%',
            textSize: 16,
        }
    ];

    return (
        <View style={styles.fullWhite}>
            <Stack.Screen options={{ headerShown: false }} />
            
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            
           
            <View style={styles.customHeader}>
                <Link href="/schedule" asChild>
                    <TouchableOpacity style={styles.backButton}>
                        <IconBack />
                    </TouchableOpacity>
                </Link>
                <Text style={styles.headerTitle}>Horario</Text>
                <View style={styles.placeholder} />
            </View>
            
            <View style={styles.content}>
                
                <View style={styles.subjectContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titlee}>{subjectData.title}</Text>
                        <Text style={styles.schedule}>{subjectData.schedule}</Text>
                    </View>
                </View>

               
                <View style={styles.upperCenteredContainer}>
                    {/* Contenedor de asistencia centrado */}
                    <View style={styles.attendanceContainer}>
                        <Text style={styles.attendanceTitle}>Asistencia</Text>
                        <Text style={styles.attendanceSubtitle}>al día actual</Text>
                    </View>

                   
                    <View style={styles.leftLegend}>
                        <View style={styles.legendItem}>
                            <View style={[styles.colorRectangle, { backgroundColor: '#F44336' }]} />
                            <View style={styles.legendTextContainer}>
                                <Text style={styles.statTopLabel}>Faltas</Text>
                            </View>
                        </View>
                        <View style={styles.legendItem}>
                            <View style={[styles.colorRectangle, { backgroundColor: '#1EACFF' }]} />
                            <View style={styles.legendTextContainer}>
                                <Text style={styles.statTopLabel}>Asistencia</Text>
                            </View>
                        </View>
                    </View>

                  
                    <View style={styles.chartContainer}>
                        <PieChart
                            data={pieData}
                            radius={109}
                            showText
                            textColor="white"
                            textSize={16}
                            showTextBackground={false}
                            donut={false}
                            initialAngle={96} 
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    fullWhite: {
        flex: 1,
        backgroundColor: "white",
    },
    customHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 0,
    },
    backButton: {
        padding: 8,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    placeholder: {
        width: 40,
    },
    content: {
        flex: 1,
        padding: 16,
    },
    subjectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    textContainer: {
        marginLeft: 0,
    },
    titlee: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    schedule: {
        fontSize: 14,
        color: "#876363",
        marginTop: 4,
    },
    upperCenteredContainer: {
        
        marginTop: 20,
        paddingLeft: 0,
    },
    attendanceContainer: {
        alignItems: 'center', 
        marginBottom: 20,
        width: '100%',
    },
    attendanceTitle: {
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 24,
        color: '#474747',
        
    },
    attendanceSubtitle: {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 14,
        color: '#474747',
        
        marginTop: 4,
    },
    leftLegend: {
        gap: 15,
        marginBottom: 40,
        alignItems: 'flex-start',
        marginLeft: 0,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    colorRectangle: {
        width: 70,
        height: 30,
    },
    legendTextContainer: {
        alignItems: 'flex-start',
    },
    statTopLabel: {
        fontSize: 14,
        fontWeight: '400',
        color: '#000',
    },
    chartContainer: {
        alignItems: 'center',
        width: '100%',
    },
});