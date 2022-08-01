import React from "react";
import { BsClock } from "react-icons/bs";
import { MdAttachMoney, MdOutlineChair } from "react-icons/md";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import Image from "next/image";
const Infor = ({ setShowBooking, isDefault }) => {
  return (
    <>
      {!isDefault && (
        <div className="container mb-2">
          <div className="row">
            <div
              className="col-12 col-md-6 d-flex justify-content-center "
              style={{ aspectRatio: "2 / 1" }}
            >
              <div style={{ width: '200px', height: '200px', borderRadius: '100%', border: '1px solid #000' }}>
                <img
                  src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  style={{ width: "100%", objectFit: "cover", borderRadius: '100%', height: '100%' }}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 py-2">
              <div className="text-center">
                <h2 className="fs-3">Mì Ý siêu to khổng lồ</h2>
                <p>606/52 Đường 3 Tháng 2, P. 14, Quận 10, TP. HCM</p>
                <p>
                  <BsClock style={{ fontSize: 24 }} className="me-2" />
                  06:00 - 22:00{" "}
                </p>
                <hr />
                <div className="row">
                  <div className="col">
                    <a className="btn btn-dark w-100" href="#menu">
                      <BsFillJournalBookmarkFill
                        style={{ fontSize: 24 }}
                        className="me-2"
                      />
                      Menu
                    </a>
                  </div>
                  <div className="col">
                    <button
                      className="btn btn-danger w-100"
                      onClick={() => setShowBooking(true)}
                    >
                      <MdOutlineChair
                        style={{ fontSize: 24 }}
                        className="me-2"
                      />
                      Booking
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isDefault && (
        <div className="container d-flex flex-column align-items-center py-3">
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
                <BsFillJournalBookmarkFill
                  style={{ fontSize: 24 }}
                  className="me-2"
                />
                Menu
              </a>
              <button
                className="btn btn-danger"
                onClick={() => setShowBooking(true)}
              >
                <MdOutlineChair style={{ fontSize: 24 }} className="me-2" />
                Booking
              </button>
            </div>
          </div>
        </div>
      )}
      {isDefault && (
        <div className="container d-flex flex-column align-items-center py-3">
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
                <BsFillJournalBookmarkFill
                  style={{ fontSize: 24 }}
                  className="me-2"
                />
                Menu
              </a>
              <button
                className="btn btn-danger"
                onClick={() => setShowBooking(true)}
              >
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

export default Infor;
