import { useQuery } from "@tanstack/react-query";
import { Product, ProductsParams } from "../../types/Products";
import { getProducts } from "../../api/ProductsApiSlice";

export const useGetAllProducts = (params: ProductsParams = {}) => {
  return useQuery<Product[], Error>({
    queryKey: ["products", params],
    queryFn: () => getProducts(params),
  });
};
