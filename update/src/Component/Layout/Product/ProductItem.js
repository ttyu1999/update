import React, { useCallback } from 'react';
import NumberWithCommas from '../../../Component/Provider/NumberWithCommas';
import styles  from './ProductList.module.scss';
import { HiOutlineEye } from "react-icons/hi";

const ProductItem = (props) => {

    const { product, productId, onSelected, onShownModal } = props;

    const { productImg, productName, productDesc, productSpecs, productOriPrice, productPrice } = product;

    let oriPrice = productOriPrice && <p className="ori__price"><s>NT${NumberWithCommas(productOriPrice)}</s></p>;

    let stock;

    const allOutOfStock = productSpecs.some((productSpec) => {
        return productSpec.stock > 0;
    })

    const quickViewHandler = useCallback(() => {
        onSelected(productId);
        onShownModal(true);
    }, [productId, onSelected, onShownModal]);

    if (allOutOfStock) {
        stock = (
            <>
                <button
                    type="button"
                    className="quick__view__btn"
                    onClick={() => quickViewHandler('show')}
                >
                    <span className="icon quick__view"><HiOutlineEye /></span>
                    <span>快速瀏覽</span>
                </button>
            </>
        );

    } else {
        stock = <p className={styles.isSoldOut}>暫無存貨</p>;
    }

    return (
        <>
            <li className="product__list">
                <a className="wrap">
                    <div className="pic">
                        <img src={productImg[0]} alt={productName} />
                        <img src={productImg[1]} alt={productName} />
                    </div>
                    <div className="txt">
                        <h2>{productName}</h2>
                        <p>{productDesc}</p>
                    </div>
                    <div className="price__box">
                        {oriPrice}
                        <p className="price">NT${NumberWithCommas(productPrice)}</p>
                    </div>
                </a>
                {stock}
            </li>
        </>
    );
}

export default React.memo(ProductItem);