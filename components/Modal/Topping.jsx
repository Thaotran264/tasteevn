import { format } from "date-fns";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { BsShopWindow } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCart } from "../../features/cart/cartSlice";
import { formatter } from "../../utils";

const Topping = ({ setShow, show }) => {
  console.log('data', show.data)
  const { Id, Name, Price, SalePrice, discountPrice, Image: image } = show.data
  const [count, setCount] = useState(1);
  const [note, setNote] = useState("");
  const [toppings, setToppings] = useState([]);
  const [check, setCheck] = useState(false);
  const [listGroupTopping, setListGroupTopping] = useState([]);
  const [listTopping, setListTopping] = useState([]);
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

  const toppingPrice = listTopping.reduce((cal, item) => cal + item.price, 0)
  const groupToppingPrice = listGroupTopping.reduce((cal, item) => cal + item.data.Price, 0)
  const totalPrice = (Price + toppingPrice + groupToppingPrice) * count
  const handleRadioBtn = (value, data, parentID) => {
    let index = listGroupTopping?.filter(item => item.parentID != parentID)
    const newData = [...index, { data, parentID }]
    setListGroupTopping(newData)
  }
  const handleCheckboxBtn = (value, data) => {
    const { Id } = data;
    let item = listTopping.filter((item) => item.Id === Id);
    if (!item.length && value) setListTopping([...listTopping, { Id, Name: data.Name, price: data.Price }]);
    if (item.length && !value) {
      setListTopping(listTopping.filter((item) => item.Id !== Id));
    }
  }
  const handleAddCart = () => {
    const data = {
      Id,
      Name, Price, discountPrice, image,
      quantity: count,
      note: note,
      toppings: listTopping,
      groupToppings: listGroupTopping,
      toppingPrice, groupToppingPrice,
      totalPrice
    };
    dispatch(addToCart(data));
    setShow({ ...show, open: false });
  };

  return (
    <section
      className="position-fixed bottom-0 start-0 end-0 start-0 bg-opacity-75 bg-dark h-100 d-flex justify-content-center"
      style={{ zIndex: 100 }}
    >
      <article className="mx-auto position-relative mt-auto rounded d-flex flex-column toppingCss">
        {/* Topping title */}
        <div className="position-fixed toppingTitleCss py-1 rounded" style={{ zIndex: 10 }}>
          <h5 className="text-center">Thêm topping</h5>
          <button
            className="position-absolute border-0 outline-0 px-2 rounded"
            style={{ left: 8, top: 4, backgroundColor: "transparent" }}
            onClick={handleClose}
          >
            x
          </button>
        </div>
        <div className="d-flex gap-2 px-2 mb-2" style={{ marginTop: 44 }}>
          <div className="d-flex align-items-center">
            <Image
              src={image}
              alt=""
              width={120}
              height={120}
            />
          </div>
          <div className="p-2">
            <h4 className="mb-1">{show.data.Name}</h4>

            <p className="mb-0" style={{ fontSize: 13, color: 'lightgray' }}>Trà xanh</p>
            <p className="mb-0 text-danger">{formatter.format(show.data.Price)}</p>
            <p className="mb-1" style={{ fontSize: 14 }}>
              Size
            </p>
          </div>
        </div>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Thêm ghi chú"
          className="border-0 px-2 bg-opacity-100 w-100"
          style={{ color: "hsl(0,0%,51%)" }}
        />
        <hr ></hr>
        <div style={{ marginBottom: 75 }} className="w-100">
          {show.data.GroupToppings?.map((item) => (
            <div key={item.Id} className="mb-2" >
              <h5 className="bg-dark bg-opacity-25 p-2 text-light">{item.Name}</h5>
              {item.Toppings.map((it, index) => (
                <div
                  key={index}
                  onChange={(e) => handleRadioBtn(e.target.value, it, item.Id)}
                  className="px-3 d-flex justify-content-between align-items-center border-bottom border-dark py-3"
                >
                  <h6> {it.Name}</h6>
                  <p className="mb-0 ms-auto me-2 text-danger">{formatter.format(it.Price)}</p>
                  <input type="radio" value={it.Name} name={item.Name} />
                </div>
              ))}
            </div>
          ))}
          <h5 className="bg-dark bg-opacity-25 p-2 text-light">Toppings</h5>
          {show.data?.Toppings?.map((item) => (
            <div
              key={item.Id}
              className="px-3 d-flex justify-content-between align-items-center border-bottom border-dark py-3"
            >
              <h6> {item.Name}</h6>
              <p className="text-danger ms-auto mb-0 me-2">{formatter.format(item.Price)}</p>
              <input type="checkbox" onChange={(e) => handleCheckboxBtn(e.target.checked, item)} />
            </div>
          ))}

        </div>
        <div className="position-fixed bottom-0 py-3 d-flex justify-content-center align-items-center gap-3 toppingButtonGroup">
          <div className="d-flex align-items-center gap-2">
            <button className="btn text-success bg-light" onClick={() => handleMinus()}>
              -
            </button>
            <span>{count}</span>
            <button className="btn text-success bg-light" onClick={() => handleAdd(show.data)}>
              +
            </button>
          </div>
          <button className="border-0 rounded px-3 py-2"
            style={!listGroupTopping.length || listGroupTopping.length < show.data.GroupToppings.length ? { backgroundColor: '#f8fafa', color: '#909090' } : { backgroundColor: 'rgb(247, 167, 108)', color: '#fff' }}
            onClick={handleAddCart}
            disabled={!listGroupTopping.length || listGroupTopping.length < show.data.GroupToppings.length}>
            Thêm {formatter.format(totalPrice)}
          </button>
        </div>
      </article>
    </section>
  );
};

export default Topping;
