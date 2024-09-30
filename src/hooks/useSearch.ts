import debounce from "lodash.debounce";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useSearch = () => {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const router = useRouter();

  const debouncedSearch = debounce((value) => {
    router.push(`/?query=${encodeURIComponent(value)}`);
  }, 500);

  useEffect(() => {
    debouncedSearch(query);

    return () => {
      debouncedSearch.cancel();
    };
  }, [query]);

  return {
    query,
    setQuery,
  };
};

export default useSearch;
