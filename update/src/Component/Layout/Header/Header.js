import styles from "./Header.module.scss";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";

import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";
import ShoppingCart from "./ShoppingCart";
import HeaderLogo from "./HeaderLogo";
import { useState } from "react";

const Header = () => {
    const [shownMenu, setShownMenu] = useState(false);
    const [shownShoppingCart, setShownShoppingCart] = useState(false);

    const modalHandler = (identifier) => {
        identifier === 'showMenu' ? setShownMenu(true) : setShownMenu(false);
        identifier === 'showCart' ? setShownShoppingCart(true) : setShownShoppingCart(false);
    }

    return (
        <header className={styles.header}>
        <div className="group">
            <HeaderLogo />
            <div className="menu">
                <span className="icon" onClick={() => modalHandler('showMenu')}>
                    <HiOutlineMenu />
                </span>
            </div>
            {shownMenu && <HeaderMenu onHide={() => modalHandler('hide')} />}
            <HeaderSearch />
            <div className="shopping__cart">
                <span className="icon" onClick={() => modalHandler('showCart')}>
                    <HiOutlineShoppingCart />
                </span>
            </div>
            {shownShoppingCart && <ShoppingCart onHide={() => modalHandler('hide')} />}
        </div>
        </header>
    );
};

export default Header;
