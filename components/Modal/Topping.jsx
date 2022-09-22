import { format } from "date-fns";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { BsShopWindow } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCart } from "../../features/cart/cartSlice";
import { formatter } from "../../utils";

const Topping = ({ setShow, show }) => {
  console.log(show);
  const [count, setCount] = useState(1);
  const [note, setNote] = useState("");
  const [toppings, setToppings] = useState([]);
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow({ ...show, open: false });
  };
  const handleAdd = (value) => {
    setCount((count += 1));
  };

  const handleMinus = (value) => {
    count > 1 ? setCount((count -= 1)) : setShow({ ...show, open: false });
  };
  const handleCheck = (data) => {
    setToppings([...toppings, data]);
  };
  const total = 0;
  toppings?.forEach((item) => {
    total += item.price;
  });
  const handleAddCart = (value) => {
    const data = {
      ...value,
      quantity: count,
      note: note,
      toppings,
      totalPrice: total + show.data.price,
    };
    // console.log(data);
    dispatch(addToCart(data));
    setShow({ ...show, open: false });
  };
  console.log(toppings);
  return (
    <section
      className="container position-fixed bottom-0 start-0 end-0 start-0 bg-opacity-75 bg-dark h-100"
      style={{ zIndex: 100 }}
    >
      <article
        className="rounded d-flex bg-light flex-column align-items-center cart-container position-absolute bottom-0 start-0 end-0 w-100"
        style={{ height: "90vh", overflow: "scroll" }}
      >
        <div
          style={{
            backgroundImage: `url(${show.data.image})`,
            minHeight: 250,
            width: "100%",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="w-100 p-2">
          <div className="d-flex justify-content-between align-items-center">
            <h2>{show.data.name}</h2>
            <span>{formatter.format(show.data.price)}</span>
          </div>
          <p style={{ fontSize: 14 }}>Size</p>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Thêm ghi chú"
            className="border-0 bg-opacity-100 w-100"
            style={{ color: "hsl(0,0%,51%)" }}
          />
        </div>
        <div style={{ minHeight: 700 }} className="w-100">
          {show.data?.toppings?.map((item) => (
            <div
              key={item.id}
              className="px-3 d-flex justify-content-between border-bottom border-dark py-3"
            >
              <h6> {item.name}</h6>
              <p className="text-danger">{item.price}</p>
              <input type="radio" />
            </div>
          ))}
          {show.data.groupToppings?.map((item) => (
            <div key={item.id} className="mb-2 px-2">
              <h5 className="bg-dark bg-opacity-50 p-2 text-light">{item.name}</h5>
              {item.toppings.map((it, index) => (
                <div
                  key={index}
                  className="px-3 d-flex justify-content-between align-items-center border-bottom border-dark py-3"
                >
                  <h6> {it.name}</h6>
                  <p className="mb-0 ms-auto me-2 text-danger">{formatter.format(it.price)}</p>
                  <input checked={check} type="checkbox" onChange={() => handleCheck(it)} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div
          className="position-fixed bg-light bottom-0 py-3 w-100 d-flex justify-content-center align-items-center gap-3"
          style={{ boxShadow: "0 5px 10px rgba(0,0,0,0.8)", zIndex: 99 }}
        >
          <div className="d-flex align-items-center gap-2">
            <button className="btn text-success" onClick={() => handleMinus()}>
              -
            </button>
            <span>{count}</span>
            <button className="btn text-success" onClick={() => handleAdd(show.data)}>
              +
            </button>
          </div>
          <button className="btn btn-success" onClick={() => handleAddCart(show.data)}>
            Thêm {formatter.format(total + show.data.price)}
          </button>
          <button className="btn btn-danger" onClick={handleClose}>
            Đóng
          </button>
        </div>
      </article>
    </section>
  );
};

export default Topping;
