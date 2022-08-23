import React, { useState } from "react";
import { MdAttachMoney, MdOutlineChair } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import parse from "html-react-parser";

const InfoDefault = ({ setShowBooking, isDefault, data }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="rounded bg-white bg-opacity-75">
      <div className="row mx-0">
        <div className="col-3 col-md-2 d-flex py-2 justify-content-center align-items-center">
          <div className="w-100">
            <img src={data && data.logo} className="rounded-circle d-block w-100 " />
          </div>
        </div>
        <div className="col-9 col-md-10 py-2 px-0">
          <div className="">
            <h2 style={{ fontSize: 16 }}>{data.name}</h2>
            <p className="" style={{ fontSize: 14 }}>
              {data.address}
            </p>
            <div className="d-flex gap-1 align-items-center">
              <p className="mb-0" style={{ fontSize: 14 }}>
                <BsClock style={{ fontSize: 24 }} className="me-2" />
                06:00 - 22:00{" "}
              </p>
              <div className="d-flex gap-1  ">
                <button className="btn btn-outline-dark" href="#menu">
                  <BsFillJournalBookmarkFill style={{ fontSize: 24 }} className="" />
                </button>
                <button className="btn btn-outline-danger" onClick={() => setShowBooking(true)}>
                  <MdOutlineChair style={{ fontSize: 24 }} className="" />
                </button>
              </div>
            </div>
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
              {parse(data.webMap)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoDefault;
