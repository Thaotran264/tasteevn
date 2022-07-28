import { useState } from "react";
import Booking from "../components/Booking";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Infor from "../components/Infor";
import Menu from "../components/Menu";
import MenuPhoto from "../components/MenuPhoto";
import Navbar from "../components/Navbar";
import Slide from "../components/Slider";

export default function Home() {
  const [showBooking, setShowBooking] = useState(false);
  const isDefault = false;
  return (
    <div className="bg-light position-relative">
      <Navbar />
      <Carousel />
      <Infor setShowBooking={setShowBooking} isDefault={isDefault} />
      <MenuPhoto isDefault={isDefault} />
      <Slide isDefault={isDefault} />
      {/* <Booking showBooking={showBooking} setShowBooking={setShowBooking} /> */}
      <Menu isDefault={isDefault} />
      <Footer />
    </div>
  );
}
