import React, { useState } from "react";
import { MdAttachMoney, MdOutlineChair } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import parse from "html-react-parser";

const InfoDefault = ({ info }) => {
  const [show, setShow] = useState(false);
  const [isLike, setIsLike] = useState(false)
  return (
    <div className="rounded bg-white bg-opacity-75">
      <div className="row mx-0">
        <div className="col-5 col-md-5 d-flex py-2 justify-content-center align-items-center">
          <div className="w-100">
            <img src={info?.logo} className="mx-auto border border-dark rounded-circle d-block" style={{ width: 130, height: 130 }} />
          </div>
        </div>
        <div className="col-7 col-md-7 py-2 px-0">
          <div className="position-relative">
            <h2 style={{ fontSize: 24 }}>{info?.name}</h2>
            <p className="mb-1" style={{ fontSize: 14 }}>
              {info?.address}
            </p>
            <p>Hotline: {info?.hotline}</p>
            {/* <p>{info?metaDescription}</p> */}
            <div className="mb-2">
              <p className="" style={{ fontSize: 14 }}>
                <BsClock style={{ fontSize: 24 }} className="me-2" />
                {info?.openTimeA}-{info?.closeTimeA}
              </p>
              {/* <p>{info?openTimeP}-{info?closeTimeP}</p> */}

            </div>
            <div className="d-flex gap-1  ">
              <button className="border-0" href="#menu">
                <BsFillJournalBookmarkFill style={{ fontSize: 24 }} className="" />
              </button>
              <button className="border-0 ">
                <MdOutlineChair style={{ fontSize: 24 }} className="" />
              </button>
            </div>
            {!isLike ?
              <button onClick={() => setIsLike(!isLike)} className=" position-absolute" style={{ top: 0, right: 10, border: 'none', outline: 'none', backgroundColor: 'transparent' }}><AiOutlineHeart style={{ fontSize: 24, color: '#F7A76C', backgroundColor: 'transparent' }} /></button>
              : <button onClick={() => setIsLike(!isLike)} className=" position-absolute" style={{ top: 0, right: 10, border: 'none', outline: 'none', color: '#F7A76C', backgroundColor: 'transparent' }}><AiFillHeart style={{ fontSize: 24 }} /></button>
            }
          </div>
        </div>
      </div>
      <div className="d-flex flex-column mb-1">
        <button
          className="btn border w-100 border-end-0 border-start-0 rounded-0 text-dark mb-2 hideOnDesktop"
          onClick={() => setShow(!show)}
        >
          Xem thông tin
        </button>
        {show && (
          <div className="col-12 col-md-6 hideOnDeskTop mb-2">
            <div className="overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
              {/* {parse(info?webMap)} */}
              This is map
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoDefault;
