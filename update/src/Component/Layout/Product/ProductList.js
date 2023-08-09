import { useCallback, useContext, useState } from "react";
import ProductItem from "./ProductItem";
import styles  from './ProductList.module.scss';
import ProductModal from "./ProductModal";
import { ProductContext } from "../../../store/product-context";


const ProductList = (props) => {
    const [shownProductModal, setShownProductModal] = useState(false);
    const [getProductId, setGetProductId] = useState('');

    const ctx = useContext(ProductContext);

      // 比較函數用於排序
    const compareByPrice = (a, b) => {
        switch (ctx.filterData) {
            case 'new_to_old':
                return a.addedTime - b.addedTime; // 由新到舊
            case 'old_to_new':
                return b.addedTime - a.addedTime; // 由舊到新
            case 'high_to_low':
                return b.productPrice - a.productPrice; // 由高到低
            case 'low_to_high':
                return a.productPrice - b.productPrice; // 由低到高

            default:
                return a.addedTime - b.addedTime;
        }
    };

    const filterProducts = ctx.products.sort(compareByPrice);

    const { products } = props;

    const selectedItemHandler = (productId) => {
        setGetProductId(productId);
    }

    const hideModalHandler = useCallback(() => {
        setShownProductModal(false);
    }, []);

    return (
        <>
            <ul className={styles.products_box}>
                {
                    filterProducts.map((product) => {
                        return (
                            <ProductItem
                                key={product.id}
                                product={product}
                                productId={product.id}
                                onSelected={selectedItemHandler}
                                onShownModal={setShownProductModal}
                            />
                        )
                    })
                }
            </ul>
            {shownProductModal && <ProductModal products={products} productItem={getProductId} onHide={hideModalHandler} />}
        </>
    );
}

export default ProductList;