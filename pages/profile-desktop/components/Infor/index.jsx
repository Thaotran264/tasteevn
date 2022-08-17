import { AiFillEdit } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcAddImage } from "react-icons/fc"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../../../store/globalState";
import { userApi } from "../../../../api-client/user";
import Moment from 'moment';
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import { accountAPI } from "../../../../api-client/account";

const TabInfor = ({ userDetail }) => {
  const [_isMobile, setMobile] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMobile(isMobile);
  }, [_isMobile]);

  const [show, setShow] = useState(false);
  const { state, dispatch } = useContext(DataContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState({})
  const [changePass, setchangePass] = useState({})
  const [birthday, setBirthday] = useState({})
  const refPass = useRef();
  const refNewPass = useRef();
  const [showPass, setShowPass] = useState(false)
  const [showNewPass, setShowNewPass] = useState(false)

  useEffect(() => {
    setUser(userDetail)
    let birthdayFormat = Moment(user.birthday).format('DD-MM-YYYY')
    let [d, m, y] = birthdayFormat.split('-')
    setBirthday({ d: d, m: m, y: y })
  }, [userDetail])
  const handleChangePass = async () => {
    try {
      const res = await userApi.changePassword(changePass)
      if(res.status == 200 && res.data.successful) {
        dispatch({ type: "NOTIFY", payload: { success: 'Bạn đã đổi mật khẩu thành công' } });
        setchangePass({})
        handleClose()
      }
      else{
        dispatch({ type: "NOTIFY", payload: { error: 'Đã có lỗi xảy ra' } });
        setchangePass({})
      }
    } catch (error) {
      console.log('ERROR Change pass',error)
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
    console.log('%cTabInfor.jsx line:54 user', 'color: #007acc;', user);

  }
  return (
    <div className="profile-content">
      <h5 className="title-section">Thông tin tài khoản</h5>
      <div className="rounded w-100 bg-white p-3">
        <form onSubmit={submitUpdate}>
          <div className="row">

            <div className="col-8">
              <h6 className="title-section">
                Thông tin cá nhân
              </h6>
              <div className="row">
                <div className="col-3 d-flex align-items-center">
                  <div className="w-100 h-50">
                    {user && user['avatar'] ?
                      <img
                        className="w-100 h-100"
                        src={user && user['avatar'] || ''}
                        alt={user && user['fullName'] || ''}
                        style={{ border: "1px solid #fff", borderRadius: "50%" }}
                      />
                      :
                      <FcAddImage className="w-100 h-100" style={{ border: "1px solid #fff", borderRadius: "50%" }} />
                    }
                  </div>
                </div>

                <div className="col-9">
                  <div className="input-form-profile">
                    Họ và tên
                    <input required className="inputFomCustom w-75 rounded" onChange={(e) => setUser({ ...user, fullName: e.target.value })} value={user['fullName'] || ''} type="text" placeholder="Họ và tên" />
                  </div>
                  <div className="input-form-profile">
                    Ngày sinh
                    <div className="d-flex gap-3">
                      <select value={birthday.d} name="day" id="dayBirthday" className="rounded p-1" onChange={changeDay}>
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
                      <select value={birthday.m} name="month" id="monthBirthday" className="rounded p-1" onChange={changeMonth}>
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
                      <select value={birthday.y} name="year" id="yearBirthday" className="rounded p-1" onChange={changeYear}>
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
                    </div>
                  </div>
                  <div className="input-form-profile">
                    <span>
                      Giới tính
                    </span>
                    <div className="d-flex gap-3 ps-3">
                      <input value="1" type="radio" name="groundGender" placeholder="Giới tính" onChange={() => onchangeGender()} /> Nữ
                      <input value="2" type="radio" name="groundGender" placeholder="Giới tính" onChange={() => onchangeGender()} /> Nam
                      <input value="3" type="radio" name="groundGender" placeholder="Giới tính" onChange={() => onchangeGender()} /> Khác
                    </div>

                  </div>
                  <div className="input-form-profile">
                    Địa chỉ
                    <input required className="inputFomCustom w-75 rounded" onChange={(e) => setUser({ ...user, address: e.target.value })} value={user['address'] || ''} type="text" placeholder="Địa chỉ" />
                  </div>
                </div>

                <div className="col-9">
                  <button type="submit" className="btn btn-primary px-5 rounded">Lưu thay đổi</button>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="box-infor">
                <h5 className="title-section"> Số điện thoại và email </h5>
                <div className="d-flex align-items-end justify-content-between  mb-3">
                  <span className="" style={{
                    fontSize: '14px',
                    width: '80%',
                    overflow: 'hidden'
                  }} >
                    Số điện thoại
                    <br></br>
                    <span className="w-100" style={{ opacity: 0.8 }}>
                      <input
                        type="number"
                        required
                        disabled
                        className="border-dark border-bottom w-100"
                        placeholder="Số điện thoại"
                        value={user && user.phoneNumber ? user.phoneNumber : ''}
                        onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                        min={10}
                        style={{
                          width: "80%",
                          border: "none",
                          outline: "none",
                          paddingBottom: "5px",
                        }} />
                      
                    </span>
                  </span>

                </div>
                <div className="d-flex align-items-end justify-content-between ">
                  <span className="" style={{
                    fontSize: '14px',
                    width: '80%',
                    overflow: 'hidden'
                  }} >
                    Địa chỉ email
                    <br />
                    <input
                      type="email"
                      className="border-dark border-bottom w-100"
                      placeholder="Tên"
                      value={user['email'] || ''}
                      required
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                      style={{
                        width: "80%",
                        border: "none",
                        outline: "none",
                        paddingBottom: "5px",
                      }} />
                  </span>

                </div>
              </div>

              <div className="box-infor">
                <h5 className="title-section"> Bảo mật </h5>

                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="" style={{ fontSize: 14, color: '#7f90a4' }}>
                    <RiLockPasswordFill />  Đổi mật khẩu
                    <br></br>
                  </span>
                  <button type="button" className="btn btn-outline-primary rounded px-3" style={{ fontSize: 13 }} onClick={handleShow}>
                    Cập nhật
                  </button>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Đổi mật khẩu</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label lable-custom">
                          Mật khẩu cũ.
                        </label>
                        <div className="d-flex">
                          <input
                            value={changePass.password || ""}
                            onChange={(e) => setchangePass({ ...changePass, password: e.target.value })}
                            type={ showPass ? 'text' : "password" }
                            className="form-control inputFomCustom rounded"
                            id="exampleInputPassword1"
                          />
                          <button className="btn btn-dark" onClick={() => setShowPass(!showPass)}> { showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />  }</button>
                          </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label lable-custom">
                          Mật khẩu mới.
                        </label>
                        <div className="d-flex">
                          <input
                            value={changePass.newPassword || ""}
                            onChange={(e) => setchangePass({ ...changePass, newPassword: e.target.value })}
                            type={ showNewPass ? 'text' : "password" }
                            className="form-control inputFomCustom rounded"
                            id="exampleInputPassword1"
                          />
                          <button className="btn btn-dark" onClick={() => setShowNewPass(!showNewPass)}> { showNewPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible/>  }</button>
                         </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Đóng
                      </Button>
                      <Button variant="primary" onClick={handleChangePass}>Lưu</Button>
                    </Modal.Footer>
                  </Modal>

                </div>
              </div>
            </div>

          </div>
        </form>

      </div>
    </div>

  )
}

export default TabInfor