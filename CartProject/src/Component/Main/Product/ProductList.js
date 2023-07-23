import { useState } from "react";
import ProductItem from "./ProductItem";
import ProductModal from "./ProductModal";

const ProductList = (props) => {
    const [model, setModel] = useState('');

    const { products } = props;

    const showModelHandler = (product) => {
        setModel(
            <ProductModal
                product={product}
                onCloseModel={closeModelHandler}
            />
        );
    }

    const closeModelHandler = () => {
        setModel('');
    }
    
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
                                productImg={productImg}
                                productName={productName}
                                productDesc={productDesc}
                                productSpecs={productSpecs}
                                productOriPrice={productOriPrice}
                                productPrice={productPrice}
                                onShowModel={showModelHandler}
                            />
                        )
                    })
                }
            </ul>
            {model}
        </>
    );
}

export default ProductList;