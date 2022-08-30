import React, { useState } from "react";
import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { DataContext } from "../../store/globalState";
import { addToCart } from "../../store/actions/actionsType";
import { formatter } from "../../utils";
const MobileMenu = ({ menuPos, menus }) => {
  const menuList = JSON.parse(menus?.data).Menus || [];
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;
  const [active, setActive] = useState(false);

  return (
    <div className="hideOnDesktop">
      <ul
        className={`d-flex mb-2 ps-0 overflow-scroll hideScrollbar bg-dark text-light bg-opacity-75 ${menuPos && "position-fixed bg-light "}`}
        style={menuPos ? { top: 0, left: 0, width: "100%", zIndex: 99 } : { margin: '0 -12px' }}
      >
        {menuList.map((item, index) => (
          <li key={item.Id} className="p-2 text-center" style={{ listStyle: "none", minWidth: "35%", fontWeight: 600 }}>
            <a href={`#menuRC${index}`}>{item.Name}</a>
          </li>
        ))}
      </ul>
      <div className="bg-white rounded p-2 configMenuMobile">
        {menuList.map((item, index) => (
          <div key={item.Id}>
            <h4 id={`menuRC${index}`}>{item.Name}</h4>
            {item?.Items?.map((it) => (
              <div key={it.Id} className='mb-2 border-bottom pb-2'>
                <div className="row">
                  <div className="col-4">
                    <div style={{ aspectRatio: "1 / 1" }}>
                      <img
                        className="w-100 h-100 d-block"
                        src="https://i.pinimg.com/236x/63/60/2d/63602d0f5a06a352d8c578e09f9d7134.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-8 d-flex align-items-start">
                    <div>
                      <h5>{it.Name}</h5>
                      <p>{it.Description}</p>
                      <p className="text-danger">{formatter.format(it.Price)}</p>
                    </div>
                    <button
                      className="btn btn-outline-danger ms-auto "
                      onClick={() => dispatch(addToCart(it, cart))}
                    >
                      Mua
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
