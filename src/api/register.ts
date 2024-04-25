import { RegisterFormType } from "@types";
import axios from "axios";

export async function registerUser(userData: RegisterFormType): Promise<any> {
    return axios.post(`https://modimal-shop.runflare.run/register`, userData)
}

