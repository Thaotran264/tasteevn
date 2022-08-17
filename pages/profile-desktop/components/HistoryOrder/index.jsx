/**
 * @author [daoNguyen]
 * @email [daonds@vinorsoft.com ]
 * @create date 2022-08-17 12:01:44
 * @modify date 2022-08-17 12:01:44
 * @desc [description]
 */
/**
 * @author [daoNguyen]
 * @email [daonds@vinorsoft.com ]
 * @create date 2022-08-17 12:01:37
 * @modify date 2022-08-17 12:01:37
 * @desc [description]
 */
/**
 * @author [daoNguyen]
 * @email [daonds@vinorsoft.com ]
 * @create date 2022-08-17 12:01:31
 * @modify date 2022-08-17 12:01:31
 * @desc [description]
 */
/**
 * @author [daoNguyen]
 * @email [daonds@vinorsoft.com ]
 * @create date 2022-08-17 12:01:27
 * @modify date 2022-08-17 12:01:27
 * @desc [description]
 */
/**
 * @author [daoNguyen]
 * @email [daonds@vinorsoft.com ]
 * @create date 2022-08-17 12:01:27
 * @modify date 2022-08-17 12:01:27
 * @desc [description]
 */
import React, { useContext, useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import OrderDetail from '../detailOrder'

const HistoryOrder = ({ }) => {
  const [_isMobile, setMobile] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMobile(isMobile);
  }, [_isMobile]);


  return (
    <>
      <div className="profile-content">
        <h6>Thông tin đơn hàng</h6>
        <div className="rounded w-100 bg-white p-2">
          <hr className="my-1" />

          <div className="p-2">
            <div className="d-flex gap-1 justify-content-between">
              <div className="">
                <p className="date-order">13/08/2022 11:34</p>
                <p className=""> Tạo đơn: Đạo Nguyễn </p>
              </div>
              <div className="">
                <p className="color-primary">#123123456</p>
                <p className="color-success">Hoàn thành </p>
              </div>
            </div>
            <h3 className="profile-usertitle-name m-0 text-start"> Thành tiền: 201.000đ </h3>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-outline-danger rounded mx-1"
                style={{ fontSize: 13 }}
              >
                Huỷ đơn
              </button>

                <OrderDetail />
            </div>
          </div>
          <hr />

          <div className="p-2">
            <div className="d-flex gap-1 justify-content-between">
              <div className="">
                <p className="date-order">13/08/2022 11:34</p>
                <p className=""> Tạo đơn: Đạo Nguyễn </p>
              </div>
              <div className="">
                <p className="color-primary">#123123456</p>
                <p className="color-success">Hoàn thành </p>
              </div>
            </div>
            <h3 className="profile-usertitle-name m-0 text-start"> Thành tiền: 201.000đ </h3>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-outline-danger rounded mx-1"
                style={{ fontSize: 13 }}
              >
                Huỷ đơn
              </button>
              <OrderDetail />
            </div>
          </div>
          <hr />

          <div className="p-2">
            <div className="d-flex gap-1 justify-content-between">
              <div className="">
                <p className="date-order">13/08/2022 11:34</p>
                <p className=""> Tạo đơn: Đạo Nguyễn </p>
              </div>
              <div className="">
                <p className="color-primary">#123123456</p>
                <p className="color-success">Hoàn thành </p>
              </div>
            </div>
            <h3 className="profile-usertitle-name m-0 text-start"> Thành tiền: 201.000đ </h3>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-outline-danger rounded mx-1"
                style={{ fontSize: 13 }}
              >
                Huỷ đơn
              </button>
              <OrderDetail />
            </div>
          </div>
          <hr />

          <div className="p-2">
            <div className="d-flex gap-1 justify-content-between">
              <div className="">
                <p className="date-order">13/08/2022 11:34</p>
                <p className=""> Tạo đơn: Đạo Nguyễn </p>
              </div>
              <div className="">
                <p className="color-primary">#123123456</p>
                <p className="color-success">Hoàn thành </p>
              </div>
            </div>
            <h3 className="profile-usertitle-name m-0 text-start"> Thành tiền: 201.000đ </h3>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-outline-danger rounded mx-1"
                style={{ fontSize: 13 }}
              >
                Huỷ đơn
              </button>
              <OrderDetail />
            </div>
          </div>
          <hr />

          <div className="p-2">
            <div className="d-flex gap-1 justify-content-between">
              <div className="">
                <p className="date-order">13/08/2022 11:34</p>
                <p className=""> Tạo đơn: Đạo Nguyễn </p>
              </div>
              <div className="">
                <p className="color-primary">#123123456</p>
                <p className="color-success">Hoàn thành </p>
              </div>
            </div>
            <h3 className="profile-usertitle-name m-0 text-start"> Thành tiền: 201.000đ </h3>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-outline-danger rounded mx-1"
                style={{ fontSize: 13 }}
              >
                Huỷ đơn
              </button>
              <button
                className="btn btn-outline-primary rounded mx-1"
                style={{ fontSize: 13 }}
              >
                Xem chi tiết
              </button>
            </div>
          </div>
          <hr />

          <button
            className="btn btn-outline-dark rounded mb-3"
            style={{ fontSize: 14, opacity: 0.8 }}
          >
            Xem thêm 5 đơn hàng
          </button>


        </div>
      </div>
    </>
  )
}

export default HistoryOrder