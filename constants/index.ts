export const TAB_INDEX = "index";
export const TAB_SCHEDULE = "schedule";
export const TAB_FILES = "files";
export const TAB_MESSAGES = "messages";
export const TAB_PROFILE = "profile";

export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    FORGOT_PASSWORD: "/forgot-password",
    CREATE_PASSWORD: "/create-password",
    REGISTER: "/register",
    ANNOUNCEMENTS: "/announcements",
    PROFILE: "/profile",
    SCHEDULE: "/schedule",
    FILES: "/files",
} as const;

export const API_URL = 'https://api.gpiconta.com/ito';

// Dummy data for messages
// This should be replaced with real data from the API
export const dummyMessages = [
    {
        id: 1,
        name: "Coordinador Academico",
        rol: "Coordinador",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        last_message: "ITO Organiza el Simposio Tecnológico Anual",
    },
    {
        id: 2,
        name: "Profesor Ramirez",
        rol: "Profesor",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        last_message: "No va a haber clase el lunes, nos vemos el martes.",
    },
    {
        id: 3,
        name: "Grupo de estudio de Matemáticas",
        rol: "Grupo de Estudio",
        image: "https://randomuser.me/api/portraits/lego/2.jpg",
        last_message: "Recordatorio: La reunión empieza mañana a las 5 PM.",
    }
];