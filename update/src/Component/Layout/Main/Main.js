import { useState } from 'react';
import BannerCarousel from './BannerCarousel';
import Sidebar from './Sidebar';
import BreadCrumb from './BreadCrumb';
import FilterProduct from './FilterProduct';
import ProductList from '../../../Component/Layout/Product/ProductList';
import Pagination from './Pagination';
import PRODUCT__DATA from '../../../assets/product-data';
import FILTER_DATA from '../../../assets/filter-data';
import { ProductListContext } from '../../../store/product-context';

import './Main.css';


const Main = () => {
    const [filterData, setFilterData] = useState(FILTER_DATA);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [getProductLength, setGetProductLength] = useState('');
    const [breadCrumbArray, setBreadCrumbArray] = useState([]);

    return (
        <ProductListContext.Provider value={{products: PRODUCT__DATA, filterData, setFilterData, selectedCategory, setSelectedCategory, getProductLength, setGetProductLength, onePageItem: 16, breadCrumbArray, setBreadCrumbArray}}>
            <main>
                <Sidebar />
                <section className="product__content" id="product__content">
                    {/* 導覽列 */}
                    <BreadCrumb />
                    {/* 輪播圖 */}
                    {/* <BannerCarousel /> */}
                    {/* 篩選器 */}
                    <FilterProduct />
                    {/* 商品列表 */}
                    <ProductList products={PRODUCT__DATA} />
                    {/* 分頁 */}
                    <Pagination />
                </section>
            </main>
        </ProductListContext.Provider>
    )
}

export default Main;