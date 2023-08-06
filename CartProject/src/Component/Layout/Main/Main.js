import Carousel from '../../Carousel';
import Sidebar from '../Sidebar/Sidebar';
import BreadCrumb from './BreadCrumb';
import FilterProduct from '../Product/FilterProduct';
import ProductList from '../Product/ProductList';
import Pagination from './Pagination';
import PRODUCT_DATA from '../../../productData';
import MENU_DATA from '../../../menuData';

import './Main.css';

const Main = () => {

    return (
        <main>
            <Sidebar menus={MENU_DATA} />
            <section className="product_content">
                {/* 導覽列 */}
                <BreadCrumb />
                {/* 輪播圖 */}
                <Carousel />
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