import { useCallback, useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import styles  from './ProductList.module.scss';
import ProductModal from "./ProductModal";
import { ProductListFilter, CategoryContext, SearchContext, PageContext, GetProductLengthContext } from "../../../store/product-context";
import PRODUCT_DATA from "../../../assets/product-data";


const ProductList = () => {
    const [shownProductModal, setShownProductModal] = useState(false);
    const [getProductId, setGetProductId] = useState('');

    const categoryCtx = useContext(CategoryContext);
    const filterCtx = useContext(ProductListFilter);
    const searchCtx = useContext(SearchContext);
    const pageCtx = useContext(PageContext);
    const getProductLengthCtx = useContext(GetProductLengthContext);

    const { selectedCategory } = categoryCtx;
    const { filterData } = filterCtx;
    const { searchInputValue } = searchCtx;
    const { currentPage, onePageItem } = pageCtx;

    const selectCategoryHandler = useCallback((products) => {
        return products.filter(product => {
            if (searchInputValue || !selectedCategory || selectedCategory === '000000') {
                return product;
            } else {
                return Object.values(product.productCategory).includes(selectedCategory);
            }
        });
    }, [selectedCategory, searchInputValue]);

    const searchProductHandler = useCallback((products) => {
        return products.filter(product => product.productName.includes(searchInputValue) || product.productDesc.includes(searchInputValue));
    }, [searchInputValue]);


    const combinedFilterAndSearch = useCallback((products) => {
        const filteredByCategory = selectCategoryHandler(products);
        const filteredAndSearched = searchProductHandler(filteredByCategory);
        return filteredAndSearched;
    }, [selectCategoryHandler, searchProductHandler]);

    useEffect(() => {
        getProductLengthCtx(combinedFilterAndSearch(PRODUCT_DATA).length);
    }, [getProductLengthCtx, combinedFilterAndSearch]);

    // 比較函數用於排序
    const compareByTimeAndPrice = (a, b) => {
        switch (filterData) {
            case 'new__to__old':
                return a.addedTime - b.addedTime; // 由新到舊
            case 'old__to__new':
                return b.addedTime - a.addedTime; // 由舊到新
            case 'high__to__low':
                return b.productPrice - a.productPrice; // 由高到低
            case 'low__to__high':
                return a.productPrice - b.productPrice; // 由低到高

            default:
                return a.addedTime - b.addedTime;
        }
    };

    const filterProducts = combinedFilterAndSearch(PRODUCT_DATA).sort(compareByTimeAndPrice);

    const startIndex = (currentPage - 1) * onePageItem;
    const endIndex = onePageItem + startIndex;

    const currentItems = filterProducts.slice(startIndex, endIndex);

    let withoutItem;

    if (filterProducts.length === 0) {
        withoutItem = (
            <div className="without__item">
                <img src="img/withoutItem.png" alt="without__item" />
                    <p>
                        <span>．</span>
                        <span>．</span>
                        <span>．</span>
                        <span>暫</span>
                        <span>無</span>
                        <span>商</span>
                        <span>品</span>
                        <span>．</span>
                        <span>．</span>
                        <span>．</span>
                    </p>
            </div>
        );
    }

    const selectedItemHandler = (productId) => {
        setGetProductId(productId);
    }

    const hideModalHandler = useCallback(() => {
        setShownProductModal(false);
    }, []);

    return (
        <div className={styles.products__container} id="products__container">
            {withoutItem}
            <ul className="products__box">
                {
                    currentItems.map((product) => {
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
            {shownProductModal && <ProductModal productItem={getProductId} onHide={hideModalHandler} />}
        </div>
    );
}

export default ProductList;