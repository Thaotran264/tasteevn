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
  const [show, setShow] = useState(false);
  const [isLike, setIsLike] = useState(false)
  return (
    <section className="container bg-light px-0 py-2">
      <div className="d-flex px-0">
          <div className="info__image">
            <Image alt={info?.name} className='rounded' src={info?.logo || '/image/logo512.png'} height={160} width={160} />
          </div>
          <div className="info__content">
            <h2 className="fw-bold">{info?.name}</h2>
            <div className='bg-dark bg-opacity-10 rounded p-2' >
            <p className=""><span className="fw-bold me-2">Địa chỉ:</span>
              {info?.address}, {info?.wardName}, {info?.districtName}, {info?.cityName}
            </p>
            <p className=""><span className="fw-bold me-2">Thời gian mở cửa:</span>
              {info?.openTimeA}-{info?.closeTimeA}
            </p>
            {/* <p><span className="fw-bold me-2 mb-0">Mức giá:</span>
              {formatter.format(info?.minPrice)  || 0}-{formatter.format(info?.maxPrice) || 0}/món
            </p> */}
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
      </div>
        <div className="info__section__map d-flex flex-column mb-1">
          <button
            className="btn border w-100 border-end-0 border-start-0 rounded-0 text-dark mb-2 hideOnDesktop"
            onClick={() => setShow(!show)}
          >
            Xem bản đồ
          </button>
          {show && (
            <div className="col-12 col-md-6 hideOnDeskTop mb-2">
              <div className="overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
                {maps ? parse(maps) : '' }
              </div>
            </div>
          )}
        </div>
    </section>
  );
};

export default InfoDefault;
