import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import InfoDefault from "../components/Info/InfoDefault";
import DesktopMenu from "../components/Menu/DesktopMenu";
import MobileMenu from "../components/Menu/MobileMenu";
import MenuPhoto from "../components/MenuPhoto";
import MerchantLayout from "../components/MerchantLayout";
import Slide from "../components/Slider/Slider";
import getDetail from "../hooks/useQuery";
import TabMenu from "../components/TabMenu";
import { DataContext } from "../store/globalState";
import Slider02 from "../components/Slider/Slider02";
import { BsCartCheck } from "react-icons/bs";
import CartModal from "../components/Modal/CartModal";
import Default from "../components/KhongGianPic/Default";
import { getBrandDetail } from "../hooks/useBrandDetail";
import useSWR from "swr";
import Head from "next/head";

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
//     props: { data: post },
//   };
// }

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = getBrandDetail(id)
  const { banner, info, isDefault, productList } = data || {}
  const { menus } = productList || {}
  const { state, dispatch } = useContext(DataContext)
  const { cart } = state
  const [menuPos, setMenuPos] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const [menuDeskPos, setMenuDeskPos] = useState(false);
  let mbref = useRef();
  let mbDref = useRef();
  useEffect(() => {
    let mbT = mbref.current?.offsetTop;
    let mbDT = mbDref.current?.offsetTop;
    const handleScroll = () => {
      if (window.scrollY >= mbT) {
        setMenuPos(true);
      } else {
        setMenuPos(false);
      }
      if (window.scrollY >= mbDT) {
        setMenuDeskPos(true);
      } else {
        setMenuDeskPos(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  if (isError) return <h2 className="text-center">{error}</h2>;
  if (isLoading) return <h2 className="text-center">Loading</h2>;
  const handleCartBtn = () => {
    router.push("/cart");
  };
  return (
    <>
      <Head>
        <title>Brand Detail</title>
        <meta name="description" content={info?.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta charset="UTF-8"></meta>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"></meta>
      </Head>
      <section className={`container py-2 ${show && "vh-100 overflow-hidden"}`}>
        <Banner banner={banner} />
        <InfoDefault info={info} />
        <MenuPhoto isDefault={false} map={info} />
        <Slider02 text="Món ăn đang giảm giá" />
        <div ref={mbref}><MobileMenu menuPos={menuPos} menus={menus} /></div>
        <div ref={mbDref}>{<DesktopMenu menuPos={menuDeskPos} menus={menus} />}</div>

        <TabMenu />
        {show && <CartModal setShow={setShow} />}
        <button
          className="btn position-fixed hideOnDeskTop"
          style={{ bottom: "80px", right: "15px", zIndex: 99, backgroundColor: '#F7A76C', color: 'white' }}
          onClick={handleShow}
        >
          <span>
            <BsCartCheck style={{ fontSize: 18 }} />
            {cart.length || 0}
          </span>
        </button>
      </section>
    </>

  );
};

Detail.getLayout = function getLayout(Page) {
  return <MerchantLayout>{Page}</MerchantLayout>;
};

export default Detail;
