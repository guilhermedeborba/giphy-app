import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { apiUrls } from "@/config/constants";
import { useRouter } from "next/router";

const LIMIT = 10;

export default function useGifsSearch(initialSearch: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [gifs, setGifs] = useState([]);
  const [page, setPage] = useState<number>(0);
  const [search, setSearch] = useState<string>(initialSearch);
  const debouncedSearch = useDebounce<string>(search);
  const router = useRouter();

  useEffect(() => {
    setGifs([]);
    setPage(0);
    getGifs();
  }, [debouncedSearch]);

  function getNextPage() {
    setPage((page) => page + 1);
    getGifs();
  }

  async function getGifs() {
    setLoading(true);
    const offset = page * LIMIT;
    const res = await fetch(`/api/giphy/search?q=${search}&offset=${offset}`);
    const resJson = await res.json();
    setGifs(gifs.concat(resJson.data));
    setLoading(false);
  }

  return {
    getNextPage,
    setSearch,
    search,
    gifs,
    loading,
  };
}
