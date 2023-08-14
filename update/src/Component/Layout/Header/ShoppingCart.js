import { HiOutlineTrash } from "react-icons/hi";
import styles from './ShoppingCart.module.scss';
import Fluctuation from "../../UI/Fluctuation";
import Modal from "../../UI/Modal";
import { useState } from "react";


const ShoppingCart = (props) => {
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
            onRightSide={true}
        >
            <div className={styles.shopping__cart__modal}>
                <section className="mini__cart">
                    <header className="opt__items">
                        <p>共<span>5</span>件商品</p>
                    </header>
                    <div className="opt__products">
                        <ul>
                            <li className="product__list">
                                <div className="pic">
                                    <a>
                                        <img src="./img/彩妝/innisfree Grace Gift 九宮格眼影限量聯名組(眼影+唇萃).jpg" alt="innisfree | Grace Gift 九宮格眼影限量聯名組(眼影+唇萃)" />
                                    </a>
                                </div>
                                <div className="txt">
                                    <a>
                                        <h2>innisfree | Grace Gift 九宮格眼影限量聯名組(眼影+唇萃)</h2>
                                    </a>
                                    <p className="spec">眼影盤#3+唇萃#5+法式可頌支架</p>
                                    <div className="price">
                                        <p>NT$980</p>
                                    </div>
                                    <div className="quantity">
                                        <Fluctuation />
                                        <div className="delete">
                                            <span className="icon">
                                                <HiOutlineTrash />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="total__amount">
                                        <p>NT$980</p>
                                    </div>
                                </div>
                            </li>
                            <li className="product__list">
                                <div className="pic">
                                    <a>
                                        <img src="./img/彩妝/晨露無色潤唇膏.jpg" alt="晨露無色潤唇膏" />
                                    </a>
                                </div>
                                <div className="txt">
                                    <a>
                                        <h2>晨露無色潤唇膏</h2>
                                    </a>
                                    <p className="spec"></p>
                                    <div className="price">
                                        <p>NT$450</p>
                                    </div>
                                    <div className="quantity">
                                        <Fluctuation />
                                        <div className="delete">
                                            <span className="icon">
                                                <HiOutlineTrash />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="total__amount">
                                        <p>NT$450</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <footer className="opt__total">
                        <p>小計<span>NT$20,000</span></p>
                    </footer>
                    <button type="button" className="check__cart">查看購物車</button>
                </section>
            </div>
        </Modal>
    );
}

export default ShoppingCart;