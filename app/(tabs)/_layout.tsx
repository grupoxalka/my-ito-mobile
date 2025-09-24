/**
 * Bottom tab navigation layout for authenticated users
 * Defines the main navigation structure with 5 tabs: Home, Schedule, Files, Messages, Profile
 * Each tab has both outline and filled icon variants for active/inactive states
 */

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
import {
  TAB_INDEX,
  TAB_SCHEDULE,
  TAB_FILES,
  TAB_MESSAGES,
  TAB_PROFILE
} from "@constants";

/**
 * Main tab navigation layout component
 * Renders bottom tab bar with 5 main app sections
 * Icons change from outline to filled when tab is active
 * @returns Configured tab navigator with all main app screens
 */
export default function TabsLayout() {

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#000",        // Active tab color (black)
                tabBarInactiveTintColor : "#637087",  // Inactive tab color (gray)
                headerTitleAlign: "center",           // Center header titles
                headerRightContainerStyle : {paddingRight : 16}, // Header right padding
                headerLeftContainerStyle : {paddingLeft : 16},   // Header left padding  
                tabBarLabelStyle : {fontSize: 12}     // Tab label font size
            }}
        >
            {/* Home tab - main dashboard/landing screen */}
            <Tabs.Screen
                name={TAB_INDEX}
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ color, focused }) => focused
                        ? <IconHomeFilled color={color} />
                        : <IconHome color={color} />,
                }} />
                
            {/* Schedule tab - class schedules and calendar */}
            <Tabs.Screen
                name={TAB_SCHEDULE}
                options={{
                    title: "Horario",
                    tabBarIcon: ({ color, focused }) => focused
                        ? <IconCalendarFilled color={color} />
                        : <IconCalendar color={color} />,
                }} />
                
            {/* Files tab - document management and downloads */}
            <Tabs.Screen
                name={TAB_FILES}
                options={{
                    title: "Archivos",
                    tabBarIcon: ({ color, focused }) => focused
                        ? <IconFileFilled color={color} />
                        : <IconFile color={color} />,
                }} />
                
            {/* Messages tab - communication and notifications */}
            <Tabs.Screen
                name={TAB_MESSAGES}
                options={{
                    title: "Mensajes",
                    tabBarIcon: ({ color, focused }) => focused
                        ? <IconMessagesFilled color={color} />
                        : <IconMessages color={color} />
                }} />
                
            {/* Profile tab - user account and settings (no filled variant) */}
            <Tabs.Screen
                name={TAB_PROFILE}
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color }) => <IconUser color={color} />
                }} />
        </Tabs>
    );
}