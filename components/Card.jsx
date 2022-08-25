import React from "react";
import { Button, Card } from "react-bootstrap";
import { useRouter } from "next/router";

const CardItems = ({ item }) => {
  const router = useRouter();
  const handleViewBtn = (id) => {
    router.push(`/${id}`);
  };
  return (
    <Card className="card-item card-config rounded">
      <Card.Img
        className="w-100"
        variant="top"
        src={item.image}
        onClick={() => handleViewBtn(item.brandId)}
      // style={{ height: 100, objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title onClick={() => handleViewBtn(item.brandId)}>{item.brandName}</Card.Title>
        <Card.Text className="" style={{ fontSize: 13, color: "#848484" }}>
          123 Hai Ba Trung, quan 1, tp HCM
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardItems;
