import React, { useRef } from "react";
import { useCallback, useContext, useEffect, useState } from "react";

import './ProductQuantity.css';
import { ProductContext } from "../../../store/product-context";

const ProductQuantity =(props) => {
    const { singleSpecStock, multipleSpecStock, onResetQuantity, onGetQuantity } = props;
    const [ inputValue, setInputValue ] = useState(1);
    const [ isStockShortage, setisStockShortage ] = useState(false);

    const inputValueRef = useRef();
    const ctx = useContext(ProductContext);

    console.log('quantity');

    useEffect(() => {
        if (ctx.isResetQuantity) {
            setInputValue(1);
            setisStockShortage(false);
        }
    }, [onResetQuantity, ctx.isResetQuantity]);

    useEffect(() => {
        ctx.setUserSeletedQuantity(inputValue);
    });

    const stockShortage = !isStockShortage || <p className="stock_shortage">庫存不足，無法訂購您選擇之數量</p>;

    const quantityHandler = useCallback((fluctuation) => {
        if (fluctuation === 'decrease') {
            if (inputValue > 1) {
                setInputValue(prevState => prevState - 1);
                setisStockShortage(false);
            }
        } else {
            if (inputValue < multipleSpecStock || inputValue < singleSpecStock) {
            setInputValue(prevState => prevState + 1);
            } else {
                setisStockShortage(true);
            }
        }
    }, [multipleSpecStock, singleSpecStock, inputValue]);

    const getUserInputValue = useCallback((e) => {
        const { value } = e.target;
        setInputValue(value);

        if (value < 1) {
            setInputValue(1);
            setisStockShortage(false);
        }
        if (value > multipleSpecStock || value > singleSpecStock) {
            setInputValue(multipleSpecStock || singleSpecStock);
            setisStockShortage(true);
        }
    }, [multipleSpecStock, singleSpecStock]);

    return (
        <>
            <div className="quantity_box">
                <div>
                    <button
                        className="control_quantity decrease"
                        onClick={() => quantityHandler('decrease')}
                    >
                        <span className="material-symbols-outlined">remove</span>
                    </button>
                    <input
                        className="user_buy_quantity"
                        type="number"
                        onChange={getUserInputValue}
                        value={inputValue}
                        ref={inputValueRef}
                    />
                    <button
                        className="control_quantity increase"
                        onClick={() => quantityHandler('increase')}
                    >
                        <span className="material-symbols-outlined">add</span>
                    </button>
                </div>
            </div>
            {stockShortage}
        </>
    );
}

export default React.memo(ProductQuantity);