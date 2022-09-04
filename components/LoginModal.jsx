/**
 * @author [daoNguyen]
 * @email [daonds@vinorsoft.com ]
 * @create date 2022-08-03 16:58:44
 * @modify date 2022-08-03 16:58:44
 * @desc [description]
 */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import axiosClient from "../api-client/axios-client";
import { DataContext } from "../store/globalState";
import { AiOutlineClose, AiOutlineLogin, AiOutlineUser } from "react-icons/ai";
import Countdown from "./Countdown";
import { accountAPI } from "../api-client/account";

function LoginModal({ btnStyle }) {
  const [show, setShow] = useState(false);
  const ip1 = useRef();
  const ip2 = useRef();
  const ip3 = useRef();
  const ip4 = useRef();
  const ip5 = useRef();
  const ip6 = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const router = useRouter();
  const [data, setData] = useState({});
  const [isDisableRePass, setIsDisableRepass] = useState(true);
  const [isShowCount, setIsShowCount] = useState(true);
  const [statusInput, setStatusInput] = useState({});
  const [validatorForm, setValidatorForm] = useState({
    passwordMsg: false,
    nameMsg: false,
  });
  const { state, dispatch } = useContext(DataContext);
  const [textButton, setTextButton] = useState({ btnSubmit: "Tiếp tục" });
  // const [toastmsg, settoastmsg] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Data Form ", data);
    if (statusInput.isEmptyPhone) {
      let params = {
        Email: data.PhoneNumber,
        password: data.Password,
      };
      dispatch({ type: "NOTIFY", payload: { loading: true } });
      login(params);
    } else {
    }
  };

  const login = async (params) => {
    console.log('%cLoginModal.jsx line:56 params', 'color: #007acc;', params);
    try {
      const res = await accountAPI.login(params);
      // if (res.successful && res.data) {
        console.log('huahduhauhđâsd',res)
        localStorage.setItem("token", JSON.stringify(res.token));
        localStorage.setItem("userInfo", JSON.stringify(res));
        dispatch({ type: "NOTIFY", payload: { success: res.successful } });
dispatch({type: 'AUTH', payload: res})
        handleClose();
        router.push("/");
        window.location.reload();
      // } else {
      //   dispatch({ type: "NOTIFY", payload: { error: res.error } });
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const setPhone = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    setData({ PhoneNumber: value });
    if (value.length == 10) {
      // Nhập đủ số điện thoại
      setTimeout(() => {
        checkEmtyPhone(value);
      }, 500);
    } else {
      // Niếu ko đủ thì setStatus
      let status = {
        isEmptyPhone: false,
        statusOTP: false,
      };
      setStatusInput(status);
    }
  };
  const checkEmtyPhone = async (phone) => {
    try {
      const res = await accountAPI.checkPhoneExist(phone)
      if (res && res.successful && res.data.isExist) {
        setStatusInput({ isEmptyPhone: true });
        setTextButton({ btnSubmit: "Đăng nhập" });
      } else {
        setStatusInput({ isEmptyPhone: false, showFormRegister: true, showSendOTP: true });
        setTextButton({ btnSubmit: "Đăng ký" });
      }
    } catch (error) {

    }
  };

  let arr = [];
  const setOTP = (e, key) => {
    let value = String(e.target.value).replace(/\D/g, "");
    let arrTemp = arr;
    arrTemp.push(value);
    key.current.focus();
    if (arrTemp.length == 6) {
      let OTP = arrTemp.join("");
      setData({ verifyCode: OTP });
      arr = [];
      checkOTP(OTP);
    }
  };

  const reSendOTP = async () => {
    setData({ ...data, verifyCode: "" });
    ip1.current.value = "";
    ip2.current.value = "";
    ip3.current.value = "";
    ip4.current.value = "";
    ip5.current.value = "";
    ip6.current.value = "";
    try {
      const res = await accountAPI.resendSmsCode(data?.authenId);
      console.log("%cLoginModal.jsx line:128 data.authenId", "color: #007acc;", data?.authenId);
      console.log("%cLoginModal.jsx line:128 res", "color: #007acc;", res);
    } catch (error) { }
  };

  const checkOTP = async (OTP) => {
    let params = {
      authenId: data.authenId,
      verifyCode: data.verifyCode || OTP,
    };

    let paramLogin = {
      Email: data.PhoneNumber,
      password: data.Password,
    };
    try {
      const res = await accountAPI.verifySmsCode(params);
      if (res.successful && res.data) {
        setStatusInput({ ...statusInput, isShowMsgErrOTP: false });
        login(paramLogin);
      } else {
        setStatusInput({ ...statusInput, isShowMsgErrOTP: true });
      }
    } catch (error) {
      console.log("%cLoginModal.jsx line:133 error", "color: #007acc;", error);
    }

    if (OTP == data) {
      setStatusInput({
        isEmptyPhone: false,
        showFormRegister: true,
        showSendOTP: false,
        showFormOTP: true,
        isTrueOTP: true,
        isShowMsgErrOTP: false,
      });
    } else {
      setStatusInput({
        isEmptyPhone: false,
        showFormRegister: true,
        showSendOTP: true,
        showFormOTP: true,
        isTrueOTP: false,
        isShowMsgErrOTP: true,
      });
    }
  };

  const handleRegister = (key) => {
    setTextButton({ btnSubmit: "Đăng ký" });
    if (key == "haveAccount") {
      setStatusInput({});
      setData({ PhoneNumber: "" });
      console.log("%cLoginModal.jsx line:128 data", "color: #007acc;", data);
    }
  };

  const sendOTP = async () => {
    const formData = new FormData();
    formData.append("PhoneNumber", data.PhoneNumber);
    formData.append("ConfirmPassword", data.ConfirmPassword);
    formData.append("Password", data.Password);
    formData.append("FullName", data.FullName);

    let validatorOBJ = { passwordMsg: false, nameMsg: false };
    if (!data.FullName) {
      validatorOBJ.nameMsg = true;
    }
    if (!data.Password) {
      validatorOBJ.passwordMsg = true;
    }
    if (!validatorOBJ.nameMsg && !validatorOBJ.passwordMsg) {
      console.log("%cLoginModal.jsx line:152 hiện OTP form", "color: #007acc;", formData);
      setStatusInput({
        showFormOTP: true,
        showSendOTP: true,
        showFormRegister: true,
        isEmptyPhone: false,
        isShowMsgErrOTP: false,
      });
      try {
        const res = await accountAPI.register(formData);
        console.log("%cLoginModal.jsx line:163 res", "color: #007acc;", res);
        if (res.successful && res.data) {
          setStatusInput({ ...statusInput, showSendOTP: false, showFormOTP: true });
          setData({ ...data, authenId: res.data.authenID });
        }
      } catch (error) {
        console.log("%cLoginModal.jsx line:164 error", "color: #007acc;", error);
      }
    } else {
      setStatusInput({
        showFormOTP: false,
        showSendOTP: true,
        showFormRegister: true,
        isEmptyPhone: false,
        isShowMsgErrOTP: false,
      });
      setValidatorForm(validatorOBJ);
    }
  };

  const handleName = (e) => {
    let value = e.target.value;
    setData({ ...data, FullName: value });
    if (value == "") {
      setValidatorForm({ ...validatorForm, nameMsg: true });
    } else {
      setValidatorForm({ ...validatorForm, nameMsg: false });
    }
  };
  const handlePassWord = (e) => {
    let value = e.target.value;
    setData({ ...data, Password: value });
    if (value == "") {
      setValidatorForm({ ...validatorForm, passwordMsg: true });
    } else {
      setValidatorForm({ ...validatorForm, passwordMsg: false });
      setIsDisableRepass(false);
    }
  };

  return (
    <>
      {btnStyle == 'ICON' ?
        <button className="btn-custom" onClick={handleShow} style={{ border: '1px solid white', borderRadius: '0.6em' }}>
          {btnStyle && btnStyle == 'ICON' ? <AiOutlineUser style={{ fontSize: 24, color: 'white' }} /> : 'Đăng nhập'}
        </button>
        :
        <button className="btn-custom button-custom-primary" onClick={handleShow} >
          Đăng nhập
        </button>
      }


      <Modal show={show} onHide={handleClose} animation={false} centered size="small" backdrop="static">
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body>
          <div className="mx-auto bg-white rounded w-100">
            <h2 className="text-center formTitle mb-3">
              {textButton.btnSubmit == "Tiếp tục" ? "Đăng nhập" : textButton.btnSubmit}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label lable-custom">
                  Số điện thoại đăng nhập
                  {/* (0396296673) */}
                </label>
                <input
                  value={data.PhoneNumber || ""}
                  onChange={setPhone}
                  type="text"
                  maxLength={10}
                  required
                  pattern="(\+84|0)\d{9,10}"
                  className="form-control inputFomCustom"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              {statusInput.isEmptyPhone && (
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label lable-custom">
                    Mật khẩu
                  </label>
                  <input
                    value={data.Password || ""}
                    onChange={(e) => setData({ ...data, Password: e.target.value })}
                    type="password"
                    className="form-control inputFomCustom"
                    id="exampleInputPassword1"
                  />
                </div>
              )}

              {statusInput.showFormRegister && (
                <>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label lable-custom">
                      Họ và tên <i className="text-danger">(*)</i>
                    </label>
                    <input
                      value={data.FullName || ""}
                      onChange={handleName}
                      type="text"
                      required
                      className="form-control inputFomCustom"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    {validatorForm.nameMsg && (
                      <i className="text-center text-danger ">Tên không được để trống</i>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label  lable-custom">
                      Mật khẩu<i className="text-danger">(*)</i>
                    </label>
                    <input
                      value={data.Password || ""}
                      onChange={handlePassWord}
                      type="password"
                      className="form-control inputFomCustom"
                      id="exampleInputPassword1"
                    />
                    {validatorForm.passwordMsg && (
                      <i className="text-center text-danger">Mật khẩu không được để trống</i>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label  lable-custom">
                      Nhập lại mật khẩu<i className="text-danger">(*)</i>
                    </label>
                    <input
                      // readOnly={isDisableRePass}
                      value={data.ConfirmPassword || ""}
                      onChange={(e) => setData({ ...data, ConfirmPassword: e.target.value })}
                      type="password"
                      className="form-control inputFomCustom"
                      id="exampleInputPassword1"
                    />
                    {validatorForm.passwordMsg && (
                      <i className="text-center text-danger">Mật khẩu không được để trống</i>
                    )}
                    {data.ConfirmPassword && data.ConfirmPassword != data.Password && (
                      <i className="text-center text-danger">Mật khẩu không chính xác</i>
                    )}
                  </div>
                </>
              )}

              {statusInput.showFormOTP && (
                <div className="mb-2">
                  <div className="verification-code">
                    <label htmlFor="exampleInputEmail1" className="form-label lable-custom">
                      {" "}
                      Nhập mã xác thực (OTP){" "}
                    </label>
                    <div className="verification-code--inputs mb-3">
                      <input type="number" ref={ip1} onChange={(e) => setOTP(e, ip2)} />
                      <input type="number" ref={ip2} onChange={(e) => setOTP(e, ip3)} />
                      <input type="number" ref={ip3} onChange={(e) => setOTP(e, ip4)} />
                      <input type="number" ref={ip4} onChange={(e) => setOTP(e, ip5)} />
                      <input type="number" ref={ip5} onChange={(e) => setOTP(e, ip6)} />
                      <input type="number" ref={ip6} onChange={(e) => setOTP(e, ip6)} />
                    </div>
                    <input type="hidden" id="verificationCode" />
                    {statusInput.isShowMsgErrOTP ? (
                      <i className="text-center text-danger me-2 mb-2">OTP không chính xác</i>
                    ) : (
                      ""
                    )}
                    <span className="d-flex justify-content-center">
                      <a onClick={reSendOTP} className="text-dark me-2">
                        {isShowCount ? "Gửi lại mã sau:" : "Bạn không nhận được OTP?"}
                      </a>
                      <Countdown
                        initialMinute={0}
                        initialSeconds={6}
                        setIsShowCount={setIsShowCount}
                      />
                      {!isShowCount && (
                        <a
                          onClick={reSendOTP}
                          className="text-primary ms-2 mb-2 text-decoration-underline"
                        >
                          Gửi lại
                        </a>
                      )}
                    </span>
                  </div>
                </div>
              )}

              {!statusInput.showSendOTP && (
                <button type="submit" className="btn-custom button-custom-primary-form w-100 mb-2 ">
                  {" "}
                  {textButton.btnSubmit == "Tiếp tục" ? "Đăng nhập" : textButton.btnSubmit}
                </button>
              )}
            </form>

            {statusInput.showSendOTP && (
              <button
                disabled={data.ConfirmPassword && data.ConfirmPassword != data.Password}
                type="button"
                onClick={sendOTP}
                className="btn-custom button-custom-primary-form w-100 mb-2 "
              >
                {" "}
                Nhấn để lấy OTP{" "}
              </button>
            )}
            <button
              type="button"
              onClick={handleClose}
              className="btn-custom button-custom-danger-form w-100 mb-2"
            >
              {" "}
              Đóng{" "}
            </button>
            {!statusInput.showFormRegister ? (
              <div className="d-flex justify-content-between">
                <a
                  className="lable-custom text-primary  custom-link-hover"
                  style={{ cursor: "pointer" }}
                >
                  Quên mật khẩu?
                </a>
                <a
                  onClick={handleRegister}
                  className="lable-custom text-primary text-end custom-link-hover"
                  style={{ cursor: "pointer" }}
                >
                  Đăng ký
                </a>
              </div>
            ) : (
              <a
                onClick={() => handleRegister("haveAccount")}
                className="lable-custom text-primary text-end"
              >
                Bạn đã có tài khoản?
              </a>
            )}
          </div>
        </Modal.Body>
        {/* <button onClick={handleClose} className="btn-custom btnCustom--delete position-absolute" style={{top: 5, right: 5}}><AiOutlineClose /></button> */}
      </Modal>
    </>
  );
}

export default LoginModal;
