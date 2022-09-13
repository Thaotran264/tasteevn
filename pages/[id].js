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
  const { data, isLoading, isError } = getBrandDetail(id);
  // const { banner, info, isDefault, productList } = data || {}
  // const { menus } = productList || {}

  const { state, dispatch } = useContext(DataContext);
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
  useEffect(() => {
    const getData = async () => {
      const formData = new FormData();
      formData.append("BrandId", id);
      try {
        const res = await menuApi.loadData(formData);
        if (res.successful && res.data) {
          setMenu(res.data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [id]);
  useEffect(() => {
    if (menu) {
      let arr = [];
      menu.forEach((item) => {
        const formData = new FormData();
        formData.append("MenuID", item.id);
        formData.append("BrandId", item.brandId);
        const getData = async () => {
          const res = await menuApi.itemLoadData(formData);
          arr.push(res.data.data);
          setMenuItems(arr);
        };
        getData();
      });
    }
  }, [menu]);
  return (
    <>
      <Head>
        <title>Brand Detail</title>
        {/* <meta name="description" content={info?.metaDescription} /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta charset="UTF-8"></meta>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"></meta>
      </Head>
      <section className={`container py-2 ${show && "vh-100 overflow-hidden"}`}>
        <Banner />
        {/* <InfoDefault info={info} /> */}
        {/* <MenuPhoto isDefault={false} map={info} /> */}
        <Slider02 text="Món ăn đang giảm giá" />
        <div ref={mbref}>
          <MobileMenu menuPos={menuPos} menu={menu} items={menuItems} />
        </div>
        {/* <div ref={mbDref}>{<DesktopMenu menuPos={menuDeskPos}/>}</div> */}

        {show && <CartModal setShow={setShow} />}
        <div className="position-fixed bottom-0 end-0 start-0">
          <div className="container w-100">
            <div className="container d-flex bg-light justify-content-between">
              <button
                className="button bg-light d-flex align-items-center text-danger"
                style={{ height: 48, minWidth: 80 }}
                onClick={handleShow}
              >
                <BsCartCheck style={{ fontSize: 22 }} />
                <span style={{ fontSize: 20 }}>{total || 0}</span>
              </button>
              <button className="button bg-light">Tổng tiền: {formatter.format(total2)}</button>
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
