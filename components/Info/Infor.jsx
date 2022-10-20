import React from "react";
import { BsClock } from "react-icons/bs";
import { MdAttachMoney, MdOutlineChair } from "react-icons/md";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";
import parse from "html-react-parser";

const datar = ({ setShowBooking, isDefault, data }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      {!isDefault && (
        <div className="rounded bg-white bg-opacity-75">
          <div className="row mx-0">
            <div className="col-3 col-md-2 d-flex justify-content-center align-items-center">
              <div className="" style={{ width: 120, height: 120 }}>
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
              className="btn border w-100 border-end-0 border-start-0 rounded-0 text-dark mb-2"
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
      )}
      {isDefault && (
        <div className="d-flex flex-column align-items-center py-3">
          <div className="mb-3">
            <Image
              src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={480}
              height={300}
            />
          </div>
          <div className="w-100 text-center">
            <h2 className="fs-3">Mì Ý siêu to khổng lồ</h2>
            <p>606/52 Đường 3 Tháng 2, P. 14, Quận 10, TP. HCM</p>
            <p>
              <BsClock style={{ fontSize: 24 }} className="me-2" />
              06:00 - 22:00{" "}
            </p>
            <hr />
            <div className="d-flex w-25 mx-auto flex-column gap-2 justify-content-between">
              <a className="btn btn-dark" href="#menu">
                <BsFillJournalBookmarkFill style={{ fontSize: 24 }} className="me-2" />
                Menu
              </a>
              <button className="btn btn-danger" onClick={() => setShowBooking(true)}>
                <MdOutlineChair style={{ fontSize: 24 }} className="me-2" />
                Booking
              </button>
            </div>
          </div>
        </div>
      )}
      {isDefault && (
        <div className="d-flex flex-column align-items-center py-3">
          {/* <div className="mb-3">
          <Image
            src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={480}
            height={300}
          />
        </div> */}
          <div className="w-100 text-center">
            <h2 className="fs-3">Phở Siêu</h2>
            <p>606/52 Đường 3 Tháng 2, P. 14, Quận 10, TP. HCM</p>
            <p>
              <BsClock style={{ fontSize: 24 }} className="me-2" />
              06:00 - 22:00{" "}
            </p>
            <hr />
            <div className="d-flex w-25 mx-auto flex-column gap-2 justify-content-between">
              <a className="btn btn-dark" href="#menu">
                <BsFillJournalBookmarkFill style={{ fontSize: 24 }} className="me-2" />
                Menu
              </a>
              <button className="btn btn-danger" onClick={() => setShowBooking(true)}>
                <MdOutlineChair style={{ fontSize: 24 }} className="me-2" />
                Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default datar;
