import Link from "next/link";
import { useRouter } from "next/router";
import React, {  useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axiosClient from "../api-client/axios-client";
import { DataContext } from "../store/globalState";

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const router = useRouter();
  const [data, setData] = useState({});
  const { state, dispatch } = useContext(DataContext);
  // const [toastmsg, settoastmsg] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data)
    const url = "/Users/login";
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    try {
      const res = await axiosClient.post(url, data);
      if (res.successful) {
        console.log("data", res);
        localStorage.setItem("token", JSON.stringify(res.token));
        localStorage.setItem("userInfo", JSON.stringify(res.fullName));
        router.push("/");
        dispatch({
          type: "NOTIFY",
          payload: { success: res.successful },
        });
      } else {
        dispatch({ type: "NOTIFY", payload: { error: res.error } });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button  className='btn-custom button-custom-primary' onClick={handleShow}>
        Đăng nhập/ Đăng ký
      </button>

      <Modal show={show} onHide={handleClose} animation={false} >
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body>
        <div className="mx-auto bg-white py-5 rounded w-75"
        >
          <h2 className="text-center formTitle">Đăng nhập</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Mật khẩu
              </label>
              <input
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
              <a>Quên mật khẩu?</a>
            </div>

            <button
              type="submit"
              className="btn-custom button-custom-primary w-100 "
            >
              Đăng nhập
            </button>
            
          </form>
        </div>
        </Modal.Body>
        <button onClick={handleClose} className="btn btn-danger position-absolute" style={{top: 5, right: 5}}>x</button>
      </Modal>
    </>
  );
}

export default LoginModal;