import React from 'react'
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Menu = ({ menuPos, productList }) => {
    return (
        <>
            {/* <MobileMenu menuPos={menuPos} productList={productList} /> */}
            <DesktopMenu menuPos={menuPos} productList={productList} />
        </>
    )
}

export default Menu