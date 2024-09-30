"use client";

import { motion } from "framer-motion";
import { MdOutlineDone } from "react-icons/md";
import Slider from "react-slider";
import useFilters from "@/hooks/useFilters";
import { brands } from "@/constants/brands";
import { categories } from "@/constants/categories";
import { Brand } from "@/types/brand";
import { Category } from "@/types/category";

const FilterBar: React.FC<{ callback: () => void }> = ({ callback }) => {
  const {
    priceRange,
    setPriceRange,
    category,
    setCategory,
    handleSubmit,
    brand,
    setBrand,
  } = useFilters();

  return (
    <motion.form
      onSubmit={(event) => {
        handleSubmit(event);
        callback();
      }}
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
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            className="select select-bordered"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand</span>
          </label>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value as Brand)}
            className="select select-bordered"
          >
            <option value="">Select Brand</option>
            {brands.map((br) => (
              <option key={br} value={br}>
                {br.charAt(0).toUpperCase() + br.slice(1)}
              </option>
            ))}
          </select>
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
