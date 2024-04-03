import { LoginFormType } from "@types";
import axios from "axios";

export async function loginUser(userData: LoginFormType): Promise<any> {
    return axios.post(`https://modimal-shop.runflare.run/api/login`, userData)
}

