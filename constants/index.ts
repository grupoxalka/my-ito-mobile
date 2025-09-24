/**
 * Application constants and configuration values
 * This file contains all static values used throughout the app including
 * navigation tab identifiers, route paths, and API endpoints
 */

// Tab navigation identifiers - used for routing between main app sections
export const TAB_INDEX = "index";
export const TAB_SCHEDULE = "schedule";
export const TAB_FILES = "files";
export const TAB_MESSAGES = "messages";
export const TAB_PROFILE = "profile";

/**
 * Application route paths for navigation
 * Defines all available screen routes in the app
 */
export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    FORGOT_PASSWORD: "/forgot-password",
    CREATE_PASSWORD: "/create-password",
    REGISTER: "/register",
} as const;

/**
 * Base API URL for backend services
 * All API requests are made to endpoints under this URL
 */
export const API_URL = 'https://api.gpiconta.com/ito';