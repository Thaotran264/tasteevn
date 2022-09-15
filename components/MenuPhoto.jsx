import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { isMobile } from "react-device-detect";

const MenuPhoto = ({ isDefault, map, info }) => {
console.log('%cMenuPhoto.jsx line:6 isDefault', 'color: #007acc;', isDefault);
  let mapDefault = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.545428019277!2d106.67073883577285!3d10.800866876878397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528de40e13437%3A0xea826e922f426e21!2zUGjDuiBOaHXhuq1uLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1663215545763!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  // let restaurantSpaces = (
  //   info?.data.map((item, i) => 
  //     <div key={i} className={`box img${i}`}>
  //       <img src={item} alt="" />
  //     </div>
  //   )
  // )
  const [_isMobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(isMobile);
  }, [_isMobile]);

  return (
    <div className="container">
      {isDefault && (
        <div className=" d-flex gap-2 mb-3">
          {!_isMobile && <div className="d-flex align-items-center thumb-map">{parse(map ? map : mapDefault)}</div>}
          <div className="thumb-9">
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
        <div className=" d-flex gap-2 mb-3">
          {!_isMobile && <div className="d-flex align-items-center thumb-map">{parse(map ? map : mapDefault)}</div>}
          <div className="thumb-6">
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
        <div className=" d-flex gap-2 mb-3">
          {!_isMobile && <div className="thumb-map">{parse(map ? map : mapDefault)}</div>}
          <div className="thumb-4">
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

      {isDefault && (
        <div className="mb-2">
          <section className="d-flex gap-1">
            {!_isMobile && <div className="d-flex align-items-cente thumb-map">{parse(map ? map : mapDefault)}</div>}
            <div className="w-100">
              <div className="thumb-5 rounded">
                <div className="box img1">
                  <img
                    className="border border-light"
                    src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </div>
                <div className="box img2" style={{ aspectRatio: '1/1' }}>
                  <img
                    className="border border-light"
                    src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    style={{ borderTopRightRadius: 6 }}

                  />
                </div>
                <div className="box img3 " style={{ aspectRatio: '1/1' }}>
                  <img
                    className="border border-light"
                    src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    style={{ borderBottomRightRadius: 6 }}
                  />
                </div>

                <div className="box img4 " style={{ aspectRatio: '1/1' }}>
                  <img
                    className="border border-light"
                    src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    style={{ borderBottomRightRadius: 6 }}
                  />
                </div>

                <div className="box img5 " style={{ aspectRatio: '1/1' }}>
                  <img
                    className="border border-light"
                    src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {!isDefault && (
        <div className="mb-2">
          <section className="d-flex gap-1">
            {!_isMobile && <div className="d-flex align-items-cente thumb-map">{parse(map ? map : mapDefault)}</div>}
            <div className="w-100">
              <div className="thumb-3 rounded">
                <div className="box img1">
                  <img
                    className="border border-light"
                    src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </div>
                <div className="box img2" style={{ aspectRatio: '1/1' }}>
                  <img
                    className="border border-light"
                    src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    style={{ borderTopRightRadius: 6 }}

                  />
                </div>
                <div className="box img3 position-relative" style={{ aspectRatio: '1/1' }}>
                  <img
                    className="border border-light"
                    src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    style={{ borderBottomRightRadius: 6 }}
                  />
                  {/* <div
                    className="position-absolute bg-dark bg-opacity-50"
                    style={{
                      width: `calc(100% - 10px)`,
                      height: "calc(100% - 10px)",
                      top: 5,
                      zIndex: 1,
                    }}
                  >
                    <h2 className="text-center text-light">+9</h2>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default MenuPhoto;
