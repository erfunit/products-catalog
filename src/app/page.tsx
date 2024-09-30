import { Suspense } from "react";
import ProductList from "@/components/ProductsList";
import Pagination from "@/components/Pagination";
import { getProducts } from "@/lib/api/getProducts";
import filterProducts from "@/lib/filterProducts";
import paginateProducts from "@/lib/paginateProducts";
import SearchAndFilter from "@/components/SearchAndFilter";

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

  const filteredProducts = filterProducts(products, {
    query,
    brand,
    minPrice,
    maxPrice,
    category,
  });

  const { paginatedProducts, totalPages } = paginateProducts(
    filteredProducts,
    page
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Product Catalog</h1>
      <div className="w-full grid grid-cols-12 gap-5">
        <SearchAndFilter />
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
