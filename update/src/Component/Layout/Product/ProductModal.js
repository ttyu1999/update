import React, { useContext, useState } from "react";
import { HiX } from "react-icons/hi";
import ProductSelectSpec from "./ProductSelectSpec";
import ProductPrice from "./ProductPrice";
import ProductQuantity from "./ProductQuantity";
import ProductPurchase from "./ProductPurchase";
import { SelectedProductContext } from "../../../store/product-context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./ProductModal.module.scss";

import "./ProductModal.module.scss";
import Modal from "../../UI/Modal";
import PRODUCT_DATA from "../../../assets/product-data";
import { ModalContext } from "../../../store/modal-context";
import useHideModel from "../../../hook/useHideModal";

const ProductModal = (props) => {
  const [showBuyQuantity, setShowBuyQuantity] = useState('');
  const [modelSrcoll, setModelSrcoll] = useState(false);
  const [isResetQuantity, setIsResetQuantity] = useState(false);
  const [userSeletedQuantity, setUserSeletedQuantity] = useState(1);

  const filterItem = PRODUCT_DATA.filter(
    (product) => product.id === props.productItem
  );

  const {
    id,
    productImg,
    productName,
    productDesc,
    productSpecs,
    productOriPrice,
    productPrice,
  } = filterItem[0];

  const modalCtx = useContext(ModalContext);

  const { hideMenuHandler } = useHideModel();

  const resetQuantity = () => {
    setIsResetQuantity(true);
  };

  const buyQuantityHandler = (stock) => {
    setShowBuyQuantity(
      <>
        <ProductQuantity
          // stock 參數傳入 ProductSpecList 選取該規格後帶出的庫存量
          multipleSpecStock={stock}
          onResetQuantity={resetQuantity}
        />
        <ProductPurchase />
      </>
    );
  };

  const specSelected = () => {
    setModelSrcoll(true);
  };


  let swiperSlide = productImg?.map((img, index) => {
    return (
      <SwiperSlide key={index}>
        <img src={img} alt={productName} />
      </SwiperSlide>
    );
  });

  let hasProductSpec;
  let singleSpecBuyQuantity;

  if (productSpecs?.length > 1) {
    hasProductSpec = (
      <ProductSelectSpec productId={id} productSpecs={productSpecs} />
    );
  } else {
    singleSpecBuyQuantity = (
      <>
        <ProductQuantity
          singleSpecStock={productSpecs[0].stock}
          onResetQuantity={resetQuantity}
        />
        <ProductPurchase />
      </>
    );
  }

  const modalStyle = modelSrcoll ? {overflowY: 'auto'} : {overflowY: 'visible'}; 

  return (
    <Modal
      onHide={() => hideMenuHandler(250, props.onHide)}
      remove={modalCtx.removeAnimation}
      onMoveIn={styles.show__modal}
      onMoveOut={styles.remove__modal}
    >
      <SelectedProductContext.Provider
        value={{
          buyQuantityHandler,
          resetQuantity,
          specSelected,
          isResetQuantity,
          userSeletedQuantity,
          setUserSeletedQuantity,
        }}
      >
        <section className={styles.product__modal} style={modalStyle}>
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
          <span className="icon cancel" onClick={() => hideMenuHandler(250, props.onHide)}>
            <HiX />
          </span>
        </section>
      </SelectedProductContext.Provider>
    </Modal>
  );
};

export default ProductModal;
