import React, { useEffect, useState } from "react";
import { MdAttachMoney, MdOutlineChair } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight} from "react-icons/md";
import parse from "html-react-parser";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import { formatter } from "../../utils";
import { Button, Col, Row } from "react-bootstrap";

const InfoDefault = ({ info, maps }) => {
  const [show, setShow] = useState(false);
  const [isLike, setIsLike] = useState(false)
  const [infoStyle, setInfoStyle] = useState(1)
  const Style = () => (
    <div className='rounded bg-dark bg-opacity-10 d-flex gap-2 align-items-center p-2'>
      <span>Select style of menu:</span>
      <select onChange={(e)=>setInfoStyle(e.target.value)}
      className='p-2 rounded'>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
    </div>
  )
  return (
    <section className="container d-flex flex-column gap-2 py-2 " style={{backgroundColor: "#fff"}}>
      {/* <Style /> */}
      {
        infoStyle == 1 && <Row className="mx-0">
          <Col xs={4} md={2} className='d-flex align-items-center justify-content-center px-0'>
            <Image
              alt={info?.name}
              src={info?.logo || '/image/logo512.png'}
              className='rounded'
              width={240} height={240} />
          </Col>
          <Col xs={8} md={9} className='py-2'>
            <h4 className="fw-bold">{info?.name}</h4>
            <div>
              <p className="mb-0 customFontSize" ><span className="fw-bold me-2">Địa chỉ:</span>
                {info?.address}, {info?.wardName}, {info?.districtName}, {info?.cityName}
              </p>
              <p className="mb-0 customFontSize"><span className="fw-bold me-2" >Mở cửa:</span>
                {info?.openTimeA}-{info?.closeTimeA}
              </p>
            </div>
          </Col>
        </Row>
      }
      {
        infoStyle == 2 && <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Image
              alt={info?.name}
              src={info?.logo || '/image/logo512.png'}
              className='rounded'
              width={180} height={180} />
          </Col>
          <Col xs={12} className="d-flex justify-content-center flex-column gap-2">
            <h4 className="fw-bold text-center mb-0">{info?.name}</h4>
            <div className='bg-dark bg-opacity-10 rounded p-2' >
              <p className="mb-0"><span className="fw-bold me-2">Địa chỉ:</span>
                {info?.address}, {info?.wardName}, {info?.districtName}, {info?.cityName}
              </p>
              <p className="mb-0"><span className="fw-bold me-2">Thời gian mở cửa:</span>
                {info?.openTimeA}-{info?.closeTimeA}
              </p>
            </div>
          </Col></Row>
      }
      {
        infoStyle == 3 && <Row>
          <Col xs={12} className="d-flex justify-content-center">
            {/* <Image
              alt={info?.name}
              src={info?.logo || '/image/logo512.png'}
              className='rounded'
              width={180} height={180} /> */}
          </Col>
          <Col xs={12} className="d-flex justify-content-center flex-column gap-2">
            <h4 className="fw-bold text-center mb-0">{info?.name}</h4>
            <div className='bg-dark bg-opacity-10 rounded p-2' >
              <p className="mb-0"><span className="fw-bold me-2">Địa chỉ:</span>
                {info?.address}, {info?.wardName}, {info?.districtName}, {info?.cityName}
              </p>
              <p className="mb-0"><span className="fw-bold me-2">Thời gian mở cửa:</span>
                {info?.openTimeA}-{info?.closeTimeA}
              </p>
            </div>
          </Col>
          </Row>
      }

      <div className="d-flex justify-content-center">
        <button
          className="btn btn-outline-dark hideOnDesktop border-top border-bottom border-0 rounded-0 w-100"
          onClick={() => setShow(!show)}
        >
          Xem thông tin <MdOutlineKeyboardArrowRight />
        </button>
      </div>
        {show && (
          <div className="col-12 col-md-6 hideOnDeskTop">
            <div className="overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
              {maps ? parse(maps) : ''}
            </div>
          </div>
        )}
    </section>
  );
};

export default InfoDefault;
