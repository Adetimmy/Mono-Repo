import React from "react";

export type ChildrenProps = Readonly<{
  children: React.ReactNode;
}>;

export type UrlFetcherProps = {
    url:string,
    params?: Record<string, any>;
}

export type FetchUrlProps = {
  data: unknown[] | unknown,
  error: unknown | unknown []
}
