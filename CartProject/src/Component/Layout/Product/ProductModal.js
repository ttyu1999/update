import React, { useCallback, useEffect, useMemo, useState } from "react";
import ProductSelectSpec from "./ProductSelectSpec";
import ProductPrice from "./ProductPrice";
import ProductQuantity from "./ProductQuantity";
import ProductPurchase from "./ProductPurchase";
import { ProductContext } from "../../../store/product-context";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Autoplay } from 'swiper/modules';

import './ProductModal.css';
import Modal from "../../UI/Modal";

const ProductModal = (props) => {

    const { id, productImg, productName, productDesc, productSpecs, productOriPrice, productPrice } = props.product;

    const memoizedProductSpecs = useMemo(() => productSpecs, [productSpecs]);
    const memoizedProductId = useMemo(() => id, [id]);

    const [ showBuyQuantity, setShowBuyQuantity ] = useState('');
    const [ modelSrcoll, setModelSrcoll ] = useState('product_modal');
    const [ isResetQuantity, setIsResetQuantity ] = useState(false);
    const [ userSeletedQuantity, setUserSeletedQuantity ] = useState(1);

    const modelClose = () => {
        props.onCloseModel();
    }

    const resetQuantity = () => {
        setIsResetQuantity(true);
    }


    const buyQuantityHandler = (stock) => {
        setShowBuyQuantity(
            <>
                <ProductQuantity
                // stock 參數傳入 ProductSpecList 選取該規格後帶出的庫存量
                    multipleSpecStock={stock}
                    onResetQuantity={resetQuantity}
                    // onGetQuantity={getQuantity}
                />
                <ProductPurchase />
            </>
        );
    }
    
    const getQuantity = (quantity) => {
        setUserSeletedQuantity(quantity);
    }

    const specSelected = () => {
        setModelSrcoll('product_modal scroll');
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
                productId={memoizedProductId}
                productSpecs={memoizedProductSpecs}
            />
        );
    } else {
        singleSpecBuyQuantity = (
            <>
                <ProductQuantity
                    singleSpecStock={productSpecs[0].stock}
                    onResetQuantity={resetQuantity}
                    onGetQuantity={getQuantity}
                />
                <ProductPurchase />
            </>
        );
    }
    console.log('Modal');

    return (
        <Modal onClick={modelClose}>
            <ProductContext.Provider
                value={{
                    buyQuantityHandler,
                    resetQuantity,
                    specSelected,
                    isResetQuantity,
                    userSeletedQuantity,
                    setUserSeletedQuantity,
                }}
            >
                {/* <section className={modelSrcoll}> */}
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
                            />
                            {showBuyQuantity}
                            {singleSpecBuyQuantity}
                        </div>
                    </div>   
                    <div className="cancel" onClick={modelClose}>
                        <span className="material-symbols-outlined">close</span>
                    </div>
                {/* </section> */}
            </ProductContext.Provider>
        </Modal>
    );
}

export default React.memo(ProductModal);