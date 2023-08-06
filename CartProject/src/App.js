import './Component/Default.css';
import './Component/icofont/icofont.min.css';

import Header from './Component/Layout/Header/Header';
import Footer from './Component/Layout/Footer/Footer';
import Main from './Component/Layout/Main/Main';

import MENU_DATA from './menuData';
import ProductModal from './Component/Layout/Product/ProductModal';
import { useContext, useState } from 'react';
import { ProductIdContext } from './store/product-context';

function App() {
  const ctx = useContext(ProductIdContext);
  const [model, setModel] = useState('');
  const [productId, setProductId] = useState('');

  const showModelHandler = () => {
    setModel(
        <ProductModal
            onCloseModel={closeModelHandler}
        />
    );
    document.body.classList.add('commodity-mode');
  }

  const closeModelHandler = () => {
      setModel('');
      document.body.classList.remove('commodity-mode');
  }

  return (
    <ProductIdContext.Provider value={productId}>
      <Header menus={MENU_DATA} />
      {/* <ProductModal onShowModel={showModelHandler} /> */}
      <Main />
      <Footer />
    </ProductIdContext.Provider>
  );
}

export default App;