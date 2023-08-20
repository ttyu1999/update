import { useParams } from "react-router-dom";
import React, { useState } from "react";

export const SelectedProductContext = React.createContext({
  buyQuantityHandler: () => {},
  resetQuantity: () => {},
  specSelected: () => {},
  isResetQuantity: false,
  userSeletedQuantity: 1,
  setUserSeletedQuantity: () => {},
});

export const CategoryContext = React.createContext({
  selectedCategory: "",
  breadCrumbArray: [],
});

export const SetCategoryContext = React.createContext({
  setSelectedCategory: () => {},
  setBreadCrumbArray: () => {},
});

export const CategoryProvide = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [breadCrumbArray, setBreadCrumbArray] = useState([]);

  return (
    <CategoryContext.Provider
      value={{
        selectedCategory,
        breadCrumbArray,
      }}
    >
      <SetCategoryContext.Provider
        value={{
          setSelectedCategory,
          setBreadCrumbArray,
        }}
      >
        {children}
      </SetCategoryContext.Provider>
    </CategoryContext.Provider>
  );
};

export const ProductListFilter = React.createContext({
  filterData: "",
  setFilterData: () => {},
});

export const ProductListFilterProvide = ({ children }) => {
  const [filterData, setFilterData] = useState([]);

  return (
    <ProductListFilter.Provider
      value={{
        filterData,
        setFilterData,
      }}
    >
      {children}
    </ProductListFilter.Provider>
  );
};

export const SearchContext = React.createContext({
  searchInputValue: "",
  setSearchInputValue: () => {},
});

export const SearchProvide = ({ children }) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  return (
    <SearchContext.Provider
      value={{
        searchInputValue,
        setSearchInputValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const PageContext = React.createContext({
  currentPage: "",
  setCurrentPage: () => {},
  getProductLength: "",
  setGetProductLength: () => {},
  onePageItem: "",
});

export const GetProductLengthContext = React.createContext({
  setGetProductLength: () => {},
});

export const PageProvide = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [getProductLength, setGetProductLength] = useState("");

  return (
    <PageContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        getProductLength,
        onePageItem: 16,
      }}
    >
      <GetProductLengthContext.Provider
        value={setGetProductLength}
      >
        {children}
      </GetProductLengthContext.Provider>
    </PageContext.Provider>
  );
};
