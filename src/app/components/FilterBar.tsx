// components/FilterBar.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MdOutlineDone } from "react-icons/md";
import Slider from "react-slider"; // Import the Slider component

const FilterBar: React.FC = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]); // Default range
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
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

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="mb-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-col gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </span>
          </label>
          <Slider
            value={priceRange}
            onChange={setPriceRange}
            min={0}
            max={5000}
            step={50}
            renderThumb={(props) => <div {...props} className="thumb" />}
            renderTrack={(props) => <div {...props} className="track" />}
            className="slider"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            placeholder="Category"
            className="input input-bordered"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand</span>
          </label>
          <input
            type="text"
            placeholder="Brand"
            className="input input-bordered"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-4 w-full">
        <button type="submit" className="btn w-full btn-primary">
          Apply Filters
          <MdOutlineDone />
        </button>
      </div>
    </motion.form>
  );
};

export default FilterBar;
