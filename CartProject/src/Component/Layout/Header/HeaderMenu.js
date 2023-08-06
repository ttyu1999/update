import NavMenu from "./NavMenu"

const HeaderMenu = (props) => {

    return (
        <>
            <input type="checkbox" id="nav_hb_toggle" />
            <label className="nav_hb" htmlFor="nav_hb_toggle">
                <span className="material-symbols-outlined">menu</span>
            </label>
            <label className="menu_overlay" htmlFor="nav_hb_toggle" />
            <nav className="menu">
                <div className="menu_header">
                    <h2>MENU</h2>
                    <label className="menu_toggle" htmlFor="nav_hb_toggle">
                        <span className="material-symbols-outlined">close</span>
                    </label>
                </div>
                <NavMenu menus={props.menus} />
                <ul>
                    <li>
                        <a>關於我們</a>
                    </li>
                    <li>
                        <a>顧客服務</a>
                    </li>
                    <li>
                        <a>尋找旗艦店</a>
                    </li>
                    <li>
                        <a>聯繫</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}


export default HeaderMenu;