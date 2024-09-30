"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";

const SearchBar: React.FC = () => {
  const serachParams = useSearchParams();
  const [query, setQuery] = useState(serachParams.get("query") || "");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/?query=${encodeURIComponent(query)}`);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="mb-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="form-control">
        <div className="input-group flex gap-2">
          <input
            type="text"
            placeholder="Search products..."
            className="input input-bordered w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-square">
            <CiSearch size={28} />
          </button>
        </div>
      </div>
    </motion.form>
  );
};

export default SearchBar;
