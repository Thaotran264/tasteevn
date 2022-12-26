import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineArrowUp, AiOutlineFlag, AiFillHeart, AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { TbBrandBooking } from 'react-icons/tb';
import { merchantApi } from "../api-client/merchant";
import Banner from "../components/Banner";
import Booking from "../components/Booking";
import InfoDefault from "../components/Info/InfoDefault";
import Layout from "../components/Layout";
import Menu from "../components/Menu/Menu";
import MenuPhoto from "../components/MenuPhoto";
import CartModal from "../components/Modal/CartModal";
import { CartContext } from "../context/cartContext";
// export async function getStaticPaths() {
//   const res = await axios.get("https://pro.tastee.vn/api/Home/get_product_slider");
//   const paths = res.data.data.map((item) => ({
//     params: { id: item.brandId },
//   }));
//   return {
//     paths,
//     fallback: false, // can also be true or 'blocking'
//   };
// }

// export async function getStaticProps({ params }) {
//   const res = await axios.get(`https://pro.tastee.vn/Merchant/${params.id}`);
//   const post = res.data.data;
//   return {
//     // Passed to the page component as props
//     props: { detail: post },
//   };
// }


const Detail = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  const router = useRouter()
  const { id } = router.query
  const [detail, setDetail] = useState({})
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await merchantApi.merChantInfo(id)
        if(res.data && res.successful) {
          setDetail(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [id])
  const [showBooking, setShowBooking] = useState(false)
  const { webMap, widgets } = detail
  const infoWg = widgets?.filter(item => item.widgetType == 0)[0]
  const photos = widgets?.filter(item => item.widgetType == 3)[0]
  const menus = widgets?.filter(item => item.widgetType == 5)[0]
  const { state: { cart } } = useContext(CartContext)
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(false)
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
  const ScrollToTopButton = () => (
    <button
      ref={mbref}
      onClick={scrollToTop}
      className={`hideOnDesktop position-fixed scrollToTop ${showScrollToTop ? 'active' : ''} rounded-5`}>
      <AiOutlineArrowUp style={{ width: 24, height: 24 }} />
    </button>
  )
  const LikedHandler = async () => {
    try {
      const params = {
        brandId: query.id
      }
      if (like) {
        const res = await merchantApi.like(params)
        setLike(like)
      }
      const res = await merchantApi.unlike(params)
      setLike(false)


    } catch (err) {
      console.log(err)
    }
  }
  const MenuButton = () => (
    <div
      className="hideOnMobile d-flex flex-column position-fixed"
      style={{ bottom: 10, right: 10, backgroundColor: "#fff", width: 60 }}>
      <Link href='/'>
        <a
          className="border border-bottom-0  p-2 d-flex justify-content-center"
          style={{ borderTopLeftRadius: 6, borderTopRightRadius: 6, backgroundColor: "#fff" }}>
          <AiOutlineHome style={{ fontSize: 20 }} />
        </a>
      </Link>

      <button
        className=" border border-bottom-0 p-2"
        style={{ backgroundColor: "#fff" }}
        onClick={() => setShowBooking(!showBooking)}>
        <TbBrandBooking style={{ fontSize: 20 }} />
      </button>

      <button
        className="border border-bottom-0  p-2 position-relative"
        style={{ backgroundColor: "#fff" }}
        onClick={handleShow}
      >
        <AiOutlineShoppingCart style={{ fontSize: 20 }} />
        {
          cart?.length > 0 &&
          (<span
            className="position-absolute d-flex justify-content-center align-items-center rounded-circle"
            style={{ fontSize: 11, width: 16, height: 16, backgroundColor: 'red', color: 'white', top: 4, right: 1 }}>
            {cart?.length || 0}
          </span>)
        }
      </button>

      {/* <button className=" border  border-bottom-0   p-2" style={{ backgroundColor: "#fff" }}><AiOutlineFlag style={{ fontSize: 20 }} /></button> */}
      <button
        className="border p-2"
        onClick={LikedHandler}
        style={like ? { borderBottomLeftRadius: 6, borderBottomRightRadius: 6, backgroundColor: "#fff" } : { borderBottomLeftRadius: 6, borderBottomRightRadius: 6, backgroundColor: "#red" }}>
        <AiFillHeart style={like ? { backgroundColor: "#fff" } : { color: "red" }} />
      </button>
    </div>
  )
  return (
    <Layout title='Brand Detail'>
      <section className='d-flex flex-column gap-2'>
   
        <Banner infoWg={infoWg} />
        <InfoDefault info={infoWg} maps={webMap} />
        <MenuPhoto maps={webMap} photos={photos} />
        <Menu productList={menus} />

        <MenuButton />
      </section>
      {
        showBooking && <Booking setShowBooking={setShowBooking} />
      }
      {
        show ? <CartModal setShow={setShow} /> : <></>
      }
    </Layout>
  );
};

// Detail.getLayout = function getLayout(Page) {
//   return <MerchantLayout>{Page}</MerchantLayout>;
// };

export default Detail;
