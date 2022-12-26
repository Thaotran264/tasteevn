import parse from "html-react-parser";
import Image from "next/image";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const InfoDefault = ({ info, maps }) => {
  const [show, setShow] = useState(false);
  const [isLike, setIsLike] = useState(false)
  return (
    <section className="container d-flex flex-column gap-2 py-2 " style={{backgroundColor: "#fff"}}>
      {
        info?.style == 1 && <Row className="mx-0">
          <Col xs={4} md={2} className='d-flex align-items-center justify-content-center px-0'>
            <Image
              alt={info?.data?.name}
              src={info?.data?.logo || '/image/logo512.png'}
              className='rounded'
              width={240} height={240} />
          </Col>
          <Col xs={8} md={9} className='py-2'>
            <h4 className="fw-bold customText">{info?.data?.name}</h4>
            <div>
              <p className="mb-0 customFontSize" ><span className="fw-bold me-2">Địa chỉ:</span>
                {info?.data?.address}, {info?.data?.wardName}, {info?.data?.districtName}, {info?.data?.cityName}
              </p>
              <p className="mb-0 customFontSize"><span className="fw-bold me-2" >Mở cửa:</span>
                {info?.data?.openTimeA}-{info?.data?.closeTimeA}
              </p>
            </div>
          </Col>
        </Row>
      }
      {
        info?.style == 2 && <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Image
              alt={info?.name}
              src={info?.logo || '/image/logo512.png'}
              className='rounded'
              width={180} height={180} />
          </Col>
          <Col xs={12} className="d-flex justify-content-center flex-column gap-2">
            <h4 className="fw-bold text-center mb-0 customText">{info?.name}</h4>
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
        info?.style == 3 && <Row>
          <Col xs={12} className="d-flex justify-content-center">
            {/* <Image
              alt={info?.name}
              src={info?.logo || '/image/logo512.png'}
              className='rounded'
              width={180} height={180} /> */}
          </Col>
          <Col xs={12} className="d-flex justify-content-center flex-column gap-2">
            <h4 className="fw-bold text-center mb-0 customText">{info?.name}</h4>
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
