
export interface LoginParams {
    email: string;
    password: string;
}

export interface ForgotPasswordParams {
    email: string;
    newPassword: string;
    confirmedPassword: string;
}

export interface UserProfile {
    id: string;
    name: string;
    paternalSurname: string;
    maternalSurname: string;
    email: string;
    phone: string;
    studentDetails: {
        controlNumber: string;
        career: string;
        currentSemester: number;
        gpa: number;
    };
    createdAt?: string;
}