import { useRouter } from 'next/router';
import React from 'react'
import Layout from '../../components/Layout';
import  HistoryOrder  from './components/HistoryOrder';
import Wishlist from './components/Wishlist'

const ListProfilePage = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log('%c[id].jsx line:6 id', 'color: #007acc;', id);
  return (
    <div>
        {/* Profile:/ { id } */}
        { id == 'order' && <HistoryOrder /> }
        { id == 'wishlist' && <Wishlist /> }
     </div>
  )
}


ListProfilePage.getLayout = function getLayout(Page) {
    return <Layout>{Page}</Layout>;
  };
  
  export default ListProfilePage;