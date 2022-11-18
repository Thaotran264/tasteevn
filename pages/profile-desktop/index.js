import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { AiFillFilter, AiOutlineHome, AiOutlinePlus } from 'react-icons/ai';
import { FcAddImage } from 'react-icons/fc';
import { bookingApi, cityApi, distApi, wardsApi } from "../../api-client";
import { userApi } from "../../api-client/user";
import HistoryOrder from "../../components/HistoryOrder";
import TabInfor from "../../components/Infor";
import MobileProfile from "../../components/MobileProfile";
import NavComponent from "../../components/Nav";
import WishlistShop from "../../components/wishlistShop";
import { CartContext } from "../../context/cartContext";
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <Button
      variant='light'
      className='d-flex justify-content-center align-items-center'
      onClick={decoratedOnClick}
    >
      {children}
    </Button>
  );
}

const Profile = () => {
  const [user, setUser] = useState({});
  const { state, dispatch } = useContext(CartContext);
  const { auth } = state
  console.log('au',auth)
  const currentTime = new Date().toISOString().split('T')[0]
  const [startDate, setStartDate] = useState(currentTime)
  const [endDate, setEndDate] = useState(currentTime)
  const router = useRouter();
  const [bookingData, setBookingData] = useState([])
  const [wards, setWards] = useState([])
  const [ward, setWard] = useState([])
  const [cities, setCities] = useState([])
  const [city, setCity] = useState([])
  const [dists, setDists] = useState([])
  const [dist, setDist] = useState([])
  const [disabledDist, setDisabledDist] = useState(true)
  const [disabledWards, setDisabledWards] = useState(true)
  const [address, setAddress] = useState('')
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [showAddAdress, setShowAddAdress] = useState(false)
  useEffect(() => {
    if (router.pathname !== '/' && !Object.keys(auth).length ) {
// alert('Chua login')
      // router.push('/')
    }
  }, [auth, router])
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await cityApi.getCity()
        // console.log('first', res)
        setCities(res)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  const handleCitiesChange = async (e) => {
    setDisabledDist(false)
    setCity(e.target.value)
    try {
      const res = await distApi.getDistByCityId(e.target.value)
      setDists(res)
    } catch (err) {
      console.log(err)
    }
  }
  const handleDistChange = async (e) => {
    setDisabledWards(false)
    setDist(e.target.value)

    try {
      const res = await wardsApi.getWardsByDistId(e.target.value)
      console.log(res)
      setWards(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  const handleWardChange = (e) => {
    setWard(e.target.value)
  }
  const handleClose = () => setShowModal(!showModal)
  const onSubmit = async (e) => {
    e.preventDefault()
    const params = {
      cityId: Number(city),
      districtId: Number(dist),
      wardId: Number(ward),
      address,
      name: fullName,
      phone: phoneNumber
    }
    console.log('params', params)
    try {
      const res = await userApi.setShippingAddress(params)
      console.log('adđress,', res.data)
    } catch (error) {
      console.log(error)
    }
    setAddressData(params)
    // setShowModal(false)
    // setDist('')
    // setWard('')
    // setCity('')
  }
  useEffect(() => {
    const getDetailUser = async () => {
      try {
        const res = await userApi.getUserInfor();
        console.log('data', res)
        if (res['successful']) {
          setUser(res['data'].userInfo);
        }
      } catch (error) {
        console.log(error)
      }
    };
    getDetailUser();
  }, []);
 
  const handleChangeStartDate = (e) => {
    console.log('date', new Date(e.target.value).getTime())
    setStartDate(e.target.value)
  }
  const handleChangeEndDate = (e) => {
    console.log('date', new Date(e.target.value).getTime())

    setEndDate(e.target.value)
  }
  const handleSearch = async () => {
    const formData = new FormData()
    formData.append('FromDate', new Date(startDate).getTime())
    formData.append('ToDate', new Date(endDate).getTime())
    formData.append('Start', 1)
    formData.append('Length', 10)
    try {
      const res = await bookingApi.loadData(formData)
      console.log('first', res)
      setBookingData(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleShowAddAdress = () => setShowAddAdress(!showAddAdress)
  const handleSubmit = () => { }
  const RenderForm = () => (<Form onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
    <Form.Group className="" controlId="fullName">
      <Form.Control type="text" placeholder="Họ và tên"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="" controlId="phoneNum">
      <Form.Control type="text" placeholder="Số điện thoại"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="" controlId="tinhThanhPho">
      <Form.Select aria-label="Default select example"
        onChange={handleCitiesChange}>
        <option>Tỉnh/Thành phố:</option>
        {
          cities?.map(item => <option key={item.id} value={item.id}>{item.name}</option>)
        }
      </Form.Select>
    </Form.Group>
    <Form.Group className="" controlId="quanHuyen">
      <Form.Select aria-label="Default select example" disabled={disabledDist}
        onChange={handleDistChange}>
        <option>Quận/Huyện:</option>
        {
          dists?.map(item => <option key={item.id} value={item.id}>{item.name}</option>)
        }
      </Form.Select>
    </Form.Group>
    <Form.Group className="" controlId="xaPhuong">
      <Form.Select aria-label="Default select example" disabled={disabledWards}
        onChange={handleWardChange}>
        <option>Xã/ Phường:</option>
        {
          wards?.map(item => <option key={item.id} value={item.id}>{item.name}</option>)
        }
      </Form.Select>
    </Form.Group>
    <Form.Group className="" controlId="soNha"
    >
      <Form.Control type="text" placeholder="Số nhà"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </Form.Group>
    <Button variant="primary" className=' w-25 mx-auto' type="submit">
      Thêm
    </Button>
  </Form>)

  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <>
      <NavComponent />
      <div className="container hideOnMobile" style={{ marginTop: 54 }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="infor">
          <Row style={{minHeight: 'calc(100vh - 54px)'}}>
            <Col sm={3} style={{backgroundColor: "#fff"}}>
                {/* <div className="position-relative p-2">
                <Image src='/image/logo512.png' width={640} height={640} layout='responsive' />
                </div> */}
                <div className="profile-userpic py-2">
                  <div className="">
                    {user && user["avatar"] ? (
                      <Image
                        src={user["avatar"] || ''}
                        alt={user["fullName"]}
                        width={120}
                        height={120}
                        style={{ border: "1px solid #fff", borderRadius: "50%" }}
                      />
                    ) : (
                      <FcAddImage
                        className="w-75 h-75 rounded-circle border"
                        style={{ border: "1px solid #fff", borderRadius: "50%" }}
                      />
                    )}
                  </div>
                </div>
                <div className="profile-usertitle text-center">
                  <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                    <h2 className="profile-usertitle-name"> {user["fullName"] || ""} </h2>
                  </div>
                  <p className="profile-usertitle-job">{user["phoneNumber"] || ""}</p>
                </div>
                <div className="">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="infor"
                        onClick={() => {
                          router.push("/profile-desktop");
                        }}
                      >
                        Thông tin chung
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="wishlist"
                        onClick={() => {
                          router.push("/profile-desktop");
                        }}
                      >
                        Quán yêu thích
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="historyOrder"
                        onClick={() => {
                          router.push("/profile-desktop");
                        }}
                      >
                        Lịch sử đơn hàng
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="historyBooking"
                        onClick={() => {
                          router.push("/profile-desktop");
                        }}
                      >
                        Lịch sử đặt hẹn
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="shippingAddress"
                        onClick={() => {
                          router.push("/profile-desktop");
                        }}
                      >
                        Sổ địa chỉ
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>

                {/* <div className="portlet light bordered">
                  <div className="row list-separated profile-stat">
                    <div className="col-md-4 col-sm-4 col-xs-6">
                      <div className="uppercase profile-stat-title"> 37 </div>
                      <div className="uppercase profile-stat-text"> Projects </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-6">
                      <div className="uppercase profile-stat-title"> 51 </div>
                      <div className="uppercase profile-stat-text"> Tasks </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-6">
                      <div className="uppercase profile-stat-title"> 61 </div>
                      <div className="uppercase profile-stat-text"> Uploads </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="profile-desc-title">About Jason Davis</h4>
                    <span className="profile-desc-text">
                      {" "}
                      Lorem ipsum dolor sit amet diam nonummy nibh dolore.{" "}
                    </span>
                    <div className="margin-top-20 profile-desc-link">
                      <i className="fa fa-globe"></i>
                      <a href="https://www.apollowebstudio.com">apollowebstudio.com</a>
                    </div>
                    <div className="margin-top-20 profile-desc-link">
                      <i className="fa fa-twitter"></i>
                      <a href="https://www.twitter.com/jasondavisfl/">@jasondavisfl</a>
                    </div>
                    <div className="margin-top-20 profile-desc-link">
                      <i className="fa fa-facebook"></i>
                      <a href="https://www.facebook.com/">JasonDavisFL</a>
                    </div>
                  </div>
                </div> */}
            </Col>

            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="infor">
                  <TabInfor userDetail={user} />
                </Tab.Pane>

                <Tab.Pane eventKey="wishlist">
                  <WishlistShop />
                </Tab.Pane>

                <Tab.Pane eventKey="historyOrder">
                  <HistoryOrder />
                </Tab.Pane>
                <Tab.Pane eventKey="historyBooking">
                  <div className='d-flex flex-column gap-2 py-2'>
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header className="d-flex align-items-center justify-content-between">
                          <h5 className="text-center mb-0">Lịch sử đặt hẹn</h5>
                          <CustomToggle eventKey="0" ><AiFillFilter /></CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body className='bg-light rounded'>
                            <div className="d-flex flex-column gap-3 w-75 mx-auto bg-light rounded p-3">
                              <Row className='d-flex align-items-center'>
                                <Col md={3}><span>Từ ngày:</span></Col>
                                <Col md={9}>
                                  <input type="date" id="start" name="trip-start"
                                    className="px-2 py-1 rounded border-dark border-2 w-100"
                                    value={startDate}
                                    onChange={handleChangeStartDate}
                                    style={{ borderWidth: 1 }}

                                  /></Col>
                              </Row>
                              <Row className='d-flex align-items-center'>
                                <Col md={3}><span>Đến ngày:</span>
                                </Col>
                                <Col md={9}>
                                  <input type="date" id="end" name="trip-end"
                                    className="px-2 py-1 rounded border-dark border-2 w-100"
                                    value={endDate}
                                    onChange={handleChangeEndDate}
                                    style={{ borderWidth: 1 }}

                                  /></Col>
                              </Row>
                              <Row className='d-flex align-items-center'>
                                <Col md={3}></Col>
                                <Col md={9}>
                                  <Button onClick={handleSearch} variant='primary' className='w-50'>Tìm</Button>
                                </Col>
                              </Row>
                            </div>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>

                    {
                      bookingData?.map(item =>
                        <div className="rounded bg-light shadow p-2" key={item.id}>
                          <p className="mb-0">Tên quán: {item.brandId}</p>
                        </div>
                      )
                    }
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="shippingAddress">
                  <div className="d-flex flex-column gap-2">
                    <h5 className="border-bottom pb-2 text-center fw-bold">Địa chỉ của tôi</h5>
                    <div className="d-flex flex-column gap-2 w-100">
                      <Row className="shadow mx-0 p-2 rounded d-flex align-items-center">
                        <Col md={1}><AiOutlineHome style={{ fontSize: 22 }} /></Col>
                        <Col md={10}>
                          <div className="d-flex flex-column">
                            <h6>{user.fullName} - {user.phoneNumber} </h6>
                            <span>{user.address}</span>
                          </div>
                        </Col>
                        <Col md={1}>
                          <input type='radio' />
                        </Col>
                      </Row>
                    </div>
                    <div className="d-flex flex-column gap-2 w-100">
                      <Row className="shadow mx-0 p-2 rounded d-flex align-items-center">
                        <Col md={1}><AiOutlineHome style={{ fontSize: 22 }} /></Col>
                        <Col md={10}>
                          <div className="d-flex flex-column">
                            <h6>{user.fullName} - {user.phoneNumber} </h6>
                            <span>{user.address}</span>
                          </div>
                        </Col>
                        <Col md={1}>
                          <input type='radio' />
                        </Col>
                      </Row>
                    </div>
                    <Button
                      variant="outline-danger"
                      className=' w-50 mx-auto d-flex align-items-center justify-content-center gap-2'
                      onClick={handleShowAddAdress}>
                      <AiOutlinePlus />
                      Thêm địa chỉ</Button>
                    {
                      showAddAdress ?
                        <div className='rounded bg-dark bg-opacity-10 p-3'>
                          <RenderForm />
                        </div>
                        : <></>
                    }
                  
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <MobileProfile />
    </>
  );
};

// Cart.getLayout = function getLayout(Page) {
//   return <Layout>{Page}</Layout>;
// };

export default Profile;
