import axios from "./axios";

export async function getAllCartByUser(): Promise<any> {
    return axios.get(`/cart/getAllCartByUser`)
}

