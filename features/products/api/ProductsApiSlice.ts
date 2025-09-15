import { instance } from "@/lib/instance";
import { Product, ProductsParams } from "../types/Products";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await instance.get<Product[]>("products?limit=8");
    return response.data;
  } catch (error: any) {
    console.error("Failed to fetch products:", error);
    throw new Error(error?.message || "Failed to fetch products");
  }
};

export const getProducts = async ({
  limit = 12,
  sort = "asc",
  category = "all",
  search = "",
  page = 1,
}: ProductsParams = {}): Promise<Product[]> => {
  try {
    // Fetch all products
    const response = await instance.get<Product[]>("/products");
    let products = response.data;

    // Filter by category
    if (category && category !== "all") {
      products = products.filter((p) => p.category === category);
    }

    // Filter by search
    if (search) {
      const lowerSearch = search.toLowerCase();
      products = products.filter((p) =>
        p.title.toLowerCase().includes(lowerSearch)
      );
    }

    // Sort by price
    products.sort((a, b) =>
      sort === "asc" ? a.price - b.price : b.price - a.price
    );

    // Paginate
    const start = (page - 1) * limit;
    const paginated = products.slice(start, start + limit);

    return paginated;
  } catch (error: any) {
    console.error("Failed to fetch products:", error);
    throw new Error(error?.message || "Failed to fetch products");
  }
};

export const getProduct = async (id: string): Promise<Product> => {
  try {
    const response = await instance.get<Product>(`/products/${id}`);
    return response.data;
  } catch (error: any) {
    console.error(`Failed to fetch product with id ${id}:`, error);
    throw new Error(error?.message || `Failed to fetch product with id ${id}`);
  }
};

export const getCategories = async (): Promise<string[]> => {
  try {
    const response = await instance.get<string[]>("/products/categories");
    return response.data;
  } catch (error: any) {
    console.error("Failed to fetch categories:", error);
    throw new Error(error?.message || "Failed to fetch categories");
  }
};
