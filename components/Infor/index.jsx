import { AiFillEdit } from "react-icons/ai";
import { RiDownloadCloud2Line, RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineCloudUpload } from "react-icons/ai";
import { FcAddImage } from "react-icons/fc"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useContext, useEffect, useRef, useState } from "react";
import Moment from 'moment';
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import { accountAPI } from "../../api-client/account";
import { BiEdit } from "react-icons/bi";
import { AiOutlineSave } from "react-icons/ai";
import { userApi } from "../../api-client";
import { CartContext } from "../../context/cartContext";
import { Col, Row } from "react-bootstrap";


const TabInfor = ({ userDetail }) => {
  const [_isMobile, setMobile] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMobile(isMobile);
  }, [_isMobile]);
  const [show, setShow] = useState(false);
  const { dispatch } = useContext(CartContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState({})
  const [changePass, setchangePass] = useState({})
  const [birthday, setBirthday] = useState({})
  const refPass = useRef();
  const refNewPass = useRef();
  const [showPass, setShowPass] = useState(false)
  const [showNewPass, setShowNewPass] = useState(false)
  const [showConfPassword, setShowConfPassword] = useState(false)

  useEffect(() => {
    setUser(userDetail)
    let birthdayFormat = Moment(user.birthday).format('DD-MM-YYYY')
    let [d, m, y] = birthdayFormat.split('-')
    setBirthday({ d: d, m: m, y: y })
  }, [userDetail])
  const handleChangePass = async () => {
    try {
      const res = await userApi.changePassword(changePass)
      if (res.successful) {
        dispatch({ type: "NOTIFY", payload: { success: 'Bạn đã đổi mật khẩu thành công' } });
        setchangePass({})
        handleClose()
      }
      else {
        dispatch({ type: "NOTIFY", payload: { error: 'Đã có lỗi xảy ra' } });
        setchangePass({})
      }
    } catch (error) {
      console.log('ERROR Change pass', error)
    }
  }
  const onchangeGender = () => {
    var groundGendernames = document.getElementsByName("groundGender");
    groundGendernames.forEach((ground) => {
      if (ground.checked) {
        setUser({ ...user, gender: ground.value })
        console.log(`Choise: ${ground.value}`);
      }
    })

  }
  const changeDay = (e) => {
    var dayBirthday = document.getElementById('dayBirthday').value;
    console.log('change Day', dayBirthday);
    setBirthday({ ...birthday, d: dayBirthday })
  }
  const changeMonth = (e) => {
    var monthBirthday = document.getElementById('monthBirthday').value;
    console.log('change monthBirthday', monthBirthday);
    setBirthday({ ...birthday, m: monthBirthday })
  }
  const changeYear = (e) => {
    var yearBirthday = document.getElementById('yearBirthday').value;
    console.log('change yearBirthday', yearBirthday);
    setBirthday({ ...birthday, y: yearBirthday })
  }
  const changeNewPass = (e) => {
    setchangePass({ ...changePass, newPassword: e.target.value })
    console.log('change changePass.newPassword', changePass.newPassword);

  }
  const [fieldEdit, setFieldEdit] = useState({
    editFullName: false,
  });
  const submitUpdate = async (e) => {
    const formData = new FormData();
    e.preventDefault();
    let birthdays = ''
    if (birthday.y) {
      birthdays = birthday.d + "/" + birthday.m + '/' + birthday.y
    }
    user.birthday = birthdays
    console.log('%cTabInfor.jsx line:61 birthdays', 'color: #007acc;', birthdays);
    formData.append("PhoneNumber", user.phoneNumber);
    formData.append("Address", user.address);
    formData.append("Email", user.email);
    formData.append("FullName", user.fullName);
    formData.append("Gender", user.gender);
    formData.append("Avatar", user.avatar);
    formData.append("Birthday", user.birthday);
    try {
      const res = await userApi.updateUser(formData)
      if (res && res.status == 200) {
        dispatch({ type: "NOTIFY", payload: { success: 'Bạn đã thay đổi thông tin thành công' } });
      }
    } catch (error) {
      console.log('error', error);
    }

  }

  const upload = (e) => {
    setUser({ ...user, avatar: e.target.files[0] })
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
      var output = document.getElementById('prevew-img');
      output.src = reader.result;
    };
  }
  return (
    <div className="profile-content">
      {/* <h5 className="title-section">Thông tin tài khoản</h5> */}
      <div className="rounded w-100 p-3 d-flex flex-column gap-2">
        <h4 className="border-bottom pb-2">
          Thông tin cá nhân
        </h4>
        <form
          onSubmit={submitUpdate}
          className='d-flex flex-column gap-2 w-75 mx-auto'>
          <div className="wrapper py-2">
            <div className="file-upload avata-input d-flex align-items-center" style={{ width: 120, height: 120 }}>
              <input type="file" onChange={(e) => upload(e)} />
              {user && user['avatar'] ?
                <img
                  id="prevew-img"
                  className="w-100 h-100"
                  src={user && user['avatar'] || ''}
                  alt={user && user['fullName'] || ''}
                  style={{ border: "1px solid #fff", borderRadius: "50%" }}
                /> :
                <AiOutlineCloudUpload />
              }
            </div>
          </div>
          <Row className="d-flex align-items-center">
            <Col md={3}><span>Họ và tên:</span></Col>
            <Col md={9}>
              <input
                required
                className="px-2 py-1 w-100 rounded"
                onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                value={user['fullName'] || ''}
                type="text" placeholder="Họ và tên"
                style={{ fontSize: 14, border: '1px solid #000 ' }} />
            </Col>
          </Row>
          <Row className="d-flex align-items-center">
            <Col md={3}><span>Ngày sinh:</span></Col>
            <Col md={6} className='d-flex justify-content-between'>
              <select value={birthday.d} name="day" id="dayBirthday"
                className="rounded py-1 px-2"
                style={{ fontSize: 14, width: 'max-content' }} onChange={changeDay}>
                <option value="0">Ngày</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select value={birthday.m} name="month" id="monthBirthday"
                className="rounded py-1 px-2"
                style={{ fontSize: 14, width: 'max-content' }} onChange={changeMonth}>
                <option value="0">Tháng</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select value={birthday.y} name="year" id="yearBirthday"
                className="rounded py-1 px-2"
                style={{ fontSize: 14, width: 'max-content' }} onChange={changeYear}>
                <option value="0">Năm</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
                <option value="1939">1939</option>
                <option value="1938">1938</option>
                <option value="1937">1937</option>
                <option value="1936">1936</option>
                <option value="1935">1935</option>
                <option value="1934">1934</option>
                <option value="1933">1933</option>
                <option value="1932">1932</option>
                <option value="1931">1931</option>
                <option value="1930">1930</option>
                <option value="1929">1929</option>
                <option value="1928">1928</option>
                <option value="1927">1927</option>
                <option value="1926">1926</option>
                <option value="1925">1925</option>
                <option value="1924">1924</option>
                <option value="1923">1923</option>
                <option value="1922">1922</option>
                <option value="1921">1921</option>
                <option value="1920">1920</option>
                <option value="1919">1919</option>
                <option value="1918">1918</option>
                <option value="1917">1917</option>
                <option value="1916">1916</option>
                <option value="1915">1915</option>
                <option value="1914">1914</option>
                <option value="1913">1913</option>
                <option value="1912">1912</option>
                <option value="1911">1911</option>
                <option value="1910">1910</option>
                <option value="1909">1909</option>
                <option value="1908">1908</option>
                <option value="1907">1907</option>
                <option value="1906">1906</option>
                <option value="1905">1905</option>
                <option value="1904">1904</option>
                <option value="1903">1903</option>
                <option value="1902">1902</option>
                <option value="1901">1901</option>
                <option value="1900">1900</option>
              </select>
            </Col>
          </Row>
          <Row className="d-flex align-items-center">
            <Col md={3}>
              <span>Giới tính</span>
            </Col>
            <Col md={9} className='d-flex gap-2'>
              <input
                defaultChecked={user.gender == "1" ? true : false}
                value="1"
                type="radio"
                name="groundGender"
                placeholder="Giới tính"
                onChange={() => onchangeGender()}
              /> Nữ
              <input
                defaultChecked={user.gender == "2" ? true : false}
                value="2"
                type="radio"
                name="groundGender"
                placeholder="Giới tính"
                onChange={() => onchangeGender()}
              /> Nam
              <input
                defaultChecked={user.gender == "3" ? true : false}
                value="3"
                type="radio"
                name="groundGender"
                placeholder="Giới tính"
                onChange={() => onchangeGender()}
              /> Khác
            </Col>
          </Row>
          <Row className="d-flex align-items-center">
            <Col md={3}><span>Địa chỉ:</span></Col>
            <Col md={9}>
              <textarea
                required
                className="border-dark px-2 py-1 w-100 rounded"
                onChange={(e) => setUser({ ...user, address: e.target.value })}
                value={user['address'] || ''}
                placeholder="Địa chỉ"
                style={{ fontSize: 14, borderWidth: 1 }} />
            </Col>
          </Row>
          <Row className="d-flex align-items-center">
            <Col md={3}>
              <span>
                Số điện thoại:
              </span>
            </Col>
            <Col md={9}>
              <input
                type="number"
                required
                disabled
                className="p-1 rounded w-100"
                placeholder="Số điện thoại"
                value={user && user.phoneNumber ? user.phoneNumber : ''}
                onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                min={10}
                style={{ borderWidth: 1 }}
              />
            </Col>
          </Row>
          <Row className="d-flex align-items-center">
            <Col md={3}>
              <span>
                Địa chỉ email:
              </span>
            </Col>
            <Col md={9}>
              <input
                type="email"
                className="w-100 p-1 rounded"
                placeholder="Tên"
                value={user['email'] || ''}
                required
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                style={{ borderWidth: 1 }}
              />
            </Col>
          </Row>
          <div className="pt-2">
            <Button type="submit" className="w-100 d-flex gap-2 align-items-center justify-content-center">
              <AiOutlineSave />Lưu thay đổi</Button>
          </div>
        </form>
        <div className="w-75 mx-auto">
          <Button variant="outline-success" className="w-100 d-flex align-items-center justify-content-center gap-2"
            onClick={handleShow}><RiLockPasswordFill />Đổi mật khẩu</Button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Đổi mật khẩu</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column gap-2">
          <div>
            <label htmlFor="exampleInputPassword1">
              Mật khẩu cũ:
            </label>
            <div className="d-flex position-relative">
              <input
                value={changePass.password || ""}
                onChange={(e) =>
                  setchangePass({ ...changePass, password: e.target.value })
                }
                type={showPass ? "text" : "password"}
                className="px-2 py-2 w-100 rounded"
                id="exampleInputPassword1"
                style={{borderWidth: 1}}
              />
              <button 
                className="position-absolute end-0 p-0 border-0" 
                onClick={() => setShowPass(!showPass)}
                style={{marginRight: 8, marginTop: 6, backgroundColor: 'transparent'}}>
                {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="exampleInputPassword1" >
              Mật khẩu mới:
            </label>
            <div className="d-flex position-relative">
              <input
                value={changePass.newPassword || ""}
                onChange={(e) => setchangePass({ ...changePass, newPassword: e.target.value })}
                type={showNewPass ? "text" : "password"}
                className="px-2 py-2 rounded w-100 "
                id="exampleInputPassword1"
                style={{borderWidth: 1}}

              />
              <button
                className="btn position-absolute  end-0 p-0 border-0"
                onClick={() => setShowNewPass(!showNewPass)}
                style={{marginRight: 8, marginTop: 6, backgroundColor: 'transparent'}}
              >
                {showNewPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="exampleInputPassword1" >
              Xác nhận mật khẩu mới:
            </label>
            <div className="d-flex position-relative">
              <input
                value={changePass.confPassword || ''}
                onChange={(e) => setchangePass({ ...changePass, confPassword: e.target.value })}
                type={showConfPassword ? "text" : "password"}
                className="px-2 py-2 w-100 rounded"
                id="exampleInputPassword1"
                style={{borderWidth: 1}}

              />
              <button
                className="btn position-absolute end-0 p-0 border-0"
                onClick={() => setShowConfPassword(!showConfPassword)}
                style={{marginRight: 8, marginTop: 6, backgroundColor: 'transparent'}}
              >
                {" "}
                {showConfPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>
            </div>
            {!changePass.confPassword?.length > 0 || changePass.confPassword === changePass.newPassword ? '' : <p className="text-danger">Xác nhận mật khẩu phải trùng với mật khẩu mới </p>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {changePass.confPassword?.length > 0 && changePass.confPassword === changePass.newPassword ?
            <div className="w-100">
              <Button variant="primary"
                className="w-100"
                onClick={handleChangePass}>
                Lưu
              </Button>
            </div>
            :
            ''
          }
          <Button variant="danger"
            className='w-100'
            onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </div >

  )
}

export default TabInfor