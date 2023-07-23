const ProductPurchase = () => {
    return (
        <div className="purchase_buttons_box">
            <button className="btn quick_order_btn" type="submit">
                <span>立即結帳</span>
            </button>
            <button className="btn add_cart_btn" type="submit">
                <span className="material-symbols-outlined">shopping_bag</span>
                <span>加入購物車</span>
            </button>
        </div>
    );
}
export default ProductPurchase;