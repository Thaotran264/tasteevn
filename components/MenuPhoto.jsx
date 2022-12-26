import React, { useState } from "react";
import parse from "html-react-parser";
import { listRes } from "../db";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import Photos from "./Modal/Photos";
import { Col, Row } from "react-bootstrap";

const MenuPhoto = ({ maps, photos }) => {
  const brandView = photos?.data &&JSON.parse(photos?.data)
  const [showModal, setShowModal] = useState({
    open: false,
    data: null
  })
  const [count, setCount] = useState(0)
  const [bg, setBg] = useState()
  const handleShowModal = (list, data, id) => {
    setShowModal({
      open: !showModal.open,
      index: id,
      list: list
    })
  }

  return (
    <section className="container bg-light py-2 d-flex flex-column gap-2">
      <Row className="d-flex align-items-strecht">
        <Col xs={12} md={6} className='overflow-hidden hideOnMobile'>
          {maps && parse(maps) || ''}
          </Col>
        <Col md={6} xs={12}>
          <div className={`thumb-${photos?.styles == 2 ? 6 : 3} rounded`}>
            {brandView?.slice(0, photos?.styles == 2 ? 6 : 3).map((item, index) => (
              <div className={`box img${index + 1}`} key={index}
                onClick={() => handleShowModal(brandView?.slice(0, photos?.styles == 2 ? 6 : 3), item, index)}>
                <Image
                  src={item}
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
        </Col>
      </Row>
      {showModal.open && <Photos data={showModal} setShowModal={setShowModal} />}
    </section>
  );
};

export default MenuPhoto;
