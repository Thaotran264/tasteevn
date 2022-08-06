import React from "react";
import useSWR from "swr";

const useGetBanner = () => {
  const url = "https://pro.tastee.vn/api/Home/get_product_slider";
  const { data, error, mutate } = useSWR(url);
  return {
    data: data?.data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export default useGetBanner;
