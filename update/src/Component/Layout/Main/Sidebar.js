import styles from './Sidebar.module.scss';
import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const Sidebar = (props) => {
    const { menus } = props;
    const [ expandedState, setExpandedState ] = useState({});

    const categoriesClick = (id) => {
        console.log(id);
    }
    
    const arrowClickHandler = (id) => {
        setExpandedState((prevExpandedState) => {
            return (
                {
                    ...prevExpandedState,
                    [id]: !prevExpandedState[id]
                }
            );
        });
    }

    const renderListItem = (menu) => {
        const isSubMenuExpanded = expandedState[menu.id] || false;
        return (
            <li key={menu.id}>
                <a onClick={() => categoriesClick(menu.id)}>
                    <span>{menu.name}</span>
                </a>
                {menu.subMenus && (
                    <span
                        className={`icon${isSubMenuExpanded ? ' rotate' : ''}`}
                        onClick={() => arrowClickHandler(menu.id)}
                    >
                        <HiOutlineChevronDown />
                    </span>
                )}
                {menu.subMenus && (
                    <div className="drop_down sub_menu" style={{ gridTemplateRows: isSubMenuExpanded ? '1fr' : '' }}>
                        <ul>
                            {menu.subMenus.map((subMenu) => {
                                return renderListItem(subMenu);
                            })}
                        </ul>
                    </div>
                )}
            </li> 
        );
    }
    

    return (
        <nav className={styles.sidebar}>
            <ul>
                <li>
                    <a>
                        <span>全館商品</span>
                    </a>
                </li>
                {menus.map((menu) => {
                    return renderListItem(menu)
                })}
            </ul>
        </nav>
    );
}
export default Sidebar;