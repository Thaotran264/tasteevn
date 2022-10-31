import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineArrowUp, AiOutlineFlag, AiOutlineHeart, AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { TbBrandBooking } from 'react-icons/tb';
import Banner from "../components/Banner";
import Booking from "../components/Booking";
import InfoDefault from "../components/Info/InfoDefault";
import Menu from "../components/Menu/Menu";
import MenuPhoto from "../components/MenuPhoto";
import MerchantLayout from "../components/MerchantLayout";
import CartModal from "../components/Modal/CartModal";
import { CartContext } from "../context/cartContext";
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
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const [showBooking, setShowBooking] = useState(false)
  const { webMap, widgets } = detail
  const infoWg = widgets.filter(item => item.widgetType == 0)[0]
  const photos = JSON.parse(widgets.filter(item => item.widgetType == 3)[0].data)
  const menuWg = JSON.parse(widgets.filter(item => item.widgetType == 5)[0].data)
  const { brandImage } = infoWg.data
  const { state: { cart } } = useContext(CartContext)
  // const {cart} = state
  // console.log('first', cart?.length)
  // const cart = useSelector(selectCart);
  // const total = useSelector(totalQuantityCart);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
   const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // for smoothly scrolling
    });
};
  let mbref = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      <Head>
        <title>Brand Detail</title>
      </Head>

      <section className=''>
        {
          showBooking && <Booking setShowBooking={setShowBooking} />
        }
        <Banner banner={brandImage} />
        <InfoDefault info={infoWg?.data} maps={webMap} />
        <MenuPhoto isDefault={false} maps={webMap} brandView={photos} />
        <Menu productList={menuWg} menuPos={false} />

        <div className="hideOnMobile d-flex flex-column position-fixed" style={{ bottom: 10, right: 10, backgroundColor: "#fff" }}>
          <Link href='/'>
            <a className="border border-bottom-0  p-2 d-flex justify-content-center" style={{ borderTopLeftRadius: 6, borderTopRightRadius: 6, backgroundColor: "#fff" }}>
              <AiOutlineHome style={{ fontSize: 20 }} />
            </a>
          </Link>
          <button className=" border border-bottom-0 p-2" style={{ backgroundColor: "#fff" }}
          onClick={()=>setShowBooking(!showBooking)}><TbBrandBooking style={{ fontSize: 20 }} /></button>
          <button className="border border-bottom-0  p-2 position-relative" style={{ backgroundColor: "#fff" }}
            onClick={handleShow}
          ><AiOutlineShoppingCart style={{ fontSize: 20 }} />
            {cart?.length > 0 &&
              <span className="position-absolute d-flex justify-content-center align-items-center rounded-circle" style={{ fontSize: 11, width: 16, height: 16, backgroundColor: 'red', color: 'white', top: 4, right: 1 }}>{cart?.length || 0}</span>
            }
          </button>

          <button className=" border  border-bottom-0   p-2" style={{ backgroundColor: "#fff" }}><AiOutlineFlag style={{ fontSize: 20 }} /></button>
          <button className="  border p-2" style={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6, backgroundColor: "#fff" }}><AiOutlineHeart style={{ fontSize: 20 }} /></button>
        </div>
        <button ref={mbref}
        onClick={scrollToTop} className={`hideOnDesktop position-fixed scrollToTop ${showScrollToTop ? 'active' : ''}`}>
          <AiOutlineArrowUp />
        </button>
      </section>
      {
        show ? <CartModal setShow={setShow} /> : <></>
      }
    </>
  );
};

Detail.getLayout = function getLayout(Page) {
  return <MerchantLayout>{Page}</MerchantLayout>;
};

export default Detail;
