"use client";

import { AnimatePresence } from "framer-motion";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import EmptyState from "./EmptyState";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <AnimatePresence>
      {products.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductList;
