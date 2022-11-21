/**
 * @author [daoNguyen]
 * @email [daonds@vinorsoft.com ]
 * @create date 2022-08-03 16:58:44
 * @modify date 2022-08-03 16:58:44
 * @desc [description]
 */
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { AiOutlineUser } from "react-icons/ai";
import { accountAPI } from "../api-client/account";
import { logIn } from "../context/actions";
import { CartContext } from "../context/cartContext";
import { setTokenCookies } from "../hooks/setTokenCookies";
import Countdown from "./Countdown";

function LoginModal({ showLoginModal,
  setShowLoginModal }) {
  const {state,dispatch} = useContext(CartContext)
  const ip1 = useRef();
  const ip2 = useRef();
  const ip3 = useRef();
  const ip4 = useRef();
  const ip5 = useRef();
  const ip6 = useRef();

  const [data, setData] = useState({});
  const [isDisableRePass, setIsDisableRepass] = useState(true);
  const [isShowCount, setIsShowCount] = useState(true);
  const [statusInput, setStatusInput] = useState({});
  const [validatorForm, setValidatorForm] = useState({
    passwordMsg: false,
    nameMsg: false,
  });
  const [textButton, setTextButton] = useState({ btnSubmit: "Tiếp tục" });
  const handleClose = () => {
    setStatusInput({});
    setData({});
    setTextButton({ btnSubmit: "Đăng nhập" });

    setShowLoginModal(!showLoginModal)  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (statusInput.forgotPassword && !statusInput.showFormFogotPass) {
      console.log('first vô 1', statusInput)
      forgotPassword(data)
      return
    }
    if (statusInput.forgotPassword && statusInput.showFormFogotPass) {
      let param = {
        password: data.Password
      }
      setPassword(param)
      return
    }
    if (statusInput.isEmptyPhone) {
      let params = {
        email: data.PhoneNumber,
        password: data.Password,
      };
      login(params);
      return
    }
  };

  const setPassword = async (params) => {
    try {
      const res = await accountAPI.setPassword(params)
      if (res.successful) {
        dispatch({ type: "NOTIFY", payload: { success: "Đổi mật khẩu thành công quý khách vui lòng đăng nhập lại." } });
        handleClose()
      }
      else {
        dispatch({ type: "NOTIFY", payload: { error: res.message } });
      }
    } catch (error) {
      dispatch({ type: "NOTIFY", payload: { success: "Đã xảy ra lỗi vui lòng kiểm tra lại thông tin" } });
    }
  }

  const forgotPassword = async (params) => {
    try {
      const res = await accountAPI.forgotPassword(params.PhoneNumber)
      if (res.successful) {
        setData({ ...data, authenId: res.data.authenID });
        dispatch({ type: "NOTIFY", payload: { success: res.message } });
        setStatusInput({ ...statusInput, showSendOTP: false, showFormOTP: true });
      }
      else {
        dispatch({ type: "NOTIFY", payload: { error: res.message } });
      }
    } catch (error) {
      dispatch({ type: "NOTIFY", payload: { error: res.message } });
    }
  }


  const login = async (params) => {
    try {
      const res = await accountAPI.login(params);
      if (res.successful && res.data) {     
        dispatch(logIn(res.data))
        // setTokenCookies(res.data.token)
        handleClose();
        // router.push("/");
        // window.location.reload();
      }

    } catch (error) {
      console.log(error);
    }
  };

  const setPhone = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    setData({ PhoneNumber: value });
    if (value.length == 10) {
      checkEmtyPhone(value);
    } else {
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
      setData({ ...data, verifyCode: OTP });
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
    setIsShowCount(true)
    setStatusInput({ ...statusInput, isShowMsgErrOTP: false });
    try {
      const res = await accountAPI.resendSmsCode(data?.authenId);
      if (res.successful) {
        dispatch({ type: "NOTIFY", payload: { success: 'OTP đã được gửi vui lòng kiểm tra' } });
      }
      else {
        setIsShowCount(false)
        dispatch({ type: "NOTIFY", payload: { error: res.message } });
      }
    } catch (error) {
      dispatch({ type: "NOTIFY", payload: { error: 'Đã xảy ra lỗi' } });
    }
  };

  const checkOTP = async (OTP) => {
    localStorage.removeItem("token");
    let params = {
      authenId: data.authenId,
      verifyCode: data.verifyCode || OTP,
    };

    let paramLogin = {
      email: data.PhoneNumber,
      password: data.Password,
    };

    try {
      const res = await accountAPI.verifySmsCode(params);
      if (res.successful && res.data) {
        setStatusInput({ ...statusInput, isShowMsgErrOTP: false });

        if (statusInput.forgotPassword) {
          localStorage.setItem("token", JSON.stringify(res.data.token));
          setStatusInput({ ...statusInput, showFormRegister: false, showFormFogotPass: true, showSendOTP: false, showFormOTP: false });
        }
        else {
          login(paramLogin);
        }
      } else {
        setStatusInput({ ...statusInput, isShowMsgErrOTP: true });
      }
    } catch (error) {
      console.log("%cLoginModal.jsx line:133 error", "color: #007acc;", error);
    }
    console.log('%cLoginModal.jsx line:159 data', 'color: #007acc;', data);
  };

  const handleRegister = (key) => {
    setTextButton({ btnSubmit: "Đăng ký" });

    switch (key) {
      case "haveAccount":
        setStatusInput({});
        setData({ PhoneNumber: "" });
        break;
      case "forgotPassword":
        setStatusInput({ forgotPassword: true });
        setTextButton({ btnSubmit: "Quên mật khẩu" });
        break;
      default:
        console.log("%c Không có j ", "color: #007acc;", key);
        return ""
    }


    // console.log('%cLoginModal.jsx line:204 key', 'color: #007acc;', key);
    // if (key == "forgotPassword") {
    //   setStatusInput({});
    //   setData({ PhoneNumber: "" });
    //   console.log("%cLoginModal.jsx line:128 data", "color: #007acc;", data);
    // }

    // if (key == "haveAccount") {
    //   setStatusInput({});
    //   setData({ PhoneNumber: "" });
    //   console.log("%cLoginModal.jsx line:128 data", "color: #007acc;", data);
    // }
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
      setStatusInput({
        showFormOTP: true,
        showSendOTP: true,
        showFormRegister: true,
        isEmptyPhone: false,
        isShowMsgErrOTP: false,
      });
      const res = await accountAPI.register(formData);
      try {
        if (res.successful && res.data) {
          setStatusInput({ ...statusInput, showSendOTP: false, showFormOTP: true });
          setData({ ...data, authenId: res.data.authenID });
        }
        else {
          dispatch({ type: "NOTIFY", payload: { error: res.message } });
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
      {/* {btnStyle == 'ICON' ?
        <button className="btn-custom" onClick={handleShow} style={{ border: '1px solid white', borderRadius: '0.6em' }}>
          {btnStyle && btnStyle == 'ICON' ? <AiOutlineUser style={{ fontSize: 24}} /> : 'Đăng nhập'}
        </button>
        :
        <button className="btn btn-warning text-light btn-sm" onClick={handleShow} >
          Đăng nhập
        </button>
      } */}

      <Modal centered show={showLoginModal} onHide={()=>setShowLoginModal(false)} animation={false}  size="small" backdrop="static">
      <Modal.Header className='py-2 px-3' closeButton>
          <Modal.Title>
            <div className='d-flex gap-2 align-items-center'>
              <Image src='/image/logo512.png' alt='logo' width={40} height={40} />
              <p className='mb-0 fs-6'>Tastee</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mx-auto bg-white rounded w-100">
            <p className="text-center formTitle fs-4 mb-2">
              {textButton.btnSubmit == "Tiếp tục" ? "Đăng nhập" : textButton.btnSubmit}
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  value={data.PhoneNumber || ""}
                  onChange={setPhone}
                  type="text"
                  maxLength={10}
                  placeholder='Số điện thoại đăng nhập'
                  required
                  style={{fontSize: 14}}
                  pattern="(\+84|0)\d{9,10}"
                  className="form-control inputFomCustom rounded-0 p-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              {statusInput.isEmptyPhone && (
                <div className="mb-3">
            
                  <input
                    value={data.Password || ""}
                    onChange={(e) => setData({ ...data, Password: e.target.value })}
                    type="password"
                    placeholder="Mật khẩu"
                    className="form-control inputFomCustom rounded-0 px-2 fs-6"
                    id="exampleInputPassword1"
                  />
                </div>
              )}

              {statusInput.showFormFogotPass && (
                <>
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


              {statusInput.showFormRegister && (
                <>
                  <div className="mb-3">
                    {/* <label htmlFor="exampleInputEmail1" className="form-label lable-custom">
                      Họ và tên <i className="text-danger">(*)</i>
                    </label> */}
                    <input
                      value={data.FullName || ""}
                      onChange={handleName}
                      placeholder='Họ và tên'
                      type="text"
                      required
                      className="form-control inputFomCustom rounded-0 p-2 fs-6"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    {validatorForm.nameMsg && (
                      <i className="text-center text-danger ">Tên không được để trống</i>
                    )}
                  </div>
                  <div className="mb-3">
               
                    <input
                      value={data.Password || ""}
                      onChange={handlePassWord}
                      type="password"
                      placeholder="Mật khẩu"
                      className="form-control inputFomCustom rounded-0 p-2 fs-6"
                      id="exampleInputPassword1"
                    />
                    {validatorForm.passwordMsg && (
                      <i className="text-center text-danger">Mật khẩu không được để trống</i>
                    )}
                  </div>
                  <div className="mb-3">
                    {/* <label htmlFor="exampleInputPassword1" className="form-label  lable-custom">
                     <i className="text-danger">(*)</i>
                    </label> */}
                    <input
                      // readOnly={isDisableRePass}
                      value={data.ConfirmPassword || ""}
                      onChange={(e) => setData({ ...data, ConfirmPassword: e.target.value })}
                      placeholder=' Nhập lại mật khẩu'
                      type="password"
                      className="form-control inputFomCustom p-2 fs-6 rounded-0"
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
                    <label htmlFor="exampleInputEmail1" className="form-label lable-custom mb-0" style={{fontSize: 13}}>
                      Nhập mã xác thực (OTP)
                    </label>
                    <div className="verification-code--inputs mb-2">
                      <input style={{fontSize:13}} type="number" ref={ip1} onChange={(e) => setOTP(e, ip2)} />
                      <input style={{fontSize:13}} type="number" ref={ip2} onChange={(e) => setOTP(e, ip3)} />
                      <input style={{fontSize:13}} type="number" ref={ip3} onChange={(e) => setOTP(e, ip4)} />
                      <input style={{fontSize:13}} type="number" ref={ip4} onChange={(e) => setOTP(e, ip5)} />
                      <input style={{fontSize:13}} type="number" ref={ip5} onChange={(e) => setOTP(e, ip6)} />
                      <input style={{fontSize:13}} type="number" ref={ip6} onChange={(e) => setOTP(e, ip6)} />
                    </div>
                    <input type="hidden" id="verificationCode" />
                    {statusInput.isShowMsgErrOTP ? (<i className="text-center text-danger me-2 mb-2">OTP không chính xác</i>) : ("")}
                    <p className="d-flex justify-content-center align-items-center mb-0"> 
                      {isShowCount ?
                        <div className="d-flex">
                          <button className="btn btn-primary text-dark me-2">
                            Gửi lại mã sau:
                          </button>
                          <Countdown
                            initialMinute={0}
                            initialSeconds={60}
                            setIsShowCount={setIsShowCount}
                          />
                        </div>
                        : <span style={{fontSize: 13}}>Bạn không nhận được OTP?</span>
                      }
                      {!isShowCount && (
                        <a
                          onClick={reSendOTP}
                          style={{fontSize: 13}}
                          className="ms-2 text-decoration-underline text-primary d-flex align-items-center"
                        >
                          Gửi lại
                        </a>
                      )}
                    </p>
                  </div>
                </div>
              )}

              {!statusInput.showSendOTP && (
                <button type="submit" className="btn-custom button-custom-primary-form w-100 mb-2 rounded-0 py-2" style={{fontSize: 14}}>
                  {textButton.btnSubmit == "Tiếp tục" ? "Đăng nhập" : textButton.btnSubmit == "Quên mật khẩu" ? "Lấy lại mật khẩu" : textButton.btnSubmit}
                </button>
              )}
            </form>

            {statusInput.showSendOTP && (
              <button
                disabled={data.ConfirmPassword && data.ConfirmPassword != data.Password}
                type="button"
                onClick={sendOTP}
                style={{fontSize:14}}
                className="btn-custom button-custom-primary-form w-100 mb-2 rounded-0 "
              >
                
               Lấy OTP
              </button>
            )}
            {/* <button
              type="button"
              onClick={()=>setShowLoginModal(!showLoginModal)}
              className="btn-custom button-custom-danger-form w-100 mb-2"
            >
              Đóng
            </button> */}
            {!statusInput.showFormRegister ? (
              <div className="d-flex justify-content-between text-dark">
                <button
                  onClick={() => handleRegister("forgotPassword")}
                  className="button button__link text-dark text-decoration-underline"
                  style={{ cursor: "pointer", fontSize: 13 }}
                >
                  Quên mật khẩu?
                </button>
                <button
                  onClick={() => handleRegister('')}
                  className="button button__link text-danger text-decoration-underline"
                  style={{ cursor: "pointer", fontSize: 13 }}
                >
                  Đăng ký
                </button>
              </div>
            ) : (
              <a
                onClick={() => handleRegister("haveAccount")}
                className=" text-dark text-decoration-underline"
                style={{fontSize: 13,cursor: "pointer" }}
              >
                Bạn đã có tài khoản?
              </a>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
