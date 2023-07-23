import './Sidebar.css';
import { useState } from "react";

const Sidebar = (props) => {
    const { menus } = props;
    const [ expandedState, setExpandedState ] = useState({});
    
    const arrowClickHandler = (id) => {
        setExpandedState((prevExpandedState) => {
            console.log(prevExpandedState);
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
                <a>
                    <span>{menu.name}</span>
                </a>
                {menu.subMenus && (
                    <span
                        className={`material-symbols-outlined${isSubMenuExpanded ? ' rotate' : ''}`}
                        onClick={() => arrowClickHandler(menu.id)}
                    >
                        expand_more
                    </span>
                )}
                {menu.subMenus && (
                    <div className="drop_down sub_menu" style={{ gridTemplateRows: isSubMenuExpanded ? '1fr' : '0fr' }}>
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
        <nav className="sidebar">
            <ul>
                <li>
                    <a>
                        <span>全館商品</span>
                    </a>
                </li>
                {menus.map((menu, index) => {
                    return renderListItem(menu, index)
                })}
            </ul>
        </nav>
    );
}
export default Sidebar;