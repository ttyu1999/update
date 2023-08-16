import { HiOutlineTrash } from "react-icons/hi";
import styles from './ShoppingCart.module.scss';
import Fluctuation from "../../UI/Fluctuation";
import Modal from "../../UI/Modal";
import { useContext, useEffect, useState } from "react";
import NumberWithCommas from "../../Provider/NumberWithCommas";
import { SelectedProductContext } from "../../../store/product-context";
import MENU_DATA from "../../../assets/menu-data";
import { ModalContext } from "../../../store/modal-context";
import useHideModel from "../../../hook/useHideModal";


const ShoppingCart = (props) => {
    const ctx = useContext(SelectedProductContext);
    const modalCtx = useContext(ModalContext);
    const [ inputValue, setInputValue ] = useState(1);

    const { hideMenuHandler } = useHideModel();

    const quantityHandler = (fluctuation) => {
        if (fluctuation === 'decrease') {
            if (inputValue > 1) {
                setInputValue(prevState => prevState - 1);
            }
        } else {
            if (inputValue < 8) {
            setInputValue(prevState => prevState + 1);
            }
        }
    };

    const getUserInputValue = (e) => {
        const { value } = e.target;
        setInputValue(+value);

        if (value < 1) {
            setInputValue(1);
        }
        if (value > 8) {
            setInputValue(8);
        }
    };

    const DUMMY_DATA = [
        // {
        //     id: 'B0202001',
        //     addedTime: new Date("2023-7-31"),
        //     productImg: [
        //         'img/彩妝/innisfree Grace Gift 九宮格眼影限量聯名組(眼影+唇萃).jpg',
        //         'img/彩妝/innisfree Grace Gift 九宮格眼影限量聯名組(眼影+唇萃)法式馬卡龍.jpg'
        //     ],
        //     productCategory: {
        //         topLevelCategory: MENU_DATA[2].id,
        //         twoLevelCategory: MENU_DATA[2].subMenus[1].id,
        //         threeLevelCategory: MENU_DATA[2].subMenus[1].subMenus[1].id
        //     },
        //     productName: 'innisfree | Grace Gift 九宮格眼影限量聯名組(眼影+唇萃)',
        //     productDesc: 'innisfree | Grace Gift 九宮格眼影限量聯名組(眼影+唇萃)',
        //     productSpecs: [
        //         {
        //             id: 'B0202001001',
        //             specName: '眼影盤#1+唇萃#2+法式可頌支架',
        //             SKUNumber: 1,
        //             specColor: null,
        //             stock: 1
        //         },
        //         {
        //             id: 'B0202001002',
        //             specName: '眼影盤#3+唇萃#5+法式馬卡龍支架',
        //             SKUNumber: 1,
        //             specColor: null,
        //             stock: 0
        //         },
        //         {
        //             id: 'B0202001003',
        //             specName: '眼影盤#3+唇萃#5+法式可頌支架',
        //             SKUNumber: 1,
        //             specColor: null,
        //             stock: 8
        //         }
        //     ],
        //     productOriPrice: 1720,
        //     productPrice: 980,
        //     productTag: {
        //         hotTag: false,
        //         newTag: true,
        //         saleTag: false
        //     }
        // }
    ];

    let withoutItem;

    if (DUMMY_DATA.length === 0) {
        withoutItem = (
            <div className="without__item">
                <img src="img/withoutItem.png" alt="without__item" />
                    <p>無選購商品</p>
            </div>
        );
    }


    return (
        <Modal
            onHide={() => hideMenuHandler(350, props.onHide)}
            remove={modalCtx.removeAnimation}
            onMoveIn={styles.show__modal}
            onMoveOut={styles.remove__modal}  
            onRightSide={true}
        >
            <section className={styles.mini__cart}>
                <header className="opt__items">
                    <p>共<span>{DUMMY_DATA.length}</span>件商品</p>
                </header>
                <div className="opt__products">
                    {withoutItem}
                    <ul>
                        {DUMMY_DATA.map(data => {
                            return (
                                <li className="product__list" key={data.id}>
                                    <div className="pic">
                                        <a>
                                            <img src={data.productImg[0]} alt={data.productName} />
                                        </a>
                                    </div>
                                    <div className="txt">
                                        <a>
                                            <h2>{data.productName}</h2>
                                        </a>
                                        <p className="spec">{data.productSpecs[0].specName}</p>
                                        <div className="price__box">
                                        {data.productOriPrice && <p className="ori__price"><s>NT${NumberWithCommas(data.productOriPrice)}</s></p>}
                                            <p className="price">NT${NumberWithCommas(data.productPrice)}</p>
                                        </div>
                                        <div className="quantity">
                                            <Fluctuation
                                                onDecrease={() => quantityHandler('decrease')}
                                                onIncrease={() => quantityHandler('increase')}
                                                onGetUserInputValue={getUserInputValue}
                                                onInputValue={inputValue}
                                            />
                                            <div className="delete">
                                                <span className="icon">
                                                    <HiOutlineTrash />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="total__amount">
                                            <p>NT${NumberWithCommas(data.productPrice * inputValue)}</p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <footer className="opt__total">
                    <p>小計<span>NT${NumberWithCommas(0)}</span></p>
                </footer>
                <button type="button" className="check__cart">前往訂購</button>
            </section>
        </Modal>
    );
}

export default ShoppingCart;