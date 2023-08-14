import React, { useContext } from "react";
import NumberWithCommas from '../../../Component/Provider/NumberWithCommas';
import { SelectedProductContext } from "../../../store/product-context";

const ProductPrice = (props) => {
    const { productOriPrice, productPrice } = props;

    const ctx = useContext(SelectedProductContext);
    let oriPrice = productOriPrice && <span className="ori__price">NT${NumberWithCommas(productOriPrice * ctx.userSeletedQuantity)}</span>;

    return (
        <div className="price__box">
            {oriPrice}
            <span className="price">NT${NumberWithCommas(productPrice * ctx.userSeletedQuantity)}</span>
        </div>
    );
}
export default React.memo(ProductPrice);