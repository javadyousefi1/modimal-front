import axios from "./axios";

export async function getAllUsers(): Promise<any> {
    return axios.get(`/users`)
}

