const ShoppingCart = () => {
    return (
         <>
            <input type="checkbox" id="shopping_cart_toggle" />
            <div className="shopping_cart">
                <label className="shopping_cart_btn" htmlFor="shopping_cart_toggle">
                    <span className="material-symbols-outlined">shopping_bag</span>
                </label>
                <section className="mini_cart">
                    <div className="opt_items">
                        <p>共<span>5</span>件商品</p>
                    </div>
                    <div className="opt_products">
                        <ul>
                            <li className="product_list">
                                <div className="pic">
                                    <a>
                                        <img src="./img/彩妝/innisfree Grace Gift 九宮格眼影限量聯名組(眼影+唇萃).jpg" alt="innisfree | Grace Gift 九宮格眼影限量聯名組(眼影+唇萃)" />
                                    </a>
                                </div>
                                <div className="txt">
                                    <a>
                                        <h2>innisfree | Grace Gift 九宮格眼影限量聯名組(眼影+唇萃)</h2>
                                    </a>
                                    <p className="spec">眼影盤#3+唇萃#5+法式可頌支架</p>
                                    <div className="price">
                                        <p>NT$980</p>
                                    </div>
                                    <div className="opt_amount">
                                        <button className="control_amount reduce">
                                            <span className="material-symbols-outlined">remove</span>
                                        </button>
                                        <input className="user_buy_amount" type="number" />
                                        <button className="control_amount plus">
                                            <span className="material-symbols-outlined">add</span>
                                        </button>
                                        <button className="delete_product">
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                    <div className="opt_price">
                                        <p>NT$980</p>
                                    </div>
                                </div>
                            </li>
                            <li className="product_list">
                                <div className="pic">
                                    <a>
                                        <img src="./img/彩妝/晨露無色潤唇膏.jpg" alt="晨露無色潤唇膏" />
                                    </a>
                                </div>
                                <div className="txt">
                                    <a>
                                        <h2>晨露無色潤唇膏</h2>
                                    </a>
                                    <p className="spec"></p>
                                    <div className="price">
                                        <p>NT$450</p>
                                    </div>
                                    <div className="opt_amount">
                                        <button className="control_amount reduce">
                                            <span className="material-symbols-outlined">remove</span>
                                        </button>
                                        <input className="user_buy_amount" type="number" />
                                        <button className="control_amount plus">
                                            <span className="material-symbols-outlined">add</span>
                                        </button>
                                        <button className="delete_product">
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                    <div className="opt_price">
                                        <p>NT$450</p>
                                    </div>
                                </div>
                            </li>
                            <li className="product_list">
                                <div className="pic">
                                    <a>
                                        <img src="./img/彩妝/晨露無色潤唇膏.jpg" alt="晨露無色潤唇膏" />
                                    </a>
                                </div>
                                <div className="txt">
                                    <a>
                                        <h2>晨露無色潤唇膏</h2>
                                    </a>
                                    <p className="spec"></p>
                                    <div className="price">
                                        <p>NT$450</p>
                                    </div>
                                    <div className="opt_amount">
                                        <button className="control_amount reduce">
                                            <span className="material-symbols-outlined">remove</span>
                                        </button>
                                        <input className="user_buy_amount" type="number" />
                                        <button className="control_amount plus">
                                            <span className="material-symbols-outlined">add</span>
                                        </button>
                                        <button className="delete_product">
                                            <span className="material-symbols-outlined">delete</span>
                                        </button>
                                    </div>
                                    <div className="opt_price">
                                        <p>NT$450</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="opt_total">
                        <p>小計<span>NT$20,000</span></p>
                    </div>
                    <button className="check_cart">查看購物車</button>
                </section>
            </div>
            <label className="mini_cart_overlay" htmlFor="shopping_cart_toggle"></label>
        </>
    );
}

export default ShoppingCart;