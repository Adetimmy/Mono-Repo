"use client"
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChildrenProps } from "./types";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 5,
      staleTime: 5 * 60 * 1000 // 5 minutes
    },
  },
});

const ReactQueryProvider: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
