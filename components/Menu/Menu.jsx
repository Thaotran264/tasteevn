import React from 'react'
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Menu = ({ menuPos, productList }) => {
    return (
        <div  style={{marginBottom: 56}}>
            {/* <MobileMenu menuPos={menuPos} productList={productList} /> */}
            <DesktopMenu menuPos={menuPos} productList={productList} />
        </div>
    )
}

export default Menu