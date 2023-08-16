import Header from "./Component/Layout/Header/Header";
import Main from "./Component/Layout/Main/Main";
import Footer from "./Component/Layout/Footer/Footer";
import { SearchContext } from "./store/product-context";
import { useState } from "react";
import { ModalContext } from "./store/modal-context";

const App = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [removeAnimation, setRemoveAnimation] = useState(false);

  return (
    <SearchContext.Provider value={{searchInputValue, setSearchInputValue, currentPage, setCurrentPage}}>
      <ModalContext.Provider value={{removeAnimation, setRemoveAnimation}}>
        <Header />
        <Main />
        <Footer />
      </ModalContext.Provider>
    </SearchContext.Provider>
  );
};

export default App;
