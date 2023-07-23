import NumberWithCommas from "../../NumberWithCommas";

const ProductItem = (props) => {
    const { productImg, productName, productDesc, productSpecs, productOriPrice, productPrice } = props;

    let oriPrice = productOriPrice && <span className="ori_price">NT${NumberWithCommas(productOriPrice)}</span>;

    let stock;

    const allOutOfStock = productSpecs.some((productSpec) => {
        return productSpec.stock > 0;
    })

    const quickViewHandler = () => {
        const product = props.product;
        props.onShowModel(product);
    }

    if (allOutOfStock) {
        stock = (
            <>
                <button
                    className="quick_view_btn"
                    onClick={quickViewHandler}
                >
                    <span className="material-symbols-outlined">visibility</span>
                    <span>快速瀏覽</span>
                </button>
            </>
        );

    } else {
        stock = <p className="isSoldOut">暫無存貨</p>;
    }
    

    return (
        <li className="product_list">
            <a href="#">
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
        
    );
}

export default ProductItem;