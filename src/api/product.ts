import { addProducts, ServerDataResponse, ServerResult } from "@/types";
import axios from "./axios";
import { productItemType } from "@/interface/product";

export async function addProductApi(product: addProducts): Promise<any> {
    return axios.post(`product`, product)
}

export async function getAllProduct(query: {
    pageSize: number;
    pageIndex: number;
  }): Promise<ServerDataResponse<productItemType>> {
    return await axios.get("api/product/get-all-products", {
      params: query,
    });
    
  }