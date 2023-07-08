import "./Header.scss";
import { CgMenuLeft, CgClose } from "react-icons/cg";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser
} from "react-icons/ai";
import { useState } from "react";

export default function Header() {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <div className="header">
        <div className="side-menu">
          <CgMenuLeft />
          <CgClose />
        </div>

        <div className="logo">Elite Comfort</div>

        <div className="menus">
          <div id="dropdown">
            <span onClick={handleHover}>Our Offers </span>

            <div id="dropdown-menus" className={hover ? "active" : ""}>
              <div className="category-menu">
                <span>Categories</span>
                <ul>
                  <li>Living Room Furniture</li>
                  <li>Nursery Funiture</li>
                  <li>Bedroom Furniture</li>
                  <li>Kitchen & Dining Furniture</li>
                  <li>Home Office Funiture</li>
                </ul>
              </div>
              <div className="feature-menu">
                <span>Feature</span>
                <ul>
                  <li>Furnitures Deal</li>
                  <li>Furnitures Deal</li>
                  <li>Furnitures Deal</li>
                  <li>Dorm Funiture</li>
                </ul>
              </div>
            </div>
          </div>

          <span>Bed Rooms </span>
          <span>Kitchen & Dining </span>
        </div>
        <div className="icons">
          <AiOutlineSearch />
          <AiOutlineShoppingCart />
          <AiOutlineUser />
        </div>
      </div>
    </>
  );
}
