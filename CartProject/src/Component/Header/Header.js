import './Header.css';

import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';
import ShoppingCart from './ShoppingCart';
import HeaderLogo from './HeaderLogo';

const Header = (props) => {
    return (
        <header>
            <div className="group">
                <HeaderLogo />
                <HeaderMenu menus={props.menus} />
                <HeaderSearch />
                <ShoppingCart />
            </div>
        </header>
    );
}

export default Header;