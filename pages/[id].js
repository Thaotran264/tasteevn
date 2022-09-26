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
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineFlag, AiOutlineHome } from "react-icons/ai";
import CartModal from "../components/Modal/CartModal";
import Default from "../components/KhongGianPic/Default";
import { getBrandDetail } from "../hooks/useBrandDetail";
import useSWR from "swr";
import Head from "next/head";
import { brandApi } from "../api-client/brand";
import { menuApi } from "../api-client/menu";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, totalCart, totalQuantityCart } from "../features/cart/cartSlice";
import { formatter } from "../utils";
import { merchantApi, orderApi } from "../api-client";
import Menu from "../components/Menu/Menu";
import { addToCart } from "../store/actions/actionsType";
import parse from "html-react-parser";

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
  const cart = useSelector(selectCart);
  const total = useSelector(totalQuantityCart);
  const [menuPos, setMenuPos] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const total2 = 0;
  cart?.forEach((item) => {
    total2 += item.totalPrice;
  });
  const [menuDeskPos, setMenuDeskPos] = useState(false);
  const [menu, setMenu] = useState();
  const [menuItems, setMenuItems] = useState([]);
  const [data, setData] = useState();
  const [infoWg, setInfoWg] = useState()
  const [bannerWg, setBannerWg] = useState()
  const [menuWg, setMenuWg] = useState()
  let mbref = useRef();
  let mbDref = useRef();
  useEffect(() => {
    const getData = async () => {
      try {
        if (id) {
          const res = await merchantApi.merChantInfo(id);
          if (res.data) {
            // setData(res.data);
            console.log(res.data);
            let menuWb = res.data.widgets.filter(item => item.widgetType == 5)[0].data
            setMenuWg(JSON.parse(menuWb).Menus)
            // setMenuWg();
            // setInfoWg(res.data.widgets.filter(item => item.widgetType == 0));
            // setBannerWg(res.data.widgets.filter(item => item.widgetType == 0));
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [id]);
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

  // const {widgets} = data && data || []
  // const menus = widgets?.filter(item => item.widgetType == 5)
  // console.log(menus);
  // const {data: dataMenu} = menus
  // const menuInfo = parse(dataMenu)
  // console.log(menuInfo);
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await orderApi.loadData({ start: '1' })
  //       console.log(res)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getData()
  // }, [])
  return (
    <>
      <Head>
        <title>Brand Detail</title>
        {/* <meta name="description" content={info?.metaDescription} /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta charset="UTF-8"></meta>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"></meta>
      </Head>

      <section className={`${show && "overflow-hidden"}`}>
        <Banner banner={data?.banner} />
        {/* <InfoDefault info={infoWg} /> */}
        <MenuPhoto isDefault={false} />
        <Slider02 text="Món ăn đang giảm giá" />
        <div ref={mbref}>
          <Menu productList={menuWg} menuPos={menuPos} />
        </div>

        {show && <CartModal setShow={setShow} />}
        {
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
                <button className="button ">Tổng tiền: {formatter.format(total2)}</button>
              </div>
            </div>
          </div>
        }
        <div className="d-none flex-column position-fixed showOnDesktop" style={{ bottom: 10, right: 10, backgroundColor: "#fff" }}>
          <button className="  border border-bottom-0  p-2" style={{ borderTopLeftRadius: 6, borderTopRightRadius: 6, backgroundColor: "#fff" }}><AiOutlineHome style={{ fontSize: 20 }} /></button>
          <button className="  border border-bottom-0  p-2 " style={{ backgroundColor: "#fff" }}
            onClick={handleShow}
          ><AiOutlineShoppingCart style={{ fontSize: 20 }} />
            {total >= 1 &&
              <span style={{ fontSize: 20 }}>{total}</span>
            }
          </button>

          <button className=" border  border-bottom-0   p-2" style={{ backgroundColor: "#fff" }}><AiOutlineFlag style={{ fontSize: 20 }} /></button>
          <button className="  border p-2" style={{ borderBottomLeftRadius: 6, borderBottomRightRadius: 6, backgroundColor: "#fff" }}><AiOutlineHeart style={{ fontSize: 20 }} /></button>

        </div>
      </section>
    </>
  );
};

Detail.getLayout = function getLayout(Page) {
  return <MerchantLayout>{Page}</MerchantLayout>;
};

export default Detail;
