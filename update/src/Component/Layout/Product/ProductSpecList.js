import React, { useCallback } from 'react';
import { useContext } from 'react';
import styles from './ProductSpecList.module.scss';
import { SelectedProductContext } from '../../../store/product-context';

const ProductSpecList = (props) => {
    const { productSpec, onSelected } = props;
    const ctx = useContext(SelectedProductContext);
    
    const selectedHandler = useCallback(() => {
        let stock = productSpec.stock;
        if (stock > 0) {
            onSelected(productSpec.specName);
            ctx.buyQuantityHandler(stock);
            ctx.resetQuantity();
        }
    }, [productSpec, onSelected, ctx]);

    const isSoldOut = !productSpec.stock ? styles.soldout : '';

    return (
        <li className={isSoldOut} onClick={selectedHandler}>
            {productSpec.specName}
            {!productSpec.stock && <span>暫無存貨</span>}
        </li>
    );
}

export default ProductSpecList;