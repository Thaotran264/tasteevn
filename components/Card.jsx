import React from "react";
import { Button, Card } from "react-bootstrap";
import { useRouter } from "next/router";

const CardItems = ({ item }) => {
  const router = useRouter();
  const handleViewBtn = (id) => {
    router.push(`/${id}`);
  };
  return (
    <Card className="card-item">
      <Card.Img variant="top" src={item.image} onClick={() => handleViewBtn(item.brandId)} />
      <Card.Body>
        <Card.Title onClick={() => handleViewBtn(item.brandId)}>{item.brandName}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card&aposs
          content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardItems;
