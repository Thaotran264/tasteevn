import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
const Menu = ({ isDefault, menuPos }) => {
  const menuRef = useRef();
  const titleRef = useRef();
  return (
    <>
      {!isDefault && (
        <div className="container py-2 " id="menu">
          {/* Menu 2 */}
          <div className="row">
            <div
              className={`menuRecipe bg-white col-12 col-md-4 py-1 ${menuPos == "position-fixed top-0 start-0 end-0"
                ? menuPos + " gx-5 active"
                : ""
                }`}
              style={menuPos == "position-fixed top-0 start-0 end-0" ? { marginTop: 54, zIndex: 99 } : {}}
            >
              <span
                className="d-inline-block fs-3 mb-2 pb-1 w-75"
                style={{ borderBottom: "5px solid #000" }}
              >
                Menu
              </span>
              <ul
                ref={menuRef}
                className="list-group d-flex flex-row bg-white gap-1 w-100" style={{ overflow: 'scroll', height: 40 }}
              >
                <li
                  className="list-group-item"
                  style={{ backgroundColor: "transparent" }}
                >
                  <a href="#menuRC01" >Coffee</a>
                </li>
                <li
                  className="list-group-item border-danger border-start"
                  style={{ backgroundColor: "transparent" }}
                >
                  <a href="#menuRC02" >Cake</a>
                </li>
                <li
                  className="list-group-item border-danger border-start"
                  style={{ backgroundColor: "transparent" }}
                >
                  <a href="#menuRC0" >Drink</a>
                </li>
                <li
                  className="list-group-item border-danger border-start"
                  style={{ backgroundColor: "transparent" }}
                >
                  <a href="#menuRC04" >Soup</a>
                </li>
                <li
                  className="list-group-item border-danger border-start"
                  style={{ backgroundColor: "transparent" }}
                >
                  <a href="#menuRC04" >Beer</a>

                </li>

              </ul>
            </div>
            <div
              className={`col-12 col-md-8 bg-white py-1 ${menuPos == "position-fixed top-0 start-0 end-0"
                ? "offset-md-4"
                : ""
                }`}
            >
              <h4 id="menuRC01" ref={titleRef}>
                Menu
              </h4>
              <div className="row">
                <div className="col-4" style={{ aspectRatio: "1 / 1" }}>
                  <img
                    className="w-100 h-100 d-block img-thumbnail"
                    src="https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=2"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <h3>Name of food</h3>
                  <p className="text-danger">$15</p>
                  <button className="btn btn-dark text-light w-100">
                    <AiOutlinePlus style={{ fontSize: 24 }} />
                  </button>
                </div>
              </div>
              <hr />
              <div className="row">
                <div
                  className="col-4 col-md-4"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  <img
                    className="w-100 h-100 d-block img-thumbnail"
                    src="https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=2"
                    alt=""
                  />
                </div>
                <div className="col-8 col-md-8">
                  <h3>Name of food</h3>
                  <p className="text-danger">$15</p>
                  <button className="btn btn-dark text-light w-100">
                    <AiOutlinePlus style={{ fontSize: 24 }} />
                  </button>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-4" style={{ aspectRatio: "1 / 1" }}>
                  <img
                    className="w-100 h-100 d-block img-thumbnail"
                    src="https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=2"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <h3>Name of food</h3>
                  <p className="text-danger">$15</p>
                  <button className="btn btn-dark text-light w-100">
                    <AiOutlinePlus style={{ fontSize: 24 }} />
                  </button>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-4" style={{ aspectRatio: "1 / 1" }}>
                  <img
                    className="w-100 h-100 d-block img-thumbnail"
                    src="https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=2"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <h3>Name of food</h3>
                  <p className="text-danger">$15</p>
                  <button className="btn btn-dark text-light w-100">
                    <AiOutlinePlus style={{ fontSize: 24 }} />
                  </button>
                </div>
              </div>
              <hr />
              <h4 id="menuRC02" ref={titleRef}>
                Menu
              </h4>
              <div className="row">
                <div
                  className="col-4 col-md-4"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  <img
                    className="w-100 h-100 d-block img-thumbnail"
                    src="https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=2"
                    alt=""
                  />
                </div>
                <div className="col-8 col-md-8">
                  <h3>Name of food</h3>
                  <p className="text-danger">$15</p>
                  <button className="btn btn-dark text-light w-100">
                    <AiOutlinePlus style={{ fontSize: 24 }} />
                  </button>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-4" style={{ aspectRatio: "1 / 1" }}>
                  <img
                    className="w-100 h-100 d-block img-thumbnail"
                    src="https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=2"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <h3>Name of food</h3>
                  <p className="text-danger">$15</p>
                  <button className="btn btn-dark text-light w-100">
                    <AiOutlinePlus style={{ fontSize: 24 }} />
                  </button>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-4" style={{ aspectRatio: "1 / 1" }}>
                  <img
                    className="w-100 h-100 d-block img-thumbnail"
                    src="https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=2"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <h3>Name of food</h3>
                  <p className="text-danger">$15</p>
                  <button className="btn btn-dark text-light w-100">
                    <AiOutlinePlus style={{ fontSize: 24 }} />
                  </button>
                </div>
              </div>
              <hr />
              <div className="row">
                <div
                  className="col-4 col-md-4"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  <img
                    className="w-100 h-100 d-block img-thumbnail"
                    src="https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=2"
                    alt=""
                  />
                </div>
                <div className="col-8 col-md-8">
                  <h3>Name of food</h3>
                  <p className="text-danger">$15</p>
                  <button className="btn btn-dark text-light w-100">
                    <AiOutlinePlus style={{ fontSize: 24 }} />
                  </button>
                </div>
              </div>
              <hr />
              <h4 id="menuRC03">Menu</h4>
              <div className="row">
                <div className="col-4" style={{ aspectRatio: "1 / 1" }}>
                  <img
                    className="w-100 h-100 d-block img-thumbnail"
                    src="https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=2"
                    alt=""
                  />
                </div>
                <div className="col-8">
                  <h3>Name of food</h3>
                  <p className="text-danger">$15</p>
                  <button className="btn btn-dark text-light w-100">
                    <AiOutlinePlus style={{ fontSize: 24 }} />
                  </button>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      )
      }
      {
        isDefault && (
          <div className="container py-2 position-relative" id="menu">
            {/* Menu 2 */}
            <div className="row gx-5">
              <div className="col-4">
                <span
                  className="d-inline-block fs-3 mb-2 pb-1 w-75"
                  style={{ borderBottom: "5px solid #000" }}
                >
                  Menu
                </span>
                <ul className="list-group w-100 d-flex flex-row gap-1 flex-wrap">
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    An item
                  </li>
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    A second item
                  </li>
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    A third item
                  </li>
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    A fourth item
                  </li>
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    And a fifth one
                  </li>
                </ul>
              </div>
              <div className="col-8 py-2 bg-white">
                <h4>Menu</h4>
                <div
                  className=""
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 5,
                  }}
                >
                  <div className="card">
                    <Image
                      height={480}
                      width={800}
                      src="https://images.pexels.com/photos/6287495/pexels-photo-6287495.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <span className="text-danger d-inline-block mb-1">
                        85.000 đ
                      </span>
                      <br />
                      <button type="button" className="btn btn-danger w-100">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <Image
                      height={480}
                      width={800}
                      src="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <span className="text-danger d-inline-block mb-1">
                        85.000 đ
                      </span>
                      <br />
                      <button type="button" className="btn btn-danger w-100">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <Image
                      height={480}
                      width={800}
                      src="https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <span className="text-danger d-inline-block mb-1">
                        85.000 đ
                      </span>
                      <br />
                      <button type="button" className="btn btn-danger w-100">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <Image
                      height={480}
                      width={800}
                      src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <span className="text-danger d-inline-block mb-1">
                        85.000 đ
                      </span>
                      <br />
                      <button type="button" className="btn btn-danger w-100">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Menu 3 */}
            <div className="row gx-5">
              <div className="col-4">
                <span
                  className="d-inline-block fs-3 mb-2 pb-1 w-75"
                  style={{ borderBottom: "5px solid #000" }}
                >
                  Menu
                </span>
                <ul className="list-group w-100 d-flex flex-row gap-1 flex-wrap">
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    An item
                  </li>
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    A second item
                  </li>
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    A third item
                  </li>
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    A fourth item
                  </li>
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    And a fifth one
                  </li>
                </ul>
              </div>
              <div className="col-8 py-2 bg-white">
                <h4>Menu</h4>
                <div
                  className=""
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: 5,
                  }}
                >
                  <div className="card">
                    <Image
                      height={480}
                      width={800}
                      src="https://images.pexels.com/photos/6287495/pexels-photo-6287495.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <span className="text-danger d-inline-block mb-1">
                        85.000 đ
                      </span>
                      <br />
                      <button type="button" className="btn btn-danger w-100">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <Image
                      height={480}
                      width={800}
                      src="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <span className="text-danger d-inline-block mb-1">
                        85.000 đ
                      </span>
                      <br />
                      <button type="button" className="btn btn-danger w-100">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <Image
                      height={480}
                      width={800}
                      src="https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <span className="text-danger d-inline-block mb-1">
                        85.000 đ
                      </span>
                      <br />
                      <button type="button" className="btn btn-danger w-100">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <Image
                      height={480}
                      width={800}
                      src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <span className="text-danger d-inline-block mb-1">
                        85.000 đ
                      </span>
                      <br />
                      <button type="button" className="btn btn-danger w-100">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Menu 4 */}
            <div className="row gx-5">
              <div className="col-4">
                <span
                  className="d-inline-block fs-3 mb-2 pb-1 w-75"
                  style={{ borderBottom: "5px solid #000" }}
                >
                  Menu
                </span>
                <ul className="list-group w-100 d-flex flex-row gap-1 flex-wrap">
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    An item
                  </li>
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    A second item
                  </li>
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    A third item
                  </li>
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    A fourth item
                  </li>
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    And a fifth one
                  </li>
                </ul>
              </div>
              <div className="col-8 py-2 bg-white">
                <h4>Menu</h4>
                <div
                  className=""
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 5,
                  }}
                >
                  <div className="card">
                    <Image
                      height={480}
                      width={800}
                      src="https://images.pexels.com/photos/6287495/pexels-photo-6287495.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <span className="text-danger d-inline-block mb-1">
                        85.000 đ
                      </span>
                      <br />
                      <button type="button" className="btn btn-danger w-100">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <Image
                      height={480}
                      width={800}
                      src="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <span className="text-danger d-inline-block mb-1">
                        85.000 đ
                      </span>
                      <br />
                      <button type="button" className="btn btn-danger w-100">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <Image
                      height={480}
                      width={800}
                      src="https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <span className="text-danger d-inline-block mb-1">
                        85.000 đ
                      </span>
                      <br />
                      <button type="button" className="btn btn-danger w-100">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <Image
                      height={480}
                      width={800}
                      src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <span className="text-danger d-inline-block mb-1">
                        85.000 đ
                      </span>
                      <br />
                      <button type="button" className="btn btn-danger w-100">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Menu 5 */}
            <div className="row gx-5">
              <div className="col-4">
                <span
                  className="d-inline-block fs-3 mb-2 pb-1 w-75"
                  style={{ borderBottom: "5px solid #000" }}
                >
                  Menu
                </span>
                <ul className="list-group w-100 d-flex flex-row gap-1 flex-wrap">
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    An item
                  </li>
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    A second item
                  </li>
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    A third item
                  </li>
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    A fourth item
                  </li>
                  <li
                    className="list-group-item border border-dark rounded"
                    style={{ backgroundColor: "transparent" }}
                  >
                    And a fifth one
                  </li>
                </ul>
              </div>
              <div className="col-8 py-2 bg-white">
                <h4>Menu</h4>
                <div
                  className=""
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: 5,
                  }}
                >
                  <div className="card">
                    <Image
                      height={480}
                      width={800}
                      src="https://images.pexels.com/photos/6287495/pexels-photo-6287495.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <span className="text-danger d-inline-block mb-1">
                        85.000 đ
                      </span>
                      <br />
                      <button type="button" className="btn btn-danger w-100">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <Image
                      height={480}
                      width={800}
                      src="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <span className="text-danger d-inline-block mb-1">
                        85.000 đ
                      </span>
                      <br />
                      <button type="button" className="btn btn-danger w-100">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <Image
                      height={480}
                      width={800}
                      src="https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <span className="text-danger d-inline-block mb-1">
                        85.000 đ
                      </span>
                      <br />
                      <button type="button" className="btn btn-danger w-100">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <Image
                      height={480}
                      width={800}
                      src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <span className="text-danger d-inline-block mb-1">
                        85.000 đ
                      </span>
                      <br />
                      <button type="button" className="btn btn-danger w-100">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <Image
                      height={480}
                      width={800}
                      src="https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        Card titleCard titleCard titleCard title
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <span className="text-danger d-inline-block mb-1">
                        85.000 đ
                      </span>
                      <br />
                      <button type="button" className="btn btn-danger w-100">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Menu;
