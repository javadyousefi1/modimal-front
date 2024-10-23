import { addProducts } from "@/types";
import axios from "./axios";

export async function addProductApi(product: addProducts): Promise<any> {
    return axios.post(`product`, product)
}

export async function getProductApi(): Promise<any> {
    return axios.get(`product?id=664e250ae9b0763c86a4caeb`)
}