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
    props: { data: post },
  };
}
const Detail = ({ data }) => {
  const [showBooking, setShowBooking] = useState(false);
  // const router = useRouter();
  // const { id } = router.query;
  // const { data, isError, isLoading, mutate } = getDetail(id);
  const { info, widgets, banner } = (data && data) || {};
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

  // if (isError) return <h2 className="text-center">{error}</h2>;
  // if (isLoading) return <h2 className="text-center">Loading</h2>;
  const handleCartBtn = () => {
    router.push("/cart");
  };
  return (
    <div className={`container py-2 ${show && "vh-100 overflow-hidden"}`}>
      <Banner banner={banner} />
      <InfoDefault setShowBooking={setShowBooking} isDefault={false} data={info} />
      {/* <MenuPhoto isDefault={false} map={info} /> */}
      <Default map={info} />
      {/* <Slide isDefault={false} /> */}
      <Slider02 text="Món ăn đang giảm giá" />
      {/* <Menu isDefault={false} menuPos={menuPos} /> */}
      {/* <div ref={mbref}>{widgets && <MobileMenu menuPos={menuPos} menus={widgets[2]} />}</div> */}
      {/* <div ref={mbDref}>{widgets && <DesktopMenu menuPos={menuDeskPos} menus={widgets[2]} />}</div> */}

      <TabMenu />
      {show && <CartModal setShow={setShow} />}
      <button
        className="btn position-fixed hideOnDeskTop"
        style={{ bottom: "80px", right: "15px", zIndex: 99, backgroundColor: 'royalblue', color: 'white' }}
        onClick={handleShow}
      >
        <span>
          <BsCartCheck style={{ fontSize: 24 }} />
          {/* {cart?.length} */}0
        </span>
      </button>
    </div>
  );
};

Detail.getLayout = function getLayout(Page) {
  return <MerchantLayout>{Page}</MerchantLayout>;
};

export default Detail;
