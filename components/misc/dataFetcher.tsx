import useToastNofication from "@/lib/handleToast";
import { useFetch } from "@/lib/services";
import { ChildrenProps } from "@/lib/types";
import React from "react";

interface DataFetcherProps {
  url: string;
  children: (data: unknown | any) => React.ReactNode;
}

export const DataFetcher: React.FC<DataFetcherProps> = ({ url, children }) => {
  const { data, isLoading } = useFetch({ url });

  if (isLoading) {
    return <div className="justify-center flex items-center h-auto my-auto"><p>loading...</p></div>;
  }
  if (data?.error) {
    useToastNofication(data.error);
  }
  if (data) {
    return <>{children(data?.data)}</>;
  }
};
