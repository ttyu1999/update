import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {
  SearchContext,
  PageContext,
} from "../store/product-context";
import MENU_DATA from "../assets/menu-data";

const useFindMenuItem = () => {
  const searchCtx = useContext(SearchContext);
  const pageCtx = useContext(PageContext);

  const navigate = useNavigate();

  const findMenuItem = (itemId, categoryData) => {
    const recursiveFind = (menuItem) => {
      if (menuItem.id === itemId) {
        if ('000000' !== itemId) {
            return navigate(`/product/${itemId}`);
        } else {
            return navigate(`/product`);
        }
      }

      if (menuItem.subMenus) {
        for (const subMenu of menuItem.subMenus) {
          const found = recursiveFind(subMenu);
          if (found) {
            return found;
          }
        }
      }

      return null;
    };

    for (const menu of categoryData) {
      const result = recursiveFind(menu, []);
      if (result) {
        return result;
      }
    }

    return null;
  };


  const getParentCategoryIds = (itemId, categoryData) => {
    const recursiveFind = (categoryItem, parents) => {
      if (categoryItem.id === itemId) {
        return [...parents, categoryItem.id];
      }

      if (categoryItem.subCategory) {
        const found = recursiveFind(categoryItem.subCategory, [
          ...parents,
          categoryItem.id,
        ]);
        if (found) {
          return found;
        }
      }

      return null;
    };

    for (const category of categoryData) {
      const result = recursiveFind(category, []);
      if (result) {
        return result;
      }
    }

    return null;
  };

  const categoriesClick = (categoryId, onHide = null) => {
    const result = findMenuItem(categoryId, MENU_DATA);
    if (result) {
      navigate(result);
    }
    pageCtx.setCurrentPage(1);
    searchCtx.setSearchInputValue("");
    onHide && onHide();

    const body = document.body;

    body.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return { categoriesClick, findMenuItem, getParentCategoryIds };
};

export default useFindMenuItem;
