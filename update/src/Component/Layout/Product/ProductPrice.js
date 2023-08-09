import React, { useContext } from "react";
import NumberWithCommas from '../../../Component/Provider/NumberWithCommas';
import { ProductContext } from "../../../store/product-context";

const ProductPrice = (props) => {
    const { productOriPrice, productPrice } = props;

    console.log('price');
    const ctx = useContext(ProductContext);
    let oriPrice = productOriPrice && <span className="ori_price">NT${NumberWithCommas(productOriPrice * ctx.userSeletedQuantity)}</span>;

    return (
        <div className="price_box">
            {oriPrice}
            <span className="price">NT${NumberWithCommas(productPrice * ctx.userSeletedQuantity)}</span>
        </div>
    );
}
export default React.memo(ProductPrice);