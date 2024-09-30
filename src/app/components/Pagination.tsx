// components/Pagination.tsx
"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/?page=${page}`);
  };

  return (
    <motion.div
      className="btn-group mt-8 gap-2 flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`btn ${currentPage === page ? "btn-active" : ""}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
    </motion.div>
  );
};

export default Pagination;
