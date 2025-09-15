import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../api/ProductsApiSlice";

export const useGetCategories = () => {
  return useQuery<string[], Error>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};
