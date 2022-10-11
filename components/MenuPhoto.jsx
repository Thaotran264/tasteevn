import React, { useState } from "react";
import parse from "html-react-parser";
import { listRes } from "../db";
import Image from "next/image";
import { isMobile } from "react-device-detect";

const MenuPhoto = ({ isDefault, maps, brandView }) => {
  const [showModal, setShowModal] = useState(false)
  const [count, setCount] = useState(0)
  const [bg, setBg] = useState()
  const handleShowModal = (list,data, id) => {
    console.log('data',data)
    setShowModal(!showModal)
    setBg(data)
  }
  const handleNextBtn = () => {
    console.log('first')
    setBg(brandView[count + 1])
  }
  const handlePrevBtn = () => {
    console.log('first')
    setBg(brandView[count - 1])

  }
  return (
    <div className="container">
      {!isDefault && (
        <div className="mb-2">
          <section className="d-flex gap-1">
            <div
              className="d-none showOnDesktop w-50  align-items-center"
            >
<<<<<<< HEAD
              {parse(String(maps)) || ""}
=======
              {maps ? parse(String(maps)) : ''}
>>>>>>> a8c15ed81969a0e572685da851ed93adea3ec58e
            </div>
            <div className='w-100'>
              <div className="thumb-3 rounded">
                {brandView?.slice(0, 3).map((item, index) => (
                  <div className={`box img${index + 1}`} key={index}
                    onClick={() => handleShowModal(brandView?.slice(0, 3),item, index)}>
                    <Image
                      className="border border-light"
                      src={item}
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
      {isDefault && (
        <div className="container d-flex gap-2">
          <div className="d-flex align-items-center showOnDesktop">{maps}</div>
          {/* <div className="thumb-9 py-4">
            <div className="box img1">
              <img
                src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="box img2">
              <img
                src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="box img3">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="box img4">
              <img
                src="https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="box img5">
              <img
                src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="box img6">
              <img
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="box img7">
              <img
                src="https://images.pexels.com/photos/704982/pexels-photo-704982.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="box img8">
              <img
                src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="box img9 position-relative">
              <img
                src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="w-100 h-100 position-absolute top-0 start-0 bg-secondary bg-opacity-50 align-items-center d-flex justify-content-center">
                <h2 className="text-center text-light">+9</h2>
              </div>
            </div>
          </div> */}
        </div>
      )}
      {isDefault && (
        <div className="container d-flex gap-2">
          <div className="d-flex align-items-center">
            <iframe
              className=""
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1603122219894!2d106.67697931503875!3d10.799030992306182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d7a839e4b3%3A0x4296396dc7eb4bb5!2zMzcgSG_DoG5nIFbEg24gVGjhu6UsIFBoxrDhu51uZyAxNSwgUGjDuiBOaHXhuq1uLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1658630365906!5m2!1sen!2s"
              width="600"
              height="738"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="thumb-6 py-4">
            <div className="box img1">
              <img
                src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="box img2">
              <img
                src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="box img3">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="box img4">
              <img
                src="https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="box img5">
              <img
                src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="box img6 position-relative">
              <img
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="w-100 h-100 position-absolute top-0 start-0 bg-secondary bg-opacity-50 align-items-center d-flex justify-content-center">
                <h2 className="text-center text-light">+9</h2>
              </div>
            </div>
          </div>
        </div>
      )}
      {isDefault && (
        <div className="container d-flex gap-2">
          <div className="d-flex align-items-center">
            <iframe
              className=""
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1603122219894!2d106.67697931503875!3d10.799030992306182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d7a839e4b3%3A0x4296396dc7eb4bb5!2zMzcgSG_DoG5nIFbEg24gVGjhu6UsIFBoxrDhu51uZyAxNSwgUGjDuiBOaHXhuq1uLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1658630365906!5m2!1sen!2s"
              width="600"
              height="488"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="thumb-4 py-4">
            <div className="box img1">
              <img
                src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="box img2">
              <img
                src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="box img3">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="box img4 position-relative">
              <img
                src="https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="w-100 h-100 position-absolute top-0 start-0 bg-secondary bg-opacity-50 align-items-center d-flex justify-content-center">
                <h2 className="text-center text-light">+9</h2>
              </div>
            </div>
          </div>
        </div>
      )}
      {
        showModal && <div className="position-fixed  bg-dark bg-opacity-25 d-flex align-items-center justiyf-content-center" style={{ top: 0, left: 0, right: 0, bottom: 0, zIndex: 99 }}>
          <div className="mx-auto rounded bg-light p-2 d-flex flex-column" style={{ width: '50vw', height: '60vh' }}>
            <button className="border-0 mb-2 text-light align-self-end px-2 py-1 bg-danger rounded" onClick={() => setShowModal(false)}>x</button>
            <div className="mb-2">
              {/* <button className="position-absolute start-0 top-0 bottom-0 border-0" style={{zIndex: 10}}onClick={handlePrevBtn}>prev</button> */}
              <div className="w-100 d-flex justify-content-center position-relative" style={{height: '40vh'}}>
                <Image src={bg || 'https://images.pexels.com/photos/13623493/pexels-photo-13623493.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load}'} alt='' layout="fill"/>
              </div>
              {/* <button className="position-absolute end-0 top-0 bottom-0 border-0" style={{zIndex: 10}}onClick={handleNextBtn}>next</button> */}
            </div>
            <div>
              <ul className="d-flex gap-1 ps-0">
              {brandView?.slice(0, 3).map((item, index) =>
                <li key={index} onClick={()=>setBg(brandView[index])}>
                  <Image src={item} width={200} height={80} alt=''/>
                </li>)}
              </ul>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default MenuPhoto;
