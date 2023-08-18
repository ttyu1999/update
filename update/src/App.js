import Header from "./Component/Layout/Header/Header";
import Main from "./Component/Layout/Main/Main";
import Footer from "./Component/Layout/Footer/Footer";
import { SearchProvide, CategoryProvide } from "./store/product-context";
import { ModalProvide } from "./store/modal-context";
import { CartProvide } from "./store/cart-context";

const App = () => {

  return (
    <>
      <CartProvide>
        <CategoryProvide>
          <SearchProvide>
            <ModalProvide>
              <Header />
              <Main />
            </ModalProvide>
          </SearchProvide>
        </CategoryProvide>
      </CartProvide>
      <Footer />
    </>
  );
};

export default App;
