import { LoginFormType } from "@types";
import axios from "./axios";

export async function loginUser(userData: LoginFormType): Promise<any> {
    return axios.post(`/login`, userData, { withCredentials: true })
}

