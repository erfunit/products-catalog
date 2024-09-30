import debounce from "lodash.debounce";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useSearch = () => {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const router = useRouter();

  const debouncedSearch = debounce((value) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));

    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }

    router.push(`/?${params.toString()}`);
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
