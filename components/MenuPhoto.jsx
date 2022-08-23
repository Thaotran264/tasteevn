import React, { useState } from "react";
import parse from "html-react-parser";

const MenuPhoto = ({ isDefault, map }) => {
  return (
    <>
      {isDefault && (
        <div className="container d-flex gap-2">
          <div className="d-flex align-items-center showOnDesktop">{map.webMap}</div>
          <div className="thumb-9 py-4">
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
      {!isDefault && (
        <div className="mb-2">
          <div className="row">
            <div
              className="col-12 col-md-6 showOnDesktop align-items-center"
              style={{ aspectRatio: "1 / 1" }}
            >
              {parse(map.webMap)}
            </div>
            {/* <div className="col-12 col-md-6 hideOnDeskTop mb-2">
              <div className="overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
                {parse(map.webMap)}
              </div>
            </div> */}
            <div className="col-12 col-md-6">
              <div className="thumb-3" style={{ aspectRatio: "1 / 1" }}>
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
                <div className="box img3 position-relative">
                  <img
                    className="w-100 h-100"
                    src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <div
                    className="position-absolute bg-dark bg-opacity-50"
                    style={{
                      width: `calc(100% - 10px)`,
                      height: "calc(100% - 10px)",
                      top: 5,
                      zIndex: 1,
                    }}
                  >
                    <h2 className="text-center text-light">+9</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuPhoto;
