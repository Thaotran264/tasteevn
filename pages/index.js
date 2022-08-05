import { useEffect, useRef, useState } from "react";
import Booking from "../components/Booking";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Infor from "../components/Infor";
import Menu from "../components/Menu";
import MenuPhoto from "../components/MenuPhoto";
import Navbar from "../components/Navbar";
import Slide from "../components/Slider";
import {
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsTwitter,
  BsMessenger,
} from "react-icons/bs";
import TabMenu from "../components/TabMenu";
import Notify from "../components/Notify";
export default function Home() {
  const [showBooking, setShowBooking] = useState(false);
  const [pos, setPos] = useState("");
  const [menuPos, setMenuPos] = useState("");
  const [showTopBtn, setshowTopBtn] = useState(false);
  const isDefault = false;
  const navref = useRef();
  const menuRef = useRef();
  const slideRef = useRef();
  useEffect(() => {
    const navHeight = navref.current.offsetHeight;
    const menuHeight = menuRef.current.offsetHeight;
    const slideHeight = slideRef.current.offsetHeight;
    const slideTop = slideRef.current.offsetTop;
    const slideBottom = slideHeight + slideTop;
    const handleScroll = (event) => {
      let scroll = window.scrollY;
      if (scroll > 10) {
        setshowTopBtn(true);
      } else {
        setshowTopBtn(false);
      }
      // if (scroll > navHeight) {
      //   setPos("position-fixed top-0 start-0 end-0");
      // } else {
      //   setPos("position-relative");
      // }
      if (scroll > slideBottom) {
        setMenuPos("position-fixed top-0 start-0 end-0");
      } else {
        setMenuPos("position-relative");
      }

      // console.log("Ref.scrollY", navref.current.offsetTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-light position-relative">
      {/* <ScrollComponent /> */}
      <div
        className={`${pos}`}
        ref={navref}
        style={pos ? { zIndex: "99px" } : {}}
      >
        <Navbar />
      </div>
      <Carousel />
      <Infor setShowBooking={setShowBooking} isDefault={isDefault} />
      <MenuPhoto isDefault={isDefault} />
      <div ref={slideRef}>
        <Slide isDefault={isDefault} />
      </div>
      {/* <Booking showBooking={showBooking} setShowBooking={setShowBooking} /> */}
      <div
        ref={menuRef}
        // className={`${menuPos}`}
        // style={menuPos ? { zIndex: "99px" } : {}}
      >
        <Menu isDefault={isDefault} menuPos={menuPos} />
      </div>
      <div
        className="btn-group dropup"
        style={
          showTopBtn
            ? {
                display: "flex",
                position: "fixed",
                bottom: "200px",
                right: "15px",
              }
            : { display: "none" }
        }
      >
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <BsMessenger />
        </button>
        <ul className="dropdown-menu" style={{}}>
          <li className="bg-primary">
            <a className="dropdown-item w-100 rounded" href="#">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <BsYoutube />
            </a>
          </li>
        </ul>
      </div>
      <a
        className="btn btn-primary"
        href="#nav"
        style={
          showTopBtn
            ? {
                display: "flex",
                position: "fixed",
                bottom: "155px",
                right: "15px",
              }
            : { display: "none" }
        }
      >
        Click
      </a>
      <Footer />
      <TabMenu />
      {/* <div
        style={{ bottom: 0 }}
        className="position-fixed start-0 bg-dark bg-opacity-10 text-light end-0 d-flex justify-content-center">
        <a className="btn btn-danger w-25 mx-auto" href="/login">Login</a>
      </div> */}
    </div>
  );
}

export async function getStaticProps(context) {
  console.log('%c ENV', 'color: #007acc;', process.env.BASE_URL);
  return {
    props: {}, // will be passed to the page component as props
  }
}
