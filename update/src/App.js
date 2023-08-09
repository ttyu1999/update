import Header from "./Component/Layout/Header/Header";
import Main from "./Component/Layout/Main/Main";
import Footer from "./Component/Layout/Footer/Footer";
import MENU_DATA from "./assets/menu-data";
import { ProductContext, ProductProvider } from "./store/product-context";
import PRODUCT_DATA from "./assets/product-data";
import FILTER_DATA from "./assets/filter-data";
import { useState } from "react";

const App = () => {
  const [filterData, setFilterData] = useState(FILTER_DATA);

  return (
    <ProductContext.Provider value={{products: PRODUCT_DATA, filterData, setFilterData}}>
      <Header menuData={MENU_DATA} />
      <Main />
      <Footer />
    </ProductContext.Provider>
  );
};

export default App;
