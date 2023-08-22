import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./BreadCrumb.module.scss";

const BreadCrumb = (props) => {

  const headerHeight = document.getElementById('header');

  return (
    <ol
      className={`${styles.breadcrumb} ${
        props.className ? props.className : ""
      }`}
      style={{
        // top: headerHeight.clientHeight
      }}
    >
      <li key="home">
        <Link to="/">
          <button type="button">首頁</button>
        </Link>
      </li>
      <li key="product">
        <Link to="/product">
          <button type="button">全館商品</button>
        </Link>
      </li>
      {props.breadCrumbs &&
        props.breadCrumbs.map((breadcrumb) => {
          return (
            <li key={breadcrumb.id}>
              <Link to={`/product/${breadcrumb.id}`}>
                <button type="button">{breadcrumb.name}</button>
              </Link>
            </li>
          );
        })}
    </ol>
  );
};
export default BreadCrumb;
