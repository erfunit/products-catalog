// components/ProductList.tsx
"use client";

import { AnimatePresence } from "framer-motion";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <AnimatePresence>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </AnimatePresence>
  );
};

export default ProductList;
