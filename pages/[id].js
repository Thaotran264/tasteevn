import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import Carousel from "../components/Carousel";
import Infor from "../components/Info/Infor";
import DesktopMenu from "../components/Menu/DesktopMenu";
import MobileMenu from "../components/Menu/MobileMenu";
import MenuPhoto from "../components/MenuPhoto";
import MerchantLayout from "../components/MerchantLayout";
import Slide from "../components/Slider";
import getDetail from "../hooks/useQuery";
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
    <div className="container">
      <Carousel banner={banner} />
      <Infor setShowBooking={setShowBooking} isDefault={false} data={info} />
      <MenuPhoto isDefault={false} map={info} />
      <Slide isDefault={false} />
      {/* <Menu isDefault={false} menuPos={menuPos} /> */}
      {/* <div ref={mbref}>{widgets && <MobileMenu menuPos={menuPos} menus={widgets[2]} />}</div> */}
      {/* <div ref={mbDref}>{widgets && <DesktopMenu menuPos={menuDeskPos} menus={widgets[2]} />}</div> */}
      <button
        className="btn btn-light position-fixed hideOnDeskTop"
        onClick={handleCartBtn}
        style={{ bottom: "50px", right: "15px" }}
      >
        <BsCartCheck style={{ fontSize: 24 }} />
      </button>
    </div>
  );
};

Detail.getLayout = function getLayout(Page) {
  return <MerchantLayout>{Page}</MerchantLayout>;
};

export default Detail;
