import { Tabs } from "expo-router";
import IconHome from "@icons/IconHome";
import IconFile from "@icons/IconFile";
import IconCalendar from "@icons/IconCalendar";
import IconUser from "@icons/IconUser";
import IconMessages from "@icons/IconMessages";
import IconHomeFilled from "@icons/IconHomeFilled";
import IconCalendarFilled from "@icons/IconCalendarFilled";
import IconFileFilled from "@icons/IconFileFilled";
import IconMessagesFilled from "@icons/IconMessagesFilled";


export default function TabsLayout() {

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#000",
                tabBarInactiveTintColor : "#637087",
                headerTitleAlign: "center",
                headerRightContainerStyle : {paddingRight : 16},
                headerLeftContainerStyle : {paddingLeft : 16}
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ color, focused }) => focused
                        ? <IconHomeFilled color={color} />
                        : <IconHome color={color} />,
                }} />
            <Tabs.Screen
                name="horario"
                options={{
                    title: "Horario",
                    tabBarIcon: ({ color, focused }) => focused
                        ? <IconCalendarFilled color={color} />
                        : <IconCalendar color={color} />,
                }} />
            <Tabs.Screen
                name="archivos"
                options={{
                    title: "Archivos",
                    tabBarIcon: ({ color, focused }) => focused
                        ? <IconFileFilled color={color} />
                        : <IconFile color={color} />,
                }} />
            <Tabs.Screen
                name="mensajes"
                options={{
                    title: "Mensajes",
                    tabBarIcon: ({ color, focused }) => focused
                        ? <IconMessagesFilled color={color} />
                        : <IconMessages color={color} />
                }} />
            <Tabs.Screen
                name="perfil"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color }) => <IconUser color={color} />
                }} />
        </Tabs>
    );
}