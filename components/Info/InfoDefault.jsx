import React, { useState } from "react";
import { MdAttachMoney, MdOutlineChair } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import parse from "html-react-parser";
import Image from "next/image";

const InfoDefault = ({ info }) => {
  const [show, setShow] = useState(false);
  const [isLike, setIsLike] = useState(false)
  return (
    <div className="container">
      <article className="container info__article">
        <section className="info__section">
          <div className="info__image">
            <Image src={info?.logo || '/image/logo512.png'} width={384} height={384} />
          </div>
          <div className="info__content ">
            <h5>{info?.name}</h5>
            <p>
              {info?.address}
            </p>
            <p>Hotline: {info?.hotline}</p>
            <p >
              <BsClock style={{ fontSize: 24 }} className="me-2" />
              {info?.openTimeA}-{info?.closeTimeA}
            </p>
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
                {/* {parse(info?webMap)} */}
                This is map
              </div>
            </div>
          )}
        </section>
      </article>
    </div>
  );
};

export default InfoDefault;
