import { Link, useParams } from "react-router-dom";
import React, { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { CartContext } from "../../../store/cart-context";
import PRODUCT_DATA from "../../../assets/product-data";
import useBreadCrumb from "../../../hook/useBreadCrumb";
import MENU_DATA from "../../../assets/menu-data";

const ProductPurchase = (props) => {
  const { getProductBreadCrumb, findMenuByCategoryId } = useBreadCrumb();
  const { categoryId } = useParams();
  const { product } = props;
  const { mainCategory } = props.product;
  const cartCtx = useContext(CartContext);
  const { addToCart, productId, productSpecId, selectedQuantity } = cartCtx;

  const handleAddToCart = () => {
    const newItem = {
      productId,
      productSpecId,
      selectedQuantity,
    };

    const product = PRODUCT_DATA.find(
      (product) => product.id === newItem.productId
    );
    if (product) {
      const productSpec = product.productSpecs.find(
        (spec) => spec.id === newItem.productSpecId
      );
      if (productSpec) {
        const updatedItem = {
          specId: productSpec.id,
          productName: product.productName,
          productImg: product.productImg[0],
          productOriPrice: product.productOriPrice,
          productPrice: product.productPrice,
          specName: productSpec.specName,
          stock: productSpec.stock,
          selectedQuantity: newItem.selectedQuantity,
        };

        addToCart(updatedItem);
      }
    }
  };

  const categories = getProductBreadCrumb(mainCategory);

  const category = categories.map((category) =>
    findMenuByCategoryId(category, MENU_DATA)
  );

  return (
    <div className="purchase__buttons__box">
      <Link
        to={`/product/${categoryId}/${productId}`}
        state={{ product, category }}
        className="btn read__more__btn"
      >
        <button type="button">
          <span>查看詳情</span>
        </button>
      </Link>
      <button className="btn add__cart__btn" onClick={handleAddToCart}>
        <span className="icon">
          <HiShoppingCart />
        </span>
        <span>加入購物車</span>
      </button>
    </div>
  );
};
export default React.memo(ProductPurchase);
