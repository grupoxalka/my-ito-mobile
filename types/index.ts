
/**
 * Type definitions for the ITO Mobile application
 * Defines interfaces and types used throughout the app for type safety
 */

/**
 * Parameters required for user login authentication
 * Used by the login screen and authentication service
 */
export interface LoginParams {
    email: string;      // User's email address
    password: string;   // User's password
}

/**
 * Parameters required for forgot password functionality
 * Used when users need to reset their password
 */
export interface ForgotPasswordParams {
    email: string;              // User's email address for password reset
    newPassword: string;        // New password to set
    confirmedPassword: string;  // Confirmation of new password (must match newPassword)
}