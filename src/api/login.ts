import { LoginFormType } from "@types";
import axios from "./axios";

export async function loginUser(userData: LoginFormType): Promise<any> {
    return axios.post(`auth/login`, userData, { withCredentials: true })
}


export async function checkAuth(): Promise<any> {
    return axios.get(`auth/checkAuth`, { withCredentials: true })
}

