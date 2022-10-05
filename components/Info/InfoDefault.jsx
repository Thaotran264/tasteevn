import React, { useEffect, useState } from "react";
import { MdAttachMoney, MdOutlineChair } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import parse from "html-react-parser";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import { formatter } from "../../utils";

const InfoDefault = ({ info ,maps}) => {
  // console.log(info);
  const [show, setShow] = useState(false);
  const [isLike, setIsLike] = useState(false)
  return (
    <div className="container">
      <article className="info__article">
        <section className="info__section">
          <div className="info__image">
            {isMobile ? 
            <Image alt={info?.name} className='rounded' src={info?.logo || '/image/logo512.png'} width={80} height={80} />
            : 
            <Image alt={info?.name} className='rounded' src={info?.logo || '/image/logo512.png'} width={150} height={150} />
            }
          </div>
          <div className="info__content">
            <h2 className="fw-bold">{info?.name}</h2>
            <div className={`bg-dark bg-opacity-10 rounded ${isMobile ? 'p-2' : 'p-3'}`}>
            <p><span className="fw-bold me-2">Địa chỉ:</span>
              {info?.address} - {info?.districtName} - {info?.wardName}
            </p>
            {/* <p><span className="fw-bold me-2">Mức giá:</span>
              {formatter.format(info?.minPrice)  || 0}-{formatter.format(info?.maxPrice) || 0}/món
            </p> */}
            <p className="mb-0"><span className="fw-bold me-2">Thời gian mở cửa:</span>
              {info?.openTimeA}-{info?.closeTimeA}
            </p>
            {/* <p className="mb-0"><span className="fw-bold me-2">Địa chỉ:</span>
              {info?.address}
            </p> */}
            </div>
            {/* <div className="d-flex gap-1">
              <button className="border-0" href="#menu">
                <BsFillJournalBookmarkFill style={{ fontSize: 24 }} className="" />
              </button>
              <button className="border-0 ">
                <MdOutlineChair style={{ fontSize: 24 }} className="" />
              </button>
          </div> */}
          </div>
          {!isLike ?
            <button onClick={() => setIsLike(!isLike)} className=" position-absolute" style={{ top: 5, right: 10, border: 'none', outline: 'none', backgroundColor: 'transparent' }}><AiOutlineHeart style={{ fontSize: 24, color: '#F7A76C', backgroundColor: 'transparent' }} /></button>
            : <button onClick={() => setIsLike(!isLike)} className=" position-absolute" style={{ top: 5, right: 10, border: 'none', outline: 'none', color: '#F7A76C', backgroundColor: 'transparent' }}><AiFillHeart style={{ fontSize: 24 }} /></button>
          }
        </section>
        <section className="info__section__map d-flex flex-column mb-1">
          <button
            className="btn border w-100 border-end-0 border-start-0 rounded-0 text-dark mb-2 hideOnDesktop"
            onClick={() => setShow(!show)}
          >
            Xem bản đồ
          </button>
          {show && (
            <div className="col-12 col-md-6 hideOnDeskTop mb-2">
              <div className="overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
                {parse(maps)}
              </div>
            </div>
          )}
        </section>
      </article>
    </div>
  );
};

export default InfoDefault;
