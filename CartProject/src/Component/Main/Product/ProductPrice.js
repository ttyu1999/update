import NumberWithCommas from "../../NumberWithCommas";

const ProductPrice = (props) => {
    const { productOriPrice, productPrice } = props;

    let oriPrice = productOriPrice && <span className="ori_price">NT${NumberWithCommas(productOriPrice * props.userSeletedQuantity)}</span>;

    return (
        <div className="price_box">
            {oriPrice}
            <span className="price">NT${NumberWithCommas(productPrice * props.userSeletedQuantity)}</span>
        </div>
    );
}
export default ProductPrice;