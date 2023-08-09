import React from "react";


export const ProductContext = React.createContext({
    buyQuantityHandler: () => {},
    resetQuantity: () => {},
    specSelected: () => {},
    isResetQuantity: false,
    userSeletedQuantity: 1,
    setUserSeletedQuantity: () => {},
    products: [],
    filterData: [],
    setFilterData: () => {},
});

export const ProductIdContext = React.createContext({
    productId: '',
});
