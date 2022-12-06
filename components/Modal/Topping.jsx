import Image from "next/image";
import React, { useContext, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { addToCart } from "../../context/actions";
import { CartContext } from "../../context/cartContext";
import { formatter } from "../../utils";
const Topping = ({ setShowToppingModal, showToppingModal }) => {
  const { id, name, price, salePrice, discountPrice, image, groupToppings, toppings, description
    , isGroupTopping
  } = showToppingModal.data;
  const [show, setShow] = useState(true);

  // const handleClose = () => setShow(false);
  const [count, setCount] = useState(1);
  const [note, setNote] = useState("");
  const [listGroupTopping, setListGroupTopping] = useState([]);
  const [listTopping, setListTopping] = useState([]);
  // const dispatch = useDispatch();
  const { state, dispatch } = useContext(CartContext)
  const { cart } = state
  // console.log('cart', cart)
  const handleClose = () => {
    setShowToppingModal({ ...showToppingModal, open: false });
  };
  const handleAdd = () => {
    setCount(count + 1)
  };

  const handleMinus = () => {
    setCount(count - 1)

    // count > 1 ? setCount((count -= 1)) : setShow({ ...show, open: false });
  };

  const handleRadioBtn = (value, data, parentID) => {
    let index = listGroupTopping?.filter((item) => item.groupToppingId != parentID);
    const newData = {
      toppingId: data.id,
      price: data.price,
      groupId: parentID
    }
    setListGroupTopping([...index, { ...newData }]);
  };
  const handleCheckboxBtn = (value, data) => {
    const { id, groupToppingId, price, name } = data;
    const newData = {
      toppingId: id,
      price,
      name,
      groupId: groupToppingId
    }
    if (value) {
      setListGroupTopping([...listGroupTopping, { ...newData }])
    }
    else {
      const newData = listGroupTopping.filter(item => item.id != id)
      setListGroupTopping(newData)
    }
  };
  const handleAddCart = () => {
    const data = {
      itemId: id,
      name,
      price,
      image,
      quantity: count,
      note: note,
      toppings: listTopping,
      orderToppings: listGroupTopping,
    };
    dispatch(addToCart(data, cart));
    handleClose()
    // setShowToppingModal({ ...showToppingModal, open: false });
  };

  // render Data
  const renderGroupToppings = groupToppings?.map((item) => {
    const { isRequire, toppings } = item;
    if (isRequire) {
      return (
        <div key={item.id} className="mb-2">
          <h5 className="bg-dark bg-opacity-25 p-2 text-light">{item.name}</h5>
          {toppings.map((it) => {
            return (
              <div
                key={it.id}
                onChange={(e) => handleRadioBtn(e.target.value, it, item.id)}
                className="px-3 d-flex justify-content-between align-items-center border-bottom border-dark py-3"
              >
                <h6> {it.name}</h6>
                <p className="mb-0 ms-auto me-2 text-danger">{formatter.format(it.price)}</p>
                <input type="radio" value={it.name} name={item.name} />
              </div>
            );
          })}
        </div>
      );
    }
    if (!isRequire) {
      return (
        <div key={item.id} className="mb-2">
          <h5 className="bg-dark bg-opacity-25 p-2 text-light">{item.name}</h5>
          {toppings?.map((it) => {
            return (
              <div
                key={it.id}
                className="px-3 d-flex justify-content-between align-items-center border-bottom border-dark py-3"
              >
                <h6> {it.name}</h6>
                <p className="text-danger ms-auto mb-0 me-2">{formatter.format(it.price)}</p>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckboxBtn(e.target.checked, it)}
                />
              </div>
            );
          })}
        </div>
      );
    }
  });
  const renderToppings = toppings?.map((topping) => {
    const { id, name, price } = topping;
    return (
      <div
        key={id}
        className="px-3 d-flex justify-content-between align-items-center border-bottom border-dark py-3"
      >
        <h6> {name}</h6>
        <p className="text-danger ms-auto mb-0 me-2">{formatter.format(price)}</p>
        <input type="checkbox" onChange={(e) => handleCheckboxBtn(e.target.checked, topping, id)} />
      </div>
    );
  });

  return (
      <Modal
        size="lg"
        centered
        show={show} onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Thêm topping
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="d-flex flex-column">
            <div className="d-flex gap-2">
              <div>
                <Image src={image ||
                  '/image/logo512.png'} alt="" width={160} height={160} />
              </div>
              <div className="px-2 w-100">
                <h4>{name}</h4>
                <p>{description || ''}</p>
                <p className="text-danger">{formatter.format(price)}</p>
              </div>
            </div>
            <div className="mb-1">
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Thêm ghi chú"
              className="rounded border bg-dark bg-opacity-10 p-2 border-light w-100"
              style={{ color: "hsl(0,0%,51%)", fontSize: 13 }}
            />
            </div>
            <div style={{ marginBottom: 75 }} className="w-100">
              {isGroupTopping && renderGroupToppings}

              {toppings?.length > 0 && (
                <>
                  <h5 className="bg-dark bg-opacity-25 p-2 text-light">Topping</h5>
                  {renderToppings}
                </>
              )}
            </div>

          </section>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-center w-100 gap-2">
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-success text-success bg-light" onClick={handleMinus} disabled={count == 1}>
                -
              </button>
              <span>{count}</span>
              <button className="btn btn-success text-success bg-light" onClick={handleAdd}>
                +
              </button>
            </div>
            <button
              className="border-0 rounded px-3 py-2 w-100"
              style={
                isGroupTopping &&
                  (!listGroupTopping.length || listGroupTopping.length < groupToppings.length)
                  ? { backgroundColor: "#f8fafa", color: "#909090" }
                  : { backgroundColor: "rgb(247, 167, 108)", color: "#fff" }
              }
              onClick={handleAddCart}
              disabled={
                isGroupTopping &&
                (!listGroupTopping.length || listGroupTopping.length < groupToppings.length)
              }
            >
              Thêm
            </button>
          </div>
        </Modal.Footer>
      </Modal>
  );
};

export default Topping;
