import NumberWithCommas from "../../Provider/NumberWithCommas";
import { HiOutlineTrash } from "react-icons/hi";
import Fluctuation from "../../UI/Fluctuation";
import { useState } from "react";

const CartItem = (props) => {
  const {
    productName,
    productImg,
    productOriPrice,
    productPrice,
    specId,
    specName,
    stock,
    selectedQuantity,
  } = props.item;

  const [inputValue, setInputValue] = useState(selectedQuantity);

  const quantityHandler = (fluctuation) => {
    if (fluctuation === "decrease") {
      if (inputValue > 1) {
        setInputValue((prevState) => prevState - 1);
      }
      props.onRemove(specId);
    } else if (fluctuation === "increase") {
      if (inputValue < stock) {
        setInputValue((prevState) => prevState + 1);
      }
      props.onAdd({ ...props.item, selectedQuantity: 1 });
    } else {
      props.onRemove({specId, selectedQuantity: 0});
    }
  };

  const getUserInputValue = (e) => {
    e.preventDefault();
  };

  return (
    <li className="product__list">
      <div className="pic">
        <a>
          <img src={productImg} alt={productName} />
        </a>
      </div>
      <div className="txt">
        <a>
          <h2>{productName}</h2>
        </a>
        <p className="spec">{`－ ${specName}`}</p>
        <div className="price__box">
          {productOriPrice && (
            <p className="ori__price">
              <s>NT${NumberWithCommas(productOriPrice)}</s>
            </p>
          )}
          <p className="price">NT${NumberWithCommas(productPrice)}</p>
        </div>
        <div className="quantity">
          <Fluctuation
            onIncrease={() => quantityHandler("increase")}
            onDecrease={() => quantityHandler("decrease")}
            onGetUserInputValue={getUserInputValue}
            onInputValue={inputValue}
            disabled="disabled"
          />
          <div className="delete" onClick={() => quantityHandler("delete")}>
            <span className="icon">
              <HiOutlineTrash />
            </span>
          </div>
        </div>
        <div className="total__amount">
          <p>NT${NumberWithCommas(productPrice * inputValue)}</p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
