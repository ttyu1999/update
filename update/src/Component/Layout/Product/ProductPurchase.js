import React from "react";
import { HiShoppingCart } from "react-icons/hi";

const ProductPurchase = () => {
    return (
        <div className="purchase__buttons__box">
            <button className="btn read__more__btn" type="button">
                <span>查看詳情</span>
            </button>
            <button className="btn add__cart__btn" type="submit">
                <span className="icon"><HiShoppingCart /></span>
                <span>加入購物車</span>
            </button>
        </div>
    );
}
export default React.memo(ProductPurchase);