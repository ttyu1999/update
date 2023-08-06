const NavMenu = (props) => {
    const { menus } = props;

    const renderListItem = (menu) => {
        return (
            <li key={menu.id}>
                <input type="checkbox" id={menu.id} />
                <label htmlFor={menu.id}>
                    <a>{menu.name}</a>
                    {menu.subMenus && <span className="material-symbols-outlined">chevron_right</span>}
                </label>
                <div className="drop_down main_menu" key={menu.id}>
                    <div className="menu_header">
                        <h3>{menu.name}</h3>
                        <label className="back_prev" htmlFor={menu.id}>
                            <span className="material-symbols-outlined">chevron_left</span>
                        </label>
                        <label className="menu_toggle" htmlFor="nav_hb_toggle">
                            <span className="material-symbols-outlined">close</span>
                        </label>
                    </div>
                    <ul>
                        {menu.subMenus && menu.subMenus?.map(subMenu => {
                            return renderListItem(subMenu);
                        })}
                    </ul>
                </div>
            </li> 
        );
    }

    return (
        <ul>
            <li>
                <a>全館商品</a>
            </li>
            {menus.map(menu => renderListItem(menu, menu.subMenus))}
        </ul>
    )
}
export default NavMenu;

// const TopLevelMenu = (props) => {
//     const { menu, twoLevelMenus } = props;
    
//     const twoLevelMenu = twoLevelMenus && twoLevelMenus.map(twoLevelMenu => {
//         return (
//             <TwoLevelMenu
//                 key={twoLevelMenu.id}
//                 twoLevelMenu={twoLevelMenu}
//                 threeLevelMenus={twoLevelMenu.threeLevelMenu}
//             />
//         );
//     })

//     return renderListItem(menu, twoLevelMenu);
// }

// const TwoLevelMenu = (props) => {
//     const { twoLevelMenu, threeLevelMenus } = props;
//     const threeLevelMenu = threeLevelMenus && threeLevelMenus.map(threeLevelMenu => {
//         return (
//             <ThreeLevelMenu
//                 key={threeLevelMenu.id}
//                 threeLevelMenu={threeLevelMenu}
//             />
//         );
//     })

//     return renderListItem(twoLevelMenu, threeLevelMenu);
// }

// const ThreeLevelMenu = (props) => {
//     const { threeLevelMenu } = props;
//     return renderListItem(threeLevelMenu);
// }

