import styles from "./Header.module.scss";
import { HiOutlineMenu } from "react-icons/hi";

import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";
import ShoppingCart from "./ShoppingCart";
import HeaderLogo from "./HeaderLogo";
import { useState } from "react";

const Header = (props) => {
    const [shownMenu, setShownMenu] = useState(false);

    const menuHandler = (identifier) => {
        identifier === 'show' ? setShownMenu(true) : setShownMenu(false);
    }

    return (
        <header className={styles.header}>
        <div className="group">
            <HeaderLogo />
            <div className="menu">
                <span className="icon" onClick={() => menuHandler('show')}>
                    <HiOutlineMenu />
                </span>
            </div>
            {shownMenu && <HeaderMenu menuData={props.menuData} onHide={() => menuHandler('hide')} />}
            <HeaderSearch />
            {/* <ShoppingCart /> */}
        </div>
        </header>
    );
};

export default Header;
