'use client'
import { fetcher } from "@/actions/url-fetcher";
import { useQuery } from "@tanstack/react-query";
import { UrlFetcherProps } from "./types";


export function useFetch({url, params={}}:UrlFetcherProps) {
    // Ensures cache invalidation per query
    const queryKey = [url, params]
    return useQuery({
      queryKey,
      queryFn: async() => await fetcher({url, params}),
        
    });
  }
