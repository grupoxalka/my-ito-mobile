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
import { Stack } from "expo-router";
import {
  TAB_INDEX,
  TAB_SCHEDULE,
  TAB_FILES,
  TAB_MESSAGES,
  TAB_PROFILE
} from "@constants";


export default function TabsLayout() {

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#000",
                tabBarInactiveTintColor : "#637087",
                headerTitleAlign: "center",
                headerRightContainerStyle : {paddingRight : 16},
                headerLeftContainerStyle : {paddingLeft : 16},
                tabBarLabelStyle : {fontSize: 12},
<<<<<<< HEAD

                headerStyle: {
                     backgroundColor: "white",
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0, 

                }
=======
                headerStatusBarHeight : 0,
                headerShadowVisible : false,
>>>>>>> main
            }}
        >
            <Tabs.Screen
                name={TAB_INDEX}
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ color, focused }) => focused
                        ? <IconHomeFilled color={color} />
                        : <IconHome color={color} />,
                }} />
            <Tabs.Screen
                name={TAB_SCHEDULE}
                options={{
                    title: "Horario",
                    tabBarIcon: ({ color, focused }) => focused
                        ? <IconCalendarFilled color={color} />
                        : <IconCalendar color={color} />,
                }} />
            <Tabs.Screen
                name={TAB_FILES}
                options={{
                    title: "Archivos",
                    tabBarIcon: ({ color, focused }) => focused
                        ? <IconFileFilled color={color} />
                        : <IconFile color={color} />,
                }} />
            <Tabs.Screen
                name={TAB_MESSAGES}
                options={{
                    title: "Mensajes",
                    tabBarIcon: ({ color, focused }) => focused
                        ? <IconMessagesFilled color={color} />
                        : <IconMessages color={color} />
                }} />
            <Tabs.Screen
                name={TAB_PROFILE}
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color }) => <IconUser color={color} />
                }} />
        </Tabs>
    );
}