import React from "react";
import Image from "next/image";
import { BsPlusLg } from "react-icons/bs";
const Menu = () => {
  return (
    <div className="container py-2 position-relative" id="menu">
      <div className="row">
        <div className="col-4">
          <div id="list-example" className="list-group">
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-1"
            >
              Item 1
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-2"
            >
              Item 2
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-3"
            >
              Item 3
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-4"
            >
              Item 4
            </a>
          </div>
        </div>
        <div className="col-8" style={{ height: 500, overflow: "scroll" }}>
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            className="scrollspy-example"
            tabIndex="0"
          >
            <h4 id="list-item-1">Item 1</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              dignissimos esse et, laudantium inventore qui numquam facilis
              perspiciatis nam illum molestiae quis natus nihil fugit, sit quo
              possimus omnis optio ipsa rem! Consequuntur iste, optio at quaerat
              quibusdam ex. Praesentium quas enim, porro magnam culpa expedita
              optio vitae, a fugiat rem doloribus recusandae quibusdam voluptate
              sequi neque dolor. Impedit, nihil inventore? Earum, quas. Rerum
              fugit iste, vel odit similique sunt corrupti perspiciatis dicta
              magni eum voluptatem voluptates in excepturi quos neque laudantium
              pariatur beatae explicabo esse facilis labore? Impedit quam
              recusandae veritatis enim minima nostrum ullam nisi molestiae
              voluptas sunt sequi quisquam sit, quas minus itaque corrupti
              fugiat animi! Error earum consectetur dicta laborum, dolor alias?
              Voluptatum corrupti dignissimos delectus, laudantium at
              voluptatibus debitis repellendus dolorum sint quasi similique
              consequuntur eum quam repellat. Veritatis numquam commodi
              exercitationem quos eum ex non veniam eius nesciunt, dolorum
              obcaecati, magnam minus repudiandae perferendis?
            </p>
            <h4 id="list-item-2">Item 2</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              dignissimos esse et, laudantium inventore qui numquam facilis
              perspiciatis nam illum molestiae quis natus nihil fugit, sit quo
              possimus omnis optio ipsa rem! Consequuntur iste, optio at quaerat
              quibusdam ex. Praesentium quas enim, porro magnam culpa expedita
              optio vitae, a fugiat rem doloribus recusandae quibusdam voluptate
              sequi neque dolor. Impedit, nihil inventore? Earum, quas. Rerum
              fugit iste, vel odit similique sunt corrupti perspiciatis dicta
              magni eum voluptatem voluptates in excepturi quos neque laudantium
              pariatur beatae explicabo esse facilis labore? Impedit quam
              recusandae veritatis enim minima nostrum ullam nisi molestiae
              voluptas sunt sequi quisquam sit, quas minus itaque corrupti
              fugiat animi! Error earum consectetur dicta laborum, dolor alias?
              Voluptatum corrupti dignissimos delectus, laudantium at
              voluptatibus debitis repellendus dolorum sint quasi similique
              consequuntur eum quam repellat. Veritatis numquam commodi
              exercitationem quos eum ex non veniam eius nesciunt, dolorum
              obcaecati, magnam minus repudiandae perferendis?
            </p>
            <h4 id="list-item-3">Item 3</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              dignissimos esse et, laudantium inventore qui numquam facilis
              perspiciatis nam illum molestiae quis natus nihil fugit, sit quo
              possimus omnis optio ipsa rem! Consequuntur iste, optio at quaerat
              quibusdam ex. Praesentium quas enim, porro magnam culpa expedita
              optio vitae, a fugiat rem doloribus recusandae quibusdam voluptate
              sequi neque dolor. Impedit, nihil inventore? Earum, quas. Rerum
              fugit iste, vel odit similique sunt corrupti perspiciatis dicta
              magni eum voluptatem voluptates in excepturi quos neque laudantium
              pariatur beatae explicabo esse facilis labore? Impedit quam
              recusandae veritatis enim minima nostrum ullam nisi molestiae
              voluptas sunt sequi quisquam sit, quas minus itaque corrupti
              fugiat animi! Error earum consectetur dicta laborum, dolor alias?
              Voluptatum corrupti dignissimos delectus, laudantium at
              voluptatibus debitis repellendus dolorum sint quasi similique
              consequuntur eum quam repellat. Veritatis numquam commodi
              exercitationem quos eum ex non veniam eius nesciunt, dolorum
              obcaecati, magnam minus repudiandae perferendis?
            </p>
            <h4 id="list-item-4">Item 4</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              dignissimos esse et, laudantium inventore qui numquam facilis
              perspiciatis nam illum molestiae quis natus nihil fugit, sit quo
              possimus omnis optio ipsa rem! Consequuntur iste, optio at quaerat
              quibusdam ex. Praesentium quas enim, porro magnam culpa expedita
              optio vitae, a fugiat rem doloribus recusandae quibusdam voluptate
              sequi neque dolor. Impedit, nihil inventore? Earum, quas. Rerum
              fugit iste, vel odit similique sunt corrupti perspiciatis dicta
              magni eum voluptatem voluptates in excepturi quos neque laudantium
              pariatur beatae explicabo esse facilis labore? Impedit quam
              recusandae veritatis enim minima nostrum ullam nisi molestiae
              voluptas sunt sequi quisquam sit, quas minus itaque corrupti
              fugiat animi! Error earum consectetur dicta laborum, dolor alias?
              Voluptatum corrupti dignissimos delectus, laudantium at
              voluptatibus debitis repellendus dolorum sint quasi similique
              consequuntur eum quam repellat. Veritatis numquam commodi
              exercitationem quos eum ex non veniam eius nesciunt, dolorum
              obcaecati, magnam minus repudiandae perferendis?
            </p>
          </div>
        </div>
      </div>
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
        <div className="col-8 py-2 bg-white gx-4">
          <h4>Menu</h4>
          <div className="d-flex gap-2">
            <div style={{ width: 200, height: 200 }}>
              <img
                className="w-100 h-100 d-block img-thumbnail"
                src="https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=2"
                alt=""
              />
            </div>
            <div className="flex-fill d-flex justify-content-between align-self-start align-items-center gap-3">
              <h4>Name of food</h4>
              <span className="ms-auto">$15</span>
              <div className="">
                <button className="btn btn-danger">+</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex gap-2">
            <div style={{ width: 200, height: 200 }}>
              <img
                className="w-100 h-100 d-block img-thumbnail"
                src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="flex-fill d-flex justify-content-between align-self-start align-items-center gap-3">
              <h4>Name of food</h4>
              <span className="ms-auto">$15</span>
              <div className="">
                <button className="btn btn-danger">+</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex gap-2">
            <div style={{ width: 200, height: 200 }}>
              <img
                className="w-100 h-100 d-block img-thumbnail"
                src="https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
            <div className="flex-fill d-flex justify-content-between align-self-start align-items-center gap-3">
              <h4>Name of food</h4>
              <span className="ms-auto">$15</span>
              <div className="">
                <button className="btn btn-danger">+</button>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
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
  );
};

export default Menu;
