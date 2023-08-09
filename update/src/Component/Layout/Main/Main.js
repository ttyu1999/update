import BannerCarousel from './BannerCarousel';
import Sidebar from './Sidebar';
import BreadCrumb from './BreadCrumb';
import FilterProduct from '../Product/FilterProduct';
import ProductList from '../../../Component/Layout/Product/ProductList';
import Pagination from './Pagination';
import PRODUCT_DATA from '../../../assets/product-data';
import MENU_DATA from '../../../assets/menu-data';

import './Main.css';


const Main = () => {


    return (
        <main>
            <Sidebar menus={MENU_DATA} />
            <section className="product_content">
                {/* 導覽列 */}
                <BreadCrumb />
                {/* 輪播圖 */}
                <BannerCarousel />
                {/* 篩選器 */}
                <FilterProduct />
                {/* 商品列表 */}
                <ProductList products={PRODUCT_DATA} />
                {/* 分頁 */}
                <Pagination />
            </section>
        </main>
    )
}

export default Main;