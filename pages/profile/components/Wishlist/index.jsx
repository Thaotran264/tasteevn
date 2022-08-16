import React, { useContext, useEffect, useRef, useState } from "react";

const HistoryOrder = ({ }) => {

  return (
    <>
      <div className="profile-content">
        <h6>Sản phẩm yêu thích</h6>
        <ul
          className="d-flex ps-0 justify-content-around"
          style={{ listStyle: "none", backgroundColor: "#fff" }}
        >
          <li className="p-2 text-center" style={{ cursor: "pointer", fontSize: 14 }}>
            Tất cả đơn
          </li>
          <li className="p-2 text-center" style={{ cursor: "pointer", fontSize: 14 }}>
            Chờ thanh toán
          </li>
          <li className="p-2 text-center" style={{ cursor: "pointer", fontSize: 14 }}>
            Đang xử lý
          </li>
          <li className="p-2 text-center" style={{ cursor: "pointer", fontSize: 14 }}>
            Đang vận chuyển
          </li>
          <li className="p-2 text-center" style={{ cursor: "pointer", fontSize: 14 }}>
            Đã giao
          </li>
          <li className="p-2 text-center" style={{ cursor: "pointer", fontSize: 14 }}>
            Đã huỷ
          </li>
        </ul>
        <form className="w-100 mb-3 position-relative">
          <input
            type="text"
            className="w-100 px-2 py-2"
            style={{ border: "none", outline: "none" }}
          />
          <button
            className="px-4 text-primary position-absolute end-0 "
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              border: "none",
              outline: "none",
              backgroundColor: "#fff",
              fontSize: 14,
              borderLeft: "1px solid blue",
            }}
          >
            Tìm
          </button>
        </form>
        <div className="rounded w-100 bg-white p-2">
          <h6 className="" style={{ fontSize: 14, opacity: 0.8 }}>  Giao hàng thành công </h6>
          <hr className="my-1" />
          <div className="row">
            <div className="col-2">
              <img
                src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="img-thumbnail w-100 h-100"
              />
            </div>
            <div className="col-8">Name of product</div>
            <div className="col-2 text-end">200.000 $</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-2">
              <img
                src="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="img-thumbnail w-100 h-100"
              />
            </div>
            <div className="col-8">Name of product</div>
            <div className="col-2 text-end">150.000 $</div>
          </div>
          <hr />
          <button
            className="btn btn-outline-dark rounded mb-3"
            style={{ fontSize: 14, opacity: 0.8 }}
          >
            Xem thêm 1 sản phẩm
          </button>
          <h6 className="text-end">
            <span style={{ opacity: 0.8, fontSize: 18, fontWeight: 300 }}>Tổng tiền:</span>{" "}
            350.000$
          </h6>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-outline-primary rounded mx-1"
              style={{ fontSize: 13 }}
            >
              Mua lại
            </button>
            <button
              className="btn btn-outline-primary rounded mx-1"
              style={{ fontSize: 13 }}
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HistoryOrder