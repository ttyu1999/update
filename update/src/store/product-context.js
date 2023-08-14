import React from "react";


export const SelectedProductContext = React.createContext({
    buyQuantityHandler: () => {},
    resetQuantity: () => {},
    specSelected: () => {},
    isResetQuantity: false,
    userSeletedQuantity: 1,
    setUserSeletedQuantity: () => {},

});

export const ProductListContext = React.createContext({
    products: [],
    filterData: [],
    setFilterData: () => {},
    selectedCategory: '',
    setSelectedCategory: () => {},
    getProductLength: '',
    setGetProductLength: () => {},
    onePageItem: '',
    breadCrumbArray: [],
    setBreadCrumbArray: () => {},
});

export const SearchContext = React.createContext({
    searchInputValue: '',
    setSearchInputValue: () => {},
    currentPage: '',
    setCurrentPage: () => {},
});