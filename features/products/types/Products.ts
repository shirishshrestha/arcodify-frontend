interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

interface ProductsParams {
  page?: number;
  limit?: number;
  sort?: string;
  category?: string;
  search?: string;
}

export type { Product, ProductPaginationProps, ProductsParams };
