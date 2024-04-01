import { RegisterFormType } from "@types";
import axios from "axios";

export async function registerUser(userData: RegisterFormType): Promise<any> {
    return axios.post(`http://localhost:3000/api/register`, userData)
}

