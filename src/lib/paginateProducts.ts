import { Product } from "@/types/product";

const paginateProducts = (products: Product[], page: number) => {
  const itemsPerPage = 10;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginatedProducts = products.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return {
    itemsPerPage,
    totalPages,
    paginatedProducts,
  };
};

export default paginateProducts;
