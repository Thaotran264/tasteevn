import React, { useState } from "react";
import parse from "html-react-parser";
import { listRes } from "../db";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import Photos from "./Modal/Photos";
import { Col, Row } from "react-bootstrap";

const MenuPhoto = ({ maps, brandView }) => {
  let isDefault = false
  const [showModal, setShowModal] = useState({
    open: false,
    data: null
  })
  const [styles, setStyles] = useState(3)
  const [count, setCount] = useState(0)
  const [bg, setBg] = useState()
  const handleShowModal = (list, data, id) => {
    setShowModal({
      open: !showModal.open,
      index: id,
      list: list
    })
  }
const Style = () => (
  <div className="bg-success bg-opacity-10 p-2 d-flex gap-3 align-items-center">
    <span>Style:</span>
    <select value={styles} onChange={(e)=>setStyles(e.target.value)} className='px-1 py-2 rounded'>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
      <option value={6}>6</option>
      <option value={9}>9</option>
    </select>
  </div>
)
  return (
    <section className="container bg-light py-2 d-flex flex-column gap-2">
      <Style />
      <Row>
        <Col xs={12}  md={6} className='overflow-hidden hideOnMobile'>
          {parse(maps) || ''}</Col>
        <Col md={6} xs={12}>
          <div className={`thumb-${styles} rounded`}>
            {brandView?.slice(0, styles).map((item, index) => (
              <div className={`box img${index + 1}`} key={index}
                onClick={() => handleShowModal(brandView?.slice(0, styles), item, index)}>
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
      {
        showModal.open && <Photos data={showModal} setShowModal={setShowModal} />}
    </section>
  );
};

export default MenuPhoto;
