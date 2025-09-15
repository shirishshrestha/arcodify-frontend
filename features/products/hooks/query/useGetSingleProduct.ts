import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../api/ProductsApiSlice";

export const useGetSingleProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
    enabled: !!id,
  });
};
