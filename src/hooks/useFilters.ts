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
    const params = new URLSearchParams();
    if (priceRange[0] !== 0)
      params.append("minPrice", priceRange[0].toString());
    if (priceRange[1] !== 1000)
      params.append("maxPrice", priceRange[1].toString());
    if (category) params.append("category", category);
    if (brand) params.append("brand", brand);
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
