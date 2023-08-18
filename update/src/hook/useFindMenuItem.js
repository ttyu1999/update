import { useContext } from "react";
import { SetCategoryContext, SearchContext, PageContext } from "../store/product-context";
import MENU_DATA from "../assets/menu-data";

const useFindMenuItem = () => {
    const setCategoryCtx = useContext(SetCategoryContext);
    const searchCtx = useContext(SearchContext);
    const pageCtx = useContext(PageContext);

    const { setBreadCrumbArray, setSelectedCategory } = setCategoryCtx;

    const findMenuItemAndParents = (itemId, menuData) => {
        const recursiveFind = (menuItem, parents) => {
            if (menuItem.id === itemId) {
                if (menuItem.id === '000000') {
                    return setBreadCrumbArray([...parents, menuItem]);
                } else {
                    return setBreadCrumbArray([MENU_DATA[0],...parents, menuItem]);
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

    const categoriesClick = (categoryId, onHide = null) => {
        findMenuItemAndParents(categoryId, MENU_DATA);
        setSelectedCategory(categoryId);
        pageCtx.setCurrentPage(1);
        searchCtx.setSearchInputValue('');
        onHide && onHide();

        const element = document.getElementById('product__content');

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    return { categoriesClick };
}

export default useFindMenuItem;