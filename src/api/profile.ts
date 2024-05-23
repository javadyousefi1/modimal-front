import { verifyEmailFormType } from "@types";
import axios from "./axios";

export async function verifyUserEmail(userData: verifyEmailFormType): Promise<any> {
    return axios.post(`auth/verifyEmail`, userData)
}


export async function logout(): Promise<any> {
    return axios.get(`/users/logout`,)
}

export async function resendEmailVerifyCode(userData: verifyEmailFormType): Promise<any> {
    return axios.post(`/auth/resendEmailVerifyCode`, userData)
}