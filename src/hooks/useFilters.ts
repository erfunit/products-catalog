import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const useFilters = () => {
  const searchParams = useSearchParams();
  const [priceRange, setPriceRange] = useState<[number, number]>([
    Number(searchParams.get("minPrice")) || 0,
    Number(searchParams.get("maxPrice")) || 5000,
  ]);
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [brand, setBrand] = useState(searchParams.get("brand") || "");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(Array.from(searchParams.entries()));

    if (priceRange[0] !== 0) {
      params.set("minPrice", priceRange[0].toString());
    } else {
      params.delete("minPrice");
    }

    if (priceRange[1] !== 5000) {
      params.set("maxPrice", priceRange[1].toString());
    } else {
      params.delete("maxPrice");
    }

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    if (brand) {
      params.set("brand", brand);
    } else {
      params.delete("brand");
    }

    router.push(`/?${params.toString()}`);
  };

  return {
    priceRange,
    setPriceRange,
    category,
    setCategory,
    brand,
    setBrand,
    handleSubmit,
  };
};

export default useFilters;
