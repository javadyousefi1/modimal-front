import React from 'react';
import { useInfiniteQuery } from "@tanstack/react-query";
// api
import { getAllProduct } from "@/api/product";
// query keys
import { queryKeys } from "@/constant/queryKeys";

const useProducts = () => {
  return useInfiniteQuery({
    queryKey: [queryKeys.products.GET_ALL_PRODUCTS],
    queryFn: ({ pageParam = 1 }) => getAllProduct({ pageSize: 10, pageIndex: pageParam }),
    getNextPageParam: lastPage => lastPage.data?.hasNextPage ? lastPage.data?.pageIndex + 1 : undefined,
    select: (data) => data.pages,
  });
};

export default useProducts;
