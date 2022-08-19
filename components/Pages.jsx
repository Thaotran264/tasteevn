import { useRouter } from "next/router";
import React from "react";
import useGetBanner from "../hooks/useGetBanner";
import CardItems from "./Card";
import Loading from "./Loading";

const Pages = ({ data }) => {
  console.log(data);
  // const { data, isLoading, isError, mutate } = useGetBanner();
  const router = useRouter();
  const handleViewBtn = (id) => {
    router.push(`/${id}`);
  };
  // if (isLoading) return <Loading />;
  // if (isError) return <h2>{isError}</h2>;
  return (
    <div className="d-flex mb-2 flex-wrap justify-content-between">
      {data && data?.map((item) => <CardItems item={item} />)}
    </div>
  );
};

export default Pages;
