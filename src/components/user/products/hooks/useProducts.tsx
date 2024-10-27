// react query
import { useQuery } from "@tanstack/react-query";
// api
import { getAllExams } from "@/api/exam";
// query keys
import { queryKeys } from "@/constant/queryKeys";
import { getAllProduct } from "@/api/product";

const useProducts = () => {
  return useQuery({
    queryKey: [queryKeys.products.GET_ALL_PRODUCTS],
    queryFn: getAllProduct,
    select: (data) => data?.data?.data
  });
};

export default useProducts;
