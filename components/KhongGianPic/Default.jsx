import React from 'react'
import parse from "html-react-parser";
const Default = ({ map }) => {
    return (
        <div className="mb-2">
            <section className="d-flex gap-1">
                <div
                    className="w-50 showOnDesktop align-items-center"
                // style={{ aspectRatio: '1/1' }}
                >
                    {parse(map.webMap)}
                </div>
                {/* <div className="col-12 col-md-6 hideOnDeskTop mb-2">
            <div className="overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
              {parse(map.webMap)}
            </div>
          </div> */}
                <div className="w-100 khongGianConfig">
                    <div className="thumb-3 rounded">
                        <div className="box img1">
                            <img
                                className="border border-light"
                                src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                                style={{ borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }}

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
    )
}

export default Default