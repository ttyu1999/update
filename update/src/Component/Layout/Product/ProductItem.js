import React, { useCallback } from 'react';
import NumberWithCommas from '../../../Component/Provider/NumberWithCommas';
import styles  from './ProductList.module.scss';
import { HiOutlineEye } from "react-icons/hi";

const ProductItem = (props) => {

    const { product, productId, onSelected, onShownModal } = props;

    const { productImg, productName, productDesc, productSpecs, productOriPrice, productPrice } = product;

    let oriPrice = productOriPrice && <span className="ori_price">NT${NumberWithCommas(productOriPrice)}</span>;

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
                    className="quick_view_btn"
                    onClick={() => quickViewHandler('show')}
                >
                    <span className="icon quick_view"><HiOutlineEye /></span>
                    <span>快速瀏覽</span>
                </button>
            </>
        );

    } else {
        stock = <p className={styles.isSoldOut}>暫無存貨</p>;
    }
    
    console.log('haha');

    return (
        <>
            <li className="product_list">
                <a>
                    <div className="pic">
                        <img src={productImg[0]} alt={productName} />
                        <img src={productImg[1]} alt={productName} />
                    </div>
                    <div className="txt">
                        <h2>{productName}</h2>
                        <p>{productDesc}</p>
                    </div>
                    <div className="price_box">
                        {oriPrice}
                        <span className="price">NT${NumberWithCommas(productPrice)}</span>
                    </div>
                </a>
                {stock}
            </li>
        </>
    );
}

export default React.memo(ProductItem);