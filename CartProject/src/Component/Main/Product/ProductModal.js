import React, { useEffect, useState } from "react";
import ProductSelectSpec from "./ProductSelectSpec";
import ProductPrice from "./ProductPrice";
import ProductQuantity from "./ProductQuantity";
import ProductPurchase from "./ProductPurchase";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Autoplay } from 'swiper/modules';

import './ProductModel.css';

const ProductModal = (props) => {
    const { id, productImg, productName, productDesc, productSpecs, productOriPrice, productPrice } = props.product;

    const [ showBuyQuantity, setShowBuyQuantity ] = useState('');
    const [ inputValue, setInputValue ] = useState(1);
    const [ isResetQuantity, setIsResetQuantity ] = useState(false);
    const [ userSeletedQuantity, setUserSeletedQuantity ] = useState('1');

    const modelClose = () => {
        props.onCloseModel();
    }

    const resetQuantity = () => {
        setInputValue(3);
        setIsResetQuantity(true);
    };

    const buyQuantityHandler = (stock) => {
        setShowBuyQuantity(
            <>
                <ProductQuantity
                // stock 參數傳入 ProductSpecList 選取該規格後帶出的庫存量
                    multipleSpecStock={stock}
                    inputValue={inputValue}
                    isResetQuantity={isResetQuantity}
                    resetQuantity={resetQuantity}
                    onGetQuantity={getQuantity}
                />
                <ProductPurchase />
            </>
        );
    }
    
    const getQuantity = (quantity) => {
        setUserSeletedQuantity(quantity);
    }

    let swiperSlide = productImg.map((img, index) => {
        return (
            <SwiperSlide key={index}>
                <img src={img} alt={productName} />
            </SwiperSlide>
        );
    });

    let hasProductSpec;
    let singleSpecBuyQuantity;

    if (productSpecs.length > 1) {
        hasProductSpec = (
            <ProductSelectSpec
                productName={productName}
                productId={id}
                productSpecs={productSpecs}
                onBuyQuantityHandler={buyQuantityHandler}
                onResetQuantity={resetQuantity}
            />
        );
    } else {
        singleSpecBuyQuantity = (
            <>
                <ProductQuantity
                    singleSpecStock={productSpecs[0].stock}
                    inputValue={inputValue}
                    resetQuantity={resetQuantity}
                    onGetQuantity={getQuantity}
                />
                <ProductPurchase />
            </>
        );
    }

    return (
        <React.Fragment>
            <section className="product_modal">
                <div className="container">
                    <div className="item">
                        <div className="pic">
                            <Swiper
                                modules={[Autoplay]}
                                loop
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                            >
                                {swiperSlide}
                            </Swiper>
                        </div>
                    </div>
                    <div className="item">
                        <div className="txt">
                            <h2>{productName}</h2>
                            <p>{productDesc}</p>
                        </div>
                        {hasProductSpec}
                        <ProductPrice
                            productOriPrice={productOriPrice}
                            productPrice={productPrice}
                            userSeletedQuantity={userSeletedQuantity}
                        />
                        {showBuyQuantity}
                        {singleSpecBuyQuantity}
                    </div>
                </div>   
                <div className="cancel" onClick={modelClose}>
                    <span className="material-symbols-outlined">close</span>
                </div>
            </section>
            <div className="model_overlay" onClick={modelClose}/>
        </React.Fragment>
    );
}

export default ProductModal;