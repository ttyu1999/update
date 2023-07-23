import './Component/Default.css';
import './Component/icofont/icofont.min.css';

import Header from './Component/Header/Header';
import Footer from './Component/Footer';
import Main from './Component/Main/Main';

import MENU_DATA from './menuData';

function App() {
  return (
    <>
      <Header menus={MENU_DATA} />
      <Main />
      <Footer />
    </>
  );
}

export default App;