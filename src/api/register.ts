import { RegisterFormType } from "@types";
import axios from "axios";

export async function registerUser(userData: RegisterFormType): Promise<any> {
    return axios.post(`https://fs-nodejs.liara.run/api/register`, userData)
}

