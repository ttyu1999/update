import BannerCarousel from './BannerCarousel';
import Sidebar from './Sidebar';
import BreadCrumb from './BreadCrumb';
import FilterProduct from './FilterProduct';
import ProductList from '../../../Component/Layout/Product/ProductList';
import Pagination from './Pagination';
import './Main.css';
import { PageProvide, ProductListFilterProvide } from '../../../store/product-context';


const Main = () => {
    return (
        <main>
            <PageProvide>
                <Sidebar />
                <section className="product__content" id="product__content">
                    {/* 導覽列 */}
                    <BreadCrumb />
                    {/* 輪播圖 */}
                    {/* <BannerCarousel /> */}
                    <ProductListFilterProvide>
                        {/* 篩選器 */}
                        <FilterProduct />
                        {/* 商品列表 */}
                        <ProductList />
                    </ProductListFilterProvide>
                    {/* 分頁 */}
                    <Pagination />
                </section>
            </PageProvide>
        </main>
    )
}

export default Main;