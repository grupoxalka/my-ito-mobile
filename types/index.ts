
export interface LoginParams {
    email: string;
    password: string;
}

export interface ForgotPasswordParams {
    email: string;
    newPassword: string;
    confirmedPassword: string;
}