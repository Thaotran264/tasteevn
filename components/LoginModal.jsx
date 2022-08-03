/**
 * @author [daoNguyen]
 * @email [daonds@vinorsoft.com ]
 * @create date 2022-08-03 16:58:44
 * @modify date 2022-08-03 16:58:44
 * @desc [description]
 */
import Link from "next/link";
import { useRouter } from "next/router";
import React, {  useContext, useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axiosClient from "../api-client/axios-client";
import { DataContext } from "../store/globalState";
import { AiOutlineClose } from 'react-icons/ai'

function LoginModal() {
  const [show, setShow] = useState(false);
const ip1 = useRef()
const ip2 = useRef()
const ip3 = useRef()
const ip4 = useRef()
const ip5 = useRef()
const ip6 = useRef()

console.log('%cLoginModal.jsx line:17 ip1.current', 'color: #007acc;', ip1.current);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const router = useRouter();
  const [data, setData] = useState({});
  const [statusInput, setStatusInput] = useState({});
  const { state, dispatch } = useContext(DataContext);
  const [textButton, setTextButton] = useState({ 'btnSubmit': 'Tiếp tục' });
  // const [toastmsg, settoastmsg] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Data Form ', data)

    // const url = "/Users/login";
    // dispatch({ type: "NOTIFY", payload: { loading: true } });
    // try {
    //   const res = await axiosClient.post(url, data);
    //   if (res.successful) {
    //     console.log("data", res);
    //     localStorage.setItem("token", JSON.stringify(res.token));
    //     localStorage.setItem("userInfo", JSON.stringify(res.fullName));
    //     router.push("/");
    //     dispatch({
    //       type: "NOTIFY",
    //       payload: { success: res.successful },
    //     });
    //   } else {
    //     dispatch({ type: "NOTIFY", payload: { error: res.error } });
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const setPhone = (e) => {
    let value = e.target.value.replace(/\D/g, "")
    setData({ 'phone': value  })
    if( value.length == 10){
      // Nhập đủ số điện thoại
        setTimeout(() => {
            checkEmtyPhone(value)
        }, 500)
    }
    else{
      // Niếu ko đủ thì setStatus 
      let status = {
        isEmptyPhone: false,
        statusOTP: false,
      }
      setStatusInput(status)
    }
  }
  const checkEmtyPhone = (phone) => {
    let data = '0961547511'
    if(phone == data){
      setStatusInput({ isEmptyPhone: true  })
      setTextButton({ 'btnSubmit': "Đăng nhập" })
    }
    else{
      setStatusInput({ isEmptyPhone: false, showFormRegister: true, showSendOTP: true  })
      setTextButton({ 'btnSubmit': "Đăng ký" })
    }
  }

  let arr = []
  const setOTP = (e, key) => {
    let value = String(e.target.value).replace(/\D/g, "")
    let arrTemp = arr
    arrTemp.push(value)
    key.current.focus()
    if(arrTemp.length == 6){
      let OTP = arrTemp.join('')
      setData({ 'OTP': OTP })
      arr = []
      checkOTP(OTP)
    }
  }
  const reSendOTP = () => {
    setData({ 'OTP': '' })
    ip1.current.value = ''
    ip2.current.value = ''
    ip3.current.value = ''
    ip4.current.value = ''
    ip5.current.value = ''
    ip6.current.value = ''
  }
  const checkOTP = (OTP) => {
    let data = '021299'
    if(OTP == data){
      setStatusInput({ 'statusRegister': true  })
    }
    else{
      setStatusInput({ 'statusRegister': false  })
    }
  }



  const handleRegister = (key) => {
    setTextButton({ 'btnSubmit': "Đăng ký" })
    if(key == 'haveAccount'){
      setStatusInput({})
      setData({ phone: '' })
      console.log('%cLoginModal.jsx line:128 data', 'color: #007acc;', data);
    }
  }

  const sendOTP = () => {
    setStatusInput({ showFormOTP: true, showFormRegister: true, isEmptyPhone: false })
    console.log('%csendOTP', 'color: #007acc;', statusInput);
  }

  return (
    <>
      <button  className='btn-custom button-custom-primary' onClick={handleShow}>
        Đăng nhập/ Đăng ký
      </button>

      <Modal show={show} onHide={handleClose} animation={false} centered  size="lg">
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body>
        <div className="mx-auto bg-white py-5 rounded w-75"
        >
          <h2 className="text-center formTitle mb-5">{ textButton.btnSubmit == 'Tiếp tục' ? 'Đăng nhập' : textButton.btnSubmit }</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label lable-custom">
                Số điện thoại đăng nhập
              </label>
              <input
                value={data.phone}
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

            { statusInput.isEmptyPhone &&
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label lable-custom">
                  Mật khẩu
                </label>
                <input
                  value={data.password}
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                  type="password"
                  className="form-control inputFomCustom"
                  id="exampleInputPassword1"
                />
              </div>
            }

            { statusInput.showFormRegister &&
             <>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label lable-custom">
                    Họ và tên
                  </label>
                  <input
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    type="text"
                    maxLength={10}
                    required
                    className="form-control inputFomCustom"
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
                    className="form-control inputFomCustom"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Nhập lại mật khẩu
                  </label>
                  <input
                    value={data.rePassword}
                    onChange={(e) => setData({ ...data, rePassword: e.target.value })}
                    type="password"
                    className="form-control inputFomCustom"
                    id="exampleInputPassword1"
                  />
                </div>
              </>
            }

            { statusInput.showFormOTP &&   
              <div className="mb-4">
              <div className="verification-code">
              <label htmlFor="exampleInputEmail1" className="form-label lable-custom">  Nhập mã xác thực (OTP) </label>
                <div className="verification-code--inputs">
                  <input type="number" ref={ip1} onChange={(e) => setOTP(e,ip2)} />
                  <input type="number" ref={ip2} onChange={(e) => setOTP(e,ip3) }/>
                  <input type="number" ref={ip3} onChange={(e) => setOTP(e,ip4) }/>
                  <input type="number" ref={ip4} onChange={(e) => setOTP(e,ip5) } />
                  <input type="number" ref={ip5} onChange={(e) => setOTP(e,ip6) } />
                  <input type="number" ref={ip6} onChange={(e) => setOTP(e,ip6) } />
                </div>
                <input type="hidden" id="verificationCode" />
                <a onClick={reSendOTP} className="lable-custom color-blue mt-3">Chưa nhận được OTP?</a>
              </div>  
              </div>
            }

          { !statusInput.showSendOTP && <button type="submit" className="btn-custom button-custom-primary-form w-100 mb-2 "> { textButton.btnSubmit }</button> }
          </form>
          { statusInput.showSendOTP && <button type="button" onClick={sendOTP} className="btn-custom button-custom-primary-form w-100 mb-2 "> Nhấn để lấy OTP</button> }
            <button type="button" onClick={handleClose} className="btn-custom button-custom-danger-form w-100 mb-2"> Đóng </button>
            { !statusInput.showFormRegister ?  
            <div className="d-flex justify-content-between" >
              <a className="lable-custom text-primary">Quên mật khẩu?</a>
              <a onClick={handleRegister} className="lable-custom text-primary text-end">Đăng ký</a>
            </div> 
             : <a onClick={() => handleRegister('haveAccount')} className="lable-custom text-primary text-end">Bạn đã có tài khoản?</a>
            }
        </div>
        </Modal.Body>
        <button onClick={handleClose} className="btn-custom btnCustom--delete position-absolute" style={{top: 5, right: 5}}><AiOutlineClose /></button>
      </Modal>
    </>
  );
}

export default LoginModal;