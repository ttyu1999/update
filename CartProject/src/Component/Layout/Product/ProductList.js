import { useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
    const { products } = props;

    return (
        <>
            <ul className="all_products">
                {
                    products.map((product) => {
                        const { id, productImg, productName, productDesc, productSpecs, productOriPrice, productPrice } = product;
                        return (
                            <ProductItem
                                key={id}
                                product={product}
                                productId={id}
                                productImg={productImg}
                                productName={productName}
                                productDesc={productDesc}
                                productSpecs={productSpecs}
                                productOriPrice={productOriPrice}
                                productPrice={productPrice}
                            />
                        )
                    })
                }
            </ul>
        </>
    );
}

export default ProductList;