import React from 'react';
import { useContext } from 'react';
import './ProductSpecList.css';
import { ProductContext } from '../../../store/product-context';

const ProductSpecList = (props) => {
    console.log('specList');
    const { productSpec } = props;
    const ctx = useContext(ProductContext);
    
    const selectedHandler = () => {
        let stock = productSpec.stock;
        if (stock > 0) {
            props.onSelected(productSpec.specName);
            ctx.buyQuantityHandler(stock);
            ctx.resetQuantity();
        }
    }

    const isSoldOut = !productSpec.stock ? 'soldout' : undefined;

    return (
        <li className={isSoldOut} onClick={selectedHandler}>
            {productSpec.specName}
            {!productSpec.stock && <span>暫無存貨</span>}
        </li>
    );
}

export default ProductSpecList;