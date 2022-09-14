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
import { brandApi } from "../api-client/brand";
import { menuApi } from "../api-client/menu";
import { useSelector } from "react-redux";
import { selectCart, totalCart } from "../features/cart/cartSlice";
import { formatter } from "../utils";
import { merchantApi } from "../api-client";
import Menu from "../components/Menu/Menu";

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
  let firstLoggin = true;
  const router = useRouter();
  const { id } = router.query;
  console.log(id)
  const cart = useSelector(selectCart)
  const total = useSelector(totalCart)
  const [menuPos, setMenuPos] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const total2 = 0
  cart.forEach(item => {
    total2 += item.totalPrice
  })
  const [menuDeskPos, setMenuDeskPos] = useState(false);
  const [menu, setMenu] = useState();
  const [menuItems, setMenuItems] = useState([]);
  const [data, setData] = useState()
  let mbref = useRef();
  let mbDref = useRef();
  useEffect(() => {
    const getData = async () => {
      try {
        if (id) {
          const res = await merchantApi.merChantInfo(id)
          if (res.data) {
            setData(res.data)
          }
        }
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])
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

  return (
    <>
      <Head>
        <title>Brand Detail</title>
        {/* <meta name="description" content={info?.metaDescription} /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta charset="UTF-8"></meta>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"></meta>
      </Head>

      <section
        className={`${show && "overflow-hidden"}`}
      >
        <Banner banner={data?.banner} />
        <InfoDefault info={data?.info} />
        <MenuPhoto isDefault={false} />
        <Slider02 text="Món ăn đang giảm giá" />
        <div ref={mbref}>
          {/* <MobileMenu productList={data?.productList} menuPos={menuPos} /> */}
          <Menu productList={data?.productList} menuPos={menuPos} />
        </div>

        {show && <CartModal setShow={setShow} />}
        <div className="hideOnDesktop position-fixed bottom-0 end-0 start-0" style={{ backgroundColor: "#FFAE6D" }}>
          <div className="container w-100">
            <div className="d-flex justify-content-between">
              <button
                className="button  d-flex align-items-center "
                style={{ height: 48, minWidth: 80 }}
                onClick={handleShow}
              >
                <BsCartCheck style={{ fontSize: 22 }} />
                <span style={{ fontSize: 20 }}>{total || 0}</span>
              </button>
              <button className="button ">Tổng tiền: {formatter.format(total2)}</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Detail.getLayout = function getLayout(Page) {
  return <MerchantLayout>{Page}</MerchantLayout>;
};

export default Detail;
