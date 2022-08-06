import { useRouter } from "next/router";
import React, { useState } from "react";
import Carousel from "../components/Carousel";
import Infor from "../components/Infor";
import DesktopMenu from "../components/Menu/DesktopMenu";
import MobileMenu from "../components/Menu/MobileMenu";
import MenuPhoto from "../components/MenuPhoto";
import Slide from "../components/Slider";
import getDetail from "../hooks/useQuery";

const Detail = () => {
  const [showBooking, setShowBooking] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { data, isError, isLoading, mutate } = getDetail(id);
  if (isError) return <h2 className="text-center">{error}</h2>;
  if (isLoading) return <h2 className="text-center">Loading</h2>;
  return (
    <div className="container">
      <Carousel banner={data?.banner} />
      <Infor setShowBooking={setShowBooking} isDefault={false} data={data} />
      <MenuPhoto isDefault={false} />
      <Slide isDefault={false} />
      {/* <Menu isDefault={false} menuPos={menuPos} /> */}
      <MobileMenu />
      <DesktopMenu />
    </div>
  );
};

export default Detail;
