import { addProducts } from "@/types";
import axios from "./axios";

export async function addProductApi(product: addProducts): Promise<any> {
    return axios.post(`product`, product)
}