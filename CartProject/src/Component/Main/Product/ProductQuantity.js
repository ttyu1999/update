import { useEffect, useState, memo } from "react";

const ProductQuantity = memo((props) => {
    const [ inputValue, setInputValue ] = useState(props.inputValue);
    const [ isStockShortage, setisStockShortage ] = useState(false);

    const singleSpecStock = props.singleSpecStock;

    useEffect(() => {
        if (props.isResetQuantity) {
          setInputValue(1);
          setisStockShortage(false);
        }
    }, [props.resetQuantity]);

    useEffect(() => {
        props.onGetQuantity(inputValue);
    }, [inputValue]);

    const stockShortage = !isStockShortage || <p className="stock_shortage">庫存不足，無法訂購您選擇之數量</p>;

    const quantityHandler = (fluctuation) => {
        if (fluctuation === 'decrease') {
            if (inputValue > 1) {
                setInputValue(prevState => prevState - 1);
                setisStockShortage(false);
            }
        } else {
            if (inputValue < props.multipleSpecStock || inputValue < singleSpecStock) {
            setInputValue(prevState => prevState + 1);
            } else {
                setisStockShortage(true);
            }
        }
    }

    const userInputValue = (e) => {
        const { value } = e.target;
        setInputValue(value);

        if (value < 1) {
            setInputValue(1);
            setisStockShortage(false);
        }
        if (value > props.multipleSpecStock || value > singleSpecStock) {
            setInputValue(props.multipleSpecStock || singleSpecStock);
            setisStockShortage(true);
        }
    }

    return (
        <>
            <div className="quantity_box">
                <button
                    className="control_quantity decrease"
                    onClick={() => quantityHandler('decrease')}
                >
                    <span className="material-symbols-outlined">remove</span>
                </button>
                <input
                    className="user_buy_quantity"
                    type="number"
                    onChange={userInputValue}
                    value={inputValue}
                />
                <button
                    className="control_quantity increase"
                    onClick={() => quantityHandler('increase')}
                >
                    <span className="material-symbols-outlined">add</span>
                </button>
            </div>
            {stockShortage}
        </>
    );
});

export default ProductQuantity;