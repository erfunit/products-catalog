import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const useSearch = () => {
  const serachParams = useSearchParams();
  const [query, setQuery] = useState(serachParams.get("query") || "");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/?query=${encodeURIComponent(query)}`);
  };

  return {
    query,
    setQuery,
    handleSubmit,
  };
};

export default useSearch;
