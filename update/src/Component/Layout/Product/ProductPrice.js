import React, { useContext } from "react";
import NumberWithCommas from '../../../Component/Provider/NumberWithCommas';
import { SelectedProductContext } from "../../../store/product-context";
import styles from './ProductPrice.module.scss';

const ProductPrice = (props) => {
    const { productOriPrice, productPrice } = props;

    const ctx = useContext(SelectedProductContext);
    let oriPrice = productOriPrice && <p className="ori__price">NT${NumberWithCommas(productOriPrice * ctx.userSeletedQuantity)}</p>;

    return (
        <div className={`${styles.price__box} ${props.className ? props.className : ''}`}>
            {oriPrice}
            <p className="price">NT${NumberWithCommas(productPrice * ctx.userSeletedQuantity)}</p>
        </div>
    );
}
export default React.memo(ProductPrice);