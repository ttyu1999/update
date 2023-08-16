import React, { useContext } from "react";
import NumberWithCommas from '../../../Component/Provider/NumberWithCommas';
import { SelectedProductContext } from "../../../store/product-context";

const ProductPrice = (props) => {
    const { productOriPrice, productPrice } = props;

    const ctx = useContext(SelectedProductContext);
    let oriPrice = productOriPrice && <p className="ori__price">NT${NumberWithCommas(productOriPrice * ctx.userSeletedQuantity)}</p>;

    return (
        <div className="price__box">
            {oriPrice}
            <p className="price">NT${NumberWithCommas(productPrice * ctx.userSeletedQuantity)}</p>
        </div>
    );
}
export default React.memo(ProductPrice);