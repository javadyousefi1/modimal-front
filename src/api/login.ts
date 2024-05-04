import { LoginFormType } from "@types";
import axios from "./axios";

export async function loginUser(userData: LoginFormType): Promise<any> {
    return axios.post(`/login`, userData, { withCredentials: true })
}


export async function checkAuth(): Promise<any> {
    return axios.get(`/checkAuth`, { withCredentials: true })
}

