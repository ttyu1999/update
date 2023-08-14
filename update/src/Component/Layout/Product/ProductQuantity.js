import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from './ProductQuantity.module.scss';
import { SelectedProductContext } from "../../../store/product-context";
import Fluctuation from "../../UI/Fluctuation";

const ProductQuantity =(props) => {
    const { singleSpecStock, multipleSpecStock, onResetQuantity } = props;
    const [ inputValue, setInputValue ] = useState(1);
    const [ isStockShortage, setisStockShortage ] = useState(false);

    const ctx = useContext(SelectedProductContext);

    useEffect(() => {
        if (ctx.isResetQuantity) {
            setInputValue(1);
            setisStockShortage(false);
        }
    }, [onResetQuantity, ctx.isResetQuantity]);

    useEffect(() => {
        ctx.setUserSeletedQuantity(inputValue);
    });

    const stockShortage = !isStockShortage || <p className={styles.stock__shortage}>庫存不足，無法訂購您選擇之數量</p>;

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
        setInputValue(+value);

        if (value < 1) {
            setInputValue(1);
            setisStockShortage(false);
        }
        if (value > multipleSpecStock || value > singleSpecStock) {
            setInputValue(multipleSpecStock || singleSpecStock);
            setisStockShortage(true);
        }
        return setisStockShortage(false);
    }, [multipleSpecStock, singleSpecStock]);

    return (
        <>
            <Fluctuation
                onDecrease={() => quantityHandler('decrease')}
                onIncrease={() => quantityHandler('increase')}
                onGetUserInputValue={getUserInputValue}
                onInputValue={inputValue}
            />
            {stockShortage}
        </>
    );
}

export default ProductQuantity;