import NumberWithCommas from "../../NumberWithCommas";
import classes from './ProductList.module.css';

const ProductItem = (props) => {
    const { productId, productImg, productName, productDesc, productSpecs, productOriPrice, productPrice } = props;

    let oriPrice = productOriPrice && <span className={classes.ori_price}>NT${NumberWithCommas(productOriPrice)}</span>;

    let stock;

    const allOutOfStock = productSpecs.some((productSpec) => {
        return productSpec.stock > 0;
    })

    const quickViewHandler = () => {
        props.onShowModel(productId);
    }

    if (allOutOfStock) {
        stock = (
            <>
                <button
                    className={classes.quick_view_btn}
                    onClick={quickViewHandler}
                >
                    <span className="material-symbols-outlined">visibility</span>
                    <span>快速瀏覽</span>
                </button>
            </>
        );

    } else {
        stock = <p className={classes.isSoldOut}>暫無存貨</p>;
    }
    

    return (
        <li className={classes.product_list}>
            <a>
                <div className={classes.pic}>
                    <img src={productImg[0]} alt={productName} />
                    <img src={productImg[1]} alt={productName} />
                </div>
                <div className={classes.txt}>
                    <h2>{productName}</h2>
                    <p>{productDesc}</p>
                </div>
                <div className={classes.price_box}>
                    {oriPrice}
                    <span className={classes.price}>NT${NumberWithCommas(productPrice)}</span>
                </div>
            </a>
            {stock}
        </li>
        
    );
}

export default ProductItem;