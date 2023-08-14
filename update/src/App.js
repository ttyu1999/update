import Header from "./Component/Layout/Header/Header";
import Main from "./Component/Layout/Main/Main";
import Footer from "./Component/Layout/Footer/Footer";
import { SearchContext } from "./store/product-context";
import { useState } from "react";

const App = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <SearchContext.Provider value={{searchInputValue, setSearchInputValue, currentPage, setCurrentPage}}>
      <Header />
      <Main />
      <Footer />
    </SearchContext.Provider>
  );
};

export default App;
