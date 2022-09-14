import React from 'react'
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Menu = ({ menuPos, productList }) => {
    console.log('productList', productList)
    return (
        <>
            <h2>Menu</h2>
            <MobileMenu menuPos={menuPos} menus={productList} />
            <DesktopMenu menuPos={menuPos} menus={productList} />
        </>
    )
}

export default Menu