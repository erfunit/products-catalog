"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.form>
  );
};

export default SearchBar;
