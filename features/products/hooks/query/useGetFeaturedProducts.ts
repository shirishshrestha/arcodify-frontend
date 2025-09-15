import { useQuery } from "@tanstack/react-query";
import { Product } from "../../types/Products";
import { fetchProducts } from "../../api/ProductsApiSlice";

export function useGetFeaturedProducts() {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery<Product[], Error>({
    queryKey: ["featuredProducts"],
    queryFn: fetchProducts,
  });

  return { products, isLoading, isError, error };
}
