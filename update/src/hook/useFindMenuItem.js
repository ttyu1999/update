import { useContext } from "react";
import { ProductListContext, SearchContext } from "../store/product-context";
import MENU_DATA from "../assets/menu-data";

const useFindMenuItem = () => {
    const ctx = useContext(ProductListContext);
    const searchCtx = useContext(SearchContext);

    const findMenuItemAndParents = (itemId, menuData) => {
        const recursiveFind = (menuItem, parents) => {
            if (menuItem.id === itemId) {
                if (menuItem.id === '000000') {
                    return ctx.setBreadCrumbArray([...parents, menuItem]);
                } else {
                    return ctx.setBreadCrumbArray([MENU_DATA[0],...parents, menuItem]);
                }
            }
    
            if (menuItem.subMenus) {
                for (const subMenu of menuItem.subMenus) {
                    const found = recursiveFind(subMenu, [...parents, menuItem]);
                    if (found) {
                        return found;
                    }
                }
            }
    
            return null;
        }
    
        for (const menu of menuData) {
            const result = recursiveFind(menu, []);
            if (result) {
                return result;
            }
        }
    
        return null;
    }

    const categoriesClick = (categoryId) => {
        findMenuItemAndParents(categoryId, MENU_DATA);
        ctx.setSelectedCategory(categoryId);
        searchCtx.setCurrentPage(1);
        searchCtx.setSearchInputValue('');

        const element = document.getElementById('product__content');

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    return { categoriesClick };
}

export default useFindMenuItem;