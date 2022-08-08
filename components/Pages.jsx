import { useRouter } from "next/router";
import React from "react";
import { Button, Card } from "react-bootstrap";
import useGetBanner from "../hooks/useGetBanner";
import Loading from "./Loading";

const Pages = () => {
  const { data, isLoading, isError, mutate } = useGetBanner();
  const router = useRouter();
  if (isLoading) return <Loading />;
  if (isError) return <h2>{isError}</h2>;
  const handleViewBtn = (id) => {
    router.push(`/${id}`);
  };
  return (
    <div className="d-flex mb-2 flex-wrap justify-content-between">
      {data &&
        data?.map((item) => (
          <Card className="card-item">
            <Card.Img variant="top" src={item?.image} onClick={() => handleViewBtn(item?.brandId)} />
            <Card.Body>
              <Card.Title onClick={() => handleViewBtn(item?.brandId)}>{item?.brandName}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default Pages;
