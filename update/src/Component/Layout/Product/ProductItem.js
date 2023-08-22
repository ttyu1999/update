import { Link, useParams } from "react-router-dom";
import React, { useCallback } from "react";
import styles from "./ProductItem.module.scss";
import classes from './ProductPrice.module.scss';
import { HiOutlineEye } from "react-icons/hi";
import useBreadCrumb from "../../../hook/useBreadCrumb";
import MENU_DATA from "../../../assets/menu-data";
import NumberWithCommas from "../../Provider/NumberWithCommas";

const ProductItem = (props) => {
  const { getProductBreadCrumb, findMenuByCategoryId } = useBreadCrumb();
  const { product, productId, onSelected, onShownModal } = props;
  const { categoryId } = useParams();

  const {
    productImg,
    productName,
    productDesc,
    productSpecs,
    productOriPrice,
    productPrice,
    mainCategory,
  } = product;

  let stock;

  const allOutOfStock = productSpecs.some((productSpec) => {
    return productSpec.stock > 0;
  });

  const categories = getProductBreadCrumb(mainCategory);

  const category = categories.map(category => findMenuByCategoryId(category, MENU_DATA));


  const quickViewHandler = useCallback(() => {
    onSelected(product);
    onShownModal(true);
  }, [product, onSelected, onShownModal]);

  if (allOutOfStock) {
    stock = (
      <>
        <button
          type="button"
          className="quick__view__btn"
          onClick={quickViewHandler}
        >
          <span className="icon quick__view">
            <HiOutlineEye />
          </span>
          <span>快速瀏覽</span>
        </button>
      </>
    );
  } else {
    stock = <p className={styles.isSoldOut}>暫無存貨</p>;
  }

  let oriPrice = productOriPrice && <p className="ori__price">NT${NumberWithCommas(productOriPrice)}</p>;

  return (
    <>
      <li className={styles.product__list}>
        <Link
          to={`/product/${categoryId}/${productId}`}
          state={{ product, category}}
          className="wrap"
        >
          <div className="pic">
            <img src={productImg[0]} alt={productName} />
            <img src={productImg[1]} alt={productName} />
          </div>
          <div className="txt">
            <h2>{productName}</h2>
            <p>{productDesc}</p>
          </div>
          <div className={classes.price__box}>
            {oriPrice}
            <p className="price">NT${NumberWithCommas(productPrice)}</p>
        </div>
        </Link>
        {stock}
      </li>
    </>
  );
};

export default React.memo(ProductItem);
