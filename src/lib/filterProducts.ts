import { Product } from "@/types/product";

type Filter = {
  query: string;
  minPrice: number;
  maxPrice: number;
  category: string;
  brand: string;
};

const filterProducts = (products: Product[], filter: Partial<Filter>) =>
  products.filter((product) => {
    if (
      filter.query &&
      !product.name.toLowerCase().includes(filter.query.toLowerCase()) &&
      !product.description.toLowerCase().includes(filter.query.toLowerCase())
    ) {
      return false;
    }
    if (filter.minPrice !== undefined && product.price < filter.minPrice) {
      return false;
    }
    if (filter.maxPrice !== undefined && product.price > filter.maxPrice) {
      return false;
    }
    if (filter.category && product.category !== filter.category) {
      return false;
    }
    if (filter.brand && product.brand !== filter.brand) {
      return false;
    }
    return true;
  });

export default filterProducts;
