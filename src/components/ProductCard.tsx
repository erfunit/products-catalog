import { Product } from "@/types/product";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const ProductCard = (product: Product) => {
  return (
    <motion.div
      layout
      layoutId={product.id.toString()}
      key={product.id}
      className="card bg-base-100 rounded-lg border"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{
        opacity: 0,
        y: -20,
        scale: 0.9,
        filter: "blur(5px)",
      }}
      transition={{
        duration: 0.7,
        ease: [0.5, 1.5, 0.5, 1],
        delay: Math.random() * 0.4,
        bounce: 1,
      }}
    >
      <figure className="p-2">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-full aspect-square"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold">${product.price}</span>
          <div className="flex gap-1">
            <div className="badge badge-outline">{product.category}</div>
            <div className="badge badge-secondary">{product.brand}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
