import Image from "next/image";
import Link from "next/link";
import { memo, useContext, useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { clearCart, decrease, increase } from "../../context/actions";
import { CartContext } from "../../context/cartContext";
import { formatter } from "../../utils";

const CartModal = ({ setShow }) => {
  const { state, dispatch } = useContext(CartContext)
  const handleClose = () => setShow(prev => !prev);
  const { cart } = state
  const totalQuantity = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0))
  const totalPrice = useMemo(() => cart.reduce((total, item) => total + item.price * item.quantity, 0))

  const renderCartItem = cart?.map((cartItem) =>
    <Row className="mx-0 py-2" key={cartItem?.itemId}>
      <Col xs={3} md={2}>
        <Image
          className="rounded"
          src={
            cartItem?.image ||
            '/image/logo512.png'
          }
          alt=""
          width={110}
          height={110}
        />
      </Col>
      <Col xs={9} md={10}>
        <div>
          <h6 className="mb-0">{cartItem?.name || ""}</h6>
          {
            cartItem?.orderToppings?.map(topping => (
              <span
                className="me-1"
                style={{ fontSize: 13, color: "hsl(0,0%,40%)" }}
                key={topping.toppingId}
              >
                {topping.name || ""}
              </span>
            ))
          }
          <p className="mb-0" style={{ fontSize: 13, color: "#8d8d8d" }}>
            {cartItem?.note || "Không có ghi chú"}
          </p>
        </div>
        <div className="d-flex  w-100 justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <span className="cart-item-price mb-0" style={{ textDecoration: " line-through" }}>
              {formatter.format(cartItem?.price || 0)}
            </span>
            <span className="cart-item-price mx-2 text-danger mb-0">
              {formatter.format(cartItem?.price || 0)}
            </span>
          </div>
          <div className="d-flex align-items-center">
            {
              <>
                <button
                  className="border-0 rounded d-flex align-items-center justify-content-center"
                  onClick={() => dispatch(decrease(cartItem, cart))}
                  style={{
                    backgroundColor: "#f7a76c",
                    color: "#fff",
                    fontSize: 22,
                    height: 30,
                    width: 30,
                  }}
                >
                  -
                </button>
                <span className="mx-2">{cartItem?.quantity || 0}</span>
                <button
                  className="border-0 rounded d-flex align-items-center justify-content-center"
                  onClick={() => dispatch(increase(cartItem, cart))}
                  style={{
                    backgroundColor: "#f7a76c",
                    color: "#fff",
                    fontSize: 22,
                    height: 30,
                    width: 30,
                  }}
                >
                  +
                </button>
              </>
            }
          </div>
        </div></Col>
    </Row>
  );

  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return (
    <>
      <Modal show onHide={handleClose} size='xl'>
        <Modal.Header className="d-flex justify-content-center align-items-center p-2" closeButton>
          <Modal.Title className="d-flex align-items-center justify-content-between w-100 text-center">Giỏ hàng
            <Button variant="danger" size='sm' className="me-2" onClick={handleClearCart} disabled={!cart?.length}>Xóa</Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="overflow p-2">
          {
            cart?.length ?
              <div className="d-flex flex-column gap-2">
                {renderCartItem}
              </div> : <h2 className="text-center text-decoration-underline">Giỏ hàng trống</h2>
          }
        </Modal.Body>
        <Modal.Footer className="p-2">
          {
            cart?.length ?
              <div className="w-100" >
                <Link href="/cart"
                  disabled={!cart?.length}
                >
                  <a
                    className="btn mx-auto w-100 justify-content-between d-flex align-items-center gap-1"
                    style={{ backgroundColor: "#f7a76c", color: "#fff" }}
                    onClick={handleClose}
                  >
                    <span className="customFontSize" style={{ color: '#fff' }}>{totalQuantity} Món</span>
                    <span className="customFontSize" style={{ color: '#fff' }}>
                      Trang thanh toán
                    </span>
                    <span style={{ color: '#fff' }}>{formatter.format(totalPrice)}</span>
                  </a>
                </Link>
              </div> : <></>
          }
        </Modal.Footer>
      </Modal>
    </>
  )
};

export default memo(CartModal);
