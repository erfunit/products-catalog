import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const EmptyState = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      className="w-full flex flex-col gap-3 items-center"
    >
      <Image src="/empty.png" width={300} height={300} alt="empty state" />
      <h3>No Product Found!</h3>
      <Link href="/" className="btn btn-outline">
        Reset
      </Link>
    </motion.div>
  );
};

export default EmptyState;
