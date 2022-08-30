import useSWR from "swr";

export const getBrandDetail = (id) => {
  const url = `https://test.tastee.vn/Merchant/${id}`
  const { data, error, mutate } = useSWR(url);
  return {
    data: data?.data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
