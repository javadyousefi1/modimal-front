import { verifyEmailFormType } from "@types";
import axios from "./axios";

export async function verifyUserEmail(userData: verifyEmailFormType): Promise<any> {
    return axios.post(`/verifyEmail`, userData)
}

