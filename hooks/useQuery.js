import useSWR from "swr";

export function getDetail(id) {
  const { data, error, mutate } = useSWR(id ? `https://pro.tastee.vn/Merchant/${id}` : null);
  return {
    data: data?.data,
    isError: error,
    isLoading: !error && !data,
    mutate,
  };
}
