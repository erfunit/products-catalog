import { Suspense } from "react";
import { Product } from "@/types/product";
import ProductList from "../components/ProductsList";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";
import ResetButton from "../components/ResetButton";
import { getProducts } from "@/api/getProducts";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const products = await getProducts();
  const query = searchParams.query as string | undefined;
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const minPrice = searchParams.minPrice
    ? Number(searchParams.minPrice)
    : undefined;
  const maxPrice = searchParams.maxPrice
    ? Number(searchParams.maxPrice)
    : undefined;
  const category = searchParams.category as string | undefined;
  const brand = searchParams.brand as string | undefined;

  const filteredProducts = products.filter((product) => {
    if (
      query &&
      !product.name.toLowerCase().includes(query.toLowerCase()) &&
      !product.description.toLowerCase().includes(query.toLowerCase())
    ) {
      return false;
    }
    if (minPrice !== undefined && product.price < minPrice) {
      return false;
    }
    if (maxPrice !== undefined && product.price > maxPrice) {
      return false;
    }
    if (category && product.category !== category) {
      return false;
    }
    if (brand && product.brand !== brand) {
      return false;
    }
    return true;
  });

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Product Catalog</h1>
      <div className="w-full grid grid-cols-12 gap-5">
        <div className="col-span-6 lg:col-span-3 border h-fit p-3 rounded-lg sticky top-3 hidden md:block">
          <SearchBar />
          <FilterBar />
          <ResetButton />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-8">
          <Suspense fallback={<div>Loading...</div>}>
            <div className="mb-4">
              Total Products: {filteredProducts.length}
            </div>
            <ProductList products={paginatedProducts} />
            <Pagination currentPage={page} totalPages={totalPages} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
