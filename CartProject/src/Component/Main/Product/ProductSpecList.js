import { memo } from 'react';

const ProductSpecList = memo((props) => {
    const { productSpec } = props;
    
    const selectedHandler = (e) => {
        let stock = productSpec.stock;
        
        if (stock > 0) {
            props.onSelected(e.target.id);
            props.onBuyQuantityHandler(stock);
            props.onResetQuantity();
        }
    }

    const isSoldOut = !productSpec.stock ? 'soldout' : undefined;


    return (
        <li
            className={isSoldOut}
            onClick={selectedHandler}
        >
            <input
                type="radio"
                id={productSpec.specName}
                name={productSpec.specName}
            />
            <label htmlFor={productSpec.specName}>
                {productSpec.specName}
                {!productSpec.stock && <span>暫無存貨</span>}
            </label>
        </li>
    );
});

export default ProductSpecList;