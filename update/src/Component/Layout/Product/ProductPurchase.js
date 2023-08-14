import React from "react";
import { HiShoppingCart } from "react-icons/hi";

const ProductPurchase = () => {
    return (
        <div className="purchase__buttons__box">
            <button className="btn quick__order__btn" type="submit">
                <span>立即結帳</span>
            </button>
            <button className="btn add__cart__btn" type="submit">
                <span className="icon"><HiShoppingCart /></span>
                <span>加入購物車</span>
            </button>
        </div>
    );
}
export default React.memo(ProductPurchase);