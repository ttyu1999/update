import NavMenu from "./NavMenu";
import styles from "./HeaderMenu.module.scss";
import { HiX } from "react-icons/hi";
import Modal from "../../../Component/UI/Modal";
import { useState } from "react";

const HeaderMenu = (props) => {
  const [removeAnimation, setRemoveAnimation] = useState(false);

  const hideMenuHandler = () => {
    setRemoveAnimation(true);
    const timer = setTimeout(() => {
      props.onHide();
      setRemoveAnimation(false);
    }, 350);

    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <Modal
      onHide={hideMenuHandler}
      remove={removeAnimation}
      onMoveIn={styles.show__modal}
      onMoveOut={styles.remove__modal}
    >
      <div className={styles.nav}>
        <section className="menu__group">
          <header className="menu__header">
            <h2>MENU</h2>
            <span className="icon menu__close" onClick={hideMenuHandler}>
              <HiX />
            </span>
          </header>
          <nav className="menu">
            <NavMenu onHide={hideMenuHandler} />
          </nav>
          <footer className="menu__footer">
            <ul>
              <li>
                <button type="button">關於我們</button>
              </li>
              <li>
                <button type="button">顧客服務</button>
              </li>
              <li>
                <button type="button">尋找旗艦店</button>
              </li>
              <li>
                <button type="button">聯繫</button>
              </li>
            </ul>
          </footer>
        </section>
      </div>
    </Modal>
  );
};

export default HeaderMenu;
