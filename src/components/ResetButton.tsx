"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { RxReset } from "react-icons/rx";

const ResetButton: React.FC = () => {
  const router = useRouter();

  const handleReset = () => {
    router.push("/");
  };

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <button
        className="btn w-full btn-outline btn-secondary"
        onClick={handleReset}
      >
        Reset Filters
        <RxReset />
      </button>
    </motion.div>
  );
};

export default ResetButton;
