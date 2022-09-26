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
      className="position-fixed bottom-0 start-0 end-0 start-0 bg-opacity-75 bg-dark h-100 d-flex justify-content-center"
      style={{ zIndex: 100 }}
    >
      <article className="mx-auto position-relative mt-auto rounded d-flex flex-column toppingCss">
        <div className="position-fixed toppingTitleCss py-1 rounded">
          <h5 className="text-center">Thêm topping</h5>
          <button className="position-absolute border-0 outline-0 px-2 rounded" style={{left: 8,top:4,backgroundColor:'transparent'}} onClick={handleClose}>
            x
          </button>
        </div>
        <div
          className="rounded"
          style={{
            backgroundImage: `url(${show.data.Image})`,
            minHeight: 250,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginTop: 45
          }}>

          </div>
        <div className="w-100 p-2">
          <div className="d-flex justify-content-between align-items-center">
            <h2>{show.data.Name}</h2>
            <span>{formatter.format(show.data.Price)}</span>
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
        <div style={{ marginBottom: 75 }} className="w-100" >
          {show.data?.toppings?.map((item) => (
            <div
              key={item.Id}
              className="px-3 d-flex justify-content-between border-bottom border-dark py-3"
            >
              <h6> {item.Name}</h6>
              <p className="text-danger">{item.Price}</p>
              <input type="checkbox" />
            </div>
          ))}
          {show.data.GroupToppings?.map((item) => (
            <div key={item.Id} className="mb-2 px-2">
              <h5 className="bg-dark bg-opacity-50 p-2 text-light">{item.Name}</h5>
              {item.Toppings.map((it, index) => (
                <div
                  key={index}
                  className="px-3 d-flex justify-content-between align-items-center border-bottom border-dark py-3"
                >
                  <h6> {it.Name}</h6>
                  <p className="mb-0 ms-auto me-2 text-danger">{formatter.format(it.Price)}</p>
                  <input type="radio"  value={it.Name} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div
          className="position-fixed bottom-0 py-3 d-flex justify-content-center align-items-center gap-3 toppingButtonGroup">
          <div className="d-flex align-items-center gap-2" >
            <button className="btn text-success bg-light" onClick={() => handleMinus()}>
              -
            </button>
            <span>{count}</span>
            <button className="btn text-success bg-light" onClick={() => handleAdd(show.data)}>
              +
            </button>
          </div>
          <button className="btn btn-success" onClick={() => handleAddCart(show.data)}>
            Thêm {formatter.format(total + show.data.price)}
          </button>
        </div>
      </article>
    </section>
  );
};

export default Topping;
