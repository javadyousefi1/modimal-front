import { RegisterFormType } from "@types";
import axios from "./axios";

export async function registerUser(userData: RegisterFormType): Promise<any> {
    return axios.post(`auth/register`, userData)
}

export async function resendEmailVerifyCode(userData: RegisterFormType): Promise<any> {
    return axios.post(`resendEmailVerifyCode`, userData)
}

