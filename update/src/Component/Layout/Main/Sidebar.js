import styles from './Sidebar.module.scss';
import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import MENU_DATA from '../../../assets/menu-data';
import useFindMenuItem from '../../../hook/useFindMenuItem';

const Sidebar = () => {
    const [ expandedState, setExpandedState ] = useState({});

    const { categoriesClick } = useFindMenuItem();

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
                <button type="button" onClick={() => categoriesClick(menu.id)}>
                    <span>{menu.name}</span>
                </button>
                {menu.subMenus && (
                    <button type="button"
                        className={`icon${isSubMenuExpanded ? ' rotate' : ''}`}
                        onClick={() => arrowClickHandler(menu.id)}
                    >
                        <HiOutlineChevronDown />
                    </button>
                )}
                {menu.subMenus && (
                    <div className="drop__down sub__menu" style={{ gridTemplateRows: isSubMenuExpanded ? '1fr' : '' }}>
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
                {MENU_DATA.map((menu) => {
                    return renderListItem(menu);
                })}
            </ul>
        </nav>
    );
}
export default Sidebar;