import axios, { AxiosError } from "axios";


const useAxiosErrorHandler = (error:AxiosError | unknown) => {
  if (axios.isAxiosError(error)) {
    return { data: null, error: error.message };
  } else {
    return { data: null, error: "Something went wrong, try again later" };
  }
};

export default useAxiosErrorHandler;
