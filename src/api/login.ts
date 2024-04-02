import { LoginFormType } from "@types";
import axios from "axios";

export async function loginUser(userData: LoginFormType): Promise<any> {
    return axios.post(`https://fs-nodejs.liara.run/api/login`, userData)
}

