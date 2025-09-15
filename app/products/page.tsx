"use client";

import { useSearchParams, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductCard, ProductPagination } from "@/features/products";
import { useGetAllProducts, useGetCategories } from "@/features/products/hooks";
import { SearchInput } from "@/features";

export default function ProductsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number.parseInt(searchParams.get("page") || "1");
  const limit = Number.parseInt(searchParams.get("limit") || "12");
  const sort = searchParams.get("sort") || "asc";
  const category = searchParams.get("category") || "all";
  const search = searchParams.get("search") || "";

  const params = { page, limit, sort, category, search };

  // Fetch products with current filters
  const { data: products = [], isLoading, error } = useGetAllProducts(params);

  // Fetch categories for filter
  const { data: categories = [] } = useGetCategories();

  const updateSearchParams = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    // Reset to page 1 when filters change
    if (Object.keys(updates).some((key) => key !== "page")) {
      params.set("page", "1");
    }

    router.push(`/products?${params.toString()}`);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-destructive mb-4">
              Error Loading Products
            </h1>
            <p className="text-muted-foreground">Please try again later.</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            All Products
          </h1>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <SearchInput  />

            <div className="flex gap-2">
              <Select
                value={category}
                onValueChange={(value) =>
                  updateSearchParams({ category: value })
                }
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={sort}
                onValueChange={(value) => updateSearchParams({ sort: value })}
              >
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asc">Price: Low to High</SelectItem>
                  <SelectItem value="desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-4 animate-pulse"
              >
                <div className="aspect-square bg-muted rounded-lg mb-4"></div>
                <div className="h-4 bg-muted rounded mb-2"></div>
                <div className="h-4 bg-muted rounded w-2/3 mb-4"></div>
                <div className="h-10 bg-muted rounded"></div>
              </div>
            ))}
          </div>
        ) : products.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <ProductPagination
              currentPage={page}
              totalPages={Math.ceil(20 / limit)}
              onPageChange={(newPage) =>
                updateSearchParams({ page: newPage.toString() })
              }
            />
          </>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-muted-foreground mb-2">
              No products found
            </h2>
            <p className="text-muted-foreground">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
