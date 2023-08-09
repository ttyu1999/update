import React from "react";
import { HiShoppingCart } from "react-icons/hi";


const ProductPurchase = () => {
    console.log('Purchase');
    return (
        <div className="purchase_buttons_box">
            <button className="btn quick_order_btn" type="submit">
                <span>立即結帳</span>
            </button>
            <button className="btn add_cart_btn" type="submit">
                <span className="icon"><HiShoppingCart /></span>
                <span>加入購物車</span>
            </button>
        </div>
    );
}
export default React.memo(ProductPurchase);