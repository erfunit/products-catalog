"use client";

import useSearch from "@/hooks/useSearch";
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";

const SearchBar: React.FC = () => {
  const { query, setQuery } = useSearch();

  return (
    <motion.div
      className="mb-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="input input-bordered w-full flex items-center gap-4 px-2">
        <CiSearch size={27} />
        <input
          type="text"
          placeholder="Search products..."
          className=""
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </motion.div>
  );
};

export default SearchBar;
