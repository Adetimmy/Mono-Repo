import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChildrenProps } from "./types";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 5,
    },
  },
});

const ReactQueryProvider: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
