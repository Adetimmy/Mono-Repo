"use server";
import useAxiosErrorHandler from "@/lib/handleAxiosError";
import { UrlFetcherProps } from "@/lib/types";
import axios, { AxiosError } from "axios";

const baseUrl = "http://localhost:4000";
const base = "https://jsonplaceholder.typicode.com";

const axiosInstance = axios.create({ baseURL: base, withCredentials: true });

const fetcher = async ({ url, params = {} }: UrlFetcherProps) => {
  try {
    const query = new URLSearchParams(params).toString();
    const api = query ? `${url}?${query}` : url;

    const res = await axiosInstance.get(api);

    return res.statusText === "OK"
      ? { data: res.data, error: null }
      : { data: null, error: "Something went wrong, try again later" };

  } catch (error) {
   return useAxiosErrorHandler(error);
  }
};

export { fetcher };
