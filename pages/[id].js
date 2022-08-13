import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import Carousel from "../components/Carousel";
import Infor from "../components/Infor";
import Layout from "../components/Layout";
import DesktopMenu from "../components/Menu/DesktopMenu";
import MobileMenu from "../components/Menu/MobileMenu";
import MenuPhoto from "../components/MenuPhoto";
import Slide from "../components/Slider";
import TabMenu from "../components/TabMenu";
import getDetail from "../hooks/useQuery";

const Detail = () => {
  const [showBooking, setShowBooking] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { data, isError, isLoading, mutate } = getDetail(id);
  // const [datas, setDatas] = useState(data);
  const { info, widgets } = (data && data) || {};
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

  if (isError) return <h2 className="text-center">{error}</h2>;
  if (isLoading) return <h2 className="text-center">Loading</h2>;
  const handleCartBtn = () => {
    router.push("/cart");
  };
  return (
    <div className="container">
      <Carousel banner={data?.banner} />
      <Infor setShowBooking={setShowBooking} isDefault={false} data={data} />
      <MenuPhoto isDefault={false} map={info} />
      <Slide isDefault={false} />
      {/* <Menu isDefault={false} menuPos={menuPos} /> */}
      <div ref={mbref}>
        <MobileMenu menuPos={menuPos} menus={widgets[2]} />
      </div>
      <div ref={mbDref}>
        <DesktopMenu menuPos={menuDeskPos} menus={widgets[2]} />
      </div>
      <button
        className="btn btn-light position-fixed hideOnDeskTop"
        onClick={handleCartBtn}
        style={{ bottom: "100px", right: "15px" }}
      >
        <BsCartCheck style={{ fontSize: 24 }} />
      </button>
    </div>
  );
};

Detail.getLayout = function getLayout(Page) {
  return <Layout>{Page}</Layout>;
};

export default Detail;
