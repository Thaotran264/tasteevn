import { useRouter } from 'next/router';
import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout';
import  HistoryOrder  from './components/HistoryOrder';
import Wishlist from './components/Wishlist'
import { isMobile } from "react-device-detect";
import WishlistShop from '../profile-desktop/components/wishlistShop';

const ListProfilePage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [_isMobile, setMobile] = useState(false);
    useEffect(() => {
      setMobile(isMobile);
      // !isMobile ? router.push("/profile-desktop?slug=chinh-sua-thong-tin") : router.push("/profile") 
    }, [_isMobile]);
    
  return (
    <div>
        {/* Profile:/ { id } */}
        { id == 'order' && <HistoryOrder /> }
        { id == 'wishlist' && <WishlistShop /> }
     </div>
  )
}


ListProfilePage.getLayout = function getLayout(Page) {
    return <Layout>{Page}</Layout>;
  };
  
  export default ListProfilePage;