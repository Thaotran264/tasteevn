import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { AiOutlineFlag, AiOutlineHeart, AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import InfoDefault from "../components/Info/InfoDefault";
import Menu from "../components/Menu/Menu";
import MenuPhoto from "../components/MenuPhoto";
import MerchantLayout from "../components/MerchantLayout";
import CartModal from "../components/Modal/CartModal";
import { selectAuth } from "../features/auth/authSlice";
import { selectCart, totalQuantityCart } from "../features/cart/cartSlice";
export async function getStaticPaths() {
  const res = await axios.get("https://pro.tastee.vn/api/Home/get_product_slider");
  const paths = res.data.data.map((item) => ({
    params: { id: item.brandId },
  }));
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(`https://pro.tastee.vn/Merchant/${params.id}`);
  const post = res.data.data;
  return {
    // Passed to the page component as props
    props: { detail: post },
  };
}

const Detail = ({ detail }) => {
  const { webMap, widgets } = detail
  const infoWg = widgets.filter(item => item.widgetType == 0)[0]
  const photos = JSON.parse(widgets.filter(item => item.widgetType == 3)[0].data)
  const menuWg = JSON.parse(widgets.filter(item => item.widgetType == 5)[0].data)
  const { brandImage } = infoWg.data

  const cart = useSelector(selectCart);
  const total = useSelector(totalQuantityCart);
  const [menuPos, setMenuPos] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false)
  const handleShow = () => {
    setShow(!show);
  };

  let mbref = useRef();
  let mbDref = useRef();

  // useEffect(() => {
  //   let mbT = mbref.current?.offsetTop;
  //   let mbDT = mbDref.current?.offsetTop;
  //   const handleScroll = () => {
  //     if (window.scrollY >= mbT) {
  //       setMenuPos(true);
  //     } else {
  //       setMenuPos(false);
  //     }
  //     if (window.scrollY >= mbDT) {
  //       setMenuDeskPos(true);
  //     } else {
  //       setMenuDeskPos(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

  return (
    <>
      <Head>
        <title>Brand Detail</title>
      </Head>

      <section className=''>
        <Banner banner={brandImage} />
        <InfoDefault info={infoWg?.data} maps={webMap} />
        <MenuPhoto isDefault={false} maps={webMap} brandView={photos} />
        <Menu productList={menuWg} menuPos={false} />
        <div ref={mbref}>
        </div>

        {/* {show ? <CartModal setShow={setShow} /> : ''} */}
        {/* {
          total >= 1 &&
          <div
            className="hideOnDesktop position-fixed bottom-0 end-0 start-0"
            style={{ backgroundColor: "#FFAE6D" }}
          >
            <div className="container w-100">
              <div className="d-flex justify-content-between">
                <button
                  className="button  d-flex align-items-center "
                  style={{ height: 48, minWidth: 80 }}
                  onClick={handleShow}
                >
                  <BsCartCheck style={{ fontSize: 22 }} />
                  <span style={{ fontSize: 20 }}>{total}</span>
                </button>
                <button className="button ">Tổng tiền: {formatter.format(0)}</button>
              </div>
            </div>
          </div>
        } */}

        <div className="hideOnMobile d-flex flex-column position-fixed" style={{ bottom: 10, right: 10, backgroundColor: "#fff" }}>
          <Link href='/'>
            <a className="border border-bottom-0  p-2 d-flex justify-content-center" style={{ borderTopLeftRadius: 6, borderTopRightRadius: 6, backgroundColor: "#fff" }}>
              <AiOutlineHome style={{ fontSize: 20 }} />
            </a>
          </Link>
          <button className="border border-bottom-0  p-2 position-relative" style={{ backgroundColor: "#fff" }}
            onClick={handleShow}
          ><AiOutlineShoppingCart style={{ fontSize: 20 }} />
            {cart?.length &&
              <span className="position-absolute d-flex justify-content-center align-items-center rounded-circle" style={{ fontSize: 11, width: 16, height: 16, backgroundColor: 'red', color: 'white', top: 4, right: 1 }}>{cart?.length || 0}</span>
            }
          </button>
          <button className=" border  border-bottom-0   p-2" style={{ backgroundColor: "#fff" }}><AiOutlineFlag style={{ fontSize: 20 }} /></button>
          <button className="  border p-2" style={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6, backgroundColor: "#fff" }}><AiOutlineHeart style={{ fontSize: 20 }} /></button>
        </div>
      </section>
      {
        show && <CartModal setShow={setShow} />
      }
    </>
  );
};

Detail.getLayout = function getLayout(Page) {
  return <MerchantLayout>{Page}</MerchantLayout>;
};

export default Detail;
