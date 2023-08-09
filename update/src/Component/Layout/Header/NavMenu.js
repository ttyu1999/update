import { useCallback } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiX } from "react-icons/hi";


const NavMenu = (props) => {
    const { menuData } = props;

    const renderListItem = useCallback((menu) => {
        return (
            <li key={menu.id}>
                <a>{menu.name}</a>
                {menu.subMenus && 
                <>
                    <input type="checkbox" id={menu.id} />
                    <label htmlFor={menu.id}>
                        <span className="icon">
                            <HiOutlineChevronRight />
                        </span>
                    </label>
                </>
                }
                {menu.subMenus && 
                <div className="drop__down" key={menu.id}>
                    <header className="menu__header">
                        <input type="checkbox" id={menu.id} />
                        <label htmlFor={menu.id}>
                            <span className="icon back__prev">
                                <HiOutlineChevronLeft />
                            </span>
                        </label>
                        <h3>{menu.name}</h3>
                        <span className="icon menu__close" onClick={props.onHide}><HiX /></span>
                    </header>
                    <ul>
                        {menu.subMenus && menu.subMenus?.map(subMenu => {
                            return renderListItem(subMenu);
                        })}
                    </ul>
                </div>
                }
            </li> 
        );
    }, []);

    return (
        <ul>
            <li>
                <a>全館商品</a>
            </li>
            {menuData.map(menu => renderListItem(menu, menu.subMenus))}
        </ul>
    )
}
export default NavMenu;
