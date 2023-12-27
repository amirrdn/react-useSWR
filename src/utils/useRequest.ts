/* eslint-disable prettier/prettier */
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import { StarWarsPlanets } from '../scheme/type'

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

const baseUrl = "https://swapi.dev/api";

export const useGetPosts = (path: string) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = baseUrl + path;
  const { data: posts, error } = useSWR<StarWarsPlanets>(url, fetcher);

  return { posts, error };
};

export const usePaginatePosts = (path: string) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = baseUrl + path;
  const PAGE_LIMIT = 10;

  const { data, error, size, setSize } = useSWRInfinite(
    (index: number) => `${url}?page=${index + 1}&limit=${PAGE_LIMIT}`,
    fetcher
  );

const posts = data ? [].concat(...data.map(fs => fs.results)) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_LIMIT);

  return { posts, error, isLoadingMore, size, setSize, isReachingEnd };
};
